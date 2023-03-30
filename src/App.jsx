import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
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
          <Route index element={<Hero />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/my-work" element={<MyWork />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

// bg-gradient-to-b from-[#EF566A] to-[#627AF7]
