import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

  const userId = (session.user as any).id

  const [user, logs] = await Promise.all([
    prisma.user.findUnique({
      where: { id: userId },
      select: { feedPoints: true, streakDays: true },
    }),
    prisma.pointLog.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 20,
    }),
  ])

  return NextResponse.json({ user, logs })
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

  const userId = (session.user as any).id
  const { action } = await req.json()

  const costs: Record<string, number> = {
    FREE_MONTH: 500,
    PRIORITY_LISTING: 200,
    EARLY_ACCESS: 150,
    STREAK_FREEZE: 100,
    PRIZE_ENTRY: 80,
  }

  const cost = costs[action]
  if (!cost) return NextResponse.json({ error: 'Invalid action' }, { status: 400 })

  const user = await prisma.user.findUnique({ where: { id: userId }, select: { feedPoints: true } })
  if (!user || user.feedPoints < cost) {
    return NextResponse.json({ error: 'Not enough points' }, { status: 400 })
  }

  await prisma.$transaction([
    prisma.user.update({
      where: { id: userId },
      data: { feedPoints: { decrement: cost } },
    }),
    prisma.pointLog.create({
      data: {
        userId,
        points: -cost,
        action: `REDEEM_${action}`,
        description: `Redeemed: ${action.replace('_', ' ').toLowerCase()}`,
      },
    }),
  ])

  return NextResponse.json({ success: true, pointsSpent: cost })
}
