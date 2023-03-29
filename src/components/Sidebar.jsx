import menuClose from '/icons/nav-xmark.svg'
import SidebarDropdown from './SidebarDropdown'
import workOptions from '../data/sidebarWorkOptions.json'

const Sidebar = ({ visible, setVisible }) => {
  return (
    <section
      className={`${
        visible ? 'flex' : 'hidden'
      } sm:hidden w-screen h-screen fixed`}
    >
      <div className="flex-1 bg-black opacity-80"></div>
      <div className="flex flex-col w-2/3 bg-white p-4">
        <img
          className="w-7 self-end mb-10"
          onClick={() => setVisible(false)}
          src={menuClose}
          alt="Close sidebar"
          title="Close sidebar"
        />

        <nav>
          <ul className="flex flex-col gap-4 text-almostGrey">
            <li>
              <a
                className="cursor-pointer hover:text-almostBlack focus:text-almostBlack"
                href="#"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:text-almostBlack focus:text-almostBlack"
                href="#"
              >
                Skills
              </a>
            </li>
            <SidebarDropdown title="My Work" options={workOptions} />
            <li>
              <a
                className="cursor-pointer hover:text-almostBlack focus:text-almostBlack"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default Sidebar
