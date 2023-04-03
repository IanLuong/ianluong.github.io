export default function Skill({ skill }) {
  return (
    <div className="flex flex-col items-center my-4">
      <h2 className="font-medium text-3xl">{skill.name}</h2>
      <p className="text-xl">{skill.experience} experience</p>
    </div>
  )
}
