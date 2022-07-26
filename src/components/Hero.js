import portrait from "../img/pexels-kassandre-pedro-12798416.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";


export default function Hero() {
  return (
    <section>
      <div className="relative flex flex-col bg-red-400 min-h-screen justify-center items-center">
        <img className="w-11/12" src={portrait} alt="" />
        <h1 className="font-ibarra drop-shadow-md absolute text-6xl text-white right-8 top-32 text-right">
          Frontend <br /> Developer
        </h1>
        <h1 className="font-ibarra drop-shadow-md absolute text-6xl text-white left-8 bottom-32">
          Ian <br /> Luong
        </h1>
        <FontAwesomeIcon className="animate-bounce text-white drop-shadow-md absolute bottom-4" icon={faArrowCircleDown} size="3x"/>
      </div>

      <div className="flex flex-col p-6 gap-4 font-inter">
        <h1 className="font-ibarra font-semibold self-center text-6xl">
          About me
        </h1>

        <p>
          Rerum molestias et nulla soluta iste a autem deserunt. Libero non non
          et rerum sunt ea non. Repudiandae possimus ipsa sequi. Aut praesentium
          facilis quidem quo qui quasi non dolores vel. Beatae voluptates et
          reprehenderit dolores dolore.
        </p>
        <p>
          Totam placeat id placeat quod quaerat dolores molestiae aut ducimus.
          Dolor qui exercitationem expedita omnis vel iure doloribus. Dolor
          laboriosam aut qui reiciendis voluptas maxime voluptatibus maxime sed.
        </p>
        <p>
          Odio sed sit dolores et eligendi repellat magni. Quibusdam eos facere.
          Eius debitis voluptas aut velit consequatur ratione rerum sed. Ab
          alias doloremque rerum. Minus nihil commodi voluptatem amet blanditiis
          aut laboriosam eum et. Consequatur possimus omnis libero est quia
          dolor.
        </p>
      </div>
    </section>
  );
}
