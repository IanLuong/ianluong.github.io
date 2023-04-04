import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import seeMore from '/icons/hero-circle-down.svg'
import heroArrows from '/icons/hero-arrows.svg'
import heroImage from '/images/portrait.jpg'
import heroImageColor from '/images/portrait_color.jpg'

const Hero = ({ scrollTo, section }) => {
  return (
    <section
      id={section.title}
      ref={section.ref}
      className="flex-1 flex flex-col min-h-screen"
    >
      <img src={heroImageColor} alt="Ian Luong" />
      <div className="w-full flex-1 flex flex-col bg-almostWhite border-t-2 border-almostBlack self-end justify-center gap-3 px-4 py-4">
        <div className="flex flex-col items-start">
          <div className="flex w-full justify-between items-center">
            <h2 className="font-medium text-2xl">ian luong.</h2>
            <div className="flex gap-4">
              <FontAwesomeIcon icon={faGithub} size="2x" />
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
              <FontAwesomeIcon icon={faInstagram} size="2x" />
              <FontAwesomeIcon icon={faFilePdf} size="2x" />
            </div>
          </div>
          <h1 className="font-semibold text-4xl">web developer.</h1>
        </div>
        <p className="text-xl">
          Fullstack Web Developer and East End Londoner.
          {/* <br />
          Making weird stuff happen since 1998. */}
        </p>
        <div className="flex w-full gap-4">
          <a
            className="flex gap-2 font-semibold px-4 py-2 rounded-xl shadow-md border-2 border-almostBlack"
            href="#projects"
            onClick={(event) => scrollTo(event)}
          >
            See My Work
            <img className="w-6" src={heroArrows} alt="See more" />
          </a>
          {/* <div className="flex items-center text-center gap-2 p-2">
            <p className="font-semibold">Contact Me</p>
            <img className="w-6" src={seeMore} alt="See more" />
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Hero
