import { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Sidebar from './components/Sidebar'
import Contact from './pages/Contact'

const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false)

  return (
    <div className="font-rubik relative bg-almostWhite">
      <Sidebar
        sidebarVisible={sidebarVisible}
        setSidebarVisible={setSidebarVisible}
      />

      <Header setSidebarVisible={setSidebarVisible} />
      <main>
        <Home />
        <About />
        <Work />
        <Contact />
      </main>
    </div>
  )
}

export default App

// bg-gradient-to-b from-[#EF566A] to-[#627AF7]
