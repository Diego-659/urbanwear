import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#0D1B3E] border-t border-white/10 px-6 py-16">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-semibold tracking-widest uppercase text-[#F8FAFF] mb-4 block">
              Urban<span className="text-[#2563EB]">Wear</span>
            </Link>
            <p className="text-[#64748B] text-sm leading-relaxed max-w-xs">
              Streetwear premium para quienes no siguen tendencias, las crean.
            </p>
            <div className="flex gap-4 mt-6">
              {['Instagram', 'TikTok', 'X'].map((social) => (
                <a key={social} href="#" className="text-[#64748B] hover:text-[#F8FAFF] text-xs tracking-widest uppercase transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[#F8FAFF] text-xs tracking-widest uppercase font-semibold mb-4">Tienda</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Catalogo', to: '/catalogo' },
                { label: 'Colecciones', to: '/colecciones' },
                { label: 'Novedades', to: '/catalogo' },
                { label: 'Ofertas', to: '/catalogo' },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-[#64748B] hover:text-[#F8FAFF] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#F8FAFF] text-xs tracking-widest uppercase font-semibold mb-4">Contacto</h4>
            <ul className="flex flex-col gap-3">
              <li className="text-[#64748B] text-sm">hola@urbanwear.co</li>
              <li className="text-[#64748B] text-sm">+57 300 000 0000</li>
              <li className="text-[#64748B] text-sm">Bogota, Colombia</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#64748B] text-xs">2026 UrbanWear. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            {['Privacidad', 'Terminos', 'Cookies'].map((item) => (
              <a key={item} href="#" className="text-[#64748B] hover:text-[#F8FAFF] text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}