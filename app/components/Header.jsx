import { useLanguage } from '../../config/contexts/language_context';

import DropdownMenu from "./DropdownMenu"
import SmoothScrollLink from './SmoothScrollLink';
import { AnimatePresence } from "framer-motion";
import { useState } from "react"
import { FaBars, FaXmark } from 'react-icons/fa6'

export default function Header() {
    const  { language, translations } = useLanguage()
    const currentTranslations = translations[language]

    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive(!isActive)
    }

    const handleClose = () => {
        setIsActive(false)
      };

    return (
        <header className="dropdown-container fixed z-40 top-0 right-0 left-0 bg-[#F5F5F5] border-b-2 border-solid border-secondary dark:bg-[#16130E]">
            <nav className="flex justify-around inset-0 mx-auto max-w-6xl py-[1px] px-4 md:py-3">
                    <ul className="flex justify-center w-full  md:justify-between">
                        <li className="rounded-lg hover:bg-secondary hover:bg-opacity-50 cursor-pointer hidden md:block" tabIndex="0">
                            <SmoothScrollLink href="home">
                                <span className="font-roboto-mono font-bold text-accent">01.</span> {currentTranslations.navigation.home}
                            </SmoothScrollLink>
                        </li>
                        <li className="rounded-lg hover:bg-secondary hover:bg-opacity-50 cursor-pointer hidden md:block" tabIndex="0">
                            <SmoothScrollLink href="skills">
                                <span className="font-roboto-mono font-bold text-accent">02.</span> {currentTranslations.navigation.skills}
                            </SmoothScrollLink>
                        </li>
                        <li className="rounded-lg hover:bg-secondary hover:bg-opacity-50 cursor-pointer hidden md:block" tabIndex="0">
                            <SmoothScrollLink href="projects">
                                <span className="font-roboto-mono font-bold text-accent">03.</span> {currentTranslations.navigation.projects}
                            </SmoothScrollLink>
                        </li>
                        <li className="rounded-lg hover:bg-secondary hover:bg-opacity-50 cursor-pointer hidden md:block" tabIndex="0"           >
                            <SmoothScrollLink href="contact">
                                <span className="font-roboto-mono font-bold text-accent">04.</span> {currentTranslations.navigation.contact}
                            </SmoothScrollLink>
                        </li>
                        <li className="flex items-center">
                            <button className="block p-0  rounded-lg hover:bg-secondary hover:bg-opacity-50" onClick={handleClick}>
                                {isActive ? <FaXmark className="m-2 text-5xl md:text-2xl" /> : <FaBars className="m-2 text-5xl md:text-2xl" />}
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