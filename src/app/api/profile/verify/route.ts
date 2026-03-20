import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

  const userId = (session.user as any).id

  // In a real app, this is where we would verify the payment with Stripe/Razorpay
  // For now, we mock a successful payment and mark the user as verified.

  const user = await prisma.user.update({
    where: { id: userId },
    data: { isVerified: true },
    select: { id: true, isVerified: true },
  })

  return NextResponse.json({ user })
}
