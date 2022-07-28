import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Project(props) {
    const {title, desc, imgPath, repoPath, sourcePath} = props 
    return (
      <div className="w-full max-w-sm max-h-64 shadow-xl justify-self-center">
        {imgPath ? (
          <img className="w-full h-32" src={imgPath} alt="" />
        ) : (
          <div className="w-full h-32 bg-red-700"></div>
        )}

        <div className="px-4 pt-2 p-16">
          <div className=" flex items-center">
            <h2 className="font-ibarra text-xl mr-auto">{title}</h2>
            <div className="flex gap-4">
              {repoPath && (
                <a href={repoPath}>
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
              )}
              {sourcePath && (
                <a href={sourcePath}>
                  <FontAwesomeIcon icon={faUpRightFromSquare} size="lg" />
                </a>
              )}
            </div>
          </div>
          <p className="font-inter">{desc}</p>
        </div>
      </div>
    );
}