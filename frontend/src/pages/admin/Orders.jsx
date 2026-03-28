import { useState } from 'react'

const initialOrders = [
  { id: '#001', customer: 'Juan García', email: 'juan@gmail.com', product: 'Urban Hoodie', total: '$89.900', status: 'Entregado', date: '24/03/2026' },
  { id: '#002', customer: 'María López', email: 'maria@gmail.com', product: 'Street Cargo', total: '$69.900', status: 'En camino', date: '25/03/2026' },
  { id: '#003', customer: 'Carlos Ruiz', email: 'carlos@gmail.com', product: 'UW Logo Cap', total: '$29.900', status: 'Pendiente', date: '26/03/2026' },
  { id: '#004', customer: 'Ana Torres', email: 'ana@gmail.com', product: 'Oversized Tee', total: '$49.900', status: 'Entregado', date: '26/03/2026' },
  { id: '#005', customer: 'Luis Mora', email: 'luis@gmail.com', product: 'Tech Fleece Jacket', total: '$129.900', status: 'Pendiente', date: '27/03/2026' },
]

const statusColors = {
  'Entregado': 'text-green-400 bg-green-400/10',
  'En camino': 'text-blue-400 bg-blue-400/10',
  'Pendiente': 'text-yellow-400 bg-yellow-400/10',
  'Cancelado': 'text-red-400 bg-red-400/10',
}

const statuses = ['Pendiente', 'En camino', 'Entregado', 'Cancelado']

export default function AdminOrders() {
  const [orders, setOrders] = useState(initialOrders)

  const updateStatus = (id, newStatus) => {
    setOrders(orders.map((o) => o.id === id ? { ...o, status: newStatus } : o))
  }

  return (
    <div className="min-h-screen bg-[#0A0F1E] pt-24 px-6 pb-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <p className="text-[#2563EB] text-xs tracking-[0.2em] uppercase font-medium mb-2">Admin</p>
          <h1 className="text-4xl font-semibold text-[#F8FAFF]">Pedidos</h1>
        </div>

        {/* Stats rápidas */}
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

        {/* Tabla */}
        <div className="bg-[#0D1B3E] border border-white/10 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  {['ID', 'Cliente', 'Producto', 'Total', 'Fecha', 'Estado'].map((h) => (
                    <th key={h} className="px-6 py-4 text-left text-[#64748B] text-xs tracking-widest uppercase">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-[#2563EB] text-sm font-medium">{order.id}</td>
                    <td className="px-6 py-4">
                      <p className="text-[#F8FAFF] text-sm font-medium">{order.customer}</p>
                      <p className="text-[#64748B] text-xs">{order.email}</p>
                    </td>
                    <td className="px-6 py-4 text-[#94A3B8] text-sm">{order.product}</td>
                    <td className="px-6 py-4 text-[#F8FAFF] text-sm font-medium">{order.total}</td>
                    <td className="px-6 py-4 text-[#64748B] text-sm">{order.date}</td>
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

      </div>
    </div>
  )
}