import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

export default function Checkout() {
  const { cart, total, clearCart } = useCart()
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    nombre: '', apellido: '', email: '', telefono: '',
    direccion: '', ciudad: '', departamento: '', codigoPostal: '',
    cardNumber: '', cardName: '', cardExpiry: '', cardCvv: '',
  })
  const [orderPlaced, setOrderPlaced] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleOrder = () => {
    setOrderPlaced(true)
    clearCart()
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-[#0A0F1E] pt-24 px-6 flex items-center justify-center">
        <div className="text-center max-w-md">
          <p className="text-8xl mb-6">🎉</p>
          <h2 className="text-4xl font-semibold text-[#F8FAFF] mb-4">Pedido confirmado</h2>
          <p className="text-[#64748B] mb-2">Gracias por tu compra en UrbanWear.</p>
          <p className="text-[#64748B] mb-8">Recibirás un correo con los detalles de tu pedido.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-[#2563EB] text-white text-sm font-medium tracking-widest uppercase px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0A0F1E] pt-24 px-6 pb-16">
      <div className="max-w-6xl mx-auto">

        <div className="mb-10">
          <p className="text-[#2563EB] text-xs tracking-[0.2em] uppercase font-medium mb-3">Último paso</p>
          <h1 className="text-5xl font-semibold text-[#F8FAFF]">Checkout</h1>
        </div>

        {/* Steps */}
        <div className="flex items-center gap-4 mb-10">
          {[
            { num: 1, label: 'Datos personales' },
            { num: 2, label: 'Envío' },
            { num: 3, label: 'Pago' },
          ].map((s, i) => (
            <div key={s.num} className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                step >= s.num ? 'bg-[#2563EB] text-white' : 'bg-[#1A3A6B] text-[#64748B]'
              }`}>
                {step > s.num ? '✓' : s.num}
              </div>
              <span className={`text-xs tracking-widest uppercase hidden md:block ${
                step >= s.num ? 'text-[#F8FAFF]' : 'text-[#64748B]'
              }`}>
                {s.label}
              </span>
              {i < 2 && <div className={`w-12 h-px mx-2 ${step > s.num ? 'bg-[#2563EB]' : 'bg-white/10'}`} />}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Formulario */}
          <div className="lg:col-span-2">

            {/* Step 1 - Datos personales */}
            {step === 1 && (
              <div className="bg-[#0D1B3E] border border-white/10 rounded-xl p-8">
                <h2 className="text-[#F8FAFF] font-semibold text-xl mb-6">Datos personales</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: 'nombre', label: 'Nombre', placeholder: 'Juan' },
                    { name: 'apellido', label: 'Apellido', placeholder: 'García' },
                    { name: 'email', label: 'Email', placeholder: 'juan@email.com' },
                    { name: 'telefono', label: 'Teléfono', placeholder: '+57 300 000 0000' },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="text-[#64748B] text-xs tracking-widest uppercase block mb-2">
                        {field.label}
                      </label>
                      <input
                        type="text"
                        name={field.name}
                        value={form[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className="w-full bg-[#0A0F1E] border border-white/10 rounded-lg px-4 py-3 text-[#F8FAFF] text-sm placeholder-[#64748B] focus:border-[#2563EB] focus:outline-none transition-colors"
                      />
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setStep(2)}
                  className="mt-6 bg-[#2563EB] text-white text-sm font-medium tracking-widest uppercase px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Continuar
                </button>
              </div>
            )}

            {/* Step 2 - Envío */}
            {step === 2 && (
              <div className="bg-[#0D1B3E] border border-white/10 rounded-xl p-8">
                <h2 className="text-[#F8FAFF] font-semibold text-xl mb-6">Dirección de envío</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: 'direccion', label: 'Dirección', placeholder: 'Calle 123 # 45-67', full: true },
                    { name: 'ciudad', label: 'Ciudad', placeholder: 'Bogotá' },
                    { name: 'departamento', label: 'Departamento', placeholder: 'Cundinamarca' },
                    { name: 'codigoPostal', label: 'Código Postal', placeholder: '110111' },
                  ].map((field) => (
                    <div key={field.name} className={field.full ? 'md:col-span-2' : ''}>
                      <label className="text-[#64748B] text-xs tracking-widest uppercase block mb-2">
                        {field.label}
                      </label>
                      <input
                        type="text"
                        name={field.name}
                        value={form[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className="w-full bg-[#0A0F1E] border border-white/10 rounded-lg px-4 py-3 text-[#F8FAFF] text-sm placeholder-[#64748B] focus:border-[#2563EB] focus:outline-none transition-colors"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 mt-6">
                  <button
                    onClick={() => setStep(1)}
                    className="border border-white/20 text-[#F8FAFF] text-sm font-medium tracking-widest uppercase px-8 py-4 rounded-lg hover:border-white/40 transition-all"
                  >
                    Volver
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="bg-[#2563EB] text-white text-sm font-medium tracking-widest uppercase px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Continuar
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 - Pago */}
            {step === 3 && (
              <div className="bg-[#0D1B3E] border border-white/10 rounded-xl p-8">
                <h2 className="text-[#F8FAFF] font-semibold text-xl mb-6">Información de pago</h2>
                <div className="flex gap-3 mb-6">
                  {['Visa', 'Mastercard', 'PSE'].map((method) => (
                    <div key={method} className="border border-white/20 rounded-lg px-4 py-2 text-[#64748B] text-xs tracking-widest uppercase">
                      {method}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: 'cardNumber', label: 'Número de tarjeta', placeholder: '1234 5678 9012 3456', full: true },
                    { name: 'cardName', label: 'Nombre en la tarjeta', placeholder: 'JUAN GARCIA', full: true },
                    { name: 'cardExpiry', label: 'Vencimiento', placeholder: 'MM/AA' },
                    { name: 'cardCvv', label: 'CVV', placeholder: '123' },
                  ].map((field) => (
                    <div key={field.name} className={field.full ? 'md:col-span-2' : ''}>
                      <label className="text-[#64748B] text-xs tracking-widest uppercase block mb-2">
                        {field.label}
                      </label>
                      <input
                        type="text"
                        name={field.name}
                        value={form[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className="w-full bg-[#0A0F1E] border border-white/10 rounded-lg px-4 py-3 text-[#F8FAFF] text-sm placeholder-[#64748B] focus:border-[#2563EB] focus:outline-none transition-colors"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 mt-6">
                  <button
                    onClick={() => setStep(2)}
                    className="border border-white/20 text-[#F8FAFF] text-sm font-medium tracking-widest uppercase px-8 py-4 rounded-lg hover:border-white/40 transition-all"
                  >
                    Volver
                  </button>
                  <button
                    onClick={handleOrder}
                    className="bg-[#2563EB] text-white text-sm font-medium tracking-widest uppercase px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Confirmar pedido
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Resumen del pedido */}
          <div className="bg-[#0D1B3E] border border-white/10 rounded-xl p-6 h-fit">
            <h2 className="text-[#F8FAFF] font-semibold text-xl mb-6">Tu pedido</h2>
            <div className="flex flex-col gap-4 mb-6">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#1A3A6B] rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                    {item.emoji}
                  </div>
                  <div className="flex-1">
                    <p className="text-[#F8FAFF] text-sm font-medium">{item.name}</p>
                    <p className="text-[#64748B] text-xs">x{item.quantity}</p>
                  </div>
                  <p className="text-[#2563EB] text-sm font-semibold">${item.price}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 pt-4 flex justify-between">
              <span className="text-[#F8FAFF] font-semibold">Total</span>
              <span className="text-[#2563EB] font-semibold text-xl">${total.toLocaleString()}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
