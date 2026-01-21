"use client"

import { createContext, useState, useContext, type ReactNode, useEffect } from "react"

type Language = "en" | "hi"
type Theme = "light" | "dark"

interface Translations {
  [key: string]: {
    en: string
    hi: string
  }
}

const translations: Translations = {
  home: { en: "Home", hi: "होम" },
  about: { en: "About US", hi: "हमारे बारे में" },
  classes: { en: "Classes", hi: "कक्षाएं" },
  guidance: { en: "Guidance", hi: "मार्गदर्शन" },
  continueGoogle: { en: "Continue with Google", hi: "Google के साथ जारी रखें" },
  classHeading: { en: "Class 6 to 12", hi: "कक्षा 6 से 12" },
  learnSmart: { en: "Learn Smart,", hi: "स्मार्ट सीखें," },
  stayConfident: { en: "Stay Confident", hi: "आत्मविश्वास के साथ रहें" },
  academicExcellence: { en: "Academic Excellence", hi: "शैक्षणिक उत्कृष्टता" },
  holisticGrowth: { en: "Holistic Growth", hi: "समग्र विकास" },
  studentSupport: { en: "Student Support", hi: "छात्र सहायता" },
  exploreClass: { en: "Explore Your Class", hi: "अपनी कक्षा खोजें" },
  whyChoose: { en: "Why Indian Students Choose Ishan", hi: "भारतीय छात्र इशान को क्यों चुनते हैं" },
  guidance_title: { en: "Guidance & Well-Being Corner", hi: "मार्गदर्शन और कल्याण कोने" },
  learnOnGo: { en: "Learn on the Go", hi: "चलते-चलते सीखें" },
  downloadApp: { en: "Download the Ishan App", hi: "इशान ऐप डाउनलोड करें" },
}

interface LanguageContextType {
  language: Language
  theme: Theme
  setLanguage: (lang: Language) => void
  setTheme: (theme: Theme) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [theme, setTheme] = useState<Theme>("light")
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const savedLanguage = (localStorage.getItem("language") as Language) || "en"
    const savedTheme = (localStorage.getItem("theme") as Theme) || "light"

    setLanguage(savedLanguage)
    setTheme(savedTheme)

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark-mode")
    }
    setIsMounted(true)
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark-mode")
    } else {
      document.documentElement.classList.remove("dark-mode")
    }
  }

  const t = (key: string): string => {
    return translations[key]?.[language] || key
  }

  return (
    <LanguageContext.Provider value={{ language, theme, setLanguage: handleSetLanguage, setTheme: handleSetTheme, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
