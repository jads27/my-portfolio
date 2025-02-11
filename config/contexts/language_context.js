import React, { createContext, useContext, useState } from 'react';
import translations from "../translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en"
  });

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "fr" : "en"
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};

