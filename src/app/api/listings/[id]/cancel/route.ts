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
    const listing = await prisma.listing.findUnique({ where: { id: params.id } })

    if (!listing) return NextResponse.json({ error: 'Listing not found' }, { status: 404 })
    if (listing.donorId !== userId) return NextResponse.json({ error: 'Not your listing' }, { status: 403 })
    if (!['ACTIVE', 'CLAIMED'].includes(listing.status)) {
      return NextResponse.json({ error: 'Cannot cancel this listing' }, { status: 400 })
    }

    await prisma.$transaction(async (tx) => {
      await tx.listing.update({ where: { id: params.id }, data: { status: 'CANCELLED' } })

      // If already claimed, add cancellation fee to prize pool and penalise trust score
      if (listing.status === 'CLAIMED') {
        const now = new Date()
        await tx.prizePool.updateMany({
          where: { month: now.getMonth() + 1, year: now.getFullYear(), isDrawn: false },
          data: { cancellationFees: { increment: 200 } },
        })
        await tx.user.update({
          where: { id: userId },
          data: { trustScore: { decrement: 5 } },
        })
        // Cancel the transaction
        await tx.transaction.updateMany({
          where: { listingId: params.id },
          data: { status: 'CANCELLED', cancelledAt: new Date() },
        })
      }
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to cancel listing' }, { status: 500 })
  }
}
