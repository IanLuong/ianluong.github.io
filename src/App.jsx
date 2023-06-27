import { useRef, useState } from 'react'
import Header from './components/Header'
import Hero from './pages/Hero'
import About from './pages/About'
import Work from './pages/Work'
import Sidebar from './components/Sidebar'
import Contact from './pages/Contact'
import Footer from './components/Footer'

import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faFilePdf,
  faLaptop,
  faLink,
  faDatabase,
  faKeyboard,
} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { Toaster } from 'react-hot-toast'
import AlertBar from './components/AlertBar'
library.add(fab, faFilePdf, faLaptop, faLink, faDatabase, faKeyboard)

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

      <AlertBar />
      <Header
        setSidebarVisible={setSidebarVisible}
        sections={sections}
        scrollTo={scrollTo}
      />
      <main className="max-w-5xl m-auto">
        <Hero
          section={sections[0]}
          scrollTarget={sections[3]}
          scrollTo={scrollTo}
        />
        <About section={sections[1]} />
        <Work sections={sections.slice(2, 8)} />
        <Contact section={sections[8]} />
      </main>
      <Footer sections={sections} scrollTo={scrollTo} />
      <Toaster position="bottom-center" />
    </div>
  )
}

export default App
