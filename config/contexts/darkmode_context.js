import React, { createContext, useContext, useState, useEffect } from "react";

const DarkModeContext = createContext()

export const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => {
        return document.documentElement.classList.contains("dark") || localStorage.getItem("darkMode") === "true"
    })

    const toggleDarkMode = () => {
        const newMode = !darkMode
        setDarkMode(newMode)
        localStorage.setItem("darkMode", newMode)
    }
    
    useEffect(() => {
        if (darkMode && !document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.add("dark")
        } else if (!darkMode && document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark")
        }
    }, [darkMode])

    return (
       <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
       </DarkModeContext.Provider>
    )
}

export const useDarkMode = () => {
    return useContext(DarkModeContext)
}