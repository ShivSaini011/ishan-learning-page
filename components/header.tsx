"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-context"
import "@/styles/header.css"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t, language, setLanguage, theme, setTheme } = useLanguage()

  const handleNavMouseLeave = () => {
    if (window.innerWidth <= 768) {
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link href="/">
          <div className="header-logo">
            {/* <div className="logo-icon"><Image src="/logohead.png" alt="Logo" width={60} height={60} /></div>
            <div className="logo-text"><Image src="/logotxt.png" alt="Logo" width={60} height={60}></Image></div> */}
             <div className="logo-text"><Image className="imglogo" src="/logonev.jpg" alt="Logo" width={130} height={100}></Image></div>
          </div>
        </Link>

        <nav className={`header-nav ${mobileMenuOpen ? "active" : ""}`} onMouseLeave={handleNavMouseLeave}>
          <button className="nav-close" onClick={() => setMobileMenuOpen(false)}>✕</button>
          <a href="/">{t("home")}</a>
          <a href="/aboutus">{t("about")}</a>
          <a href="/#classes">{t("classes")}</a>
          <a href="/#guidance">{t("guidance")}</a>
          <a href="/teachers">{t("KnowYourTeacher")}</a>
        </nav>

        {/* <button className="header-cta">🔗 {t("continueGoogle")}</button> */}

        <div className="header-controls">
          {/* Language Toggle */}
          <div className="language-toggle">
            <button
              className={`lang-btn ${language === "en" ? "active" : ""}`}
              onClick={() => setLanguage("en")}
              title="English"
            >
              EN
            </button>
            <button
              className={`lang-btn ${language === "hi" ? "active" : ""}`}
              onClick={() => setLanguage("hi")}
              title="हिंदी"
            >
              HI
            </button>
          </div>

          {/* Dark/Light Mode Toggle */}
          <div className="theme-toggle">
            <button
              className={`theme-btn ${theme === "light" ? "active" : ""}`}
              onClick={() => setTheme("light")}
              title="Light Mode"
            >
              ☀️
            </button>
            <button
              className={`theme-btn ${theme === "dark" ? "active" : ""}`}
              onClick={() => setTheme("dark")}
              title="Dark Mode"
            >
              🌙
            </button>
          </div>
        </div>

        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          ☰
        </button>
      </div>
    </header>
  )
}
