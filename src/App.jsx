import { useState } from 'react'
import Sidebar from './components/Sidebar'
import menuOpen from '/icons/nav-bars.svg'
import seeMore from '/icons/hero-circle-down.svg'

const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false)

  return (
    <div className="font-rubik relative flex flex-col min-h-screen">
      <Sidebar visible={sidebarVisible} setVisible={setSidebarVisible} />

      <header className="p-4">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-3xl px-4 py-2 rounded-xl border-2 border-almostBlack shadow-xl bg-almostWhite">
            ian.
          </span>

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

      <main className="flex-1 flex flex-col justify-center items-center justify-self-center p-4">
        <h2>Ian Luong</h2>
        <h1>Web Developer</h1>
        <p>
          Full-Stack Web Developer, King's College London Graduate, East End
          bloke, making weird shit happen since 1998.
        </p>
        <div className="flex items-center justify-between">
          <button className="">Contact Me</button>
          <div className="flex gap-2">
            <p>See my work</p>
            <img className="w-6" src={seeMore} alt="See more" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
