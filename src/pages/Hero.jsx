import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import heroArrows from '/icons/hero-arrows.svg'
import heroImageMobile from '/images/portrait_mobile.jpeg'
import heroImageDesktop from '/images/portrait_desktop.jpeg'

const Hero = ({ scrollTo, section }) => {
  return (
    <section
      id={section.title}
      ref={section.ref}
      className="flex-1 flex flex-col justify-self-center sm:flex-row sm:justify-between sm:gap-4 sm:px-4 min-h-screen sm:min-h-[90vh]"
    >
      <img
        className="sm:w-1/2 md:max-w-[528px] sm:order-2 sm:self-center sm:border-4 sm:border-almostBlack sm:rounded-xl"
        src={heroImageDesktop}
        alt="Ian Luong"
      />
      <div className="sm:max-w-md sm:flex-auto sm:self-center sm:border-0 w-full flex-1 flex flex-col border-t-2 border-almostBlack justify-center gap-3 px-4 py-4">
        <div className="flex flex-col items-start">
          <div className="flex w-full justify-between items-center">
            <h2 className="font-medium text-2xl">ian luong.</h2>
            <div className="flex gap-4">
              <a
                className="cursor-pointer hover:animate-pulse"
                href="https://github.com/IanLuong"
                target="_blank"
              >
                <FontAwesomeIcon icon="fa-brands fa-github" size="2x" />
              </a>
              <a
                className="cursor-pointer hover:animate-pulse"
                href="https://www.linkedin.com/in/ianluong/"
                target="_blank"
              >
                <FontAwesomeIcon icon="fa-brands fa-linkedin" size="2x" />
              </a>
              <a
                className="cursor-pointer hover:animate-pulse"
                href="https://www.instagram.com/ian__luong/"
                target="_blank"
              >
                <FontAwesomeIcon icon="fa-brands fa-instagram" size="2x" />
              </a>
              <a
                className="cursor-pointer hover:animate-pulse"
                href="/IanLuongCV.pdf"
                target="_blank"
              >
                <FontAwesomeIcon icon="fa-solid fa-file-pdf" size="2x" />
              </a>
            </div>
          </div>
          <h1 className="font-semibold text-4xl">web developer.</h1>
        </div>
        <p className="text-xl">
          Fullstack Web Developer and East End Londoner.
          <br />
          <br />
          Making weird stuff happen since 1998.
        </p>
        <div className="flex w-full gap-4">
          <a
            className="flex gap-2 font-semibold px-4 py-2 rounded-xl shadow-md border-2 border-almostBlack transition-colors duration-700 transform hover:bg-amaranthPink"
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
