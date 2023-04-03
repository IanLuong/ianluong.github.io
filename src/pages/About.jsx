const About = () => {
  return (
    <main className="flex flex-col min-h-screen bg-almostWhite">
      <div className="pt-24 w-full flex flex-col self-end gap-3 px-4 py-2">
        <h1 className="font-semibold text-4xl px-2 border-b-2 border-almostBlack">
          🖥 about me.
        </h1>
        <div className="flex-1 flex flex-col text-lg">
          <p>
            I am a Computer Science graduate from King's College London looking
            to leave my mark on the World Wide Web, becoming a self-taught web
            developer and learning to embrace my creative side.
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
          🏸 outside of work.
        </h1>
        <div className="flex-1 flex flex-col text-lg">
          <p>
            Born and raised in London, I've grown up looking to help people
            around me and love to make others smile and laugh (I previously
            worked as a tutor, teaching children aged 8-14). As a result, I
            strive everyday to find laughter in life and transform problems into
            elegant solutions.
          </p>
          <br />
          <p>
            Outside of web development, I love playing{' '}
            <span className="underline decoration-double">badminton</span> in my
            free time. I also love to play video games whenever I feel the need
            to unwind (right now I'm playing{' '}
            <span className="font-bold">Celeste</span> and{' '}
            <span className="font-bold">Resident Evil 4 Remake</span>!) as well
            as building and decorating Gunpla model kits.
          </p>
        </div>
      </div>
    </main>
  )
}

export default About
