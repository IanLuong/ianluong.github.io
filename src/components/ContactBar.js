import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons'

export default function ContactBar({ color = 'white' }) {
  const activeColor = color === 'white' ? 'black' : 'white'

  return (
    <div className={`flex gap-4 items-center self-center text-${color}`}>
      <a
        href="https://www.linkedin.com/in/ianluong/"
        target="_blank"
        className={`hover:text-${activeColor} focus:text-${activeColor} hover:animate-pulse`}
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size="3x" />
      </a>
      <a
        href="https://www.instagram.com/ian__luong/"
        target="_blank"
        className={`hover:text-${activeColor} focus:text-${activeColor} hover:animate-pulse`}
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} size="3x" />
      </a>
      <a
        href="https://github.com/IanLuong"
        target="_blank"
        className={`hover:text-${activeColor} focus:text-${activeColor} hover:animate-pulse`}
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="3x" />
      </a>
      <a
        href="mailto:ianluongcodes@gmail.com"
        target="_blank"
        className={`hover:text-${activeColor} focus:text-${activeColor} hover:animate-pulse`}
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faEnvelope} size="3x" />
      </a>
      <a
        href="/cv.pdf"
        target="_blank"
        className={`hover:text-${activeColor} focus:text-${activeColor} hover:animate-pulse`}
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faFilePdf} size="3x" />
      </a>
    </div>
  )
}
