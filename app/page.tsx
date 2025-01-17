import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaFilePdf } from 'react-icons/fa6';

export default function Home() {
  return (
    <section className="flex-1 flex flex-col justify-self-center sm:flex-row sm:justify-between sm:gap-4 sm:px-4 min-h-screen sm:min-h-[90vh]">
      <Image
        className="sm:w-1/2 md:max-w-[528px] sm:order-2 sm:self-center sm:border-4 sm:border-almostBlack sm:rounded-xl"
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
          <br />
          <br />
          Making weird stuff happen since 1998.
        </p>
        <div className="flex w-full gap-4">
          <Link
            className="btn-primary flex gap-2 font-semibold px-4 py-2 rounded-xl hover:bg-amaranthPink focus:bg-amaranthPink"
            href="/projects"
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
  );
}
