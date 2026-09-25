import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Hjem from './pages/Hjem.jsx'
import Galleri from './pages/Galleri.jsx'
import Navbar from './components/Navbar/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hjem />} />
        <Route path="/galleri" element={<Galleri />} />
      </Routes>
      <Navbar />
    </BrowserRouter>

  
  </StrictMode>,
)
