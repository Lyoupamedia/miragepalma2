import { createContext, useContext, useState, ReactNode } from "react";
import { Language, translations } from "./translations";

type TranslationValue = string | { [key: string]: TranslationValue };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("lang") as Language;
    return saved && ["es", "en", "fr"].includes(saved) ? saved : "es";
  });

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let result: any = translations;
    for (const k of keys) {
      result = result?.[k];
    }
    if (result && typeof result === "object" && language in result) {
      return result[language] as string;
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
