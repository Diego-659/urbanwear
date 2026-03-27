import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const categories = ['Todos', 'Hoodies', 'Camisetas', 'Pantalones', 'Chaquetas', 'Accesorios']

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filtered = activeCategory === 'Todos'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-[#0A0F1E] pt-24 px-6 pb-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-[#2563EB] text-xs tracking-[0.2em] uppercase font-medium mb-3">
            Colección 2026
          </p>
          <h1 className="text-5xl font-semibold text-[#F8FAFF]">Catálogo</h1>
        </div>

        {/* Filtros */}
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </div>
  )
}