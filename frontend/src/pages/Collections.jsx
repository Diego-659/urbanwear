import { Link } from 'react-router-dom'

const collections = [
  {
    id: 1,
    name: 'Street Essentials',
    description: 'Lo básico del streetwear urbano. Piezas versátiles para el día a día.',
    emoji: '👕',
    items: 24,
    color: '#1A3A6B',
  },
  {
    id: 2,
    name: 'Urban Premium',
    description: 'Calidad premium con diseños exclusivos para destacar en cualquier lugar.',
    emoji: '🧥',
    items: 16,
    color: '#0D1B3E',
  },
  {
    id: 3,
    name: 'Sport & Active',
    description: 'Comodidad y estilo para un lifestyle activo sin sacrificar la moda.',
    emoji: '🩳',
    items: 18,
    color: '#1A3A6B',
  },
  {
    id: 4,
    name: 'Accesorios UW',
    description: 'Completa tu look con nuestra línea de accesorios urbanos exclusivos.',
    emoji: '🧢',
    items: 12,
    color: '#0D1B3E',
  },
]

export default function Collections() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] pt-24 px-6 pb-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="text-[#2563EB] text-xs tracking-[0.2em] uppercase font-medium mb-3">
            Temporada 2026
          </p>
          <h1 className="text-5xl font-semibold text-[#F8FAFF] mb-4">Colecciones</h1>
          <p className="text-[#64748B] text-lg max-w-xl">
            Cada colección cuenta una historia. Encuentra la tuya.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collections.map((col) => (
            <div
              key={col.id}
              className="relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#2563EB]/50 transition-all duration-300 group cursor-pointer"
              style={{ backgroundColor: col.color }}
            >
              <div className="p-10">
                <span className="text-6xl mb-6 block">{col.emoji}</span>
                <h2 className="text-2xl font-semibold text-[#F8FAFF] mb-3">{col.name}</h2>
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">{col.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#64748B] text-xs tracking-widest uppercase">
                    {col.items} productos
                  </span>
                  <Link
                    to="/catalogo"
                    className="bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-medium tracking-widest uppercase px-5 py-2 rounded-lg transition-colors"
                  >
                    Ver colección →
                  </Link>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB] opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:opacity-10 transition-opacity" />
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}