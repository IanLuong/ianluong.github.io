import projects from '@/projects.json';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLaptop, FaLink } from 'react-icons/fa';

export default function Projects() {
  return projects.map((project, index) => (
    <Project key={project.id} project={project} isLeft={index % 2 === 0} />
  ));
}

function Project({
  project,
  isLeft,
}: {
  project: {
    id: number;
    name: string;
    description: string;
    image: string;
    skills: string[];
    link?: string;
    demo?: string;
    repo?: string;
  };
  isLeft: boolean;
}) {
  return (
    <div className="flex flex-col md:flex-row md:gap-8 gap-2 my-4 scroll-m-2">
      <Image
        className={`${
          isLeft && 'md:order-2'
        } md:flex-1 md:w-1/2 self-start border-2 border-almostBlack w-full rounded-lg`}
        height={278}
        width={512}
        src={project.image}
        alt={project.name}
      />
      <div className="md:flex-1 flex flex-col gap-2">
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
            <Link
              className="flex items-center gap-2 btn-primary hover:bg-navajoWhite focus:bg-navajoWhite"
              href={project.link}
              target="_blank"
            >
              <FaLink size="24px" />
              Link
            </Link>
          )}
          {project.demo && (
            <Link
              className="flex items-center gap-2 btn-primary hover:bg-celeste focus:bg-celeste"
              href={project.demo}
              target="_blank"
            >
              <FaLaptop size="24px" />
              Demo
            </Link>
          )}
          {project.repo && (
            <Link
              className="flex items-center gap-2 btn-primary hover:bg-mauve focus:bg-mauve"
              href={project.repo}
              target="_blank"
            >
              <FaGithub size="24px" />
              Code
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
