import Project from "./Project"
import kamatimer from "../img/kamatimer.png"
import quiz from "../img/quiz.png"
import spoofy from "../img/spoofy.png"
import portfolio from "../img/portfolio.png"
import whatdoio from "../img/whatdoio.png"

export default function Projects() {
  return (
    <section className="md:m-auto">
      <div className="flex flex-col items-center px-6 py-8 gap-4">
        <h1 className="font-ibarra font-semibold self-center text-6xl mb-2">
          My work
        </h1>

        <div className="flex flex-col gap-12 max-w-screen-lg">
          <Project
            title="Spoofy Records"
            desc={[
              "Record store website produced to replicate an online shopping experience. Features include a shopping cart, info pages for the records and more!",
              "\n\n",
              "(Feel free to take a peek at my music taste and maybe some records that I own)",
            ]}
            imgPath={spoofy}
            builtWith="React and React Router"
            repoPath="https://github.com/IanLuong/shopping-cart"
            sourcePath="http://ianluong.github.io/shopping-cart"
            isLeft={true}
          />
          <Project
            title="WhatDo.io"
            desc={[
              "A Full Stack CRUD app for tracking shared expenses, so people can get paid back. Features user authentication to track your expenses on the go.",
              "\n\n",
              "Built the backend REST API using MongoDB, Express and Node.js, with the front end using React.",
            ]}
            imgPath={whatdoio}
            builtWith="MERN Stack"
            repoPath="https://github.com/IanLuong/what-do-i-owe"
            isLeft={false}
          />
          <Project
            title="Anime Quiz"
            desc={[
              "Mini quiz app made to entertain a growing, local anime community. Quiz questions are pulled from the Open Trivia DB API and contain both multiple choice and true or false questions.",
              "\n\n",
              "Features copy to clipboard score sharing so you can let the group chat lads know, you are the one and only GOAT.",
            ]}
            imgPath={quiz}
            builtWith="React, Open Trivia Database API"
            repoPath="https://github.com/IanLuong/anime-quiz"
            sourcePath="http://ianluong.github.io/anime-quiz"
            isLeft={true}
          />
          <Project
            title="My Portfolio"
            desc={[
              "My portfolio showing off my work and some of my interests. Oh hey wait a second, you already knew that because you're here right now. ",
              "\n\n",
              "Huh, I guess you can click the link if you want. I'm pretty sure I know where it'll take you though.",
            ]}
            imgPath={portfolio}
            builtWith="React, Tailwind CSS and most importantly... love :)"
            sourcePath="http://ianluong.github.io/"
            isLeft={false}
          />
          <Project
            title="KamaTimer"
            desc={[
              "A Pomodoro Timer Web App created for friends and family to keep focused, featuring customizable focus/break timing and a dark mode. The use-sound hook makes use of bell and tick sounds to announce breaks, ensuring you pace your learning and ace your goals!",
              "\n\n",
              "P.S. Named after 'kamatis' which means 'tomato' in Tagalog.",
            ]}
            imgPath={kamatimer}
            builtWith="React, The 'use-sound' Hook, TypeScript and Tailwind CSS"
            repoPath="https://github.com/IanLuong/kamatimer"
            sourcePath="http://ianluong.github.io/kamatimer"
            isLeft={true}
          />
        </div>
      </div>
    </section>
  )
}
