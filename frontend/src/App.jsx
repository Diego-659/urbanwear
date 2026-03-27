import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Catalog from './pages/Catalog.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalog />} />
        <Route path="/cat%C3%A1logo" element={<Catalog />} />
      </Routes>
    </BrowserRouter>
  )
}