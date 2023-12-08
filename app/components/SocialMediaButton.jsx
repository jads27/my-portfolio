import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"

export default function SocialMediaButton({icon: Icon, title}) {
    return (
        <button>
            <Icon />
            <span>{title}</span>
        </button>
    )
}