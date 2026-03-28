import { useState } from 'react'
import { products as initialProducts } from '../../data/products'

export default function AdminProducts() {
  const [products, setProducts] = useState(initialProducts)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({
    name: '', category: '', price: '', emoji: '👕', badge: ''
  })

  const categories = ['Hoodies', 'Camisetas', 'Pantalones', 'Chaquetas', 'Accesorios']

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleAdd = () => {
    if (!form.name || !form.price || !form.category) return
    const newProduct = {
      id: products.length + 1,
      ...form,
      originalPrice: null,
      image: null,
    }
    setProducts([...products, newProduct])
    setForm({ name: '', category: '', price: '', emoji: '👕', badge: '' })
    setShowForm(false)
  }

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id))
  }

  return (
    <div className="min-h-screen bg-[#0A0F1E] pt-24 px-6 pb-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-[#2563EB] text-xs tracking-[0.2em] uppercase font-medium mb-2">Admin</p>
            <h1 className="text-4xl font-semibold text-[#F8FAFF]">Productos</h1>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-[#2563EB] text-white text-xs font-medium tracking-widest uppercase px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {showForm ? 'Cancelar' : '+ Agregar producto'}
          </button>
        </div>

        {/* Formulario */}
        {showForm && (
          <div className="bg-[#0D1B3E] border border-white/10 rounded-xl p-6 mb-8">
            <h2 className="text-[#F8FAFF] font-semibold mb-6">Nuevo producto</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: 'name', label: 'Nombre', placeholder: 'Urban Hoodie' },
                { name: 'price', label: 'Precio', placeholder: '89.900' },
                { name: 'emoji', label: 'Emoji', placeholder: '👕' },
                { name: 'badge', label: 'Badge (opcional)', placeholder: 'Nuevo' },
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
              <div>
                <label className="text-[#64748B] text-xs tracking-widest uppercase block mb-2">
                  Categoría
                </label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="w-full bg-[#0A0F1E] border border-white/10 rounded-lg px-4 py-3 text-[#F8FAFF] text-sm focus:border-[#2563EB] focus:outline-none transition-colors"
                >
                  <option value="">Seleccionar</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>
            <button
              onClick={handleAdd}
              className="mt-6 bg-[#2563EB] text-white text-xs font-medium tracking-widest uppercase px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Guardar producto
            </button>
          </div>
        )}

        {/* Tabla de productos */}
        <div className="bg-[#0D1B3E] border border-white/10 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  {['Producto', 'Categoría', 'Precio', 'Badge', 'Acciones'].map((h) => (
                    <th key={h} className="px-6 py-4 text-left text-[#64748B] text-xs tracking-widest uppercase">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{product.emoji}</span>
                        <span className="text-[#F8FAFF] text-sm font-medium">{product.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-[#94A3B8] text-sm">{product.category}</td>
                    <td className="px-6 py-4 text-[#2563EB] text-sm font-medium">${product.price}</td>
                    <td className="px-6 py-4">
                      {product.badge ? (
                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#2563EB]/10 text-[#2563EB]">
                          {product.badge}
                        </span>
                      ) : (
                        <span className="text-[#64748B] text-xs">—</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="text-[#64748B] hover:text-red-400 text-xs tracking-widest uppercase transition-colors"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}