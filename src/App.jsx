import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Sidebar from './components/Sidebar'

const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false)

  return (
    <div className="bg-amaranthPink font-rubik relative flex flex-col min-h-screen">
      <Sidebar visible={sidebarVisible} setVisible={setSidebarVisible} />
      <Header />
      <Hero />
    </div>
  )
}

export default App
