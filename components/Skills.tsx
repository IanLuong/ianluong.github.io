import { ReactNode } from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaNode,
} from 'react-icons/fa';
import { SiPostgresql } from 'react-icons/si';
import { BiLogoTypescript } from 'react-icons/bi';

const SKILLS = [
  {
    id: 0,
    icon: <FaHtml5 size="32px" />,
    name: 'html',
    experience: '4 years',
  },
  {
    id: 1,
    icon: <FaCss3Alt size="32px" />,
    name: 'css',
    experience: '4 years',
  },
  {
    id: 2,
    icon: <FaJsSquare size="32px" />,
    name: 'javascript',
    experience: '4 years',
  },
  {
    id: 3,
    icon: <BiLogoTypescript size="32px" />,
    name: 'typescript',
    experience: '1 year',
  },
  {
    id: 4,
    icon: <FaReact size="32px" />,
    name: 'react',
    experience: '3 years',
  },
  {
    id: 5,
    icon: <FaGitAlt size="32px" />,
    name: 'git',
    experience: '4 years',
  },
  {
    id: 6,
    icon: <SiPostgresql size="32px" />,
    name: 'SQL',
    experience: '2 years',
  },
  {
    id: 7,
    icon: <FaNode size="32px" />,
    name: 'node.js & express',
    experience: '2 years',
  },
];

export default function Skills() {
  return SKILLS.map((skill) => <Skill key={skill.id} skill={skill} />);
}

function Skill({
  skill,
}: {
  skill: {
    icon: ReactNode;
    name: string;
    experience: string;
  };
}) {
  return (
    <div className="flex flex-col items-center my-4">
      <div className="flex items-center gap-2">
        {skill.icon}
        <h2 className="font-medium text-3xl">{skill.name}</h2>
      </div>
      <p className="text-xl">{skill.experience} experience</p>
    </div>
  );
}
