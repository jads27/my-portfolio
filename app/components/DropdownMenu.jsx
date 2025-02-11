import { useLanguage } from '../../config/contexts/language_context'
import { useDarkMode } from '../../config/contexts/darkmode_context'

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import SmoothScrollLink from './SmoothScrollLink';
import { FaLanguage } from "react-icons/fa6"
import { BsSunFill } from "react-icons/bs"

export default function DropdownMenu({ isOpen, onClose }) {
    const { language, toggleLanguage, translations } = useLanguage()
    const currentTranslations = translations[language]
    const { darkMode, toggleDarkMode } = useDarkMode()

    const [isMedium, setIsMedium] = useState(
        typeof window !== "undefined" ? window.innerWidth >= 768 : false
    )

    const handleLanguageSwitch = () => {
        toggleLanguage()
    }

    const handleDarkModeSwitch = () => {
        toggleDarkMode()
    }

    const dropdownAnimation = isMedium 
      ? {
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0 },
          exit:  { opacity: 0, y: -10 }
        }
      : {
          hidden: { opacity: 0, y: -100 },
          visible: { opacity: 1, y: -65 },
          exit:  { opacity: 0, y: -100 }
        }

    const transition = isMedium
    ? {
        duration: 0.25,
        ease: "easeInOut"
      }  
    : {
        duration: 0.15,
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

    useEffect(() => {
        const handleResize = () => {
            setIsMedium(window.innerWidth > 768)
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
      }, [])

    return (
            <motion.nav 
            className={`${!isOpen ? "hidden" : "flex" } absolute w-full border-b-2 border-primary bg-[#f6fafc] dark:bg-[#16130E] z-40`}
            variants={dropdownAnimation}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            transition={transition}
            exit="exit"
            >
                <div className="flex inset-0 mx-auto max-w-6xl py-3 px-4 md:w-full">
                    <ul className="grid grid-rows-2 grid-cols-2 justify-around w-full md:flex">
                        <li className="order-1 md:order-none rounded-lg hover:bg-secondary hover:bg-opacity-50 ease-in-out cursor-pointer md:hidden">
                            <SmoothScrollLink href="home">
                                <span className="font-roboto-mono font-bold text-primary">01.</span> {currentTranslations.navigation.home}
                            </SmoothScrollLink>
                        </li>
                        <li className="order-3 md:order-none rounded-lg hover:bg-secondary hover:bg-opacity-50 ease-in-out cursor-pointer md:hidden">
                            <SmoothScrollLink href="skills">
                                <span className="font-roboto-mono font-bold text-primary">02.</span> {currentTranslations.navigation.skills}
                            </SmoothScrollLink>
                        </li>
                        <li className="order-5 md:order-none rounded-lg hover:bg-secondary hover:bg-opacity-50 ease-in-out cursor-pointer md:hidden">
                            <SmoothScrollLink href="projects">
                                <span className="font-roboto-mono font-bold text-primary">03.</span> {currentTranslations.navigation.projects}
                            </SmoothScrollLink>
                        </li>
                        <li className="order-2 md:order-none rounded-lg hover:bg-secondary hover:bg-opacity-50 ease-in-out cursor-pointer md:hidden">
                            <SmoothScrollLink href="contact">
                                <span className="font-roboto-mono font-bold text-primary">04.</span> {currentTranslations.navigation.contact}
                            </SmoothScrollLink>
                        </li>
                        <li className="order-4 md:order-none rounded-lg hover:bg-secondary hover:bg-opacity-40 ease-in-out">
                            <button className=" flex items-center py-2 px-5" onClick={handleLanguageSwitch}><FaLanguage className="text-xl text-primary"  />
                                <span className="font-roboto-mono font-bold text-primary">.</span> {currentTranslations.navigation.language}
                            </button>
                        </li>
                        <li className="order-6 md:order-none rounded-lg hover:bg-secondary hover:bg-opacity-40 ease-in-out whitespace-nowrap">
                            <button className="flex items-center py-2 px-5" onClick={handleDarkModeSwitch}><BsSunFill className="text-xl text-primary"  />
                                <span className="font-roboto-mono font-bold text-primary">.</span> {darkMode ? currentTranslations.navigation.lightMode : currentTranslations.navigation.darkMode}
                            </button>
                        </li>
                    </ul>
                </div>
            </motion.nav>
    )
}