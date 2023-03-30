import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Sidebar from './components/Sidebar'

const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false)

  return (
    <div className="font-rubik relative">
      <Sidebar
        sidebarVisible={sidebarVisible}
        setSidebarVisible={setSidebarVisible}
      />
      <div className="gradi bg-[url('images/IMG_3677.jpg')] bg-contain flex flex-col min-h-screen">
        <Header setSidebarVisible={setSidebarVisible} />
        <Hero />
      </div>
    </div>
  )
}

export default App

// bg-gradient-to-b from-[#EF566A] to-[#627AF7]
