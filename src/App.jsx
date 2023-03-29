import { useState } from 'react'
import Sidebar from './components/Sidebar'
import menuOpen from '/icons/nav-bars.svg'

const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false)

  return (
    <div className="font-rubik relative">
      <Sidebar visible={sidebarVisible} setVisible={setSidebarVisible} />

      <header className="">
        <div className="flex justify-between items-center p-4">
          <div>
            <span className="font-semibold text-4xl">I.</span>
          </div>

          <img
            className="w-6 sm:hidden"
            onClick={() => setSidebarVisible(true)}
            src={menuOpen}
            alt=""
            title=""
          />

          <nav className="hidden sm:block">
            <ul className="flex gap-4 text-almostGrey">
              <li>Home</li>
              <li>About</li>
              <li>Skills</li>
              <li>My Work</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default App
