import { useLanguage } from '../../config/contexts/language_context'
import { useDarkMode } from '../../config/contexts/darkmode_context'

import { useEffect } from "react"
import { motion } from "framer-motion"
import SmoothScrollLink from './SmoothScrollLink'
import { FaLanguage } from "react-icons/fa6"
import { BsSunFill } from "react-icons/bs"

export default function DropdownMenu({ isOpen, onClose }) {
    const { language, toggleLanguage, translations } = useLanguage()
    const currentTranslations = translations[language]
    const { darkMode, toggleDarkMode } = useDarkMode()

    const handleLanguageSwitch = () => {
        toggleLanguage()
    };

    const handleDarkModeSwitch = () => {
        toggleDarkMode()
    }

    const dropdownAnimation = {
        hidden: { opacity: 0, x: "-100%", y: -2 },
        visible: { opacity: 1, x: 0 },
        exit:  { opacity: 0, x: "100%" }
    }

    const transition = {
        duration: 0.3,
        ease: "easeInOut"
    }  
    
    useEffect(() => {
        const handleClickOutside = (event) => {
            const isNavClick = event.target.closest(".dropdown-container")
            const isProjectClick = event.target.closest(".project")
            const isModalClick = event.target.closest(".modal")
    
            if (isOpen && !isNavClick && !isProjectClick && !isModalClick) {
                onClose();
              }
        }

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
          };
    }, [isOpen, onClose])

    return (
            <motion.div 
            className={`${!isOpen ? "hidden" : "flex" } absolute w-full mt-[2px] border-b-2 border-secondary bg-[#F5F5F5] dark:bg-[#16130E]`}
            variants={dropdownAnimation}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            transition={transition}
            exit="exit"
            >
                <nav className="flex inset-0 mx-auto max-w-6xl py-3 px-4 md:w-full">
                    <ul className="grid grid-rows-2 grid-cols-2 justify-around w-full md:flex">
                        <li className="order-1 md:order-none w-fullrounded-lg hover:bg-secondary hover:bg-opacity-50 ease-in-out cursor-pointer md:hidden">
                            <SmoothScrollLink href="home">
                                <span className="font-roboto-mono font-bold text-accent">01.</span> {currentTranslations.navigation.home}
                            </SmoothScrollLink>
                        </li>
                        <li className="order-3 md:order-none rounded-lg hover:bg-secondary hover:bg-opacity-50 ease-in-out cursor-pointer md:hidden">
                            <SmoothScrollLink href="skills">
                                <span className="font-roboto-mono font-bold text-accent">02.</span> {currentTranslations.navigation.skills}
                            </SmoothScrollLink>
                        </li>
                        <li className="order-5 md:order-none rounded-lg hover:bg-secondary hover:bg-opacity-50 ease-in-out cursor-pointer md:hidden">
                            <SmoothScrollLink href="projects">
                                <span className="font-roboto-mono font-bold text-accent">03.</span> {currentTranslations.navigation.projects}
                            </SmoothScrollLink>
                        </li>
                        <li className="order-2 md:order-none rounded-lg hover:bg-secondary hover:bg-opacity-50 ease-in-out cursor-pointer md:hidden">
                            <SmoothScrollLink href="contact">
                                <span className="font-roboto-mono font-bold text-accent">04.</span> {currentTranslations.navigation.contact}
                            </SmoothScrollLink>
                        </li>
                        <li className="order-4 md:order-none rounded-lg hover:bg-secondary hover:bg-opacity-50 ease-in-out">
                            <button className=" flex items-center py-2 px-5" onClick={handleLanguageSwitch}><FaLanguage className="text-xl text-accent"  />
                                <span className="font-roboto-mono font-bold text-accent">.</span> {currentTranslations.navigation.language}
                            </button>
                        </li>
                        <li className="order-6 md:order-none rounded-lg hover:bg-secondary hover:bg-opacity-50 ease-in-out whitespace-nowrap">
                            <button className="flex items-center py-2 px-5" onClick={handleDarkModeSwitch}><BsSunFill className="text-xl text-accent"  />
                                <span className="font-roboto-mono font-bold text-accent">.</span> {darkMode ? currentTranslations.navigation.lightMode : currentTranslations.navigation.darkMode}
                            </button>
                        </li>
                    </ul>
                </nav>
            </motion.div>
    )
}