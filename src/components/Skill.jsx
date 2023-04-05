import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Skill({ skill }) {
  return (
    <div className="flex flex-col items-center my-4">
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={skill.icon_name} size="2x" />
        <h2 className="font-medium text-3xl">{skill.name}</h2>
      </div>
      <p className="text-xl">{skill.experience} experience</p>
    </div>
  )
}
