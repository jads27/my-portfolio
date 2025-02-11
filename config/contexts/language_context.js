import React, { createContext, useContext, useState, useEffect } from "react"
import translations from "../translations"

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") || "en"
      setLanguage(savedLanguage)
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => {
      const newLanguage = prevLanguage === "en" ? "fr" : "en"
      if (typeof window !== "undefined") {
        localStorage.setItem("language", newLanguage)
      }
      return newLanguage
    })
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  return useContext(LanguageContext)
}