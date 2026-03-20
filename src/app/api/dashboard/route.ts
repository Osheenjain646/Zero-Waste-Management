import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

  const userId = (session.user as any).id
  const role = (session.user as any).role

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true, name: true, email: true, role: true,
        businessName: true, trustScore: true, feedPoints: true,
        streakDays: true, totalMeals: true, isVerified: true,
        subTier: true, subEndsAt: true, city: true,
        listings: {
          where: { status: 'ACTIVE' },
          orderBy: { createdAt: 'desc' },
          take: 5,
        },
        pointsLog: {
          orderBy: { createdAt: 'desc' },
          take: 10,
        },
      },
    })

    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })

    // Count stats
    const activeListings = await prisma.listing.count({
      where: { donorId: userId, status: 'ACTIVE' },
    })
    const completedPickups = await prisma.transaction.count({
      where: role === 'DONOR' ? { donorId: userId, status: 'COMPLETED' } : { collectorId: userId, status: 'COMPLETED' },
    })

    // Leaderboard rank
    const allUsers = await prisma.user.findMany({
      where: { role: role as any, city: user.city },
      orderBy: { totalMeals: 'desc' },
      select: { id: true },
    })
    const rank = allUsers.findIndex(u => u.id === userId) + 1

    // Prize pool
    const now = new Date()
    const pool = await prisma.prizePool.findUnique({
      where: { month_year: { month: now.getMonth() + 1, year: now.getFullYear() } },
    })

    // My prize entries (1 per completed pickup this month)
    const myEntries = await prisma.transaction.count({
      where: {
        [role === 'DONOR' ? 'donorId' : 'collectorId']: userId,
        status: 'COMPLETED',
        completedAt: {
          gte: new Date(now.getFullYear(), now.getMonth(), 1),
        },
      },
    })

    return NextResponse.json({
      user,
      stats: {
        activeListings,
        completedPickups,
        rank,
        co2Saved: (user.totalMeals * 0.5).toFixed(1),
      },
      pool: pool
        ? {
            ...pool,
            total: pool.cancellationFees + pool.transactionSlice + pool.sponsorAmount,
            myEntries,
          }
        : null,
    })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to load dashboard' }, { status: 500 })
  }
}
