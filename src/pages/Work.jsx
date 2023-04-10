import skills from '../data/skills.json'
import projects from '../data/projects.json'
import Skill from '../components/Skill'
import Project from '../components/Project'
import { Fade } from 'react-awesome-reveal'

const Work = ({ sections }) => {
  const projectSections = sections.slice(2)

  return (
    <section className="flex flex-col my-12">
      <div
        id={sections[0].title}
        ref={sections[0].ref}
        className="w-full flex-1 flex flex-col self-end gap-3 px-4 py-2"
      >
        <h1 className="font-semibold text-4xl px-2 border-b-2 border-almostBlack">
          🖥 skills.
        </h1>
        <div className="sm:grid sm: grid-cols-2">
          <Fade cascade triggerOnce direction="up" duration={500}>
            {skills.map((skill) => (
              <Skill key={skill.id} skill={skill} />
            ))}
          </Fade>
        </div>
      </div>
      <div
        id={sections[1].title}
        ref={sections[1].ref}
        className="w-full flex flex-col self-end gap-3 px-4 py-2"
      >
        <h1 className="font-semibold text-4xl px-2 border-b-2 border-almostBlack">
          📓 projects.
        </h1>
        <div className="flex flex-col gap-4">
          <Fade cascade triggerOnce duration={500}>
            {projects.map((project, index) => (
              <Project
                section={projectSections[index]}
                key={project.id}
                project={project}
                isLeft={index % 2 === 0}
              />
            ))}
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default Work
