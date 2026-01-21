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
    {
      name: "Science",
      options: [
        { name: "Syllabus", icon: "/7.jpg", link: "/resources/class-7/science/syllabus" },
        { name: "Watch Video Lesson", icon: "/9.jpg", link: "/resources/class-7/science/videos" },
        { name: "Study Material", icon: "/8.jpg", link: "/resources/class-7/science/material" },
        { name: "Practice Questions", icon: "/10.jpg", link: "/resources/class-7/science/questions" },
        { name: "Quick Revision Videos", icon: "/13.jpg", link: "/resources/class-7/science/revision" },
        { name: "Doubt Session", icon: "/12.jpg", link: "/resources/class-7/science/doubt-session" },
        { name: "Ask Your Doubt", icon: "/11.jpg", link: "/contact?subject=science&class=7" },
      ]
    },
    {
      name: "Mathematics",
      options: [
        { name: "Syllabus", icon: "/7.jpg", link: "/resources/class-7/mathematics/syllabus" },
        { name: "Watch Video Lesson", icon: "/9.jpg", link: "/resources/class-7/mathematics/videos" },
        { name: "Study Material", icon: "/8.jpg", link: "/resources/class-7/mathematics/material" },
        { name: "Practice Questions", icon: "/10.jpg", link: "/resources/class-7/mathematics/questions" },
        { name: "Quick Revision Videos", icon: "/13.jpg", link: "/resources/class-7/mathematics/revision" },
        { name: "Doubt Session", icon: "/12.jpg", link: "/resources/class-7/mathematics/doubt-session" },
        { name: "Ask Your Doubt", icon: "/11.jpg", link: "/contact?subject=mathematics&class=7" },
      ]
    },
    {
      name: "Social Science",
      options: [
        { name: "Syllabus", icon: "/7.jpg", link: "/resources/class-7/social-science/syllabus" },
        { name: "Watch Video Lesson", icon: "/9.jpg", link: "/resources/class-7/social-science/videos" },
        { name: "Study Material", icon: "/8.jpg", link: "/resources/class-7/social-science/material" },
        { name: "Practice Questions", icon: "/10.jpg", link: "/resources/class-7/social-science/questions" },
        { name: "Quick Revision Videos", icon: "/13.jpg", link: "/resources/class-7/social-science/revision" },
        { name: "Doubt Session", icon: "/12.jpg", link: "/resources/class-7/social-science/doubt-session" },
        { name: "Ask Your Doubt", icon: "/11.jpg", link: "/contact?subject=social-science&class=7" },
      ]
    },
    {
      name: "Computer",
      options: [
        { name: "Syllabus", icon: "/7.jpg", link: "/resources/class-7/computer/syllabus" },
        { name: "Watch Video Lesson", icon: "/9.jpg", link: "/resources/class-7/computer/videos" },
        { name: "Study Material", icon: "/8.jpg", link: "/resources/class-7/computer/material" },
        { name: "Practice Questions", icon: "/10.jpg", link: "/resources/class-7/computer/questions" },
        { name: "Quick Revision Videos", icon: "/13.jpg", link: "/resources/class-7/computer/revision" },
        { name: "Doubt Session", icon: "/12.jpg", link: "/resources/class-7/computer/doubt-session" },
        { name: "Ask Your Doubt", icon: "/11.jpg", link: "/contact?subject=computer&class=7" },
      ]
    },
    {
      name: "Drawing",
      options: [
        { name: "Syllabus", icon: "/7.jpg", link: "/resources/class-7/drawing/syllabus" },
        { name: "Watch Video Lesson", icon: "/9.jpg", link: "/resources/class-7/drawing/videos" },
        { name: "Study Material", icon: "/8.jpg", link: "/resources/class-7/drawing/material" },
        { name: "Practice Questions", icon: "/10.jpg", link: "/resources/class-7/drawing/questions" },
        { name: "Quick Revision Videos", icon: "/13.jpg", link: "/resources/class-7/drawing/revision" },
        { name: "Doubt Session", icon: "/12.jpg", link: "/resources/class-7/drawing/doubt-session" },
        { name: "Ask Your Doubt", icon: "/11.jpg", link: "/contact?subject=drawing&class=7" },
      ]
    },
    {
      name: "Hindi",
      options: [
        { name: "Syllabus", icon: "/7.jpg", link: "/resources/class-7/hindi/syllabus" },
        { name: "Watch Video Lesson", icon: "/9.jpg", link: "/resources/class-7/hindi/videos" },
        { name: "Study Material", icon: "/8.jpg", link: "/resources/class-7/hindi/material" },
        { name: "Practice Questions", icon: "/10.jpg", link: "/resources/class-7/hindi/questions" },
        { name: "Quick Revision Videos", icon: "/13.jpg", link: "/resources/class-7/hindi/revision" },
        { name: "Doubt Session", icon: "/12.jpg", link: "/resources/class-7/hindi/doubt-session" },
        { name: "Ask Your Doubt", icon: "/11.jpg", link: "/contact?subject=hindi&class=7" },
      ]
    },
    {
      name: "English",
      options: [
        { name: "Syllabus", icon: "/7.jpg", link: "/resources/class-7/english/syllabus" },
        { name: "Watch Video Lesson", icon: "/9.jpg", link: "/resources/class-7/english/videos" },
        { name: "Study Material", icon: "/8.jpg", link: "/resources/class-7/english/material" },
        { name: "Practice Questions", icon: "/10.jpg", link: "/resources/class-7/english/questions" },
        { name: "Quick Revision Videos", icon: "/13.jpg", link: "/resources/class-7/english/revision" },
        { name: "Doubt Session", icon: "/12.jpg", link: "/resources/class-7/english/doubt-session" },
        { name: "Ask Your Doubt", icon: "/11.jpg", link: "/contact?subject=english&class=7" },
      ]
    },
    {
      name: "Sanskrit",
      options: [
        { name: "Syllabus", icon: "/7.jpg", link: "/resources/class-7/sanskrit/syllabus" },
        { name: "Watch Video Lesson", icon: "/9.jpg", link: "/resources/class-7/sanskrit/videos" },
        { name: "Study Material", icon: "/8.jpg", link: "/resources/class-7/sanskrit/material" },
        { name: "Practice Questions", icon: "/10.jpg", link: "/resources/class-7/sanskrit/questions" },
        { name: "Quick Revision Videos", icon: "/13.jpg", link: "/resources/class-7/sanskrit/revision" },
        { name: "Doubt Session", icon: "/12.jpg", link: "/resources/class-7/sanskrit/doubt-session" },
        { name: "Ask Your Doubt", icon: "/11.jpg", link: "/contact?subject=sanskrit&class=7" },
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
          <h1>Class 7</h1>
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
