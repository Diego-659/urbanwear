import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D1B3E] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link to="/" className="text-xl font-semibold tracking-widest uppercase text-[#F8FAFF]">
          Urban<span className="text-[#2563EB]">Wear</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {['Inicio', 'Catálogo', 'Colecciones', 'Nosotros'].map((item) => (
            <li key={item}>
              <Link
                to={item === 'Inicio' ? '/' : `/${item.toLowerCase()}`}
                className="text-xs tracking-widest uppercase text-[#94A3B8] hover:text-[#F8FAFF] transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg bg-[#1A3A6B] hover:bg-[#2563EB] transition-colors">
            🔍
          </button>

          <Link to="/cart" className="relative p-2 rounded-lg bg-[#1A3A6B] hover:bg-[#2563EB] transition-colors">
            🛍️
            <span className="absolute -top-1 -right-1 bg-[#2563EB] text-white text-[9px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
              3
            </span>
          </Link>

          <button
            className="md:hidden p-2 rounded-lg bg-[#1A3A6B]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0D1B3E] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {['Inicio', 'Catálogo', 'Colecciones', 'Nosotros'].map((item) => (
            <Link
              key={item}
              to={item === 'Inicio' ? '/' : `/${item.toLowerCase()}`}
              className="text-sm tracking-widest uppercase text-[#94A3B8] hover:text-[#F8FAFF] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}