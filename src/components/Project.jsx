import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLaptop, faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Project({ section, project, isLeft }) {
  return (
    <div
      id={section.title}
      ref={section.ref}
      className="flex flex-col lg:flex-row lg:gap-8 gap-2 my-4 scroll-m-2"
    >
      <img
        className={`${
          isLeft && 'lg:order-2'
        } lg:flex-1 lg:w-1/2 self-center border-2 border-almostBlack rounded-lg`}
        src={project.image}
        alt={project.name}
      />
      <div className="lg:flex-1">
        <h2 className="font-medium text-3xl lowercase">{project.name}</h2>
        <div className="flex flex-wrap gap-3">
          {project.skills.map((skill, index) => (
            <p key={index} className="text-almostGrey">
              {skill}
            </p>
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
              target="_blank"
            >
              <FontAwesomeIcon icon={faLink} className="pr-2" />
              Link
            </a>
          )}
          {project.demo && (
            <a
              className="px-4 py-1 rounded-lg shadow-md border-2 border-almostBlack"
              href={project.demo}
              target="_blank"
            >
              <FontAwesomeIcon icon={faLaptop} className="pr-2" />
              Demo
            </a>
          )}
          {project.repo && (
            <a
              className="px-4 py-1 rounded-lg shadow-md border-2 border-almostBlack"
              href={project.repo}
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} className="pr-2" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
