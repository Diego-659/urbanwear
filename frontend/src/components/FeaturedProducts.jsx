import ProductCard from './ProductCard'
import { products } from '../data/products'
import { Link } from 'react-router-dom'

export default function FeaturedProducts() {
  const featured = products.slice(0, 3)

  return (
    <section className="bg-[#0A0F1E] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[#2563EB] text-xs tracking-[0.2em] uppercase font-medium mb-3">
              Lo más nuevo
            </p>
            <h2 className="text-4xl font-semibold text-[#F8FAFF]">
              Productos destacados
            </h2>
          </div>
          <Link
            to="/catalogo"
            className="hidden md:flex items-center gap-2 text-sm text-[#64748B] hover:text-[#F8FAFF] tracking-widest uppercase transition-colors"
          >
            Ver todo →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Botón móvil */}
        <div className="md:hidden mt-8 text-center">
          <Link
            to="/catalogo"
            className="inline-block border border-white/20 text-[#F8FAFF] text-sm font-medium tracking-widest uppercase px-8 py-4 rounded-lg hover:border-white/40 transition-all"
          >
            Ver todo el catálogo
          </Link>
        </div>

      </div>
    </section>
  )
}