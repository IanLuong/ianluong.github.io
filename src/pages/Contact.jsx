import heroArrows from '/icons/hero-arrows.svg'

const Contact = ({ section }) => {
  return (
    <section
      id={section.title}
      ref={section.ref}
      className="flex flex-col my-12"
    >
      <div className="w-full flex-1 flex flex-col self-end gap-3 px-4 py-2">
        <h1 className="font-semibold text-4xl px-2 border-b-2 border-almostBlack">
          contact me.
        </h1>
        <div className="flex-1 flex flex-col items-center self-center max-w-2xl">
          <p className="font-medium text-xl m-2 text-center">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I'll get back to you as soon as possible.
          </p>

          <form className="flex-1 flex flex-col mx-2 my-8 gap-4 font-normal w-full">
            <input
              className="p-2 border-b-2 border-almostGrey bg-almostWhite"
              type="text"
              placeholder="NAME"
            />
            <input
              className="p-2 border-b-2 border-almostGrey bg-almostWhite"
              type="email"
              placeholder="EMAIL"
            />
            <textarea
              className="p-2 border-b-2 border-almostGrey bg-almostWhite flex-1"
              placeholder="MESSAGE"
            />
            <button className="my-2 flex gap-2 font-semibold px-4 py-2 rounded-xl shadow-md border-2 border-almostBlack self-end">
              Send Message
              <img className="w-6" src={heroArrows} alt="See more" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
