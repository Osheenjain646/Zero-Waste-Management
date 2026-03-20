import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { prisma } from '@/lib/prisma'

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

  const userId = (session.user as any).id

  try {
    const transaction = await prisma.transaction.findFirst({
      where: { listingId: params.id },
      include: { listing: true },
    })

    if (!transaction) return NextResponse.json({ error: 'Transaction not found' }, { status: 404 })
    if (transaction.collectorId !== userId && transaction.donorId !== userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    await prisma.$transaction([
      prisma.transaction.update({
        where: { id: transaction.id },
        data: { status: 'COMPLETED', completedAt: new Date() },
      }),
      prisma.listing.update({
        where: { id: params.id },
        data: { status: 'COMPLETED' },
      }),
      // Award points to donor
      prisma.user.update({
        where: { id: transaction.donorId },
        data: {
          feedPoints: { increment: 25 },
          totalMeals: { increment: transaction.listing.quantity },
        },
      }),
      prisma.pointLog.create({
        data: {
          userId: transaction.donorId,
          points: 25,
          action: 'PICKUP_COMPLETED',
          description: `Pickup completed: ${transaction.listing.foodName}`,
        },
      }),
      // Award points to collector too
      prisma.user.update({
        where: { id: transaction.collectorId },
        data: {
          feedPoints: { increment: 25 },
          totalMeals: { increment: transaction.listing.quantity },
        },
      }),
      prisma.pointLog.create({
        data: {
          userId: transaction.collectorId,
          points: 25,
          action: 'PICKUP_COMPLETED',
          description: `Collected: ${transaction.listing.foodName}`,
        },
      }),
      // Add to prize pool slice (1% of platform fee)
      prisma.prizePool.updateMany({
        where: {
          month: new Date().getMonth() + 1,
          year: new Date().getFullYear(),
          isDrawn: false,
        },
        data: {
          transactionSlice: { increment: transaction.platformFee * 0.01 },
        },
      }),
    ])

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to complete pickup' }, { status: 500 })
  }
}
