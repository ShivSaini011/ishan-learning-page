"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import HomeButton from "@/components/home-button"
import Link from "next/link"
import { useLanguage } from "@/components/language-context"
import "@/styles/careers.css"

export default function Careers() {
  const { t } = useLanguage()
  
  return (
    <div className="app">
      <Header />

      <main className="careers-container">
        <section className="careers-hero">
          <h1>{t("careerAwareness")}</h1>
          <p>{t("careerThinkingClearly")}</p>
        </section>

        {/* Opening Section */}
        <section className="careers-section">
          <div className="section-content">
            <p className="intro-text">
              {t("careerNotCertainty")}
            </p>
            <p className="intro-text">
              {t("careerSupportiveProcess")}
            </p>
          </div>
        </section>

        {/* Why Difficult */}
        <section className="careers-section highlight-section">
          <div className="section-content">
            <h2>{t("whyCareerDifficult")}</h2>
            <p>
              {t("careerAnxiety")}
            </p>
            <p>
              {t("careerEarlyPressure")}
            </p>
            <p className="emphasis">
              {t("careerInterruptPressure")}
            </p>
          </div>
        </section>

        {/* Career as Process */}
        <section className="careers-section">
          <div className="section-content">
            <h2>{t("careerDevelopingProcess")}</h2>
            <p>
              {t("careerRarelyFixed")}
            </p>
            <p>
              {t("careerTryingDifferent")}
            </p>
            <p className="emphasis">
              {t("careerAcceptUncertainty")}
            </p>
          </div>
        </section>

        {/* Class 10 */}
        <section className="careers-section highlight-section">
          <div className="section-content">
            <h2>{t("careerAfterClass10")}</h2>
            <p>
              {t("careerClass10Explanation")}
            </p>
            <p>
              {t("careerClass10Focus")}
            </p>
          </div>
        </section>

        {/* Class 12 */}
        <section className="careers-section">
          <div className="section-content">
            <h2>{t("careerAfterClass12")}</h2>
            <p>
              {t("careerClass12Explanation")}
            </p>
            <p>
              {t("careerClass12Pressure")}
            </p>
          </div>
        </section>

        {/* Self Understanding */}
        <section className="careers-section highlight-section">
          <div className="section-content">
            <h2>{t("careerUnderstandYourself")}</h2>
            <p className="emphasis">
              {t("careerClarityBegins")}
            </p>
            <p>
              {t("careerLearningStyles")}
            </p>
            <p>
              {t("careerNotPerfect")}
            </p>
          </div>
        </section>

        {/* How Interests Develop */}
        <section className="careers-section">
          <div className="section-content">
            <h2>{t("careerHowInterestsDevelop")}</h2>
            <p>
              {t("careerBelieveInterest")}
            </p>
            <p>
              {t("careerInterestDevelops")}
            </p>
            <p className="emphasis">
              {t("careerNoPassion")}
            </p>
          </div>
        </section>

        {/* Pressure and Reality */}
        <section className="careers-section highlight-section">
          <div className="section-content">
            <h2>{t("careerPressureMarks")}</h2>
            <p>
              {t("careerMarksImportant")}
            </p>
            <p>
              {t("careerClarityPanic")}
            </p>
          </div>
        </section>

        {/* What Career Path Means */}
        <section className="careers-section">
          <div className="section-content">
            <h2>{t("careerPathMeans")}</h2>
            <p>
              {t("careerPathNotFixed")}
            </p>
            <p>
              {t("careerPathChanges")}
            </p>
            <p className="emphasis">
              {t("careerNotLocked")}
            </p>
          </div>
        </section>

        {/* Timing and Readiness */}
        <section className="careers-section highlight-section">
          <div className="section-content">
            <h2>{t("careerTiming")}</h2>
            <p>
              {t("careerClarityDifferent")}
            </p>
            <p>
              {t("careerExposure")}
            </p>
            <p className="emphasis">
              {t("careerAllowedTime")}
            </p>
          </div>
        </section>

        {/* Notes */}
        <section className="careers-notes">
          <h2>{t("careerVoices")}</h2>
          <div className="notes-grid">
            <div className="note-card note-card-students">
              <div className="note-icon">📚</div>
              <h3>{t("careerNoteStudents")}</h3>
              <p>
                {t("careerNoteStudentsText")}
              </p>
            </div>

            <div className="note-card note-card-parents">
              <div className="note-icon">👨‍👩‍👧</div>
              <h3>{t("careerNoteParents")}</h3>
              <p>
                {t("careerNoteParentsText")}
              </p>
            </div>

            <div className="note-card note-card-teachers">
              <div className="note-icon">🏫</div>
              <h3>{t("careerNoteTeachers")}</h3>
              <p>
                {t("careerNoteTeachersText")}
              </p>
            </div>
          </div>
        </section>

        {/* Psychology Perspective */}
        <section className="careers-section highlight-section">
          <div className="section-content">
            <h2>{t("careerPsychologyPerspective")}</h2>
            <p>
              {t("careerPsychologyText")}
            </p>
          </div>
        </section>

        {/* Boundary */}
        <section className="careers-section">
          <div className="section-content">
            <div className="boundary-box">
              <h3>⚠️ {t("careerBoundary")}</h3>
              <p>
                {t("careerBoundaryText")}
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="careers-closing">
          <div className="section-content">
            <h2>{t("careerClosing")}</h2>
            <p className="closing-emphasis">
              {t("careerClosingEmphasis")}
            </p>
            <p className="closing-text">
              {t("careerClosingText1")}
            </p>
            <p className="closing-text">
              {t("careerClosingText2")}
            </p>
          </div>
        </section>
<br />
        {/* CTA */}
        <section className="careers-cta">
          <h2>{t("careerCTA")}</h2>
          <p>{t("careerCTAText")}</p>
          <Link href="/#classes" className="cta-button">
            {t("careerCTAButton")}
          </Link>
        </section>
      </main>

<br />
      <HomeButton />
      <Footer />
    </div>
  )
}
