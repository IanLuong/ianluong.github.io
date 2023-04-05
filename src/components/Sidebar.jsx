import menuClose from '/icons/nav-xmark.svg'
import SidebarDropdown from './SidebarDropdown'
import projects from '../data/projects.json'

const Sidebar = ({ sidebarVisible, setSidebarVisible, sections, scrollTo }) => {
  const handleSidebarClick = (event, ref) => {
    event.preventDefault()
    setSidebarVisible(false)
    scrollTo(event, ref)
  }

  return (
    <section
      className={`${
        sidebarVisible ? 'flex' : 'hidden'
      } sm:hidden w-screen h-screen fixed z-20`}
    >
      <div className="flex-1 bg-black opacity-80"></div>
      <div className="flex flex-col w-2/3 bg-almostWhite px-4 py-6 gap-4 border-l-2 border-almostBlack">
        <img
          className="w-7 self-end mb-10"
          onClick={() => setSidebarVisible(false)}
          src={menuClose}
          alt="Close sidebar"
          title="Close sidebar"
        />

        <nav>
          <ul className="flex flex-col gap-4 text-almostGrey">
            <li>
              <a
                className="text-xl cursor-pointer hover:text-almostBlack focus:text-almostBlack"
                href={`#${sections[0].title}`}
                onClick={(event) => handleSidebarClick(event, sections[0].ref)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-xl cursor-pointer hover:text-almostBlack focus:text-almostBlack"
                href={`#${sections[1].title}`}
                onClick={(event) => handleSidebarClick(event, sections[1].ref)}
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-xl cursor-pointer hover:text-almostBlack focus:text-almostBlack"
                href={`#${sections[2].title}`}
                onClick={(event) => handleSidebarClick(event, sections[2].ref)}
              >
                Skills
              </a>
            </li>
            <SidebarDropdown
              title="Projects"
              handleSidebarClick={handleSidebarClick}
              sections={sections.slice(3, 8)}
              options={projects}
            />
            <li>
              <a
                className="text-xl cursor-pointer hover:text-almostBlack focus:text-almostBlack"
                href={`#${sections[8].title}`}
                onClick={(event) => handleSidebarClick(event, sections[8].ref)}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <a
          href="/IanLuongCV.pdf"
          className="text-center border-2 border-almostGrey rounded-xl py-2 my-2 cursor-pointer w-full hover:text-almostBlack hover:border-almostBlack focus:text-almostBlack focus:border-almostBlack"
        >
          Resume / CV
        </a>
      </div>
    </section>
  )
}

export default Sidebar
