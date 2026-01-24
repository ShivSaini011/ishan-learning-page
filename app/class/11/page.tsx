"use client"

import { useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HomeButton from "@/components/home-button"
import { useLanguage } from "@/components/language-context
import "@/styles/class-details.css"

export default function ClassPage({ params }: { params: { classNumber: string } }) {
  const { t } = useLanguage()`n  const [expandedSubject, setExpandedSubject] = useState<string | null>(null)

  const subjectsData = [
    { name: "Physics", options: [{ name: t("syllabus"), icon: "/7.jpg", link: "/resources/class-11/science/syllabus" }, { name: t("watchVideoLesson"), icon: "/9.jpg", link: "/resources/class-11/science/videos" }, { name: t("studyMaterial"), icon: "/8.jpg", link: "/resources/class-11/science/material" }, { name: t("practiceQuestions"), icon: "/10.jpg", link: "/resources/class-11/science/questions" }, { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "/resources/class-11/science/revision" }, { name: t("doubtSession"), icon: "/12.jpg", link: "/resources/class-11/science/doubt-session" }, { name: t("askYourDoubt"), icon: "/11.jpg", link: "/contact?subject=science&class=11" }] },
    { name: "Chemistry", options: [{ name: t("syllabus"), icon: "/7.jpg", link: "/resources/class-11/mathematics/syllabus" }, { name: t("watchVideoLesson"), icon: "/9.jpg", link: "/resources/class-11/mathematics/videos" }, { name: t("studyMaterial"), icon: "/8.jpg", link: "/resources/class-11/mathematics/material" }, { name: t("practiceQuestions"), icon: "/10.jpg", link: "/resources/class-11/mathematics/questions" }, { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "/resources/class-11/mathematics/revision" }, { name: t("doubtSession"), icon: "/12.jpg", link: "/resources/class-11/mathematics/doubt-session" }, { name: t("askYourDoubt"), icon: "/11.jpg", link: "/contact?subject=mathematics&class=11" }] },
    { name: t("mathematics"), options: [{ name: t("syllabus"), icon: "/7.jpg", link: "/resources/class-11/social-science/syllabus" }, { name: t("watchVideoLesson"), icon: "/9.jpg", link: "/resources/class-11/social-science/videos" }, { name: t("studyMaterial"), icon: "/8.jpg", link: "/resources/class-11/social-science/material" }, { name: t("practiceQuestions"), icon: "/10.jpg", link: "/resources/class-11/social-science/questions" }, { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "/resources/class-11/social-science/revision" }, { name: t("doubtSession"), icon: "/12.jpg", link: "/resources/class-11/social-science/doubt-session" }, { name: t("askYourDoubt"), icon: "/11.jpg", link: "/contact?subject=social-science&class=11" }] },
    { name: "Biology", options: [{ name: t("syllabus"), icon: "/7.jpg", link: "/resources/class-11/computer/syllabus" }, { name: t("watchVideoLesson"), icon: "/9.jpg", link: "/resources/class-11/computer/videos" }, { name: t("studyMaterial"), icon: "/8.jpg", link: "/resources/class-11/computer/material" }, { name: t("practiceQuestions"), icon: "/10.jpg", link: "/resources/class-11/computer/questions" }, { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "/resources/class-11/computer/revision" }, { name: t("doubtSession"), icon: "/12.jpg", link: "/resources/class-11/computer/doubt-session" }, { name: t("askYourDoubt"), icon: "/11.jpg", link: "/contact?subject=computer&class=11" }] },
    { name: t("computer"), options: [{ name: t("syllabus"), icon: "/7.jpg", link: "/resources/class-11/drawing/syllabus" }, { name: t("watchVideoLesson"), icon: "/9.jpg", link: "/resources/class-11/drawing/videos" }, { name: t("studyMaterial"), icon: "/8.jpg", link: "/resources/class-11/drawing/material" }, { name: t("practiceQuestions"), icon: "/10.jpg", link: "/resources/class-11/drawing/questions" }, { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "/resources/class-11/drawing/revision" }, { name: t("doubtSession"), icon: "/12.jpg", link: "/resources/class-11/drawing/doubt-session" }, { name: t("askYourDoubt"), icon: "/11.jpg", link: "/contact?subject=drawing&class=11" }] },
    { name: "History", options: [{ name: t("syllabus"), icon: "/7.jpg", link: "/resources/class-11/hindi/syllabus" }, { name: t("watchVideoLesson"), icon: "/9.jpg", link: "/resources/class-11/hindi/videos" }, { name: t("studyMaterial"), icon: "/8.jpg", link: "/resources/class-11/hindi/material" }, { name: t("practiceQuestions"), icon: "/10.jpg", link: "/resources/class-11/hindi/questions" }, { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "/resources/class-11/hindi/revision" }, { name: t("doubtSession"), icon: "/12.jpg", link: "/resources/class-11/hindi/doubt-session" }, { name: t("askYourDoubt"), icon: "/11.jpg", link: "/contact?subject=hindi&class=11" }] },
    { name: "Geography", options: [{ name: t("syllabus"), icon: "/7.jpg", link: "/resources/class-11/english/syllabus" }, { name: t("watchVideoLesson"), icon: "/9.jpg", link: "/resources/class-11/english/videos" }, { name: t("studyMaterial"), icon: "/8.jpg", link: "/resources/class-11/english/material" }, { name: t("practiceQuestions"), icon: "/10.jpg", link: "/resources/class-11/english/questions" }, { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "/resources/class-11/english/revision" }, { name: t("doubtSession"), icon: "/12.jpg", link: "/resources/class-11/english/doubt-session" }, { name: t("askYourDoubt"), icon: "/11.jpg", link: "/contact?subject=english&class=11" }] },
    { name: "Civics", options: [{ name: t("syllabus"), icon: "/7.jpg", link: "/resources/class-11/sanskrit/syllabus" }, { name: t("watchVideoLesson"), icon: "/9.jpg", link: "/resources/class-11/sanskrit/videos" }, { name: t("studyMaterial"), icon: "/8.jpg", link: "/resources/class-11/sanskrit/material" }, { name: t("practiceQuestions"), icon: "/10.jpg", link: "/resources/class-11/sanskrit/questions" }, { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "/resources/class-11/sanskrit/revision" }, { name: t("doubtSession"), icon: "/12.jpg", link: "/resources/class-11/sanskrit/doubt-session" }, { name: t("askYourDoubt"), icon: "/11.jpg", link: "/contact?subject=sanskrit&class=11" }] },
    { name: "Political Science", options: [{ name: t("syllabus"), icon: "/7.jpg", link: "/resources/class-11/science/syllabus" }, { name: t("watchVideoLesson"), icon: "/9.jpg", link: "/resources/class-11/science/videos" }, { name: t("studyMaterial"), icon: "/8.jpg", link: "/resources/class-11/science/material" }, { name: t("practiceQuestions"), icon: "/10.jpg", link: "/resources/class-11/science/questions" }, { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "/resources/class-11/science/revision" }, { name: t("doubtSession"), icon: "/12.jpg", link: "/resources/class-11/science/doubt-session" }, { name: t("askYourDoubt"), icon: "/11.jpg", link: "/contact?subject=science&class=11" }] },
    { name: "Sociology", options: [{ name: t("syllabus"), icon: "/7.jpg", link: "/resources/class-11/mathematics/syllabus" }, { name: t("watchVideoLesson"), icon: "/9.jpg", link: "/resources/class-11/mathematics/videos" }, { name: t("studyMaterial"), icon: "/8.jpg", link: "/resources/class-11/mathematics/material" }, { name: t("practiceQuestions"), icon: "/10.jpg", link: "/resources/class-11/mathematics/questions" }, { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "/resources/class-11/mathematics/revision" }, { name: t("doubtSession"), icon: "/12.jpg", link: "/resources/class-11/mathematics/doubt-session" }, { name: t("askYourDoubt"), icon: "/11.jpg", link: "/contact?subject=mathematics&class=11" }] },
    { name: "Psychology", options: [{ name: t("syllabus"), icon: "/7.jpg", link: "/resources/class-11/social-science/syllabus" }, { name: t("watchVideoLesson"), icon: "/9.jpg", link: "/resources/class-11/social-science/videos" }, { name: t("studyMaterial"), icon: "/8.jpg", link: "/resources/class-11/social-science/material" }, { name: t("practiceQuestions"), icon: "/10.jpg", link: "/resources/class-11/social-science/questions" }, { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "/resources/class-11/social-science/revision" }, { name: t("doubtSession"), icon: "/12.jpg", link: "/resources/class-11/social-science/doubt-session" }, { name: t("askYourDoubt"), icon: "/11.jpg", link: "/contact?subject=social-science&class=11" }] },
    { name: "Education", options: [{ name: t("syllabus"), icon: "/7.jpg", link: "/resources/class-11/computer/syllabus" }, { name: t("watchVideoLesson"), icon: "/9.jpg", link: "/resources/class-11/computer/videos" }, { name: t("studyMaterial"), icon: "/8.jpg", link: "/resources/class-11/computer/material" }, { name: t("practiceQuestions"), icon: "/10.jpg", link: "/resources/class-11/computer/questions" }, { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "/resources/class-11/computer/revision" }, { name: t("doubtSession"), icon: "/12.jpg", link: "/resources/class-11/computer/doubt-session" }, { name: t("askYourDoubt"), icon: "/11.jpg", link: "/contact?subject=computer&class=11" }] },
    { name: "Economics", options: [{ name: t("syllabus"), icon: "/7.jpg", link: "/resources/class-11/drawing/syllabus" }, { name: t("watchVideoLesson"), icon: "/9.jpg", link: "/resources/class-11/drawing/videos" }, { name: t("studyMaterial"), icon: "/8.jpg", link: "/resources/class-11/drawing/material" }, { name: t("practiceQuestions"), icon: "/10.jpg", link: "/resources/class-11/drawing/questions" }, { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "/resources/class-11/drawing/revision" }, { name: t("doubtSession"), icon: "/12.jpg", link: "/resources/class-11/drawing/doubt-session" }, { name: t("askYourDoubt"), icon: "/11.jpg", link: "/contact?subject=drawing&class=11" }] },
    { name: "Accountancy", options: [{ name: t("syllabus"), icon: "/7.jpg", link: "/resources/class-11/hindi/syllabus" }, { name: t("watchVideoLesson"), icon: "/9.jpg", link: "/resources/class-11/hindi/videos" }, { name: t("studyMaterial"), icon: "/8.jpg", link: "/resources/class-11/hindi/material" }, { name: t("practiceQuestions"), icon: "/10.jpg", link: "/resources/class-11/hindi/questions" }, { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "/resources/class-11/hindi/revision" }, { name: t("doubtSession"), icon: "/12.jpg", link: "/resources/class-11/hindi/doubt-session" }, { name: t("askYourDoubt"), icon: "/11.jpg", link: "/contact?subject=hindi&class=11" }] },
    { name: "Business Studies", options: [{ name: t("syllabus"), icon: "/7.jpg", link: "/resources/class-11/english/syllabus" }, { name: t("watchVideoLesson"), icon: "/9.jpg", link: "/resources/class-11/english/videos" }, { name: t("studyMaterial"), icon: "/8.jpg", link: "/resources/class-11/english/material" }, { name: t("practiceQuestions"), icon: "/10.jpg", link: "/resources/class-11/english/questions" }, { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "/resources/class-11/english/revision" }, { name: t("doubtSession"), icon: "/12.jpg", link: "/resources/class-11/english/doubt-session" }, { name: t("askYourDoubt"), icon: "/11.jpg", link: "/contact?subject=english&class=11" }] },
    { name: t("hindi"), options: [{ name: t("syllabus"), icon: "/7.jpg", link: "/resources/class-11/sanskrit/syllabus" }, { name: t("watchVideoLesson"), icon: "/9.jpg", link: "/resources/class-11/sanskrit/videos" }, { name: t("studyMaterial"), icon: "/8.jpg", link: "/resources/class-11/sanskrit/material" }, { name: t("practiceQuestions"), icon: "/10.jpg", link: "/resources/class-11/sanskrit/questions" }, { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "/resources/class-11/sanskrit/revision" }, { name: t("doubtSession"), icon: "/12.jpg", link: "/resources/class-11/sanskrit/doubt-session" }, { name: t("askYourDoubt"), icon: "/11.jpg", link: "/contact?subject=sanskrit&class=11" }] },
    { name: "General Hindi", options: [{ name: t("syllabus"), icon: "/7.jpg", link: "/resources/class-11/english/syllabus" }, { name: t("watchVideoLesson"), icon: "/9.jpg", link: "/resources/class-11/english/videos" }, { name: t("studyMaterial"), icon: "/8.jpg", link: "/resources/class-11/english/material" }, { name: t("practiceQuestions"), icon: "/10.jpg", link: "/resources/class-11/english/questions" }, { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "/resources/class-11/english/revision" }, { name: t("doubtSession"), icon: "/12.jpg", link: "/resources/class-11/english/doubt-session" }, { name: t("askYourDoubt"), icon: "/11.jpg", link: "/contact?subject=english&class=11" }] },
    { name: t("english"), options: [{ name: t("syllabus"), icon: "/7.jpg", link: "/resources/class-11/english/syllabus" }, { name: t("watchVideoLesson"), icon: "/9.jpg", link: "/resources/class-11/english/videos" }, { name: t("studyMaterial"), icon: "/8.jpg", link: "/resources/class-11/english/material" }, { name: t("practiceQuestions"), icon: "/10.jpg", link: "/resources/class-11/english/questions" }, { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "/resources/class-11/english/revision" }, { name: t("doubtSession"), icon: "/12.jpg", link: "/resources/class-11/english/doubt-session" }, { name: t("askYourDoubt"), icon: "/11.jpg", link: "/contact?subject=english&class=11" }] },
  ]

  const toggleSubject = (subject: string) => {
    setExpandedSubject(expandedSubject === subject ? null : subject)
  }

  return (
    <div>
      <Header />
      <div className="class-details-container">
        <div className="class-details-header">
          <h1>Class 11</h1>
          <p>{t("exploreAllSubjects")}</p>
        </div>

        <div className="subjects-container">
          {subjectsData.map((subject) => (
            <div key={subject.name} className="subject-card">
              <button
                className="subject-header"
                onClick={() => toggleSubject(subject.name)}
              >
                <span className="subject-name">{subject.name}</span>
                <span className={`subject-toggle ${expandedSubject === subject.name ? "open" : ""}`}>
                  ▼
                </span>
              </button>

              {expandedSubject === subject.name && (
                <div className="subject-options">
                  {subject.options.map((option, index) => (
                    <Link href={option.link} key={index} className="option-link" target="_blank" rel="noopener noreferrer">
                      <div className="option-card">
                        <img src={option.icon} alt={option.name} className="option-icon" />
                        <div className="option-name">{option.name}</div>
                        <div className="option-arrow">→</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <HomeButton />
      <Footer />
    </div>
  )
}

