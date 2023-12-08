import Project from "./Project"
import Modal from "./Modal"
import { useState } from "react"

export default function ProjectsSection() {
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
        <section id="projects" className="mx-auto max-w-6xl px-4">
            <span className="self-start text-xl font-roboto-mono font-bold text-[#2854C5]">03.</span>
          <div className="flex items-center flex-col gap-11 md:mx-28">
            <h1 className="mb-11 inset-0 text-4xl font-semibold font-recursive">Projects</h1>
            <Project image="bg-accommodation" title="Kasa" onClick={() => handleOpen({ 
                imagePreview: "/kasa.svg", 
                alt: "Preview of the Kasa website", 
                title: "Front-end of the Kasa website", 
                details: `<span>Front-end of the Kasa website.</span><span>Front-end development for an accommodation rental website using React.</span><span>Creation of React components and state management.</span>`, 
                stack: `<div class="flex items-center gap-2 px-3 py-1 border-2 border-[#8AC4CA] rounded-3xl"><Image src="/react.svg" alt="Logo React" width="32" height="32" priority /><span>React</span></div><div class="flex items-center gap-2 px-3 py-1 border-2 border-[#8AC4CA] rounded-3xl"><Image src="/sass.svg" alt="Logo SASS" width="32" height="32" priority /><span>SASS</span></div>`,
                sourceCodeLink: "https://github.com/jads27/kasa",
                websiteLink: ""
                })} />
            <Project image="bg-annie-spratt" title="Booki" onClick={() => handleOpen({ 
                imagePreview: "/booki-page.svg", 
                alt: "Preview of the Booki website", 
                title: "Booki", 
                details: ``, 
                stack: `<div class="flex items-center gap-2 px-3 py-1 border-2 border-[#8AC4CA] rounded-3xl"><Image src="/html.svg" alt="Logo HTML" width="32" height="32" priority /><span>HTML</span></div><div class="flex items-center gap-2 px-3 py-1 border-2 border-[#8AC4CA] rounded-3xl"><Image src="/css.svg" alt="Logo CSS" width="32" height="32" priority /><span>CSS</span></div>`,
                sourceCodeLink: "https://github.com/jads27/booki",
                websiteLink: ""
                })} />
            <Project image="bg-bar-lullaby-paris" title="Sophie Bluel" onClick={() => handleOpen({ 
                imagePreview: "", 
                alt: "", 
                title: "", 
                details: ``, 
                stack: `<div class="flex items-center gap-2 px-3 py-1 border-2 border-[#8AC4CA] rounded-3xl"><Image src="/javascript.svg" alt="Logo JavaScript" width="32" height="32" priority /><span>JavaScript</span></div><div class="flex items-center gap-2 px-3 py-1 border-2 border-[#8AC4CA] rounded-3xl"><Image src="/html.svg" alt="Logo HTML" width="32" height="32" priority /><span>HTML</span></div><div class="flex items-center gap-2 px-3 py-1 border-2 border-[#8AC4CA] rounded-3xl"><Image src="/CSS.svg" alt="Logo CSS" width="32" height="32" priority /><span>CSS</span></div>`,
                sourceCodeLink: "https://github.com/jads27/sophie-bluel-portfolio",
                websiteLink: ""
                })} />
            <Modal isVisible={showModal} onClose={handleClose} {...selectedProject} /> 
          </div>
        </section>
    )
}