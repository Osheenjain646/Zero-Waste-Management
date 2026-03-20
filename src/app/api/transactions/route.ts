import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

  const userId = (session.user as any).id
  const role   = (session.user as any).role
  const { searchParams } = new URL(req.url)
  const status = searchParams.get('status')

  const transactions = await prisma.transaction.findMany({
    where: {
      ...(role === 'DONOR'
        ? { donorId: userId }
        : { collectorId: userId }),
      ...(status ? { status } : {}),
    },
    include: {
      listing: { select: { foodName: true, quantity: true, unit: true, address: true } },
      donor:   { select: { name: true, businessName: true, trustScore: true } },
      collector: { select: { name: true, businessName: true, trustScore: true } },
      ratings: { select: { score: true, comment: true, raterId: true } },
    },
    orderBy: { createdAt: 'desc' },
    take: 50,
  })

  return NextResponse.json({ transactions })
}
