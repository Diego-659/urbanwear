import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    nombre: '', apellido: '', email: '', password: '', confirmPassword: ''
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.nombre || !form.email || !form.password) {
      setError('Por favor completa todos los campos')
      return
    }
    if (form.password !== form.confirmPassword) {
      setError('Las contraseñas no coinciden')
      return
    }
    if (form.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres')
      return
    }
    register({
      name: `${form.nombre} ${form.apellido}`,
      email: form.email,
      role: 'customer',
    })
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-[#0A0F1E] flex items-center justify-center px-6 py-24">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-10">
          <Link to="/" className="text-3xl font-semibold tracking-widest uppercase text-[#F8FAFF]">
            Urban<span className="text-[#2563EB]">Wear</span>
          </Link>
          <p className="text-[#64748B] text-sm mt-2">Crea tu cuenta gratis</p>
        </div>

        {/* Card */}
        <div className="bg-[#0D1B3E] border border-white/10 rounded-2xl p-8">

          <h1 className="text-2xl font-semibold text-[#F8FAFF] mb-6">Crear cuenta</h1>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 mb-6">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[#64748B] text-xs tracking-widest uppercase block mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Juan"
                  className="w-full bg-[#0A0F1E] border border-white/10 rounded-lg px-4 py-3 text-[#F8FAFF] text-sm placeholder-[#64748B] focus:border-[#2563EB] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-[#64748B] text-xs tracking-widest uppercase block mb-2">
                  Apellido
                </label>
                <input
                  type="text"
                  name="apellido"
                  value={form.apellido}
                  onChange={handleChange}
                  placeholder="García"
                  className="w-full bg-[#0A0F1E] border border-white/10 rounded-lg px-4 py-3 text-[#F8FAFF] text-sm placeholder-[#64748B] focus:border-[#2563EB] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-[#64748B] text-xs tracking-widest uppercase block mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="juan@email.com"
                className="w-full bg-[#0A0F1E] border border-white/10 rounded-lg px-4 py-3 text-[#F8FAFF] text-sm placeholder-[#64748B] focus:border-[#2563EB] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="text-[#64748B] text-xs tracking-widest uppercase block mb-2">
                Contraseña
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full bg-[#0A0F1E] border border-white/10 rounded-lg px-4 py-3 text-[#F8FAFF] text-sm placeholder-[#64748B] focus:border-[#2563EB] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="text-[#64748B] text-xs tracking-widest uppercase block mb-2">
                Confirmar contraseña
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full bg-[#0A0F1E] border border-white/10 rounded-lg px-4 py-3 text-[#F8FAFF] text-sm placeholder-[#64748B] focus:border-[#2563EB] focus:outline-none transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#2563EB] hover:bg-blue-700 text-white text-sm font-medium tracking-widest uppercase py-4 rounded-lg transition-colors mt-2"
            >
              Crear cuenta
            </button>
          </form>

          <p className="text-[#64748B] text-sm text-center mt-6">
            ¿Ya tienes cuenta?{' '}
            <Link to="/login" className="text-[#2563EB] hover:underline">
              Inicia sesión
            </Link>
          </p>

        </div>
      </div>
    </div>
  )
}