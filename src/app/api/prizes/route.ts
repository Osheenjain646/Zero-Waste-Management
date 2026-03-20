import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions)
  const userId = session ? (session.user as any).id : null
  const role = session ? (session.user as any).role : null

  const now = new Date()
  const pool = await prisma.prizePool.findUnique({
    where: { month_year: { month: now.getMonth() + 1, year: now.getFullYear() } },
  })

  const past = await prisma.prizePool.findMany({
    where: { isDrawn: true },
    orderBy: { createdAt: 'desc' },
    take: 3,
  })

  let myEntries = 0
  if (userId) {
    myEntries = await prisma.transaction.count({
      where: {
        [role === 'DONOR' ? 'donorId' : 'collectorId']: userId,
        status: 'COMPLETED',
        completedAt: { gte: new Date(now.getFullYear(), now.getMonth(), 1) },
      },
    })
  }

  const totalEntries = await prisma.transaction.count({
    where: {
      status: 'COMPLETED',
      completedAt: { gte: new Date(now.getFullYear(), now.getMonth(), 1) },
    },
  })

  return NextResponse.json({
    pool: pool
      ? { ...pool, total: pool.cancellationFees + pool.transactionSlice + pool.sponsorAmount }
      : null,
    past,
    myEntries,
    totalEntries,
  })
}
