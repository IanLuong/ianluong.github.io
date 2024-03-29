import { Fade } from 'react-awesome-reveal'

const About = ({ section }) => {
  return (
    <section
      id={section.title}
      ref={section.ref}
      className="flex flex-col gap-4 my-12"
    >
      <div className="w-full flex flex-col self-end gap-3 px-4 py-2">
        <h1 className="font-semibold text-4xl px-2 border-b-2 border-almostBlack">
          👋 about me.
        </h1>
        <div className="flex-1 flex flex-col text-xl max-w-4xl self-center">
          <Fade triggerOnce duration={2000}>
            <p>
              Born and raised in East London, I'm a junior full-stack web
              developer and a Computer Science graduate from King's College
              London.
            </p>

            <br />
            <p>
              My primary focus is accessibility, writing clean JavaScript and
              modern CSS. I mostly use React, Node and MongoDB but I can adapt
              to whatever is required. Learning new technologies is part of the
              game. I currently work with JavaScript, React, Node.js and
              Tailwind CSS to build quality web apps.
            </p>
            <br />
            <p>
              Outside of web development, I love playing{' '}
              <span className="font-semibold">badminton</span> in my free time.
              I also play <span className="font-semibold">video games</span>{' '}
              (right now I'm playing{' '}
              <span className="font-medium">Celeste</span> and{' '}
              <span className="font-medium">Resident Evil 3 Remake</span>!) on
              top of building and decorating{' '}
              <span className="font-medium">Gunpla model kits</span>. I collect
              vinyl records too. Let me know your favourite album and I'll check
              it out.
            </p>
            <br />
            {/* <p className="font-bold">
              On July 9th 2023, I will be running the ASICS London 10K and
              raising money for Parkinson's UK, in memory of my grandfather.
              <br /> <br />
              If you would like to donate, please visit{' '}
              <a
                className="underline trannsition-color duration-200 hover:text-mauve focus:text-mauve"
                href="https://www.justgiving.com/fundraising/ianluong"
                target="_blank"
              >
                JustGiving
              </a>{' '}
              and to learn more about the event, check out{' '}
              <a
                className="underline trannsition-color duration-200 hover:text-mauve focus:text-mauve"
                href="https://limelightsports.club/event/asics-london-10k-2023"
                target="_blank"
              >
                Limelight Sports Club.
              </a>
            </p> */}
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default About
