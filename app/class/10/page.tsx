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
    { name: "Science", options: [{ name: "Syllabus", icon: "/7.jpg", link: "/resources/class-10/science/syllabus" }, { name: "Watch Video Lesson", icon: "/9.jpg", link: "/resources/class-10/science/videos" }, { name: "Study Material", icon: "/8.jpg", link: "/resources/class-10/science/material" }, { name: "Practice Questions", icon: "/10.jpg", link: "/resources/class-10/science/questions" }, { name: "Quick Revision Videos", icon: "/13.jpg", link: "/resources/class-10/science/revision" }, { name: "Doubt Session", icon: "/12.jpg", link: "/resources/class-10/science/doubt-session" }, { name: "Ask Your Doubt", icon: "/11.jpg", link: "/contact?subject=science&class=10" }] },
    { name: "Mathematics", options: [{ name: "Syllabus", icon: "/7.jpg", link: "/resources/class-10/mathematics/syllabus" }, { name: "Watch Video Lesson", icon: "/9.jpg", link: "/resources/class-10/mathematics/videos" }, { name: "Study Material", icon: "/8.jpg", link: "/resources/class-10/mathematics/material" }, { name: "Practice Questions", icon: "/10.jpg", link: "/resources/class-10/mathematics/questions" }, { name: "Quick Revision Videos", icon: "/13.jpg", link: "/resources/class-10/mathematics/revision" }, { name: "Doubt Session", icon: "/12.jpg", link: "/resources/class-10/mathematics/doubt-session" }, { name: "Ask Your Doubt", icon: "/11.jpg", link: "/contact?subject=mathematics&class=10" }] },
    { name: "Social Science", options: [{ name: "Syllabus", icon: "/7.jpg", link: "/resources/class-10/social-science/syllabus" }, { name: "Watch Video Lesson", icon: "/9.jpg", link: "/resources/class-10/social-science/videos" }, { name: "Study Material", icon: "/8.jpg", link: "/resources/class-10/social-science/material" }, { name: "Practice Questions", icon: "/10.jpg", link: "/resources/class-10/social-science/questions" }, { name: "Quick Revision Videos", icon: "/13.jpg", link: "/resources/class-10/social-science/revision" }, { name: "Doubt Session", icon: "/12.jpg", link: "/resources/class-10/social-science/doubt-session" }, { name: "Ask Your Doubt", icon: "/11.jpg", link: "/contact?subject=social-science&class=10" }] },
    { name: "Computer", options: [{ name: "Syllabus", icon: "/7.jpg", link: "/resources/class-10/computer/syllabus" }, { name: "Watch Video Lesson", icon: "/9.jpg", link: "/resources/class-10/computer/videos" }, { name: "Study Material", icon: "/8.jpg", link: "/resources/class-10/computer/material" }, { name: "Practice Questions", icon: "/10.jpg", link: "/resources/class-10/computer/questions" }, { name: "Quick Revision Videos", icon: "/13.jpg", link: "/resources/class-10/computer/revision" }, { name: "Doubt Session", icon: "/12.jpg", link: "/resources/class-10/computer/doubt-session" }, { name: "Ask Your Doubt", icon: "/11.jpg", link: "/contact?subject=computer&class=10" }] },
    { name: "Art Education", options: [{ name: "Syllabus", icon: "/7.jpg", link: "/resources/class-10/drawing/syllabus" }, { name: "Watch Video Lesson", icon: "/9.jpg", link: "/resources/class-10/drawing/videos" }, { name: "Study Material", icon: "/8.jpg", link: "/resources/class-10/drawing/material" }, { name: "Practice Questions", icon: "/10.jpg", link: "/resources/class-10/drawing/questions" }, { name: "Quick Revision Videos", icon: "/13.jpg", link: "/resources/class-10/drawing/revision" }, { name: "Doubt Session", icon: "/12.jpg", link: "/resources/class-10/drawing/doubt-session" }, { name: "Ask Your Doubt", icon: "/11.jpg", link: "/contact?subject=drawing&class=10" }] },
    { name: "Hindi", options: [{ name: "Syllabus", icon: "/7.jpg", link: "/resources/class-10/hindi/syllabus" }, { name: "Watch Video Lesson", icon: "/9.jpg", link: "/resources/class-10/hindi/videos" }, { name: "Study Material", icon: "/8.jpg", link: "/resources/class-10/hindi/material" }, { name: "Practice Questions", icon: "/10.jpg", link: "/resources/class-10/hindi/questions" }, { name: "Quick Revision Videos", icon: "/13.jpg", link: "/resources/class-10/hindi/revision" }, { name: "Doubt Session", icon: "/12.jpg", link: "/resources/class-10/hindi/doubt-session" }, { name: "Ask Your Doubt", icon: "/11.jpg", link: "/contact?subject=hindi&class=10" }] },
    { name: "English", options: [{ name: "Syllabus", icon: "/7.jpg", link: "/resources/class-10/english/syllabus" }, { name: "Watch Video Lesson", icon: "/9.jpg", link: "/resources/class-10/english/videos" }, { name: "Study Material", icon: "/8.jpg", link: "/resources/class-10/english/material" }, { name: "Practice Questions", icon: "/10.jpg", link: "/resources/class-10/english/questions" }, { name: "Quick Revision Videos", icon: "/13.jpg", link: "/resources/class-10/english/revision" }, { name: "Doubt Session", icon: "/12.jpg", link: "/resources/class-10/english/doubt-session" }, { name: "Ask Your Doubt", icon: "/11.jpg", link: "/contact?subject=english&class=10" }] },
    { name: "Sanskrit", options: [{ name: "Syllabus", icon: "/7.jpg", link: "/resources/class-10/sanskrit/syllabus" }, { name: "Watch Video Lesson", icon: "/9.jpg", link: "/resources/class-10/sanskrit/videos" }, { name: "Study Material", icon: "/8.jpg", link: "/resources/class-10/sanskrit/material" }, { name: "Practice Questions", icon: "/10.jpg", link: "/resources/class-10/sanskrit/questions" }, { name: "Quick Revision Videos", icon: "/13.jpg", link: "/resources/class-10/sanskrit/revision" }, { name: "Doubt Session", icon: "/12.jpg", link: "/resources/class-10/sanskrit/doubt-session" }, { name: "Ask Your Doubt", icon: "/11.jpg", link: "/contact?subject=sanskrit&class=10" }] },
  ]

  const toggleSubject = (subject: string) => {
    setExpandedSubject(expandedSubject === subject ? null : subject)
  }

  return (
    <div>
      <Header />
      <div className="class-details-container">
        <div className="class-details-header">
          <h1>Class 10</h1>
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
                    <Link href={option.link} key={index} className="option-link">
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
