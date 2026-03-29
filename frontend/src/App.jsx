import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Catalog from './pages/Catalog.jsx'
import Collections from './pages/Collections.jsx'
import About from './pages/About.jsx'
import Cart from './pages/Cart.jsx'
import Checkout from './pages/Checkout.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/admin/Dashboard.jsx'
import AdminProducts from './pages/admin/Products.jsx'
import AdminOrders from './pages/admin/Orders.jsx'
import ProtectedAdmin from './components/ProtectedAdmin.jsx'


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalog />} />
        <Route path="/colecciones" element={<Collections />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/productos" element={<AdminProducts />} />
        <Route path="/admin/pedidos" element={<AdminOrders />} />
        <Route path="/admin" element={<ProtectedAdmin><Dashboard /></ProtectedAdmin>} />
<Route path="/admin/productos" element={<ProtectedAdmin><AdminProducts /></ProtectedAdmin>} />
<Route path="/admin/pedidos" element={<ProtectedAdmin><AdminOrders /></ProtectedAdmin>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}