import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const createSchema = z.object({
  foodName: z.string().min(2),
  description: z.string().optional(),
  quantity: z.number().int().positive(),
  unit: z.string().default('portions'),
  category: z.string().default('Cooked Meal'),
  isVegan: z.boolean().default(false),
  isHalal: z.boolean().default(false),
  hasNuts: z.boolean().default(false),
  pickupStart: z.string(),
  pickupEnd: z.string(),
  address: z.string().min(5),
  city: z.string().default('Mumbai'),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
})

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const status = searchParams.get('status') || 'ACTIVE'
  const category = searchParams.get('category')
  const vegan = searchParams.get('vegan') === 'true'
  const mine = searchParams.get('mine') === 'true'

  const session = await getServerSession(authOptions)

  try {
    const listings = await prisma.listing.findMany({
      where: {
        status: status as any,
        ...(category && category !== 'All' ? { category } : {}),
        ...(vegan ? { isVegan: true } : {}),
        ...(mine && session ? { donorId: (session.user as any).id } : {}),
        ...(status === 'ACTIVE' ? { pickupEnd: { gte: new Date() } } : {}),
      },
      include: {
        donor: {
          select: {
            id: true,
            name: true,
            businessName: true,
            trustScore: true,
            isVerified: true,
          },
        },
        transaction: { select: { status: true, collectorId: true } },
      },
      orderBy: { createdAt: 'desc' },
      take: 100,
    })

    return NextResponse.json({ listings })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to fetch listings' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

  const userId = (session.user as any).id
  const role = (session.user as any).role

  if (role !== 'DONOR' && role !== 'ADMIN') {
    return NextResponse.json({ error: 'Only donors can create listings' }, { status: 403 })
  }

  try {
    const body = await req.json()
    const data = createSchema.parse(body)

    const listing = await prisma.listing.create({
      data: {
        donorId: userId,
        foodName: data.foodName,
        description: data.description,
        quantity: data.quantity,
        unit: data.unit,
        category: data.category,
        isVegan: data.isVegan,
        isHalal: data.isHalal,
        hasNuts: data.hasNuts,
        pickupStart: new Date(data.pickupStart),
        pickupEnd: new Date(data.pickupEnd),
        address: data.address,
        city: data.city,
        latitude: data.latitude ?? 19.076,
        longitude: data.longitude ?? 72.8777,
      },
      include: { donor: { select: { name: true, businessName: true, trustScore: true } } },
    })

    // Award Feed Points
    await prisma.$transaction([
      prisma.user.update({
        where: { id: userId },
        data: { feedPoints: { increment: 10 } },
      }),
      prisma.pointLog.create({
        data: {
          userId,
          points: 10,
          action: 'LISTING_CREATED',
          description: `Listed: ${data.foodName}`,
        },
      }),
    ])

    return NextResponse.json({ listing }, { status: 201 })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.errors[0].message }, { status: 400 })
    }
    console.error(err)
    return NextResponse.json({ error: 'Failed to create listing' }, { status: 500 })
  }
}
