import { useLanguage } from '../../config/contexts/language_context';

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"

export default function HomeSection() {
    const  { language, translations } = useLanguage()
    const currentTranslations = translations[language]
    return (
        <section id="home" className="mx-auto max-w-6xl pt-40 pb-48 px-4 md:pt-64">
            <span className="self-start text-xl font-roboto-mono font-bold text-accent">01.</span> 
            <div className="flex items-center flex-col mx-auto gap-4">
                <p className="text-xl font-recursive">{currentTranslations.home.greetings}</p>
                <h1 className="text-6xl text-center font-recursive font-extrabold"><span className="block">Jimmy</span><span className="block">Alves Da Silva</span></h1>
                <p className="max-w-[608px] text-center text-2xl font-recursive "><span className="font-extrabold">{currentTranslations.home.role}</span> {currentTranslations.home.description}</p>
                <div className="flex justify-around w-5/12 gap-2 mt-5">
                    <a className="flex items-center gap-2 p-2.5 rounded-xl bg-primary text-[#F1EEE9]" href="https://www.linkedin.com/in/jimmy-alves-da-silva-ba2834255/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                        <span>Linkedin</span>
                    </a>
                    <a className="flex items-center gap-2 p-2.5 rounded-xl bg-primary text-[#F1EEE9]" href="https://github.com/jads27" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                        <span>Github</span>
                    </a>
                    <a className="flex items-center gap-2 p-2.5 rounded-xl bg-primary text-[#F1EEE9]" href="mailto:jalvesdsilva27@gmail.com">
                        <FaEnvelope />
                        <span>Contact</span>
                    </a>
                </div>
            </div>
        </section >
    )
}