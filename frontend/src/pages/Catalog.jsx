import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import api from '../services/api'

const categories = ['Todos', 'Hoodies', 'Camisetas', 'Pantalones', 'Chaquetas', 'Accesorios']

export default function Catalog() {
  const [products, setProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get('/products')
      .then((res) => setProducts(res.data))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false))
  }, [])

  const filtered = activeCategory === 'Todos'
    ? products
    : products.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-[#0A0F1E] pt-24 px-6 pb-16">
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <p className="text-[#2563EB] text-xs tracking-[0.2em] uppercase font-medium mb-3">Colección 2026</p>
          <h1 className="text-5xl font-semibold text-[#F8FAFF]">Catálogo</h1>
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs tracking-widest uppercase px-5 py-2 rounded-full border transition-all ${
                activeCategory === cat
                  ? 'bg-[#2563EB] border-[#2563EB] text-white'
                  : 'border-white/20 text-[#64748B] hover:border-white/40 hover:text-[#F8FAFF]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-20">
            <p className="text-[#64748B] text-lg">Cargando productos...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-8xl mb-4">👕</p>
            <p className="text-[#64748B] text-lg">No hay productos en esta categoría</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    </div>
  )
}
