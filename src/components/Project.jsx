import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLaptop, faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Project({ section, project }) {
  console.log(section.title)
  return (
    <div
      id={section.title}
      ref={section.ref}
      className="flex flex-col gap-2 my-4 scroll-m-2"
    >
      <img
        className="border-2 border-almostBlack rounded-lg"
        src={project.image}
        alt={project.name}
      />
      <h2 className="font-medium text-3xl">{project.name}</h2>
      <div className="flex flex-wrap gap-3">
        {project.skills.map((skill) => (
          <p className="text-almostGrey">{skill}</p>
        ))}
      </div>
      {project.description && (
        <p className="whitespace-pre-wrap text-xl">{project.description}</p>
      )}
      <div className="flex gap-3 text-lg">
        {project.link && (
          <a
            className="px-4 py-1 rounded-lg shadow-md border-2 border-almostBlack bg-amaranthPink"
            href={project.link}
          >
            <FontAwesomeIcon icon={faLink} className="pr-2" />
            Link
          </a>
        )}
        {project.demo && (
          <a
            className="px-4 py-1 rounded-lg shadow-md border-2 border-almostBlack"
            href={project.demo}
          >
            <FontAwesomeIcon icon={faLaptop} className="pr-2" />
            Demo
          </a>
        )}
        {project.repo && (
          <a
            className="px-4 py-1 rounded-lg shadow-md border-2 border-almostBlack"
            href={project.repo}
          >
            <FontAwesomeIcon icon={faGithub} className="pr-2" />
            Code
          </a>
        )}
      </div>
    </div>
  )
}
