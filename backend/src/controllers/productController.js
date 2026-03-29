const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getAll = async (req, res) => {
  try {
    const products = await prisma.product.findMany({ orderBy: { createdAt: 'desc' } })
    res.json(products)
  } catch {
    res.status(500).json({ error: 'Error del servidor' })
  }
}

const getOne = async (req, res) => {
  try {
    const product = await prisma.product.findUnique({ where: { id: Number(req.params.id) } })
    if (!product) return res.status(404).json({ error: 'Producto no encontrado' })
    res.json(product)
  } catch {
    res.status(500).json({ error: 'Error del servidor' })
  }
}

const create = async (req, res) => {
  try {
    const { name, description, price, originalPrice, category, emoji, badge, stock } = req.body
    const product = await prisma.product.create({
      data: { name, description, price: Number(price), originalPrice: originalPrice ? Number(originalPrice) : null, category, emoji: emoji || '👕', badge: badge || null, stock: Number(stock) || 0 }
    })
    res.status(201).json(product)
  } catch {
    res.status(500).json({ error: 'Error del servidor' })
  }
}

const update = async (req, res) => {
  try {
    const product = await prisma.product.update({
      where: { id: Number(req.params.id) },
      data: req.body
    })
    res.json(product)
  } catch {
    res.status(500).json({ error: 'Error del servidor' })
  }
}

const remove = async (req, res) => {
  try {
    await prisma.product.delete({ where: { id: Number(req.params.id) } })
    res.json({ message: 'Producto eliminado' })
  } catch {
    res.status(500).json({ error: 'Error del servidor' })
  }
}

module.exports = { getAll, getOne, create, update, remove }