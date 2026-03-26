const ArrowRight = () => <span>→</span>
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#0A0F1E] flex items-center relative overflow-hidden pt-20">

      <div className="absolute top-[-80px] right-[-60px] w-[400px] h-[400px] bg-[#1A3A6B] opacity-30 rotate-[25deg] rounded-3xl" />
      <div className="absolute top-[-100px] right-[80px] w-[200px] h-[400px] bg-[#2563EB] opacity-10 rotate-[25deg] rounded-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#0D1B3E] rounded-full blur-3xl opacity-60" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="max-w-2xl">

          <p className="text-[#2563EB] text-xs tracking-[0.2em] uppercase font-medium mb-4">
            Nueva Colección 2026
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold text-[#F8FAFF] leading-tight mb-6">
            Viste tu <br />
            <span className="text-[#2563EB]">actitud</span> urbana
          </h1>

          <p className="text-[#64748B] text-lg leading-relaxed mb-10 max-w-md">
            Streetwear premium para quienes no siguen tendencias — las crean. Calidad real, estilo sin límites.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/catalogo"
              className="flex items-center gap-2 bg-[#2563EB] text-white text-sm font-medium tracking-widest uppercase px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Ver Colección <ArrowRight size={16} />
            </Link>
            <Link
              to="/nosotros"
              className="flex items-center gap-2 border border-white/20 text-[#F8FAFF] text-sm font-medium tracking-widest uppercase px-8 py-4 rounded-lg hover:border-white/40 hover:bg-white/5 transition-all"
            >
              Nuestra Historia
            </Link>
          </div>

          <div className="flex gap-10 mt-16 pt-10 border-t border-white/10">
            {[
              { number: '500+', label: 'Productos' },
              { number: '10K+', label: 'Clientes' },
              { number: '4.9', label: 'Valoración' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-semibold text-[#F8FAFF]">{stat.number}</p>
                <p className="text-xs text-[#64748B] tracking-widest uppercase mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}