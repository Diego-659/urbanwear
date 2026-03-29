const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')
const prisma = new PrismaClient()

async function main() {
  const hash = await bcrypt.hash('admin123', 10)
  const user = await prisma.user.create({
    data: {
      name: 'Admin',
      email: 'admin@urbanwear.co',
      password: hash,
      role: 'admin'
    }
  })
  console.log('Admin creado:', user.email)
}

main().catch(console.error).finally(() => prisma.$disconnect())
