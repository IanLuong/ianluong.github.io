import { Link } from 'react-router-dom'
import { useState } from 'react'
import iconArrowDown from '/icons/side-arrowdown.svg'
import iconArrowUp from '/icons/side-arrowup.svg'

const SidebarDropdown = ({ title, options }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <li>
      <span
        onClick={() => setIsExpanded((prev) => !prev)}
        className="text-xl flex items-center gap-4 cursor-pointer hover:text-almostBlack"
      >
        <p>{title}</p>
        <img className="w-3" src={isExpanded ? iconArrowUp : iconArrowDown} />
      </span>
      {options && (
        <ul className={`${isExpanded ? 'flex' : 'hidden'} flex-col gap-4 my-4`}>
          {options.map((option) => (
            <li>
              <Link
                to={`${option.link}`}
                className="flex items-center gap-3 px-6 cursor-pointer hover:text-almostBlack focus:text-almostBlack"
              >
                {option.image && (
                  <img className="w-4" src={option.image} alt={option.title} />
                )}
                <p>{option.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default SidebarDropdown
