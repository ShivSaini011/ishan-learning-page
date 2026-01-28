"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import HomeButton from "@/components/home-button"
import { useLanguage } from "@/components/language-context"
import "@/styles/exam-stress.css"

export default function ExamStress() {
  const { t } = useLanguage()

  return (
    <>
      <Header />
      <HomeButton />

      <main className="exam-stress-page">
        {/* Hero Section */}
        <section className="exam-stress-hero">
          <div className="hero-content">
            <h1>{t("examStressPageTitle")}</h1>
            <p className="hero-subtitle">
              {t("notWeakness")}
            </p>
            <p className="hero-description">
              {t("notEliminatingCompletely")}
            </p>
          </div>
        </section>

        {/* Understanding Exam Stress */}
        <section className="exam-stress-section">
          <h2>{t("whyExamStressHappens")}</h2>
          <p>
            {t("examsCarryMore")}
          </p>
          <p>
            {t("fearOfFailure")}
          </p>
          <p>
            {t("pageExistsHelp")}
          </p>
        </section>

        <section className="exam-stress-section">
          <h2>{t("understandingExamStress")}</h2>
          <p>
            {t("someLevelNormal")}
          </p>
          <p>
            {t("problemsWhenStress")}
          </p>
          <p>
            {t("notAboutLack")}
          </p>
        </section>

        <section className="exam-stress-section">
          <h2>{t("whenStudyingHeavy")}</h2>
          <p>
            {t("studentsOften")}
          </p>
          <p>
            {t("continuousPressure")}
          </p>
          <p>
            {t("understandingHelps")}
          </p>
        </section>

        <section className="exam-stress-section">
          <h2>{t("beforeExam")}</h2>
          <p>
            {t("asExamsApproach")}
          </p>
          <p>
            {t("atThisStage")}
          </p>
          <p>
            {t("stressReduces")}
          </p>
        </section>

        <section className="exam-stress-section">
          <h2>{t("duringExam")}</h2>
          <p>
            {t("manyWorry")}
          </p>
          <p>
            {t("whenMindOverwhelmed")}
          </p>
          <p>
            {t("examsTestUnderstanding")}
          </p>
        </section>

        <section className="exam-stress-section">
          <h2>{t("afterExam")}</h2>
          <p>
            {t("stressDoesNot")}
          </p>
          <p>
            {t("onceExamOver")}
          </p>
          <p>
            {t("recoveryTime")}
          </p>
        </section>

        {/* Notes for Different Groups */}
        <section className="exam-stress-notes">
          <h2>{t("voicesOfSupport")}</h2>
          <div className="notes-container">
            <div className="note-card note-card-students">
              <div className="note-icon">🎓</div>
              <h3>{t("noteForStudents")}</h3>
              <p>
                {t("feelingStressed")}
              </p>
              <p>
                {t("allowedFeel")}
              </p>
            </div>

            <div className="note-card note-card-parents">
              <div className="note-icon">👨‍👩‍👧‍👦</div>
              <h3>{t("noteForParents")}</h3>
              <p>
                {t("studentsOftenAbsorb")}
              </p>
              <p>
                {t("listeningWithout")}
              </p>
            </div>

            <div className="note-card note-card-teachers">
              <div className="note-icon">👨‍🏫</div>
              <h3>{t("noteForTeachers")}</h3>
              <p>
                {t("teachersInfluence")}
              </p>
              <p>
                {t("whenClassrooms")}
              </p>
            </div>
          </div>
        </section>

        {/* Psychology Perspective */}
        <section className="exam-stress-section highlight-section">
          <h2>{t("psychologyPerspective")}</h2>
          <p>
            {t("psychologyShows")}
          </p>
          <p>
            {t("calmnessSup")}
          </p>
          {/*<p>
         {t("examStressSupport")}
          </p>*/}
        </section>

        {/* Boundary */}
        <section className="exam-stress-section boundary-box">
          <h3>{t("importantBoundary")}</h3>
          <p>
            {t("ishanDoesNot")}
          </p>
          <p>
            {t("studentExperiencing")}
          </p>
        </section>

        {/* Closing Reflection */}
        <section className="exam-stress-section highlight-section">
          <h2>{t("gentleClosing")}</h2>
          <p>
            {t("examsAreImportant")}
          </p>
          <p>
            {t("takingCare")}
          </p>
        </section>

        {/* Practical Techniques */}
        <section className="exam-stress-techniques">
          <h2>{t("practicalTechniques")}</h2>
          <p className="intro-text">
            {t("examStressUsually")}
          </p>
          <p className="intro-text">
            {t("techniquesNot")}
          </p>

          <ol className="techniques-grid">
            <li className="technique-card">
              <h3>{t("strengthen")}</h3>
              <p>
                {t("oneOfBiggest")}
              </p>
              <p>
                {t("insteadBegin")}
              </p>
              <p>
                {t("whenMindRec")}
              </p>
            </li>

            <li className="technique-card">
              <h3>{t("breakSyllabus")}</h3>
              <p>
                {t("lookingAtEntire")}
              </p>
              <p>
                {t("duringEachStudy")}
              </p>
              <p>
                {t("mindCopes")}
              </p>
            </li>

            <li className="technique-card">
              <h3>{t("useActiveRecall")}</h3>
              <p>
                {t("readingSame")}
              </p>
              <p>
                {t("afterStudying")}
              </p>
              <p>
                {t("confidenceGrows")}
              </p>
            </li>

            <li className="technique-card">
              <h3>{t("practiceWithTime")}</h3>
              <p>
                {t("timedPractice")}
              </p>
              <p>
                {t("occasionallyPractise")}
              </p>
              <p>
                {t("whenBrain")}
              </p>
            </li>

            <li className="technique-card">
              <h3>{t("createSimple")}</h3>
              <p>
                {t("inFinalDays")}
              </p>
              <p>
                {t("simpleRevision")}
              </p>
              <p>
                {t("revisionDoesNot")}
              </p>
            </li>

            <li className="technique-card">
              <h3>{t("calmBody")}</h3>
              <p>
                {t("stressNot")}
              </p>
              <p>
                {t("betweenStudy")}
              </p>
              <p>
                {t("slowBreathing")}
              </p>
            </li>

            <li className="technique-card">
              <h3>{t("stopStudying")}</h3>
              <p>
                {t("studyingExhausted")}
              </p>
              <p>
                {t("whenMentalFatigue")}
              </p>
              <p>
                {t("takingBreaks")}
              </p>
            </li>

            <li className="technique-card">
              <h3>{t("reduceComparison")}</h3>
              <p>
                {t("comparingPreparation")}
              </p>
              <p>
                {t("seeingSomeone")}
              </p>
              <p>
                {t("duringPhase")}
              </p>
            </li>
          </ol>

          <div className="reminder-box">
            <h3>{t("gentleReminder")}</h3>
            <p>
              {t("feelingStressedNot")}
            </p>
            <p>
              {t("yourGoalNot")}
            </p>
          </div>


          
        </section>

        {/* Exam Day Calm Routine */}
        <section className="exam-stress-routine">
          <h2>{t("examDayCalm")}</h2>
          <p className="intro-text">
            {t("goalOnExam")}
          </p>
          <p className="intro-text">
            {t("routineCov")}
          </p>

          <ol className="routine-cards">
            <li className="routine-card">
              <h3>{t("beforeLeavingFor")}</h3>
              <p>
                {t("onExamMorning")}
              </p>
              <p>
                {t("limitRevisionFamiliar")}
              </p>
              <p>
                {t("beforeLeavingHome")}
              </p>
            </li>

            <li className="routine-card">
              <h3>{t("justBeforeEntering")}</h3>
              <p>
                {t("anxietyOftenPeaks")}
              </p>
              <p>
                {t("avoidLastMinute")}
              </p>
              <p>
                {t("bringYourAttention")}
              </p>
            </li>

            <li className="routine-card">
              <h3>{t("duringExamDay")}</h3>
              <p>
                {t("whenYouReceive")}
              </p>
              <p>
                {t("ifQuestion")}
              </p>
              <p>
                {t("ifYourThoughts")}
              </p>
            </li>

            <li className="routine-card">
              <h3>{t("ifYouFeel")}</h3>
              <p>
                {t("feelingBlank")}
              </p>
              <p>
                {t("ifThisHappens")}
              </p>
            </li>

            <li className="routine-card">
              <h3>{t("afterFinishing")}</h3>
              <p>
                {t("onceExamFinished")}
              </p>
              <p>
                {t("whatIsDone")}
              </p>
              <p>
                {t("allowYourMind")}
              </p>
            </li>

            <li className="routine-card">
              <h3>{t("betweenExams")}</h3>
              <p>
                {t("ifExamsSpread")}
              </p>
              <p>
                {t("carryingStress")}
              </p>
            </li>
          </ol>

          <div className="closing-reminder">
            <p>
              <strong>{t("closingReminder")}</strong> {t("examsWithMeasure")}
            </p>
            <p>
              {t("yourResponsibility")}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
