import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { prisma } from '@/lib/prisma'

const TIERS: Record<string, { price: number; label: string }> = {
  basic:      { price: 999,  label: 'Basic' },
  standard:   { price: 2499, label: 'Standard' },
  enterprise: { price: 7999, label: 'Enterprise' },
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

  const userId = (session.user as any).id
  const role   = (session.user as any).role

  if (role !== 'NGO') {
    return NextResponse.json({ error: 'Only NGOs can manage subscriptions' }, { status: 403 })
  }

  const { tier } = await req.json()

  if (!TIERS[tier]) {
    return NextResponse.json({ error: 'Invalid tier' }, { status: 400 })
  }

  const subEndsAt = new Date()
  subEndsAt.setMonth(subEndsAt.getMonth() + 1)

  const user = await prisma.user.update({
    where: { id: userId },
    data: { subTier: tier, subEndsAt },
    select: { subTier: true, subEndsAt: true },
  })

  // Add to points log
  await prisma.pointLog.create({
    data: {
      userId,
      points: 0,
      action: 'SUBSCRIPTION_UPGRADED',
      description: `Subscribed to ${TIERS[tier].label} plan`,
    },
  })

  return NextResponse.json({ user, message: `Upgraded to ${TIERS[tier].label}` })
}

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

  const userId = (session.user as any).id
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { subTier: true, subEndsAt: true },
  })

  return NextResponse.json({ ...user, tiers: TIERS })
}
