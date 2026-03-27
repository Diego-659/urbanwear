import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Catalog from './pages/Catalog.jsx'
import Collections from './pages/Collections.jsx'
import About from './pages/About.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalog />} />
        <Route path="/cat%C3%A1logo" element={<Catalog />} />
        <Route path="/colecciones" element={<Collections />} />
        <Route path="/nosotros" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}