import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import footerPortrait from "../img/pexels-enes-bayraktar-11306305.jpg"

export default function Footer() {
  return (
    <footer className="md:flex md:justify-around bg-blue-400">
      <div className="md:flex md:w-2/3">
        <div class="font-inter flex flex-col p-6 gap-4 md:justify-center">
          <h1 class="font-ibarra text-white font-semibold self-center text-6xl md:self-start">
            Contact me
          </h1>
          <p class="text-white font-bold">
            Please get in touch if you think my work could be beneficial!
          </p>
          <div>
            <p class="text-white">1234 Random Road</p>
            <p class="text-white">Random Town, Calfornia 12345</p>
          </div>
          <div>
            <p class="text-white">555-555-5555</p>
            <p class="text-white">ianluongcodes@gmail.com</p>
          </div>
          <div class="flex gap-4 items-center self-center md:self-start">
            <a
              href="https://www.linkedin.com/in/ianluong/"
              target="_blank"
              className="hover:text-white focus:text-white"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
            <a
              href="https://www.instagram.com/ian__luong/"
              target="_blank"
              className="hover:text-white focus:text-white"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
            <a
              href="https://github.com/IanLuong"
              target="_blank"
              className="hover:text-white focus:text-white"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>
            <a
              href="mailto:ianluongcodes@gmail.com"
              target="_blank"
              className="hover:text-white focus:text-white"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} size="3x" />
            </a>
          </div>
        </div>
        <img
          className="md:max-w-2xl md:w-1/2 md:py-16 md:px-4"
          src={footerPortrait}
          alt="Cute sleeping cat"
        />
      </div>
    </footer>
  );
}
