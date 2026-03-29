import { useState, useEffect } from 'react'
import api from '../../services/api'

const statusColors = {
  'Entregado': 'text-green-400 bg-green-400/10',
  'En camino': 'text-blue-400 bg-blue-400/10',
  'Pendiente': 'text-yellow-400 bg-yellow-400/10',
  'Cancelado': 'text-red-400 bg-red-400/10',
}

const statuses = ['Pendiente', 'En camino', 'Entregado', 'Cancelado']

export default function AdminOrders() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get('/orders')
      .then((res) => setOrders(res.data))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const updateStatus = async (id, newStatus) => {
    try {
      await api.put(`/orders/${id}/status`, { status: newStatus })
      setOrders(orders.map((o) => o.id === id ? { ...o, status: newStatus } : o))
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0F1E] pt-24 px-6 pb-16">
      <div className="max-w-7xl mx-auto">

        <div className="mb-10">
          <p className="text-[#2563EB] text-xs tracking-[0.2em] uppercase font-medium mb-2">Admin</p>
          <h1 className="text-4xl font-semibold text-[#F8FAFF]">Pedidos</h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total', value: orders.length, color: 'text-[#F8FAFF]' },
            { label: 'Pendientes', value: orders.filter(o => o.status === 'Pendiente').length, color: 'text-yellow-400' },
            { label: 'En camino', value: orders.filter(o => o.status === 'En camino').length, color: 'text-blue-400' },
            { label: 'Entregados', value: orders.filter(o => o.status === 'Entregado').length, color: 'text-green-400' },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#0D1B3E] border border-white/10 rounded-xl p-4 text-center">
              <p className={`text-3xl font-semibold mb-1 ${stat.color}`}>{stat.value}</p>
              <p className="text-[#64748B] text-xs tracking-widest uppercase">{stat.label}</p>
            </div>
          ))}
        </div>

        {loading ? (
          <p className="text-[#64748B]">Cargando pedidos...</p>
        ) : orders.length === 0 ? (
          <div className="bg-[#0D1B3E] border border-white/10 rounded-xl p-10 text-center">
            <p className="text-6xl mb-4">📦</p>
            <p className="text-[#64748B]">No hay pedidos aún</p>
          </div>
        ) : (
          <div className="bg-[#0D1B3E] border border-white/10 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    {['ID', 'Cliente', 'Total', 'Ciudad', 'Fecha', 'Estado'].map((h) => (
                      <th key={h} className="px-6 py-4 text-left text-[#64748B] text-xs tracking-widest uppercase">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-[#2563EB] text-sm font-medium">#{order.id}</td>
                      <td className="px-6 py-4">
                        <p className="text-[#F8FAFF] text-sm font-medium">{order.user?.name}</p>
                        <p className="text-[#64748B] text-xs">{order.user?.email}</p>
                      </td>
                      <td className="px-6 py-4 text-[#F8FAFF] text-sm">${order.total?.toLocaleString()}</td>
                      <td className="px-6 py-4 text-[#94A3B8] text-sm">{order.city}</td>
                      <td className="px-6 py-4 text-[#64748B] text-sm">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <select
                          value={order.status}
                          onChange={(e) => updateStatus(order.id, e.target.value)}
                          className={`text-xs font-medium px-3 py-1 rounded-full border-0 focus:outline-none cursor-pointer ${statusColors[order.status]} bg-transparent`}
                        >
                          {statuses.map((s) => (
                            <option key={s} value={s} className="bg-[#0D1B3E] text-[#F8FAFF]">{s}</option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}