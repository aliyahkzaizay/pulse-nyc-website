
import './styles/App.css'

import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Footer } from './components/Footer'

function App() {


  return (
    <div className="min-h-screen bg-[#0B0B0F]">

      <Navbar/>

      <Hero/>

      <Footer />


      
    </div>
  )
}

export default App
