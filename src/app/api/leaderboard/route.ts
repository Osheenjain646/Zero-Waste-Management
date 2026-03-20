import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const type = searchParams.get('type') || 'donors'
  const city = searchParams.get('city') || 'Mumbai'

  const role = type === 'ngos' ? 'NGO' : 'DONOR'

  const users = await prisma.user.findMany({
    where: { role: role as any, city },
    orderBy: { totalMeals: 'desc' },
    take: 20,
    select: {
      id: true, name: true, businessName: true,
      totalMeals: true, streakDays: true, trustScore: true, feedPoints: true,
    },
  })

  return NextResponse.json({
    leaderboard: users.map((u, i) => ({ ...u, rank: i + 1 })),
  })
}
