import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer class="font-roboto flex bg-blue-400 flex-col p-6 gap-4">
      <h1 class="font-ibarra text-white font-semibold self-center text-6xl">
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

      <div class="flex gap-4 items-center self-center">
        <FontAwesomeIcon
          icon={faLinkedin}
          size="3x"
          className="hover:text-white"
        />
        <FontAwesomeIcon icon={faInstagram} size="3x" />
        <FontAwesomeIcon icon={faGithub} size="3x" />
        <FontAwesomeIcon icon={faEnvelope} size="3x" />
      </div>
    </footer>
  );
}
