import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import Sidebar from './components/Sidebar'

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
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

// bg-gradient-to-b from-[#EF566A] to-[#627AF7]
