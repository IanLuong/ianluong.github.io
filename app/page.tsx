import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaFilePdf } from 'react-icons/fa6';

import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <section className="flex-1 flex flex-col justify-self-center sm:flex-row sm:justify-between sm:gap-4 sm:px-4 min-h-screen sm:min-h-[90vh]">
        <Image
          className="w-screen h-auto sm:w-96 md:max-w-[528px] sm:order-2 sm:self-center sm:border-4 sm:border-almostBlack sm:rounded-xl"
          src="/images/portrait_desktop.jpeg"
          alt="Ian Luong"
          width={200}
          height={100}
        />
        <div className="sm:max-w-md sm:flex-auto sm:self-center sm:border-0 w-full flex-1 flex flex-col border-t-2 border-almostBlack justify-center gap-3 px-4 py-4">
          <div className="flex flex-col items-start">
            <div className="flex w-full justify-between items-center">
              <h2 className="font-medium text-2xl">ian luong.</h2>
              <div className="flex gap-4">
                <Link
                  className="cursor-pointer transition-all duration-300 hover:text-black/70 focus:text-black/70"
                  href="https://github.com/IanLuong"
                  target="_blank"
                >
                  <FaGithub size={'32px'} />
                </Link>
                <Link
                  className="cursor-pointer transition-all duration-300 hover:text-black/70 focus:text-black/70"
                  href="https://www.linkedin.com/in/ianluong/"
                  target="_blank"
                >
                  <FaLinkedin size={'32px'} />
                </Link>
                <Link
                  className="cursor-pointer transition-all duration-300 hover:text-black/70 focus:text-black/70"
                  href="https://www.instagram.com/ian__luong/"
                  target="_blank"
                >
                  <FaInstagram size={'32px'} />
                </Link>
                <Link
                  className="cursor-pointer transition-all duration-300 hover:text-black/70 focus:text-black/70"
                  href="/IanLuongCV.pdf"
                  target="_blank"
                >
                  <FaFilePdf size={'32px'} />
                </Link>
              </div>
            </div>
            <h1 className="font-semibold text-4xl">web developer.</h1>
          </div>
          <p className="text-xl">
            Fullstack Web Developer and East End Londoner.
          </p>
          <p className="text-xl">Making weird stuff happen since 1998.</p>
          <div className="flex w-full gap-4">
            <Link
              className="btn-primary flex gap-2 font-semibold px-4 py-2 rounded-xl hover:bg-amaranthPink focus:bg-amaranthPink"
              href="#projects"
            >
              See My Work
              <Image
                className="w-6"
                src="/hero-arrows.svg"
                alt="See more"
                width={200}
                height={100}
              />
            </Link>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="flex flex-col gap-4 my-12 max-w-5xl mx-auto"
      >
        <div className="w-full flex flex-col self-end gap-3 px-4 py-2">
          <h1 className="font-semibold text-4xl px-2 border-b-2 border-almostBlack">
            👋 about me.
          </h1>
          <div className="flex-1 flex flex-col text-xl max-w-4xl self-center">
            {/* <Fade triggerOnce duration={2000}> */}
            <p>
              Born and raised in East London, I&apos;m a full-stack web
              developer and a Computer Science graduate from King&apos;s College
              London.
            </p>

            <br />
            <p>
              My primary focus is accessibility, writing clean JavaScript and
              modern CSS. I mostly use React, Node and SQL but I can adapt to
              whatever is required. Learning new technologies is part of the
              game. I currently work with JavaScript, React, Node.js and
              Tailwind CSS to build quality web apps.
            </p>
            <br />
            <p>
              Outside of web development, I love playing{' '}
              <span className="font-semibold">badminton & volleyball</span> in
              my free time. I also play{' '}
              <span className="font-semibold">video games</span> (right now
              I&apos;m playing{' '}
              <span className="font-medium">Metaphor: ReFantazio</span> and{' '}
              <span className="font-medium">
                The Great Ace Attorney Chronicles
              </span>
              !) on top of building and decorating
              <span className="font-medium"> Gunpla model kits</span>.{' '}
              <span className="font-medium"> I collect vinyl records too.</span>{' '}
              Let me know your favourite album and I&apos;ll check it out.
            </p>
            <br />
            {/* </Fade> */}
          </div>
        </div>
      </section>

      <section id="skills" className="flex flex-col my-12 max-w-5xl mx-auto">
        <div className="w-full flex flex-col self-end gap-3 px-4 py-2">
          <h1 className="font-semibold text-4xl px-2 border-b-2 border-almostBlack">
            🖥 skills.
          </h1>
          <div className="sm:grid sm: grid-cols-2">
            {/* <Fade cascade triggerOnce direction="up" duration={500}> */}
            <Skills />
            {/* </Fade> */}
          </div>
        </div>
      </section>

      <section id="projects" className="flex flex-col my-12 max-w-5xl mx-auto">
        <div className="w-full flex flex-col self-end gap-3 px-4 py-2">
          <h1 className="font-semibold text-4xl px-2 border-b-2 border-almostBlack">
            📓 projects.
          </h1>
          <div className="flex flex-col gap-4">
            {/* <Fade cascade triggerOnce duration={500}> */}
            <Projects />
            {/* </Fade> */}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
