import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <div className="bg-[#0D1B3E] border border-white/10 rounded-xl overflow-hidden hover:border-[#2563EB]/50 hover:scale-[1.02] transition-all duration-300 group">

      {/* Imagen del producto */}
      <div className="relative h-64 bg-[#1A3A6B] flex items-center justify-center overflow-hidden">
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[#2563EB] text-white text-[10px] font-semibold px-3 py-1 rounded-full tracking-widest uppercase z-10">
            {product.badge}
          </span>
        )}
        {product.image
          ? <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          : <span className="text-7xl">{product.emoji}</span>
        }
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-[#64748B] text-[10px] tracking-widest uppercase mb-1">{product.category}</p>
        <h3 className="text-[#F8FAFF] font-semibold text-base mb-3">{product.name}</h3>

        <div className="flex items-center justify-between">
          <div>
            {product.originalPrice && (
              <p className="text-[#64748B] text-xs line-through">${product.originalPrice}</p>
            )}
            <p className="text-[#2563EB] font-semibold text-lg">${product.price}</p>
          </div>

          <Link
            to={`/producto/${product.id}`}
            className="bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-lg transition-colors"
          >
            Ver más
          </Link>
        </div>
      </div>
    </div>
  )
}