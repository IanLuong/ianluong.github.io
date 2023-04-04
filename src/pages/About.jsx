const About = ({ section }) => {
  return (
    <section
      id={section.title}
      ref={section.ref}
      className="flex flex-col gap-4 my-12"
    >
      <div className="w-full flex flex-col self-end gap-3 px-4 py-2">
        <h1 className="font-semibold text-4xl px-2 border-b-2 border-almostBlack">
          🖥 about me.
        </h1>
        <div className="flex-1 flex flex-col text-xl">
          <p>
            Born and raised in East London, I'm a full stack web developer and a
            Computer Science graduate from King's College London. I love to
            learn new technologies and create cool stuff.
          </p>
          <br />
          <p>
            I currently work with JavaScript, React, Node.js and Tailwind CSS to
            build quality web apps.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col self-end gap-3 px-4 py-2">
        <h1 className="font-semibold text-4xl px-2 border-b-2 border-almostBlack">
          🏸 hobbies.
        </h1>
        <div className="flex-1 flex flex-col text-xl">
          <p>
            Outside of web development, I love playing{' '}
            <span className="font-semibold">badminton</span> in my free time. I
            also play <span className="font-semibold">video games</span>{' '}
            whenever I feel the need to unwind (right now I'm playing{' '}
            <span className="font-medium">Celeste</span> and{' '}
            <span className="font-medium">Resident Evil 3 Remake</span>!) as
            well as building and decorating{' '}
            <span className="font-medium">Gunpla model kits</span>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
