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
              <a
                className="cursor-pointer hover:underline decoration-double"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:underline decoration-double"
                href="/about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:underline decoration-double"
                href="/my-work"
              >
                My Work
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:underline decoration-double"
                href="/contact"
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
