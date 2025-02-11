import { useLanguage } from '../../config/contexts/language_context';

import { useState } from "react"
import ContactForm from "./ContactForm"
import { FaLinkedin, FaGithub } from "react-icons/fa"

export default function ContactSection() {
    const  { language, translations } = useLanguage()
    const currentTranslations = translations[language] 

    const [status, setStatus] = useState({
        type: "",
        message: ""
    })

    const updateStatus = (newStatus) => {
        setStatus(newStatus);
        if (newStatus.type) {
            setTimeout(() => {
                setStatus({ type: "", message: ""})
            }, 15000)
        }
    };

      return (
        <section id="contact" className="px-4 py-16 bg-secondary bg-opacity-10">
            <div className="mx-auto max-w-6xl">
            {status.type && <div className={`${status.type === "success" ? " bg-green-500" : " bg-red-500"} text-[#F5F5F5] rounded mt-7 p-5 mb-10 text-center whitespace-nowrap`}><p dangerouslySetInnerHTML={{ __html: status.key}}/></div>}
                <span className="text-xl font-roboto-mono font-bold text-primary">04.</span>
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-16 md:flex-nowrap md:">
                <div className="text-center md:text-start md:w-1/2">
                    <h1 className="mb-5 text-4xl font-semibold font-recursive">{currentTranslations.contact.title}</h1>
                    <p className="font-semibold">{currentTranslations.contact.workTogether}</p>
                    <p className="mb-8">{currentTranslations.contact.contactText.part1}<a className="text-primary visited:text-purple-500" href="mailto:jalvesdsilva27@gmail.com"> {currentTranslations.contact.contactText.part2}</a> !</p>
                    <p>{currentTranslations.contact.socials}</p>
                    <div className="flex space-x-8 mt-5 justify-center md:justify-start">
                    <a className="flex items-center space-x-2 p-2.5 rounded-xl bg-primary text-[#F1EEE9]" href="https://www.linkedin.com/in/jimmy-alves-da-silva-ba2834255/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                        <span>Linkedin</span>
                    </a>
                    <a className="flex items-center space-x-2 p-2.5 rounded-xl bg-primary text-[#F1EEE9]" href="https://github.com/jads27" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                        <span>Github</span>
                    </a>
                    </div>
                </div>
                <div className="relative mx-auto w-full sm:w-1/2">
                    <ContactForm updateStatus={updateStatus} />
                </div>
                </div>
            </div>
        </section>
    )
}