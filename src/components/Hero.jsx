import seeMore from '/icons/hero-circle-down.svg'

const Hero = () => {
  return (
    <main className="flex-1 flex flex-col justify-center items-center justify-self-center gap-4 p-4">
      <div className="flex flex-col items-center">
        <h2 className="font-medium text-3xl">Ian Luong.</h2>
        <h1 className="font-semibold text-4xl">Web Developer.</h1>
      </div>
      <p className="text-center text-lg">
        Full-Stack Web Developer, King's College London Graduate and East End
        boy. <br /> Making weird shit happen since 1998.
      </p>
      <div className="flex items-center justify-around w-full">
        <button className="bg-almostWhite font-semibold px-4 py-2 rounded-xl shadow-md border-2 border-almostBlack">
          Contact Me
        </button>
        <div className="flex gap-2 p-2 rounded-xl shadow-md border-2 border-almostBlack">
          <p className="font-semibold">See My Work</p>
          <img className="w-6" src={seeMore} alt="See more" />
        </div>
      </div>
    </main>
  )
}

export default Hero
