"use client"

import { useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HomeButton from "@/components/home-button"
import "@/styles/class-details.css"

export default function ClassPage({ params }: { params: { classNumber: string } }) {
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null)

  const subjectsData = [
    { name: "Science", options: [{ name: "Syllabus", icon: "/7.jpg", link: "/resources/class-9/science/syllabus" }, { name: "Watch Video Lesson", icon: "/9.jpg", link: "/resources/class-9/science/videos" }, { name: "Study Material", icon: "/8.jpg", link: "/resources/class-9/science/material" }, { name: "Practice Questions", icon: "/10.jpg", link: "/resources/class-9/science/questions" }, { name: "Quick Revision Videos", icon: "/13.jpg", link: "/resources/class-9/science/revision" }, { name: "Doubt Session", icon: "/12.jpg", link: "/resources/class-9/science/doubt-session" }, { name: "Ask Your Doubt", icon: "/11.jpg", link: "/contact?subject=science&class=9" }] },
    { name: "Mathematics", options: [{ name: "Syllabus", icon: "/7.jpg", link: "/resources/class-9/mathematics/syllabus" }, { name: "Watch Video Lesson", icon: "/9.jpg", link: "/resources/class-9/mathematics/videos" }, { name: "Study Material", icon: "/8.jpg", link: "/resources/class-9/mathematics/material" }, { name: "Practice Questions", icon: "/10.jpg", link: "/resources/class-9/mathematics/questions" }, { name: "Quick Revision Videos", icon: "/13.jpg", link: "/resources/class-9/mathematics/revision" }, { name: "Doubt Session", icon: "/12.jpg", link: "/resources/class-9/mathematics/doubt-session" }, { name: "Ask Your Doubt", icon: "/11.jpg", link: "/contact?subject=mathematics&class=9" }] },
    { name: "Social Science", options: [{ name: "Syllabus", icon: "/7.jpg", link: "/resources/class-9/social-science/syllabus" }, { name: "Watch Video Lesson", icon: "/9.jpg", link: "/resources/class-9/social-science/videos" }, { name: "Study Material", icon: "/8.jpg", link: "/resources/class-9/social-science/material" }, { name: "Practice Questions", icon: "/10.jpg", link: "/resources/class-9/social-science/questions" }, { name: "Quick Revision Videos", icon: "/13.jpg", link: "/resources/class-9/social-science/revision" }, { name: "Doubt Session", icon: "/12.jpg", link: "/resources/class-9/social-science/doubt-session" }, { name: "Ask Your Doubt", icon: "/11.jpg", link: "/contact?subject=social-science&class=9" }] },
    { name: "Computer", options: [{ name: "Syllabus", icon: "/7.jpg", link: "/resources/class-9/computer/syllabus" }, { name: "Watch Video Lesson", icon: "/9.jpg", link: "/resources/class-9/computer/videos" }, { name: "Study Material", icon: "/8.jpg", link: "/resources/class-9/computer/material" }, { name: "Practice Questions", icon: "/10.jpg", link: "/resources/class-9/computer/questions" }, { name: "Quick Revision Videos", icon: "/13.jpg", link: "/resources/class-9/computer/revision" }, { name: "Doubt Session", icon: "/12.jpg", link: "/resources/class-9/computer/doubt-session" }, { name: "Ask Your Doubt", icon: "/11.jpg", link: "/contact?subject=computer&class=9" }] },
    { name: "Art Education", options: [{ name: "Syllabus", icon: "/7.jpg", link: "/resources/class-9/drawing/syllabus" }, { name: "Watch Video Lesson", icon: "/9.jpg", link: "/resources/class-9/drawing/videos" }, { name: "Study Material", icon: "/8.jpg", link: "/resources/class-9/drawing/material" }, { name: "Practice Questions", icon: "/10.jpg", link: "/resources/class-9/drawing/questions" }, { name: "Quick Revision Videos", icon: "/13.jpg", link: "/resources/class-9/drawing/revision" }, { name: "Doubt Session", icon: "/12.jpg", link: "/resources/class-9/drawing/doubt-session" }, { name: "Ask Your Doubt", icon: "/11.jpg", link: "/contact?subject=drawing&class=9" }] },
    { name: "Hindi", options: [{ name: "Syllabus", icon: "/7.jpg", link: "/resources/class-9/hindi/syllabus" }, { name: "Watch Video Lesson", icon: "/9.jpg", link: "/resources/class-9/hindi/videos" }, { name: "Study Material", icon: "/8.jpg", link: "/resources/class-9/hindi/material" }, { name: "Practice Questions", icon: "/10.jpg", link: "/resources/class-9/hindi/questions" }, { name: "Quick Revision Videos", icon: "/13.jpg", link: "/resources/class-9/hindi/revision" }, { name: "Doubt Session", icon: "/12.jpg", link: "/resources/class-9/hindi/doubt-session" }, { name: "Ask Your Doubt", icon: "/11.jpg", link: "/contact?subject=hindi&class=9" }] },
    { name: "English", options: [{ name: "Syllabus", icon: "/7.jpg", link: "/resources/class-9/english/syllabus" }, { name: "Watch Video Lesson", icon: "/9.jpg", link: "/resources/class-9/english/videos" }, { name: "Study Material", icon: "/8.jpg", link: "/resources/class-9/english/material" }, { name: "Practice Questions", icon: "/10.jpg", link: "/resources/class-9/english/questions" }, { name: "Quick Revision Videos", icon: "/13.jpg", link: "/resources/class-9/english/revision" }, { name: "Doubt Session", icon: "/12.jpg", link: "/resources/class-9/english/doubt-session" }, { name: "Ask Your Doubt", icon: "/11.jpg", link: "/contact?subject=english&class=9" }] },
    { name: "Sanskrit", options: [{ name: "Syllabus", icon: "/7.jpg", link: "/resources/class-9/sanskrit/syllabus" }, { name: "Watch Video Lesson", icon: "/9.jpg", link: "/resources/class-9/sanskrit/videos" }, { name: "Study Material", icon: "/8.jpg", link: "/resources/class-9/sanskrit/material" }, { name: "Practice Questions", icon: "/10.jpg", link: "/resources/class-9/sanskrit/questions" }, { name: "Quick Revision Videos", icon: "/13.jpg", link: "/resources/class-9/sanskrit/revision" }, { name: "Doubt Session", icon: "/12.jpg", link: "/resources/class-9/sanskrit/doubt-session" }, { name: "Ask Your Doubt", icon: "/11.jpg", link: "/contact?subject=sanskrit&class=9" }] },
  ]

  const toggleSubject = (subject: string) => {
    setExpandedSubject(expandedSubject === subject ? null : subject)
  }

  return (
    <div>
      <Header />
      <div className="class-details-container">
        <div className="class-details-header">
          <h1>Class 9</h1>
          <p>Explore all subjects and learning resources</p>
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
