const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getAll = async (req, res) => {
  try {
    const orders = await prisma.order.findMany({
      include: { user: true, items: { include: { product: true } } },
      orderBy: { createdAt: 'desc' }
    })
    res.json(orders)
  } catch {
    res.status(500).json({ error: 'Error del servidor' })
  }
}

const getMyOrders = async (req, res) => {
  try {
    const orders = await prisma.order.findMany({
      where: { userId: req.user.id },
      include: { items: { include: { product: true } } },
      orderBy: { createdAt: 'desc' }
    })
    res.json(orders)
  } catch {
    res.status(500).json({ error: 'Error del servidor' })
  }
}

const create = async (req, res) => {
  try {
    const { items, total, address, city } = req.body
    const order = await prisma.order.create({
      data: {
        userId: req.user.id,
        total: Number(total),
        address,
        city,
        items: {
          create: items.map((item) => ({
            productId: item.id,
            quantity: item.quantity,
            price: Number(item.price.replace('.', ''))
          }))
        }
      },
      include: { items: true }
    })
    res.status(201).json(order)
  } catch {
    res.status(500).json({ error: 'Error del servidor' })
  }
}

const updateStatus = async (req, res) => {
  try {
    const order = await prisma.order.update({
      where: { id: Number(req.params.id) },
      data: { status: req.body.status }
    })
    res.json(order)
  } catch {
    res.status(500).json({ error: 'Error del servidor' })
  }
}

module.exports = { getAll, getMyOrders, create, updateStatus }