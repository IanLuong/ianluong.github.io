import portrait from "../img/pexels-kassandre-pedro-12798416.jpg";

export default function Hero() {
  return (
    <section>
      <div className="relative flex flex-col bg-red-400">
        <img className="w-1/2 self-center m-12" src={portrait} alt="" />
        <h1 className="font-ibarra drop-shadow-md absolute text-6xl text-white right-4 top-4 text-right">
          Frontend Developer
        </h1>
        <h1 className="font-ibarra drop-shadow-md absolute text-6xl text-white left-4 bottom-4">
          Ian Luong
        </h1>
      </div>

      <div className="flex flex-col p-6 gap-4">
        <h1 className="font-ibarra font-semibold self-center text-6xl mb-">
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
