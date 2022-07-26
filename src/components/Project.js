import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Project(props) {
    const {title, desc, imgPath} = props 
    return (
        <div className="w-full shadow-xl">
            {imgPath ? <img className="w-full h-48" src={imgPath} alt=""/> : <div className="w-full h-48 bg-red-700"></div>}
            
            <div className="px-4 pt-2 pb-8">
                <div className="flex items-center">
                    <h2 className="font-ibarra text-lg mr-auto">{title}</h2>
                    <div className="flex gap-4">
                        <FontAwesomeIcon icon={faGithub} size='lg'/>
                        <FontAwesomeIcon icon={faUpRightFromSquare} size='lg'/>
                    </div>
                </div>
                <p className="font-inter">{desc}</p>
            </div>
        </div>
    )
}