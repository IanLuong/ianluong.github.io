import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import ContactBar from "./ContactBar"
import { useRef } from "react"

export default function Hero() {
  const scrollRef = useRef()

  return (
    <section className="bg-dark-blue">
      <div className="lg:m-auto lg:max-w-screen-lg">
        <div className="flex flex-col gap-4 min-h-screen justify-center items-center text-white text-center">
          <h1 className="font-ibarra drop-shadow-md text-6xl animate-fade1s">
            <span className="font-inter text-xl">hi i'm </span>Ian Luong.
          </h1>
          <h1 className="font-ibarra drop-shadow-md text-6xl animate-fade3s">
            <span className="font-inter text-xl">i'm a </span> Frontend
            Developer.
          </h1>
          <div className="animate-fade6s">
            <ContactBar />
          </div>
          <div className="font-inter absolute bottom-4 animate-fade6s">
            <h3 className="text-xl">Get to know me!</h3>
            <FontAwesomeIcon
              className="hover:text-white cursor-pointer drop-shadow-md animate-bounce"
              icon={faChevronDown}
              size="3x"
              onClick={() =>
                scrollRef.current.scrollIntoView({ behavior: "smooth" })
              }
            />
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="md:m-auto lg:max-w-screen-lg" ref={scrollRef}>
          <div className="flex flex-col p-6 gap-4 font-inter text-lg">
            <h1 className="font-ibarra font-semibold self-center text-6xl">
              About me
            </h1>
            <p></p>
            <h4 className="text-3xl font-medium">
              Hi, I'm Ian. <span className="text-lg">[ee-uhn]</span>
            </h4>
            <p>
              I am a recent Computer Science graduate from King's College London
              looking to leave my mark on the World Wide Web, becoming a
              self-taught web developer and learning to embrace my creative
              side.{" "}
            </p>
            <p>
              Born and raised in London, I've grown up looking to help people
              around me and love to make others smile and laugh{" "}
              <span className="text-sm italic">
                (I previously worked as a tutor, teaching children aged 8-14)
              </span>
              . As a result, I strive everyday to find laughter in life and
              transform problems into elegant solutions.
            </p>
            <p>
              Outside of web development, I love playing{" "}
              <span className="underline font-semibold">badminton</span> in my
              free time. I also love to play{" "}
              <span className="underline font-semibold">video games</span>{" "}
              whenever I feel the need to unwind{" "}
              <span className="text-sm">
                (right now I'm playing{" "}
                <span className="italic font-bold">Baba is You</span> and{" "}
                <span className="italic font-bold">
                  The Great Ace Attorney Chronicles!
                </span>
                )
              </span>{" "}
              as well as spending time building and decorating{" "}
              <span className="underline font-semibold">
                Gunpla model kits.
              </span>
            </p>
            <p>
              I currently work with HTML, CSS, JavaScript, React, and Tailwind
              CSS to build quality front-end products.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
