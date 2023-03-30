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
    name: 'Git',
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
    image: '/images/whatdoio.png',
    skills: ['typescript', 'react', 'node.js & express', 'mongoDB'],
    demo: 'https://what-do-io.fly.dev',
  },
  {
    name: 'kamatimer',
    image: '/images/kamatimer.png',
    skills: ['html', 'css', 'typescript', 'react'],
    demo: 'https://ianluong.github.io/kamatimer/',
    repo: 'https://github.com/IanLuong/kamatimer',
  },
  {
    name: 'frontend mentor',
    image: '/images/frontendmentor.png',
    skills: ['javascript', 'react', 'typescript', 'vite'],
    link: 'https://www.frontendmentor.io/profile/IanLuong',
    repo: 'https://github.com/IanLuong/frontend-mentor-challenges',
  },
  {
    name: 'spoofy records',
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
    {project.description && <p>{project.description}</p>}
    <div className="flex gap-3 text-lg">
      {project.link && (
        <a
          className="px-4 py-1 rounded-lg shadow-md border-2 border-almostBlack"
          href={project.link}
        >
          Link
        </a>
      )}
      {project.demo && (
        <a
          className="px-4 py-1 rounded-lg shadow-md border-2 border-almostBlack"
          href={project.demo}
        >
          Demo
        </a>
      )}
      {project.repo && (
        <a
          className="px-4 py-1 rounded-lg shadow-md border-2 border-almostBlack"
          href={project.repo}
        >
          Code
        </a>
      )}
    </div>
  </div>
)

export default Work
