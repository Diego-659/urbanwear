const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body
    if (!name || !email || !password)
      return res.status(400).json({ error: 'Todos los campos son requeridos' })

    const exists = await prisma.user.findUnique({ where: { email } })
    if (exists)
      return res.status(400).json({ error: 'El email ya está registrado' })

    const hashed = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({
      data: { name, email, password: hashed }
    })

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    )

    res.status(201).json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role } })
  } catch (err) {
    res.status(500).json({ error: 'Error del servidor' })
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password)
      return res.status(400).json({ error: 'Todos los campos son requeridos' })

    const user = await prisma.user.findUnique({ where: { email } })
    if (!user)
      return res.status(400).json({ error: 'Credenciales incorrectas' })

    const valid = await bcrypt.compare(password, user.password)
    if (!valid)
      return res.status(400).json({ error: 'Credenciales incorrectas' })

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    )

    res.json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role } })
  } catch (err) {
    res.status(500).json({ error: 'Error del servidor' })
  }
}

module.exports = { register, login }