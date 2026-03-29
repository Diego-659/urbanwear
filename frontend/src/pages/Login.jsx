import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.email || !form.password) {
      setError('Por favor completa todos los campos')
      return
    }
    try {
      setLoading(true)
      await login(form.email, form.password)
      navigate('/')
    } catch (err) {
      setError(err.response?.data?.error || 'Error al iniciar sesión')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0F1E] flex items-center justify-center px-6 py-24">
      <div className="w-full max-w-md">

        <div className="text-center mb-10">
          <Link to="/" className="text-3xl font-semibold tracking-widest uppercase text-[#F8FAFF]">
            Urban<span className="text-[#2563EB]">Wear</span>
          </Link>
          <p className="text-[#64748B] text-sm mt-2">Inicia sesión en tu cuenta</p>
        </div>

        <div className="bg-[#0D1B3E] border border-white/10 rounded-2xl p-8">
          <h1 className="text-2xl font-semibold text-[#F8FAFF] mb-6">Bienvenido de nuevo</h1>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 mb-6">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="text-[#64748B] text-xs tracking-widest uppercase block mb-2">Email</label>
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
              <label className="text-[#64748B] text-xs tracking-widest uppercase block mb-2">Contraseña</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full bg-[#0A0F1E] border border-white/10 rounded-lg px-4 py-3 text-[#F8FAFF] text-sm placeholder-[#64748B] focus:border-[#2563EB] focus:outline-none transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#2563EB] hover:bg-blue-700 text-white text-sm font-medium tracking-widest uppercase py-4 rounded-lg transition-colors mt-2 disabled:opacity-50"
            >
              {loading ? 'Iniciando...' : 'Iniciar sesión'}
            </button>
          </form>

          <p className="text-[#64748B] text-sm text-center mt-6">
            ¿No tienes cuenta?{' '}
            <Link to="/registro" className="text-[#2563EB] hover:underline">Regístrate</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
