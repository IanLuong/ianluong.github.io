import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <div className="bg-almostBlack p-8">
      <footer className="max-w-5xl m-auto flex items-baseline justify-between text-almostWhite">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <span className="font-semibold text-4xl">ian.</span>
          <nav>
            <ul className="flex gap-3 text-lg font-medium">
              <li>
                <a href="#">home.</a>
              </li>
              <li>
                <a href="#">portfolio.</a>
              </li>
              <li>
                <a href="">cv.</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex gap-3 items-center">
          <FontAwesomeIcon icon={faGithub} size="xl" />
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
          <FontAwesomeIcon icon={faInstagram} size="xl" />
        </div>
      </footer>
    </div>
  )
}
