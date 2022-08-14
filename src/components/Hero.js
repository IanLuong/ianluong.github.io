import portrait from "../img/pexels-kassandre-pedro-12798416.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { useRef } from "react"

export default function Hero() {
  const scrollRef = useRef()

  return (
    <section className="bg-red-400">
      <div className="bg-red-400 lg:m-auto lg:max-w-screen-lg">
        <div className="relative flex flex-col md:flex-row bg-red-400 min-h-screen justify-center items-center md:m-auto md:w-2/3">
          <img
            className="w-3/4 md:w-11/12 h-[98vh] animate-fade2s max-h-screen object-cover"
            src={portrait}
            alt=""
          />
          <h1 className="font-ibarra drop-shadow-md absolute text-6xl text-white right-8 top-32 text-right animate-fade4s delay-2000">
            Frontend <br /> Developer
          </h1>
          <h1 className="font-ibarra drop-shadow-md absolute text-6xl text-white left-8 bottom-32 animate-fade6s">
            Ian <br /> Luong
          </h1>
          <FontAwesomeIcon
            className="text-white hover:text-black cursor-pointer drop-shadow-md absolute bottom-4"
            icon={faChevronDown}
            size="3x"
            onClick={() =>
              scrollRef.current.scrollIntoView({ behavior: "smooth" })
            }
          />
        </div>
      </div>

      <div className="bg-white">
        <div className="md:m-auto md:w-2/3 lg:w-1/2 lg:max-w-screen-lg" ref={scrollRef}>
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
