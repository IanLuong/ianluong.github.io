import { Link } from 'react-router-dom'
import menuOpen from '/icons/nav-bars.svg'

const Header = ({ setSidebarVisible }) => {
  return (
    <header className="absolute w-screen p-4 z-10">
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
          <ul className="flex gap-4 text-lg font-medium text-almostBlack">
            <li>
              <Link
                className="cursor-pointer hover:underline decoration-double"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer hover:underline decoration-double"
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer hover:underline decoration-double"
                to="/my-work"
              >
                My Work
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer hover:underline decoration-double"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
