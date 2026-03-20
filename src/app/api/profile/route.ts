import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

  const userId = (session.user as any).id

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true, name: true, email: true, role: true,
      businessName: true, phone: true, city: true,
      latitude: true, longitude: true,
      isVerified: true, trustScore: true,
      feedPoints: true, streakDays: true, totalMeals: true,
      subTier: true, subEndsAt: true, createdAt: true,
    },
  })

  return NextResponse.json({ user })
}

export async function PATCH(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

  const userId = (session.user as any).id
  const body = await req.json()

  const allowed = ['name', 'businessName', 'phone', 'city']
  const updates: Record<string, any> = {}
  for (const key of allowed) {
    if (body[key] !== undefined) updates[key] = body[key]
  }

  const user = await prisma.user.update({
    where: { id: userId },
    data: updates,
    select: { id: true, name: true, businessName: true, phone: true, city: true },
  })

  return NextResponse.json({ user })
}
