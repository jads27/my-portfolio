import { useLanguage } from '../../config/contexts/language_context';

import ContactForm from "./ContactForm"
import { FaLinkedin, FaGithub } from "react-icons/fa"

export default function ContactSection() {
    const  { language, translations } = useLanguage()
    const currentTranslations = translations[language] 

      return (
        <section id="contact" className="px-4 py-16 bg-secondary bg-opacity-20">
            <div className="mx-auto max-w-6xl">
                <span className="text-xl font-roboto-mono font-bold text-accent">04.</span>
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-16">
                <div className="text-center md:text-start">
                    <h1 className="mb-5 text-4xl font-semibold font-recursive">{currentTranslations.contact.title}</h1>
                    <p className="font-semibold">{currentTranslations.contact.workTogether}</p>
                    <p className="mb-8">{currentTranslations.contact.contactText.part1}<a className="text-accent visited:text-purple-500" href="mailto:jalvesdsilva27@gmail.com"> {currentTranslations.contact.contactText.part2}</a> !</p>
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
                <div className="relative mx-auto sm:w-3/6 w-full">
                    <ContactForm />
                </div>
                </div>
            </div>
        </section>
    )
}