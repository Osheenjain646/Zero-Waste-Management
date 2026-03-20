const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding...')
  const pw = await bcrypt.hash('password123', 10)

  await prisma.user.upsert({
    where: { email: 'donor@demo.com' },
    update: {},
    create: {
      name: 'Riya Sharma',
      email: 'donor@demo.com',
      password: pw,
      role: 'DONOR',
      businessName: "Riya's Kitchen",
      phone: '9876543210',
      city: 'Mumbai',
      latitude: 19.076,
      longitude: 72.8777,
      isVerified: true,
      trustScore: 94,
      feedPoints: 340,
      streakDays: 7,
      totalMeals: 485,
    },
  })

  await prisma.user.upsert({
    where: { email: 'ngo@demo.com' },
    update: {},
    create: {
      name: 'Asha Foundation',
      email: 'ngo@demo.com',
      password: pw,
      role: 'NGO',
      businessName: 'Asha Foundation',
      phone: '9123456789',
      city: 'Mumbai',
      latitude: 19.072,
      longitude: 72.882,
      isVerified: true,
      trustScore: 96,
      feedPoints: 520,
      streakDays: 22,
      subTier: 'standard',
      subEndsAt: new Date(Date.now() + 30 * 86400000),
      totalMeals: 1240,
    },
  })

  const now = new Date()
  await prisma.prizePool.upsert({
    where: { month_year: { month: now.getMonth() + 1, year: now.getFullYear() } },
    update: {},
    create: {
      month: now.getMonth() + 1,
      year: now.getFullYear(),
      cancellationFees: 4200,
      transactionSlice: 9250,
      sponsorAmount: 25000,
      sponsorName: 'Amul',
      drawDate: new Date(now.getFullYear(), now.getMonth() + 1, 1),
    },
  })

  console.log('Seed done! Login: donor@demo.com / ngo@demo.com  password: password123')
}

main().catch(console.error).finally(() => prisma.$disconnect())
