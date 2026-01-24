"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import HomeButton from "@/components/home-button"
import { useLanguage } from "@/components/language-context"
import "@/styles/about.css"

export default function AboutUs() {
  const { t } = useLanguage()
  
  return (
    <div className="app">
      <Header />
      
      <main className="about-container">
        <section className="about-hero">
          <h1>{t("aboutPageTitle")}</h1>
          <p>{t("clarityConfidenceSupport")}</p>
        </section>

        {/* Ishan Learning */}
        <section className="about-section">
          <div className="section-content">
            <h2>{t("ishanLearning")}</h2>
            <p>
              {t("ishanDesc1")}
            </p>
            <p>
              {t("ishanDesc2")}
            </p>
            <p>
              <strong>{t("ishanDesc3")}</strong>
            </p>
          </div>
        </section>

        {/* Core Belief */}
        <section className="about-section highlight-section">
          <div className="section-content">
            <h2>{t("coreBeliefs")}</h2>
            <div className="belief-box">
              <h3>{t("educationRight")}</h3>
              <p>{t("everyStudentDeserves")}</p>
              <ul className="belief-list">
                <li>{t("clearExplanations")}</li>
                <li>{t("patientGuidance")}</li>
                <li>{t("supportiveEnvironment")}</li>
              </ul>
              <p className="belief-note">
                {t("pressureVsFear")}
              </p>
            </div>
          </div>
        </section>

        {/* Why Created */}
        <section className="about-section">
          <div className="section-content">
            <h2>{t("whyCreated")}</h2>
            <p>
              {t("whyCreatedIntro")}
            </p>
            <p><strong>{t("manyStudentsCapable")}</strong></p>
            <ul className="reason-list">
              <li>{t("lessonsMoveFast")}</li>
              <li>{t("doubtsUnanswered")}</li>
              <li>{t("examsMoreImportant")}</li>
              <li>{t("pressureIncreases")}</li>
            </ul>
            <p>
              {t("createdAsSupport")}
            </p>
          </div>
        </section>

        {/* Learning & Mental Well-Being */}
        <section className="about-section highlight-section">
          <div className="section-content">
            <h2>{t("learningWellbeing")}</h2>
            <p>
              {t("meaningfulLearning")}
            </p>
            <div className="wellbeing-grid">
              <div className="wellbeing-item">
                <h4>{t("noLabels")}</h4>
                <p>{t("noLabelsDesc")}</p>
              </div>
              <div className="wellbeing-item">
                <h4>{t("respectedPace")}</h4>
                <p>{t("respectedPaceDesc")}</p>
              </div>
              <div className="wellbeing-item">
                <h4>{t("fearFree")}</h4>
                <p>{t("fearFreeDesc")}</p>
              </div>
              <div className="wellbeing-item">
                <h4>{t("clarityFirst")}</h4>
                <p>{t("clarityFirstDesc")}</p>
              </div>
            </div>
            <p className="note">
              <em>{t("clinicalNote")}</em>
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="about-section">
          <div className="vision-mission-grid">
            <div className="vision-card">
              <h3>{t("ourVision")}</h3>
              <p>{t("visionDesc")}</p>
              <ul>
                <li>{t("visionPoint1")}</li>
                <li>{t("visionPoint2")}</li>
                <li>{t("visionPoint3")}</li>
                <li>{t("visionPoint4")}</li>
              </ul>
            </div>
            <div className="mission-card">
              <h3>{t("ourMission")}</h3>
              <p>{t("missionDesc")}</p>
              <ul>
                <li>{t("missionPoint1")}</li>
                <li>{t("missionPoint2")}</li>
                <li>{t("missionPoint3")}</li>
                <li>{t("missionPoint4")}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What Makes Different */}
        <section className="about-section">
          <div className="section-content">
            <h2>{t("whatMakesDifferent")}</h2>
            <div className="difference-grid">
              <div className="difference-card">
                <h4>{t("schoolSupport")}</h4>
                <p>{t("schoolSupportDesc")}</p>
              </div>
              <div className="difference-card">
                <h4>{t("conceptualClarity")}</h4>
                <p>{t("conceptualClarityDesc")}</p>
              </div>
              <div className="difference-card">
                <h4>{t("psychologyInformed")}</h4>
                <p>{t("psychologyInformedDesc")}</p>
              </div>
              <div className="difference-card">
                <h4>{t("studentCentred")}</h4>
                <p>{t("studentCentredDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="about-section highlight-section">
          <div className="section-content">
            <h2>{t("whoServe")}</h2>
            <p>{t("whoServeIntro")}</p>
            <ul className="serve-list">
              <li>{t("servePoint1")}</li>
              <li>{t("servePoint2")}</li>
              <li>{t("servePoint3")}</li>
              <li>{t("servePoint4")}</li>
            </ul>
          </div>
        </section>

        {/* Founder */}
        <section className="about-section founder-section">
          <div className="section-content">
            <h2>{t("founder")}</h2>
            <div className="founder-card">
              <h3>{t("founderName")}</h3>
              <p className="founder-title">{t("founderTitle")}</p>
              <p>
                {t("founderDesc1")}
              </p>
              <p>
                {t("founderDesc2")}
              </p>
              <p>
                {t("founderDesc3")}
              </p>
              <div className="founder-quote">
                <blockquote>
                  "{t("founderQuote")}"
                </blockquote>
                <p>— {t("founderName")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Role & Responsibility */}
        <section className="about-section highlight-section">
          <div className="section-content">
            <h2>{t("roleResponsibility")}</h2>
            <div className="responsibility-box">
              <p><strong>{t("academicPlatform")}</strong></p>
              <p>{t("doesNotReplace")}</p>
              <p>
                {t("roleSupport")}
              </p>
            </div>
          </div>
        </section>

        {/* Join Journey */}
        <section className="about-section cta-section">
          <div className="section-content">
            <h2>{t("joinJourney")}</h2>
            <p>
              {t("schoolsFoundation")}
            </p>
            <p>
              {t("joinInvite")}
            </p>
            <div className="journey-tagline">
              <p><strong>{t("learnClearly")}</strong></p>
              <p><strong>{t("strengthenFoundations")}</strong></p>
              <p><strong>{t("growConfidence")}</strong></p>
            </div>
          </div>
        </section>
      </main>

      <HomeButton />
      <Footer />
    </div>
  )
}
