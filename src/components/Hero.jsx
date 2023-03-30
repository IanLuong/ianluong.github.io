import seeMore from '/icons/hero-circle-down.svg'
import heroImage from '/images/IMG_3677.jpg'

const Hero = () => {
  return (
    <main className="flex-1 flex">
      <div className="flex flex-col bg-almostWhite border-2 border-almostBlack self-end gap-2 px-4 py-2">
        <div className="flex flex-col items-start">
          <h2 className="font-medium text-xl">ian luong.</h2>
          <h1 className="font-semibold text-4xl">web developer.</h1>
        </div>
        <p className="">
          Full-Stack Web Developer, King's College London Graduate. East End
          Londoner.
          <br /> Making weird shit happen since 1998.
        </p>
        <div className="flex w-full gap-4">
          <button className="bg-almostWhite font-semibold px-4 py-2 rounded-xl shadow-md border-2 border-almostBlack">
            Contact Me
          </button>
          <div className="flex items-center gap-2 p-2">
            <p className="font-semibold">See My Work</p>
            <img className="w-6" src={seeMore} alt="See more" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero
