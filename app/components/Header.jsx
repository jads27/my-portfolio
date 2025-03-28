import { useLanguage } from '../../config/contexts/language_context';

import DropdownMenu from "./DropdownMenu"
import SmoothScrollLink from './SmoothScrollLink';
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react"
import { FaBars, FaXmark } from 'react-icons/fa6'

export default function Header() {
    const  { language, translations } = useLanguage()
    const currentTranslations = translations[language]

    const [isActive, setIsActive] = useState(false)

    const [isMedium, setIsMedium] = useState(
        typeof window !== "undefined" ? window.innerWidth <  768 : false
    )

    const handleClick = () => {
        setIsActive(!isActive)
    }

    const handleClose = () => {
        setIsActive(false)
      };

      useEffect(() => {
        const handleResize = () => {
            setIsMedium(window.innerWidth < 768)
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
      }, [])

    return (
        <header className="dropdown-container fixed z-40 top-0 right-0 left-0 bg-[#f6fafc] border-b-2 border-solid border-primary dark:bg-[#16130E]">
            <nav className="flex justify-around inset-0 mx-auto max-w-6xl py-[1px] px-4 md:py-3">
                    <ul className="flex justify-center w-full  md:justify-between">
                        <li className="rounded-lg hover:bg-secondary hover:bg-opacity-40 cursor-pointer hidden md:block">
                            <SmoothScrollLink href="home">
                                <span className="font-roboto-mono font-bold text-primary">01.</span> {currentTranslations.navigation.home}
                            </SmoothScrollLink>
                        </li>
                        <li className="rounded-lg hover:bg-secondary hover:bg-opacity-40 cursor-pointer hidden md:block">
                            <SmoothScrollLink href="skills">
                                <span className="font-roboto-mono font-bold text-primary">02.</span> {currentTranslations.navigation.skills}
                            </SmoothScrollLink>
                        </li>
                        <li className="rounded-lg hover:bg-secondary hover:bg-opacity-40 cursor-pointer hidden md:block">
                            <SmoothScrollLink href="projects">
                                <span className="font-roboto-mono font-bold text-primary">03.</span> {currentTranslations.navigation.projects}
                            </SmoothScrollLink>
                        </li>
                        <li className="rounded-lg hover:bg-secondary hover:bg-opacity-40 cursor-pointer hidden md:block"                      >
                            <SmoothScrollLink href="contact">
                                <span className="font-roboto-mono font-bold text-primary">04.</span> {currentTranslations.navigation.contact}
                            </SmoothScrollLink>
                        </li>
                        <li className="flex items-center">
                            <button className="block p-0  rounded-lg hover:bg-secondary hover:bg-opacity-40" onClick={handleClick}>
                                {isMedium ? <FaBars className="m-2 text-5xl md:text-2xl" /> : (isActive ? <FaXmark className="m-2 text-5xl md:text-2xl" /> : <FaBars className="m-2 text-5xl md:text-2xl" />)}
                            </button>               
                        </li>
                    </ul>
            </nav>
            <AnimatePresence>
                {isActive && <DropdownMenu isOpen={isActive} onClose={handleClose} />}
            </AnimatePresence>
        </header>
    )
}