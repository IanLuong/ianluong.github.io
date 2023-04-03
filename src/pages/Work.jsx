import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLaptop, faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const skills = [
  {
    name: 'html',
    experience: '4 years',
  },
  {
    name: 'css',
    experience: '4 years',
  },
  {
    name: 'javascript',
    experience: '4 years',
  },
  {
    name: 'react',
    experience: '3 years',
  },
  {
    name: 'git',
    experience: '4 years',
  },
  {
    name: 'mongoDB',
    experience: '2 years',
  },
  {
    name: 'node.js & express',
    experience: '2 years',
  },
  {
    name: 'typescript',
    experience: '1 year',
  },
]

const projects = [
  {
    name: 'whatdo.io',
    description:
      'A Full Stack CRUD app for tracking shared expenses, so people can get paid back. Features user authentication to track your expenses on the go.\n\nBuilt the backend REST API using MongoDB, Express and Node.js, with the front end using React and Tailwind.',
    image: '/images/whatdoio.png',
    skills: ['typescript', 'react', 'node.js & express', 'mongoDB'],
    demo: 'https://what-do-io.fly.dev',
  },
  {
    name: 'kamatimer',
    description:
      "A Pomodoro Timer Web App created for friends and family to keep focused, featuring customizable focus/break timing and a dark mode.\n\nP.S. Named after 'kamatis' which means 'tomato' in Tagalog.",
    image: '/images/kamatimer.png',
    skills: ['html', 'css', 'typescript', 'react'],
    demo: 'https://ianluong.github.io/kamatimer/',
    repo: 'https://github.com/IanLuong/kamatimer',
  },
  {
    name: 'frontend mentor',
    description:
      'A collection of the challenges I have completed as part of Frontend Mentor.\n\nFrontend Mentor challenges help you improve your coding skills by building realistic projects.',
    image: '/images/frontendmentor.png',
    skills: ['javascript', 'react', 'typescript', 'vite'],
    link: 'https://www.frontendmentor.io/profile/IanLuong',
    repo: 'https://github.com/IanLuong/frontend-mentor-challenges',
  },
  {
    name: 'spoofy records',
    description:
      'Record store website produced to replicate an online shopping experience. Features include a shopping cart, info pages for the records and more!\n\n(Feel free to take a peek at my music taste and maybe some records that I own)',
    image: '/images/spoofy.png',
    skills: ['html', 'css', 'javascript', 'react'],
    demo: 'https://ianluong.github.io/shopping-cart/',
    repo: 'https://github.com/IanLuong/shopping-cart',
  },
]

const Work = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="pt-24 w-full flex-1 flex flex-col bg-almostWhite self-end gap-3 px-4 py-2">
        <h1 className="font-semibold text-4xl px-2 border-b-2 border-almostBlack">
          skills.
        </h1>
        <div>
          {skills.map((skill) => (
            <Skill skill={skill} />
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col bg-almostWhite self-end gap-3 px-4 py-2">
        <h1 className="font-semibold text-4xl px-2 border-b-2 border-almostBlack">
          projects.
        </h1>
        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            <Project project={project} />
          ))}
        </div>
      </div>
    </main>
  )
}

const Skill = ({ skill }) => (
  <div className="flex flex-col items-center my-4">
    <h2 className="font-medium text-3xl">{skill.name}</h2>
    <p className="text-xl">{skill.experience} experience</p>
  </div>
)

const Project = ({ project }) => (
  <div id={project.name} className="flex flex-col gap-2 my-4">
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
      <p className="whitespace-pre-wrap">{project.description}</p>
    )}
    <div className="flex gap-3 text-lg">
      {project.link && (
        <a
          className="px-4 py-1 rounded-lg shadow-md border-2 border-almostBlack"
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

export default Work
