import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

export default function Footer({ sections, scrollTo }) {
  return (
    <div className="bg-almostBlack p-8">
      <footer className="max-w-5xl m-auto flex items-baseline justify-between text-almostWhite">
        <div className="flex flex-col sm:flex-row items-start sm:items-baseline gap-5">
          <span className="font-semibold text-4xl">ian.</span>
          <nav>
            <ul className="flex gap-3 text-lg font-medium">
              <li>
                <a
                  href="#home"
                  onClick={(event) => scrollTo(event, sections[0].ref)}
                >
                  home.
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(event) => scrollTo(event, sections[3].ref)}
                >
                  portfolio.
                </a>
              </li>
              <li>
                <a href="/IanLuongCV.pdf" target="_blank">
                  cv.
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex gap-3 items-center">
          <a
            className="cursor-pointer"
            href="https://github.com/IanLuong"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
          <a
            className="cursor-pointer"
            href="https://www.linkedin.com/in/ianluong/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </a>
          <a
            className="cursor-pointer"
            href="https://www.instagram.com/ian__luong/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} size="xl" />
          </a>
        </div>
      </footer>
    </div>
  )
}
