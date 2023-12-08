"use client"

import Header from "./components/Header"
import HomeSection from "./components/HomeSection"
import SkillsSection from "./components/SkillsSection"
import ProjectsSection from "./components/ProjectsSection"
import ContactSection from "./components/ContactSection"
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
    <Header />
    <main>
      <div className="flex flex-col gap-y-32">
        <HomeSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
    <Footer />
    </>
  )
}
