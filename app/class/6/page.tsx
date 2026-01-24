"use client"

import { useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HomeButton from "@/components/home-button"
import { useLanguage } from "@/components/language-context"
import "@/styles/class-details.css"

export default function ClassPage({ params }: { params: { classNumber: string } }) {
  const { t } = useLanguage()
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null)

  const subjectsData = [
    {
      name: t("science"),
      options: [
        { name: t("syllabus"), icon: "/7.jpg", link: "/resources/class-6/science/syllabus" },
        { name: t("watchVideoLesson"), icon: "/9.jpg", link: "/resources/class-6/science/videos" },
        { name: t("studyMaterial"), icon: "/8.jpg", link: "/resources/class-6/science/material" },
        { name: t("practiceQuestions"), icon: "/10.jpg", link: "/resources/class-6/science/questions" },
        { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "/resources/class-6/science/revision" },
        { name: t("doubtSession"), icon: "/12.jpg", link: "/resources/class-6/science/doubt-session" },
        { name: t("askYourDoubt"), icon: "/11.jpg", link: "/contact?subject=science&class=6" },
      ]
    },
    {
      name: t("mathematics"),
      options: [
        { name: t("syllabus"), icon: "/7.jpg", link: "/resources/class-6/mathematics/syllabus" },
        { name: t("watchVideoLesson"), icon: "/9.jpg", link: "/resources/class-6/mathematics/videos" },
        { name: t("studyMaterial"), icon: "/8.jpg", link: "/resources/class-6/mathematics/material" },
        { name: t("practiceQuestions"), icon: "/10.jpg", link: "/resources/class-6/mathematics/questions" },
        { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "/resources/class-6/mathematics/revision" },
        { name: t("doubtSession"), icon: "/12.jpg", link: "/resources/class-6/mathematics/doubt-session" },
        { name: t("askYourDoubt"), icon: "/11.jpg", link: "/contact?subject=mathematics&class=6" },
      ]
    },
    {
      name: t("socialScience"),
      options: [
        { name: t("syllabus"), icon: "/7.jpg", link: "/resources/class-6/social-science/syllabus" },
        { name: t("watchVideoLesson"), icon: "/9.jpg", link: "/resources/class-6/social-science/videos" },
        { name: t("studyMaterial"), icon: "/8.jpg", link: "/resources/class-6/social-science/material" },
        { name: t("practiceQuestions"), icon: "/10.jpg", link: "/resources/class-6/social-science/questions" },
        { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "/resources/class-6/social-science/revision" },
        { name: t("doubtSession"), icon: "/12.jpg", link: "/resources/class-6/social-science/doubt-session" },
        { name: t("askYourDoubt"), icon: "/11.jpg", link: "/contact?subject=social-science&class=6" },
      ]
    },
    {
      name: t("computer"),
      options: [
        { name: t("syllabus"), icon: "/7.jpg", link: "/resources/class-6/computer/syllabus" },
        { name: t("watchVideoLesson"), icon: "/9.jpg", link: "/resources/class-6/computer/videos" },
        { name: t("studyMaterial"), icon: "/8.jpg", link: "/resources/class-6/computer/material" },
        { name: t("practiceQuestions"), icon: "/10.jpg", link: "/resources/class-6/computer/questions" },
        { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "/resources/class-6/computer/revision" },
        { name: t("doubtSession"), icon: "/12.jpg", link: "/resources/class-6/computer/doubt-session" },
        { name: t("askYourDoubt"), icon: "/11.jpg", link: "/contact?subject=computer&class=6" },
      ]
    },
    {
      name: t("drawing"),
      options: [
        { name: t("syllabus"), icon: "/7.jpg", link: "/resources/class-6/drawing/syllabus" },
        { name: t("watchVideoLesson"), icon: "/9.jpg", link: "/resources/class-6/drawing/videos" },
        { name: t("studyMaterial"), icon: "/8.jpg", link: "/resources/class-6/drawing/material" },
        { name: t("practiceQuestions"), icon: "/10.jpg", link: "/resources/class-6/drawing/questions" },
        { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "/resources/class-6/drawing/revision" },
        { name: t("doubtSession"), icon: "/12.jpg", link: "/resources/class-6/drawing/doubt-session" },
        { name: t("askYourDoubt"), icon: "/11.jpg", link: "/contact?subject=drawing&class=6" },
      ]
    },
    {
      name: t("hindi"),
      options: [
        { name: t("syllabus"), icon: "/7.jpg", link: "/resources/class-6/hindi/syllabus" },
        { name: t("watchVideoLesson"), icon: "/9.jpg", link: "/resources/class-6/hindi/videos" },
        { name: t("studyMaterial"), icon: "/8.jpg", link: "/resources/class-6/hindi/material" },
        { name: t("practiceQuestions"), icon: "/10.jpg", link: "/resources/class-6/hindi/questions" },
        { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "/resources/class-6/hindi/revision" },
        { name: t("doubtSession"), icon: "/12.jpg", link: "/resources/class-6/hindi/doubt-session" },
        { name: t("askYourDoubt"), icon: "/11.jpg", link: "/contact?subject=hindi&class=6" },
      ]
    },
    {
      name: t("english"),
      options: [
        { name: t("syllabus"), icon: "/7.jpg", link: "/resources/class-6/english/syllabus" },
        { name: t("watchVideoLesson"), icon: "/9.jpg", link: "/resources/class-6/english/videos" },
        { name: t("studyMaterial"), icon: "/8.jpg", link: "/resources/class-6/english/material" },
        { name: t("practiceQuestions"), icon: "/10.jpg", link: "/resources/class-6/english/questions" },
        { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "/resources/class-6/english/revision" },
        { name: t("doubtSession"), icon: "/12.jpg", link: "/resources/class-6/english/doubt-session" },
        { name: t("askYourDoubt"), icon: "/11.jpg", link: "/contact?subject=english&class=6" },
      ]
    },
    {
      name: t("sanskrit"),
      options: [
        { name: t("syllabus"), icon: "/7.jpg", link: "/resources/class-6/sanskrit/syllabus" },
        { name: t("watchVideoLesson"), icon: "/9.jpg", link: "/resources/class-6/sanskrit/videos" },
        { name: t("studyMaterial"), icon: "/8.jpg", link: "/resources/class-6/sanskrit/material" },
        { name: t("practiceQuestions"), icon: "/10.jpg", link: "/resources/class-6/sanskrit/questions" },
        { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "/resources/class-6/sanskrit/revision" },
        { name: t("doubtSession"), icon: "/12.jpg", link: "/resources/class-6/sanskrit/doubt-session" },
        { name: t("askYourDoubt"), icon: "/11.jpg", link: "/contact?subject=sanskrit&class=6" },
      ]
    },
  ]

  const toggleSubject = (subject: string) => {
    setExpandedSubject(expandedSubject === subject ? null : subject)
  }

  return (
    <div>
      <Header />
      <div className="class-details-container">
        <div className="class-details-header">
          <h1>Class 6</h1>
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
