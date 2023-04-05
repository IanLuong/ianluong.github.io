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
                className="cursor-pointer hover:underline decoration-double"
                href="#about"
                onClick={(event) => scrollTo(event, sections[1].ref)}
              >
                About
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:underline decoration-double"
                href="#skills"
                onClick={(event) => scrollTo(event, sections[2].ref)}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:underline decoration-double"
                href="#projects"
                onClick={(event) => scrollTo(event, sections[3].ref)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:underline decoration-double"
                href="#contact"
                onClick={(event) => scrollTo(event, sections[8].ref)}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
