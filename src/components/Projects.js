import Project from "./Project";

export default function Projects() {

return (
  <section>
    <div className="flex flex-col px-6 py-8 gap-4">
      <h1 className="font-ibarra font-semibold self-center text-6xl">
        My work
      </h1>

      <div className="flex flex-col gap-8">
        <Project title="Spoofy Records" desc="Record store website produced to replicate an online shopping experience. Built with React." />
        <Project title="Anime Quiz" desc="Mini quiz app made to entertain a growing, local anime community. Built using React and questions supplied by the Open Trivia Database API." />
        <Project title="Kamatimer" desc="Pomodoro Timer Chrome Extension created to keep focused. Built using React and Typescript." />
      </div>
    </div>
  </section>
);
}
