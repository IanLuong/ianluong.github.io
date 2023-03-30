import menuClose from '/icons/nav-xmark.svg'
import SidebarDropdown from './SidebarDropdown'
import workOptions from '../data/sidebarWorkOptions.json'
import { Link } from 'react-router-dom'

const Sidebar = ({ sidebarVisible, setSidebarVisible }) => {
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
              <Link
                className="text-xl cursor-pointer hover:text-almostBlack focus:text-almostBlack"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-xl cursor-pointer hover:text-almostBlack focus:text-almostBlack"
                to="/about"
              >
                About
              </Link>
            </li>
            <SidebarDropdown title="My Work" options={workOptions} />
            <li>
              <Link
                className="text-xl cursor-pointer hover:text-almostBlack focus:text-almostBlack"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <a
          href="/IanLuongCV.pdf"
          className="text- text-center border-2 border-almostGrey rounded-xl py-2 my-2 cursor-pointer w-full hover:text-almostBlack hover:border-almostBlack focus:text-almostBlack focus:border-almostBlack"
        >
          Resume / CV
        </a>
      </div>
    </section>
  )
}

export default Sidebar
