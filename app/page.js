"use client"

import { LanguageProvider } from "../config/contexts/language_context"
import { DarkModeProvider } from "../config/contexts/darkmode_context"

import Header from "./components/Header"
import HomeSection from "./components/HomeSection"
import SkillsSection from "./components/SkillsSection"
import ProjectsSection from "./components/ProjectsSection"
import ContactSection from "./components/ContactSection"
import Footer from './components/Footer'

export default function Home() {
  return (
    <LanguageProvider>
      <DarkModeProvider>
          <Header />
          <main>
            <div className="flex flex-col">
              <HomeSection />
              <SkillsSection />
              <ProjectsSection />
              <ContactSection />
            </div>
          </main>
          <Footer />
      </DarkModeProvider>
    </LanguageProvider>
  )
}
