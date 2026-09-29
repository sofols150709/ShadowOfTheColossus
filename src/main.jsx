import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Hjem from './pages/Hjem.jsx'
import Galleri from './pages/Galleri.jsx'
import Kart from './pages/Kart.jsx'
import Lore from './pages/Lore.jsx'
import FanTeorier from './pages/FanTeorier.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import { AuthProvider } from './components/Auth/AuthContext.jsx'
import PreferencesProvider from './components/Preferences/PreferencesProvider.jsx'
import SiteControls from './components/SiteControls/SiteControls.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PreferencesProvider>
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hjem />} />
        <Route path="/galleri" element={<Galleri />} />
        <Route path="/kart" element={<Kart />} />
        <Route path="/lore" element={<Lore />} />
        <Route path="/fan-teorier" element={<FanTeorier />} />
      </Routes>
      <Navbar />
      <SiteControls />
    </BrowserRouter>
    </AuthProvider>
    </PreferencesProvider>

  
  </StrictMode>,
)
