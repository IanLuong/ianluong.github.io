import { faGithub, faReact } from "@fortawesome/free-brands-svg-icons"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { createElement } from "react"

export default function Project({ title, desc, imgPath, builtWith, repoPath, sourcePath, position}) {
  // return (
  //   <div className="w-full max-w-sm max-h-64 shadow-xl justify-self-center">
  //     {imgPath ? (
  //       <img className="w-full h-32" src={imgPath} alt="" />
  //     ) : (
  //       <div className="w-full h-32 bg-red-700"></div>
  //     )} 

  //     <div className="px-4 pt-2 p-16">
  //       <div className=" flex items-center">
  //         <h2 className="font-ibarra text-xl mr-auto">{title}</h2>
  //         <div className="flex gap-4">
  //           {repoPath && (
  //             <a
  //               href={repoPath}
  //               className="hover:opacity-30 transition-opacity ease-in delay-75"
  //             >
  //               <FontAwesomeIcon icon={faGithub} size="xl" />
  //             </a>
  //           )}
  //           {sourcePath && (
  //             <a
  //               href={sourcePath}
  //               className="hover:opacity-30 transition-opacity ease-in delay-75"
  //             >
  //               <FontAwesomeIcon icon={faUpRightFromSquare} size="xl" />
  //             </a>
  //           )}
  //         </div>
  //       </div>
  //       <p className="font-inter italic">{desc}</p>
  //     </div>
  //   </div>
  // )

  return (
    <div className="flex flex-col border-black border-2 rounded-md">
      {imgPath ? (
        <img className="w-full h-32 object-contain" src={imgPath} alt="" />
      ) : (
        <div className="w-full h-64 bg-red-700"></div>
      )}
      <div className="m-2">
        <div className="flex justify-between pb-2">
          <h1 className="font-ibarra font-bold text-xl">{title}</h1>
          <div className="flex gap-4 justify-center">
            {repoPath && (
              <a
                href={repoPath}
                className="hover:opacity-30 transition-opacity ease-in delay-75"
              >
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            )}
            {sourcePath && (
              <a
                href={sourcePath}
                className="hover:opacity-30 transition-opacity ease-in delay-75"
              >
                <FontAwesomeIcon icon={faUpRightFromSquare} size="xl" />
              </a>
            )}
          </div>
        </div>
        <p className="font-inter italic mb-2 border-b-2 whitespace-pre-line">{desc}</p>
        <p className="font-ibarra">{builtWith}</p>
      </div>
    </div>
  )
}
