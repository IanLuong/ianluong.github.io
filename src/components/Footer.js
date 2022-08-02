import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
    faLinkedin,
    faInstagram,
    faGithub,
} from "@fortawesome/free-brands-svg-icons"
import footerPortrait from "../img/pexels-enes-bayraktar-11306305.jpg"
import { useState } from "react"

export default function Footer() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [submitted, setSubmitted] = useState(false)

    function handleChange(event) {
        const { name, value } = event.target
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        setSubmitted(true)
        //doStuff()
    }

    return (
        <footer className="md:flex md:justify-center bg-blue-400 lg:h-screen">
            <div className="md:flex md:w-2/3 justify-center">
                <div className="font-inter flex flex-col p-6 gap-4 md:justify-center max-w-xl">
                    <h1 className="font-ibarra text-white font-semibold self-center text-6xl md:self-start">
                        Contact me
                    </h1>
                    <p className="text-white font-bold">
                        Feel free to get in touch with me!
                    </p>
                    <p className="text-white font-bold">
                        Whether it's to talk about a frontend job or just to
                        chat about Gundam and Badminton, shoot me a message and
                        I'll get back to you ASAP!
                    </p>
                    <p className="text-white">
                        Email me at ianluongcodes@gmail.com
                    </p>
                    <div className="flex gap-4 items-center self-center md:self-start">
                        <a
                            href="https://www.linkedin.com/in/ianluong/"
                            target="_blank"
                            className="hover:text-white focus:text-white hover:animate-pulse"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedin} size="3x" />
                        </a>
                        <a
                            href="https://www.instagram.com/ian__luong/"
                            target="_blank"
                            className="hover:text-white focus:text-white hover:animate-pulse"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faInstagram} size="3x" />
                        </a>
                        <a
                            href="https://github.com/IanLuong"
                            target="_blank"
                            className="hover:text-white focus:text-white hover:animate-pulse"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithub} size="3x" />
                        </a>
                        <a
                            href="mailto:ianluongcodes@gmail.com"
                            target="_blank"
                            className="hover:text-white focus:text-white hover:animate-pulse"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faEnvelope} size="3x" />
                        </a>
                    </div>
                    <form
                        className="w-full text-white font-bold flex flex-col gap-4"
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <label htmlFor="name">
                                Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                className="w-full text-black font-normal px-1"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email">
                                Email Address
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                className="w-full text-black font-normal px-1"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="name">
                                Message <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                className="w-full text-black font-normal px-1"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button className="border-4">
                            Submit
                        </button>
                        {submitted && (
                            <p className="text-green-900">
                                Thanks for the message!
                            </p>
                        )}
                    </form>
                </div>
                <img
                    className="md:max-w-2xl md:w-1/2 md:py-16 md:px-4"
                    src={footerPortrait}
                    alt="Cute sleeping cat"
                />
            </div>
        </footer>
    )
}
