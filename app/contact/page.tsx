"use client"

import "@/styles/contact.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HomeButton from "@/components/home-button"
import { useLanguage } from "@/components/language-context"

export default function Contact() {
  const { t } = useLanguage()
  
  return (
    <div className="contact">
    <Header />
    <div className="contact-container">
      <div className="contact-header">
        <h1>{t("getInTouch")}</h1>
        <h2>{t("withUs")}</h2>
        <p>{t("weAreHere")}</p>
      </div>

      <div className="contact-content">
        <div className="contact-card">
          <div className="card-icon">📚</div>
          <h3>{t("academicQueries")}</h3>
          <p>{t("queriesFor")}</p>
          
          <div className="contact-actions">
            <a href="/ask-query" className="contact-button query-button" target="_blank">
              <span className="button-icon" >✉️</span>
              {t("askQuery")}
            </a>
            <a href="/request-session" className="contact-button session-button" target="_blank">
              <span className="button-icon">📅</span>
              {t("requestSession")}
            </a>
          </div>

          <div className="contact-note">
            <p>{t("quickResponse")}</p>
            <p>{t("personalGuidance")}</p>
            <p>{t("supportAllClasses")}</p>
          </div>
        </div>

        <div className="contact-card">
          <div className="card-icon">✉️</div>
          <h3>{t("emailUs")}</h3>
          <p>{t("reachOutInquiries")}</p>
          
          <div className="email-section">
            <a href="mailto:info@ishanlearning.com" className="email-link">
              info@ishanlearning.com
            </a>
          </div>

          <div className="contact-note">
            <p>{t("responseTime")}</p>
            <p>{t("professional")}</p>
            <p>{t("allQuestions")}</p>
          </div>
        </div>
      </div>

      <div className="contact-footer">
        <div className="footer-note">
          <p className="note-icon">⚠️</p>
          <p>{t("parentalAwareness")}</p>
        </div>
      </div>
    </div>
    <HomeButton />
    <Footer />
    </div>
  )
}
