import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, total, clearCart } = useCart()

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#0A0F1E] pt-24 px-6 flex items-center justify-center">
        <div className="text-center">
          <p className="text-8xl mb-6">🛍️</p>
          <h2 className="text-3xl font-semibold text-[#F8FAFF] mb-4">Tu carrito está vacío</h2>
          <p className="text-[#64748B] mb-8">Agrega productos para comenzar tu compra</p>
          <Link
            to="/catalogo"
            className="bg-[#2563EB] text-white text-sm font-medium tracking-widest uppercase px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ver catálogo
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0A0F1E] pt-24 px-6 pb-16">
      <div className="max-w-7xl mx-auto">

        <div className="mb-10">
          <p className="text-[#2563EB] text-xs tracking-[0.2em] uppercase font-medium mb-3">Tu selección</p>
          <h1 className="text-5xl font-semibold text-[#F8FAFF]">Carrito</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Lista de productos */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-[#0D1B3E] border border-white/10 rounded-xl p-6 flex items-center gap-6">
                <div className="w-20 h-20 bg-[#1A3A6B] rounded-lg flex items-center justify-center text-4xl flex-shrink-0">
                  {item.emoji}
                </div>

                <div className="flex-1">
                  <p className="text-[#64748B] text-[10px] tracking-widest uppercase mb-1">{item.category}</p>
                  <h3 className="text-[#F8FAFF] font-semibold mb-1">{item.name}</h3>
                  <p className="text-[#2563EB] font-semibold">${item.price}</p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 rounded-lg bg-[#1A3A6B] text-[#F8FAFF] hover:bg-[#2563EB] transition-colors flex items-center justify-center font-semibold"
                  >
                    -
                  </button>
                  <span className="text-[#F8FAFF] font-semibold w-6 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 rounded-lg bg-[#1A3A6B] text-[#F8FAFF] hover:bg-[#2563EB] transition-colors flex items-center justify-center font-semibold"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-[#64748B] hover:text-red-400 transition-colors text-xl ml-2"
                >
                  ✕
                </button>
              </div>
            ))}

            <button
              onClick={clearCart}
              className="text-[#64748B] hover:text-red-400 text-xs tracking-widest uppercase transition-colors text-left mt-2"
            >
              Vaciar carrito
            </button>
          </div>

          {/* Resumen */}
          <div className="bg-[#0D1B3E] border border-white/10 rounded-xl p-6 h-fit">
            <h2 className="text-[#F8FAFF] font-semibold text-xl mb-6">Resumen</h2>

            <div className="flex flex-col gap-4 mb-6">
              <div className="flex justify-between">
                <span className="text-[#64748B] text-sm">Subtotal</span>
                <span className="text-[#F8FAFF] text-sm">${total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64748B] text-sm">Envío</span>
                <span className="text-green-400 text-sm">Gratis</span>
              </div>
              <div className="border-t border-white/10 pt-4 flex justify-between">
                <span className="text-[#F8FAFF] font-semibold">Total</span>
                <span className="text-[#2563EB] font-semibold text-xl">${total.toLocaleString()}</span>
              </div>
            </div>

            <Link
              to="/checkout"
              className="block w-full bg-[#2563EB] hover:bg-blue-700 text-white text-sm font-medium tracking-widest uppercase py-4 rounded-lg transition-colors text-center"
            >
              Finalizar compra
            </Link>

            <Link
              to="/catalogo"
              className="block w-full text-center text-[#64748B] hover:text-[#F8FAFF] text-xs tracking-widest uppercase mt-4 transition-colors"
            >
              Seguir comprando
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}