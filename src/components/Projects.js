import Project from "./Project";

export default function Projects() {

return (
  <section className="md:m-auto">
    <div className="flex flex-col items-center px-6 py-8 gap-4">
      <h1 className="font-ibarra font-semibold self-center text-6xl">
        My work
      </h1>

      <div className="flex flex-col gap-8 w-full items-center md:grid md:grid-cols-2 max-w-5xl">
        <Project
          title="Spoofy Records"
          desc="Record store website produced to replicate an online shopping experience."
          repoPath="https://github.com/IanLuong/shopping-cart"
          sourcePath="http://ianluong.github.io/shopping-cart"
        />
        <Project
          title="Anime Quiz"
          desc="Mini quiz app made to entertain a growing, local anime community."
          repoPath="https://github.com/IanLuong/anime-quiz"
          sourcePath="http://ianluong.github.io/anime-quiz"
        />
        <Project
          title="Kamatimer"
          desc="Pomodoro Timer Chrome Extension created to keep focused. "
          
        />
      </div>
    </div>
  </section>
);
}
