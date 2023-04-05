import { useRef, useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Sidebar from './components/Sidebar'
import Contact from './pages/Contact'
import Footer from './components/Footer'

const sectionTitles = [
  'home',
  'about',
  'skills',
  'projects',
  'whatdoio',
  'kamatimer',
  'frontendmentor',
  'spoofyrecords',
  'contact',
]

const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false)

  const sections = sectionTitles.map((title) => {
    return { title, ref: useRef(null) }
  })

  const workRef = useRef(null)

  const scrollTo = (event, ref) => {
    event.preventDefault()
    ref.current.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <div className="font-rubik relative bg-almostWhite">
      <Sidebar
        sidebarVisible={sidebarVisible}
        setSidebarVisible={setSidebarVisible}
        sections={sections}
        scrollTo={scrollTo}
      />

      <Header setSidebarVisible={setSidebarVisible} />
      <main className="max-w-5xl m-auto">
        <Home section={sections[0]} scrollTo={scrollTo} />
        <About section={sections[1]} />
        <Work sections={sections.slice(2, 8)} />
        <Contact section={sections[8]} />
      </main>
      <Footer />
    </div>
  )
}

export default App

// bg-gradient-to-b from-[#EF566A] to-[#627AF7]
