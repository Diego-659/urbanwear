const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const products = [
    { name: 'Urban Hoodie Classic', category: 'Hoodies', price: 89900, emoji: '👕', badge: 'Nuevo', stock: 20 },
    { name: 'Street Cargo Pants', category: 'Pantalones', price: 69900, originalPrice: 89900, emoji: '👖', badge: 'Sale', stock: 15 },
    { name: 'UW Logo Cap', category: 'Accesorios', price: 29900, emoji: '🧢', stock: 30 },
    { name: 'Oversized Tee', category: 'Camisetas', price: 49900, emoji: '👚', badge: 'Nuevo', stock: 25 },
    { name: 'Tech Fleece Jacket', category: 'Chaquetas', price: 129900, originalPrice: 159900, emoji: '🧥', badge: 'Sale', stock: 10 },
    { name: 'Urban Joggers', category: 'Pantalones', price: 59900, emoji: '🩳', stock: 20 },
  ]
  await prisma.product.createMany({ data: products })
  console.log('Productos creados')
}

main().catch(console.error).finally(() => prisma.$disconnect())
