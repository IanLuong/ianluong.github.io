import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Sidebar from './components/Sidebar'
import Contact from './pages/Contact'

const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false)

  return (
    <BrowserRouter>
      <div className="font-rubik relative">
        <Sidebar
          sidebarVisible={sidebarVisible}
          setSidebarVisible={setSidebarVisible}
        />
        <Header setSidebarVisible={setSidebarVisible} />

        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/my-work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

// bg-gradient-to-b from-[#EF566A] to-[#627AF7]
