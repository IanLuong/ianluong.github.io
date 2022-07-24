import email from "../img/email.svg"
import instagram from "../img/instagram.svg"


export default function Footer() {
    return (
        <footer class="font-roboto flex text-white bg-blue-400 flex-col p-1 pb-12">
        <h1 class="font-ibarra font-semibold self-center text-5xl">Contact me</h1>
        <p class="subtitle">Please get in touch if you think my work could be beneficial!</p>

        <div>
            <div class="flex gap-2 items-center">
                <img class="w-16 h-12" src={email} alt="" />
                <img class="w-16 h-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="" />
                <img class="w-16 h-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt="" />
                <img class="w-16 h-12" src={instagram} alt="" />
            </div>
        </div>

    </footer>

    )
}