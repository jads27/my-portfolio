import React, { createContext, useContext, useState, useEffect } from "react";

const DarkModeContext = createContext()

export const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }
    
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark")
        } else {
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