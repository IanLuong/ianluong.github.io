import skills from '../data/skills.json'
import projects from '../data/projects.json'
import Skill from '../components/Skill'
import Project from '../components/Project'

const Work = () => {
  return (
    <section className="flex flex-col my-12">
      <div className="w-full flex-1 flex flex-col  self-end gap-3 px-4 py-2">
        <h1 className="font-semibold text-4xl px-2 border-b-2 border-almostBlack">
          skills.
        </h1>
        <div>
          {skills.map((skill) => (
            <Skill skill={skill} />
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col  self-end gap-3 px-4 py-2">
        <h1 className="font-semibold text-4xl px-2 border-b-2 border-almostBlack">
          projects.
        </h1>
        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            <Project project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
