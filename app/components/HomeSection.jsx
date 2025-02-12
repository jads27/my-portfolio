import { useLanguage } from '../../config/contexts/language_context';

import Image from "next/image"
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"

export default function HomeSection() {
    const  { language, translations } = useLanguage()
    const currentTranslations = translations[language]
    return (
        <section id="home" className="mx-auto max-w-6xl pt-40 pb-28 md:pb-48 px-4 md:pt-64">
            <span className="self-start text-xl font-roboto-mono font-bold text-primary">01.</span> 
            <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-72 md:w-80">
                    <Image
                        src="/my-picture.jpg"
                        alt="Jimmy Picture"
                        width={673}
                        height={673}
                        layout="responsive"
                        className="rounded-full"
                        priority
                    />
                </div>
                <div className="flex-col mx-auto">
                    <p className="text-center text-xl font-recursive">{currentTranslations.home.greetings}</p>
                    <h1 className="text-4xl md:text-6xl text-center font-recursive font-extrabold mt-5"><span className="block">Jimmy</span><span className="block">Alves Da Silva</span></h1>
                    <p className="max-w-[608px] text-center text-lg md:text-2xl font-recursive mt-5 md:mt-8"><span className="font-extrabold">{currentTranslations.home.role}</span> {currentTranslations.home.description}</p>
                    <div className="flex justify-center justify-around mt-7 md:mt-10">
                        <a className="flex justify-center items-center w-[110px] gap-2 p-2.5 rounded-xl bg-primary text-[#F1EEE9]" href="https://www.linkedin.com/in/jimmy-alves-da-silva-ba2834255/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                            <span>Linkedin</span>
                        </a>
                        <a className="flex justify-center items-center w-[110px] gap-2 p-2.5 rounded-xl bg-primary text-[#F1EEE9]" href="https://github.com/jads27" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                            <span>Github</span>
                        </a>
                        <a className="flex justify-center items-center w-[110px] gap-2 p-2.5 rounded-xl bg-primary text-[#F1EEE9]" href="mailto:jalvesdsilva27@gmail.com">
                            <FaEnvelope />
                            <span>Contact</span>
                        </a>
                    </div>
                </div>
            </div>
        </section >
    )
}