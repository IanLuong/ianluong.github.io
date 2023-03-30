import menuOpen from '/icons/nav-bars.svg'

const Header = ({ setSidebarVisible }) => {
  return (
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
  )
}

export default Header
