import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';

const rubik = Rubik({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ian Luong | Fullstack Web Developer',
  description:
    'Full Stack Web Developer from London. Look around at my projects and get in touch.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className} antialiased bg-almostWhite`}>
        <header className="max-w-5xl m-auto absolute sm:relative sm:block w-screen p-4 z-10">
          <div className="flex justify-between items-center max-w-5xl m-auto">
            <Link
              href="/"
              className="font-semibold text-3xl px-4 py-2 rounded-xl border-2 border-almostBlack bg-white"
            >
              ian.
            </Link>

            <Image
              className="w-6 sm:hidden"
              src="/nav-bars.svg"
              alt="Open Sidebar"
              width={280}
              height={38}
              title="Open Sidebar"
            />

            <nav className="hidden sm:block">
              <ul className="flex gap-4 text-lg font-medium text-almostBlack">
                <li>
                  <Link
                    className="cursor-pointer transition-all duration-300 hover:text-amaranthPink focus:text-amaranthPink"
                    href="#about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="cursor-pointer transition-all duration-300 hover:text-navajoWhite focus:text-navajoWhite"
                    href="#skills"
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    className="cursor-pointer transition-all duration-300 hover:text-columbiaBlue focus:text-columbiaBlue"
                    href="#projects"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    className="cursor-pointer transition-all duration-300 hover:text-mauve focus:text-mauve"
                    href="#contact"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/IanLuongCV.pdf"
                    target="_blank"
                    className="text-center border-2 border-almostBlack rounded-xl px-4 py-2 transition-all duration-300 cursor-pointer bg-white hover:bg-peach focus:bg-peach"
                  >
                    CV
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
