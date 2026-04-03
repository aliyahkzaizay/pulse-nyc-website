import './styles/App.css'
import { Routes, Route } from 'react-router-dom'

// import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Analytics } from "@vercel/analytics/react"

import Home from './pages/home'
// import { AboutsPage } from './pages/about'
import {ContactsPage} from './pages/contact'

import { ScrollToTop } from './components/scroll-to-top'


function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white">
      {/* <Navbar /> */}

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<AboutsPage />} /> */}
        <Route path="/contact" element={<ContactsPage />} />
      </Routes>

      <Footer />
      <Analytics />
    </div>
  )
}

export default App