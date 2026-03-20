import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2, 'Name too short'),
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  role: z.enum(['DONOR', 'NGO']),
  businessName: z.string().min(2, 'Business name too short'),
  phone: z.string().min(10, 'Invalid phone number'),
  city: z.string().default('Mumbai'),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    const exists = await prisma.user.findUnique({ where: { email: data.email } })
    if (exists) {
      return NextResponse.json({ error: 'Email already registered' }, { status: 400 })
    }

    const hashed = await bcrypt.hash(data.password, 10)

    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashed,
        role: data.role,
        businessName: data.businessName,
        phone: data.phone,
        city: data.city,
        feedPoints: 50, // welcome bonus
        pointsLog: {
          create: {
            points: 50,
            action: 'WELCOME_BONUS',
            description: 'Welcome to ZeroWaste!',
          },
        },
      },
      select: { id: true, name: true, email: true, role: true },
    })

    return NextResponse.json({ user }, { status: 201 })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.errors[0].message }, { status: 400 })
    }
    console.error(err)
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 })
  }
}
