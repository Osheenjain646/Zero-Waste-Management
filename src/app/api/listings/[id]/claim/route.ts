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
  const role = (session.user as any).role

  if (role !== 'NGO') {
    return NextResponse.json({ error: 'Only NGOs can claim listings' }, { status: 403 })
  }

  try {
    const listing = await prisma.listing.findUnique({
      where: { id: params.id },
    })

    if (!listing) return NextResponse.json({ error: 'Listing not found' }, { status: 404 })
    if (listing.status !== 'ACTIVE') return NextResponse.json({ error: 'Listing already claimed or expired' }, { status: 400 })
    if (new Date() > listing.pickupEnd) return NextResponse.json({ error: 'Listing has expired' }, { status: 400 })
    if (listing.donorId === userId) return NextResponse.json({ error: 'Cannot claim your own listing' }, { status: 400 })

    const [updatedListing, transaction] = await prisma.$transaction([
      prisma.listing.update({
        where: { id: params.id },
        data: { status: 'CLAIMED' },
      }),
      prisma.transaction.create({
        data: {
          listingId: params.id,
          donorId: listing.donorId,
          collectorId: userId,
          platformFee: listing.quantity * 2,
        },
      }),
    ])

    return NextResponse.json({ listing: updatedListing, transaction })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to claim listing' }, { status: 500 })
  }
}
