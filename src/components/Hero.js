import portrait from "../img/pexels-kassandre-pedro-12798416.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import ContactBar from "./ContactBar"
import { useRef } from "react"

export default function Hero() {
  const scrollRef = useRef()

  return (
    <section className="bg-red-400">
      <div className="lg:m-auto lg:max-w-screen-lg">
        <div className="flex flex-col gap-4 bg-red-400 min-h-screen justify-center items-center text-white text-center">
          <h1 className="font-ibarra drop-shadow-md text-6xl animate-fade6s">
            <span className="font-inter text-xl">hi I'm </span>Ian Luong.
          </h1>
          <h1 className="font-ibarra drop-shadow-md text-6xl animate-fade4s">
            <span className="font-inter text-xl">I'm a </span> Frontend Developer.
          </h1>
          <ContactBar/>
          <div className="font-inter absolute bottom-4">
            <h3 className="text-lg">Get to know me</h3>
            <FontAwesomeIcon
              className="hover:text-white cursor-pointer drop-shadow-md"
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
        <div
          className="md:m-auto md:w-2/3 lg:w-1/2 lg:max-w-screen-lg"
          ref={scrollRef}
        >
          <div className="flex flex-col p-6 gap-4 font-inter">
            <h1 className="font-ibarra font-semibold self-center text-6xl">
              About me
            </h1>

            <p>
              Rerum molestias et nulla soluta iste a autem deserunt. Libero non
              non et rerum sunt ea non. Repudiandae possimus ipsa sequi. Aut
              praesentium facilis quidem quo qui quasi non dolores vel. Beatae
              voluptates et reprehenderit dolores dolore.
            </p>
            <p>
              Totam placeat id placeat quod quaerat dolores molestiae aut
              ducimus. Dolor qui exercitationem expedita omnis vel iure
              doloribus. Dolor laboriosam aut qui reiciendis voluptas maxime
              voluptatibus maxime sed.
            </p>
            <p>
              Odio sed sit dolores et eligendi repellat magni. Quibusdam eos
              facere. Eius debitis voluptas aut velit consequatur ratione rerum
              sed. Ab alias doloremque rerum. Minus nihil commodi voluptatem
              amet blanditiis aut laboriosam eum et. Consequatur possimus omnis
              libero est quia dolor.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
