import menuOpen from '/icons/nav-bars.svg'

const Header = ({ setSidebarVisible, sections, scrollTo }) => {
  return (
    <header className="max-w-5xl m-auto absolute sm:relative sm:block w-screen p-4 z-10">
      <div className="flex justify-between items-center max-w-5xl m-auto">
        <span className="font-semibold text-3xl px-4 py-2 rounded-xl border-2 border-almostBlack shadow-xl bg-almostWhite">
          ian.
        </span>

        <img
          className="w-6 sm:hidden"
          onClick={() => setSidebarVisible(true)}
          src={menuOpen}
          alt="Open Sidebar"
          title="Open Sidebar"
        />

        <nav className="hidden sm:block">
          <ul className="flex gap-4 text-lg font-medium text-almostBlack">
            <li>
              <a
                className="cursor-pointer transition-all duration-300 hover:text-3xl hover:text-amaranthPink focus:text-3xl focus:text-amaranthPink"
                href="#about"
                onClick={(event) => scrollTo(event, sections[1].ref)}
              >
                About
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer transition-all duration-300 hover:text-3xl hover:text-navajoWhite focus:text-3xl focus:text-navajoWhite"
                href="#skills"
                onClick={(event) => scrollTo(event, sections[2].ref)}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer transition-all duration-300 hover:text-3xl hover:text-columbiaBlue focus:text-3xl focus:text-columbiaBlue"
                href="#projects"
                onClick={(event) => scrollTo(event, sections[3].ref)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer transition-all duration-300 hover:text-3xl hover:text-mauve focus:text-3xl focus:text-mauve"
                href="#contact"
                onClick={(event) => scrollTo(event, sections[8].ref)}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/IanLuongCV.pdf"
                target="_blank"
                className="text-center border-2 border-almostBlack rounded-xl shadow-md px-4 py-2 transition-all duration-300 cursor-pointer hover:bg-peach hover:text-3xl focus:bg-peach focus:text-3xl"
              >
                CV
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
