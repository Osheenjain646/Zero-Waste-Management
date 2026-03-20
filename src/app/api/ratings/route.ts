import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const schema = z.object({
  transactionId: z.string(),
  ratedId: z.string(),
  score: z.number().int().min(1).max(5),
  comment: z.string().max(300).optional(),
})

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

  const raterId = (session.user as any).id

  try {
    const body = await req.json()
    const data = schema.parse(body)

    // Check transaction exists and user is part of it
    const tx = await prisma.transaction.findUnique({ where: { id: data.transactionId } })
    if (!tx) return NextResponse.json({ error: 'Transaction not found' }, { status: 404 })
    if (tx.donorId !== raterId && tx.collectorId !== raterId) {
      return NextResponse.json({ error: 'Not part of this transaction' }, { status: 403 })
    }
    if (tx.status !== 'COMPLETED') {
      return NextResponse.json({ error: 'Can only rate completed transactions' }, { status: 400 })
    }

    // Check no duplicate rating
    const existing = await prisma.rating.findFirst({
      where: { transactionId: data.transactionId, raterId },
    })
    if (existing) return NextResponse.json({ error: 'Already rated this transaction' }, { status: 400 })

    // Create rating
    const rating = await prisma.rating.create({
      data: {
        transactionId: data.transactionId,
        raterId,
        ratedId: data.ratedId,
        score: data.score,
        comment: data.comment,
      },
    })

    // Update trust score for rated user (rolling average)
    const allRatings = await prisma.rating.findMany({
      where: { ratedId: data.ratedId },
      select: { score: true },
    })
    const avg = allRatings.reduce((sum, r) => sum + r.score, 0) / allRatings.length
    const newTrust = Math.round(40 + avg * 12) // maps 1-5 stars to 52-100

    await prisma.user.update({
      where: { id: data.ratedId },
      data: { trustScore: Math.min(Math.max(newTrust, 0), 100) },
    })

    // Award points for 5-star rating received
    if (data.score === 5) {
      await prisma.$transaction([
        prisma.user.update({ where: { id: data.ratedId }, data: { feedPoints: { increment: 15 } } }),
        prisma.pointLog.create({
          data: { userId: data.ratedId, points: 15, action: 'FIVE_STAR_RATING', description: '5-star rating received' },
        }),
      ])
    }

    return NextResponse.json({ rating })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.errors[0].message }, { status: 400 })
    }
    console.error(err)
    return NextResponse.json({ error: 'Failed to submit rating' }, { status: 500 })
  }
}
