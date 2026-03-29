const express = require('express')
const cors = require('cors')
require('dotenv').config()

const authRoutes = require('./routes/auth')
const productRoutes = require('./routes/products')
const orderRoutes = require('./routes/orders')
const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const app = express()
const prisma = new PrismaClient()

app.use(cors({ origin: '*' }))
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes)
app.use('/api/orders', orderRoutes)

app.get('/', (req, res) => {
  res.json({ message: '🚀 UrbanWear API funcionando' })
})

async function seedDatabase() {
  try {
    const productCount = await prisma.product.count()
    if (productCount === 0) {
      await prisma.product.createMany({
        data: [
          { name: 'Urban Hoodie Classic', category: 'Hoodies', price: 89900, emoji: '👕', badge: 'Nuevo', stock: 20 },
          { name: 'Street Cargo Pants', category: 'Pantalones', price: 69900, originalPrice: 89900, emoji: '👖', badge: 'Sale', stock: 15 },
          { name: 'UW Logo Cap', category: 'Accesorios', price: 29900, emoji: '🧢', stock: 30 },
          { name: 'Oversized Tee', category: 'Camisetas', price: 49900, emoji: '👚', badge: 'Nuevo', stock: 25 },
          { name: 'Tech Fleece Jacket', category: 'Chaquetas', price: 129900, originalPrice: 159900, emoji: '🧥', badge: 'Sale', stock: 10 },
          { name: 'Urban Joggers', category: 'Pantalones', price: 59900, emoji: '🩳', stock: 20 },
        ]
      })
      console.log('✅ Productos creados')
    }

    const adminExists = await prisma.user.findUnique({ where: { email: 'admin@urbanwear.co' } })
    if (!adminExists) {
      const hash = await bcrypt.hash('admin123', 10)
      await prisma.user.create({
        data: { name: 'Admin', email: 'admin@urbanwear.co', password: hash, role: 'admin' }
      })
      console.log('✅ Admin creado')
    }
  } catch (err) {
    console.error('Error en seed:', err)
  }
}

const PORT = process.env.PORT || 3001
app.listen(PORT, async () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`)
  await seedDatabase()
})