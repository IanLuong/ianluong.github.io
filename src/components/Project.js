import { faGithub, faReact } from "@fortawesome/free-brands-svg-icons"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { createElement } from "react"

export default function Project({
  title,
  desc,
  imgPath,
  builtWith,
  repoPath,
  sourcePath,
  isLeft,
}) {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-4">
      {imgPath ? (
        <img
          className={`w-full lg:w-1/2 border-4 ${
            isLeft ? "lg:order-first" : "lg:order-last"
          }`}
          src={imgPath}
          alt=""
        />
      ) : (
        <div className="w-full max-w-screen-sm h-48 bg-red-700 flex items-center justify-center">
          Project Image
        </div>
      )}
      <div className="mb-2">
        <div className="justify-between pb-2">
          <h1 className="font-inter font-bold text-2xl">{title}</h1>
          <p className="font-inter text-lg">
            <span className="font-bold">Built with:</span> {builtWith}
          </p>
        </div>
        <p className="font-inter mb-4 whitespace-pre-line">{desc}</p>
        <div className="flex gap-4 justify-left">
          {repoPath && (
            <a href={repoPath}>
              <div className="project-button">
                <FontAwesomeIcon icon={faGithub} size="lg" />
                Repo
              </div>
            </a>
          )}
          {sourcePath && (
            <a href={sourcePath}>
              <div className="project-button">
                <FontAwesomeIcon icon={faUpRightFromSquare} size="lg" />
                Demo
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
