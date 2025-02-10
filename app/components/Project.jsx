import { useLanguage } from '../../config/contexts/language_context';

import { useState } from "react"
import Image from "next/image"

export default function Project({onClick, image, name, header}) {
    const  { language, translations } = useLanguage()
    const currentTranslations = translations[language]

    const [isHovered, setIsHovered] = useState(false)

    return (
        <button 
            className={`project relative z-30 w-full flex items-center h-64 p-8 mt-11 rounded-xl text-7xl text-[#F5F5F5] border-2 border-solid border-primary bg-cover bg-center ${image} bg-blend-darken bg-black bg-opacity-30 shadow-md md:p-16`} 
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
            <div className="absolute inset-0 z-10 flex flex-col justify-end gap-2 pb-2 text-2xl rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 bg-primary bg-opacity-75">
                <span className="text-white text-3xl font-semibold">{header}</span>
                <span>{currentTranslations.projects.seeMore}</span>
                <Image
                    className="max-w-[6rem] self-center"
                    src="/arrow.svg"
                    alt="Right Arrow"
                    width={95}
                    height={87}
                    layout="responsive"
                    priority
                />   
            </div>
            <div className={`text-start transition-opacity duration-500 ${isHovered ? "opacity-0" : "opacity-100"}`}>
                <span className="text-6xl md:text-7xl font-recursive">{name}</span>
            </div>
         </button> 
    )
}