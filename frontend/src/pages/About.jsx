const values = [
  { emoji: '🎯', title: 'Autenticidad', desc: 'Cada pieza refleja cultura urbana real, sin tendencias forzadas.' },
  { emoji: '⚡', title: 'Calidad', desc: 'Materiales premium seleccionados para durar y mantener su forma.' },
  { emoji: '🌍', title: 'Comunidad', desc: 'Somos más que ropa — somos un movimiento urbano global.' },
  { emoji: '♻️', title: 'Sostenibilidad', desc: 'Comprometidos con procesos responsables y materiales eco-friendly.' },
]

export default function About() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] pt-24 px-6 pb-16">
      <div className="max-w-7xl mx-auto">

        {/* Hero About */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <div>
            <p className="text-[#2563EB] text-xs tracking-[0.2em] uppercase font-medium mb-3">
              Nuestra historia
            </p>
            <h1 className="text-5xl font-semibold text-[#F8FAFF] mb-6 leading-tight">
              Nacimos en las <span className="text-[#2563EB]">calles</span>, vivimos en la moda
            </h1>
            <p className="text-[#64748B] text-lg leading-relaxed mb-6">
              UrbanWear nació en 2020 con una misión clara: traer el auténtico streetwear urbano a quienes viven la ciudad sin filtros.
            </p>
            <p className="text-[#64748B] text-lg leading-relaxed">
              No seguimos tendencias — las creamos. Cada colección es una declaración de identidad para quienes se atreven a vestir su actitud.
            </p>
          </div>

          <div className="bg-[#0D1B3E] rounded-2xl border border-white/10 p-10 flex items-center justify-center">
            <div className="text-center">
              <p className="text-8xl mb-6">🏙️</p>
              <p className="text-[#F8FAFF] text-2xl font-semibold mb-2">Est. 2020</p>
              <p className="text-[#64748B] text-sm tracking-widest uppercase">Bogotá, Colombia</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {[
            { number: '500+', label: 'Productos' },
            { number: '10K+', label: 'Clientes' },
            { number: '4.9', label: 'Valoración' },
            { number: '5', label: 'Años' },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#0D1B3E] border border-white/10 rounded-xl p-6 text-center">
              <p className="text-4xl font-semibold text-[#2563EB] mb-2">{stat.number}</p>
              <p className="text-[#64748B] text-xs tracking-widest uppercase">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Valores */}
        <div className="mb-16">
          <p className="text-[#2563EB] text-xs tracking-[0.2em] uppercase font-medium mb-3">
            Lo que nos mueve
          </p>
          <h2 className="text-4xl font-semibold text-[#F8FAFF] mb-12">Nuestros valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => (
              <div key={val.title} className="bg-[#0D1B3E] border border-white/10 rounded-xl p-6 hover:border-[#2563EB]/50 transition-all">
                <span className="text-4xl mb-4 block">{val.emoji}</span>
                <h3 className="text-[#F8FAFF] font-semibold mb-2">{val.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}