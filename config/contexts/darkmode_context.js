import React, { createContext, useContext, useState, useEffect } from "react"

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false)
    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedMode = localStorage.getItem("darkMode") === "true"
            setDarkMode(savedMode)

            if (savedMode) {
                document.documentElement.classList.add("dark")
            } else {
                document.documentElement.classList.remove("dark")
            }
        }
    }, []);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => {
            const newMode = !prevMode
            if (typeof window !== "undefined") {
                localStorage.setItem("darkMode", newMode)
                document.documentElement.classList.toggle("dark", newMode)
            }
            return newMode;
        });
    };

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

export const useDarkMode = () => {
    return useContext(DarkModeContext)
};