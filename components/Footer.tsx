import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="bg-almostBlack p-8">
      <footer className="max-w-5xl m-auto flex items-baseline justify-between text-almostWhite">
        <div className="flex flex-col sm:flex-row items-start sm:items-baseline gap-5">
          <span className="font-semibold text-4xl">ian.</span>
          <nav>
            <ul className="flex gap-3 text-lg font-medium">
              <li>
                <Link href="#home">home.</Link>
              </li>
              <li>
                <Link href="#projects">portfolio.</Link>
              </li>
              <li>
                <Link href="/IanLuongCV.pdf" target="_blank">
                  cv.
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex gap-3 items-center">
          <Link
            className="cursor-pointer"
            href="https://github.com/IanLuong"
            target="_blank"
          >
            <FaGithub size="24px" />
          </Link>
          <Link
            className="cursor-pointer"
            href="https://www.linkedin.com/in/ianluong/"
            target="_blank"
          >
            <FaLinkedin size="24px" />
          </Link>
          <Link
            className="cursor-pointer"
            href="https://www.instagram.com/ian__luong/"
            target="_blank"
          >
            <FaInstagram size="24px" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
