import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'

export default function Dashboard() {
  const [orders, setOrders] = useState([])
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      api.get('/orders'),
      api.get('/products')
    ]).then(([ordersRes, productsRes]) => {
      setOrders(ordersRes.data)
      setProducts(productsRes.data)
    }).catch(console.error)
    .finally(() => setLoading(false))
  }, [])

  const stats = [
    { label: 'Productos', value: products.length, icon: '👕', change: '+0%' },
    { label: 'Pedidos', value: orders.length, icon: '📦', change: '+0%' },
    { label: 'Pendientes', value: orders.filter(o => o.status === 'Pendiente').length, icon: '⏳', change: '' },
    { label: 'Entregados', value: orders.filter(o => o.status === 'Entregado').length, icon: '✅', change: '' },
  ]

  const statusColors = {
    'Entregado': 'text-green-400 bg-green-400/10',
    'En camino': 'text-blue-400 bg-blue-400/10',
    'Pendiente': 'text-yellow-400 bg-yellow-400/10',
    'Cancelado': 'text-red-400 bg-red-400/10',
  }

  return (
    <div className="min-h-screen bg-[#0A0F1E] pt-24 px-6 pb-16">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-[#2563EB] text-xs tracking-[0.2em] uppercase font-medium mb-2">Panel de control</p>
            <h1 className="text-4xl font-semibold text-[#F8FAFF]">Dashboard</h1>
          </div>
          <Link
            to="/admin/productos"
            className="bg-[#2563EB] text-white text-xs font-medium tracking-widest uppercase px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            + Nuevo producto
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#0D1B3E] border border-white/10 rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">{stat.icon}</span>
                {stat.change && (
                  <span className="text-xs font-medium px-2 py-1 rounded-full text-green-400 bg-green-400/10">
                    {stat.change}
                  </span>
                )}
              </div>
              <p className="text-2xl font-semibold text-[#F8FAFF] mb-1">{stat.value}</p>
              <p className="text-[#64748B] text-xs tracking-widest uppercase">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-3 mb-8">
          {[
            { label: 'Dashboard', to: '/admin' },
            { label: 'Productos', to: '/admin/productos' },
            { label: 'Pedidos', to: '/admin/pedidos' },
          ].map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-xs tracking-widest uppercase px-5 py-2 rounded-lg border border-white/10 text-[#94A3B8] hover:border-[#2563EB] hover:text-[#F8FAFF] transition-all"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {loading ? (
          <p className="text-[#64748B]">Cargando pedidos...</p>
        ) : (
          <div className="bg-[#0D1B3E] border border-white/10 rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/10">
              <h2 className="text-[#F8FAFF] font-semibold">Pedidos recientes</h2>
            </div>
            {orders.length === 0 ? (
              <div className="px-6 py-10 text-center">
                <p className="text-[#64748B]">No hay pedidos aún</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      {['ID', 'Cliente', 'Total', 'Estado', 'Fecha'].map((h) => (
                        <th key={h} className="px-6 py-3 text-left text-[#64748B] text-xs tracking-widest uppercase">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {orders.slice(0, 5).map((order) => (
                      <tr key={order.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4 text-[#2563EB] text-sm font-medium">#{order.id}</td>
                        <td className="px-6 py-4 text-[#F8FAFF] text-sm">{order.user?.name || 'Usuario'}</td>
                        <td className="px-6 py-4 text-[#F8FAFF] text-sm">${order.total?.toLocaleString()}</td>
                        <td className="px-6 py-4">
                          <span className={`text-xs font-medium px-3 py-1 rounded-full ${statusColors[order.status]}`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-[#64748B] text-sm">
                          {new Date(order.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}