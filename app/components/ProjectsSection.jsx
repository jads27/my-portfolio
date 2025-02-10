import { useLanguage } from '../../config/contexts/language_context';

import Project from "./Project"
import Modal from "./Modal"
import { AnimatePresence } from "framer-motion";
import { useState } from "react"

export default function ProjectsSection() {
    const  { language, translations } = useLanguage()
    const currentTranslations = translations[language]

    const [showModal, setShowModal] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null)


    const handleOpen = (project) => {
        setSelectedProject(project)
        setShowModal(!showModal)
        document.body.style.overflow = "hidden"
    }

    const handleClose = () => {
        setShowModal(false)
        setSelectedProject(null)
        document.body.style.overflow = "auto"
    }

    return (
        <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
            <span className="self-start text-xl font-roboto-mono font-bold text-primary">03.</span>
            <div className="flex items-center flex-col md:mx-28">
                <h1 className="mb-11 inset-0 text-4xl font-semibold font-recursive">{currentTranslations.projects.header}</h1>
                <Project image="bg-accommodation" name="Kasa" header={currentTranslations.projects.modal.kasaWebsite.header} onClick={() => handleOpen({ 
                    imagePreview: "/kasa-page.svg", 
                    alt: "Preview of the Kasa website", 
                    title: currentTranslations.projects.modal.kasaWebsite.title, 
                    details: `<span>${currentTranslations.projects.modal.kasaWebsite.description.part1}</span><span>${currentTranslations.projects.modal.kasaWebsite.description.part2}</span>`, 
                    stack: `<div class="flex items-center gap-2 px-3 py-1 border-2 border-secondary rounded-3xl"><Image src="/react.svg" alt="Logo React" width="32" height="32" priority /><span>React</span></div><div class="flex items-center gap-2 px-3 py-1 border-2 border-secondary rounded-3xl"><Image src="/sass.svg" alt="Logo SASS" width="32" height="32" priority /><span>SASS</span></div>`,
                    redirectButton: `<a class="flex justify-center items-center w-1/2 text-secondary py-3 font-bold rounded border-2 border-secondary md:py-6" href="https://github.com/jads27/kasa" target="_blank" rel="noopener noreferrer">${currentTranslations.projects.modal.viewCode}</a><a class="flex justify-center items-center w-1/2 text-[#F5F5F5] bg-primary py-3 rounded md:py-6" href="https://kasa-five-mocha.vercel.app/" target="_blank" rel="noopener noreferrer">${currentTranslations.projects.modal.visitWebsite}</a>`
                    })} />
                <Project image="bg-annie-spratt" name="Booki" header={currentTranslations.projects.modal.bookiWebsite.header} onClick={() => handleOpen({ 
                    imagePreview: "/booki-page.svg", 
                    alt: "Preview of the Booki website", 
                    title: currentTranslations.projects.modal.bookiWebsite.title, 
                    details: `<span>${currentTranslations.projects.modal.bookiWebsite.description.part1}</span><span>${currentTranslations.projects.modal.bookiWebsite.description.part2}</span><span>${currentTranslations.projects.modal.bookiWebsite.description.part3}</span>`, 
                    stack: `<div class="flex items-center gap-2 px-3 py-1 border-2 border-secondary rounded-3xl"><Image src="/html.svg" alt="Logo HTML" width="32" height="32" priority /><span>HTML</span></div><div class="flex items-center gap-2 px-3 py-1 border-2 border-secondary rounded-3xl"><Image src="/css.svg" alt="Logo CSS" width="32" height="32" priority /><span>CSS</span></div>`,
                    redirectButton: `<a class="flex justify-center items-center w-1/2 text-secondary py-3 font-bold rounded border-2 border-secondary md:py-6" href="https://github.com/jads27/booki" target="_blank" rel="noopener noreferrer">${currentTranslations.projects.modal.viewCode}</a><a class="flex justify-center items-center w-1/2 text-[#F5F5F5] bg-primary py-3 rounded md:py-6" href="https://jads27.github.io/booki/" target="_blank" rel="noopener noreferrer">${currentTranslations.projects.modal.visitWebsite}</a>`
                    })} />
                <Project image="bg-bar-lullaby-paris" name="Sophie Bluel" header={currentTranslations.projects.modal.sophieBluelPortfolioWebsite.header} onClick={() => handleOpen({ 
                    imagePreview: "/sophie-bluel-portfolio-page.svg", 
                    alt: "Preview of the Sopie Bluel Portfolio Website", 
                    title: currentTranslations.projects.modal.sophieBluelPortfolioWebsite.title, 
                    details: `<span>${currentTranslations.projects.modal.sophieBluelPortfolioWebsite.description.part1}</span><span>${currentTranslations.projects.modal.sophieBluelPortfolioWebsite.description.part2}</span>`, 
                    stack: `<div class="flex items-center gap-2 px-3 py-1 border-2 border-secondary rounded-3xl"><Image src="/javascript.svg" alt="Logo JavaScript" width="32" height="32" priority /><span>JavaScript</span></div><div class="flex items-center gap-2 px-3 py-1 border-2 border-secondary rounded-3xl"><Image src="/html.svg" alt="Logo HTML" width="32" height="32" priority /><span>HTML</span></div><div class="flex items-center gap-2 px-3 py-1 border-2 border-secondary rounded-3xl"><Image src="/CSS.svg" alt="Logo CSS" width="32" height="32" priority /><span>CSS</span></div>`,
                    redirectButton: `<a class="flex justify-center items-center w-1/2  text-secondary py-3 font-bold rounded border-2 border-secondary md:py-6" href="https://github.com/jads27/sophie-bluel-portfolio" target="_blank" rel="noopener noreferrer">${currentTranslations.projects.modal.viewCode}</a>`
                    })} />
                <AnimatePresence>
                    {showModal && <Modal isVisible={showModal} onClose={handleClose} {...selectedProject} />}
                </AnimatePresence>
            </div>
        </section>
    )
}