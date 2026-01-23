"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import HomeButton from "@/components/home-button"
import "@/styles/teachers.css"
import { useRef, useState } from "react"

export default function Teachers() {
  const teachers = [
    {
      id: 1,
      name: "Abhishek Saini",
      position: "Founder & Principal Mentor",
      qualification: "M.A. Psychology, M.A. Sociology, Gold Medalist",
      image: "/teacher1.jpg",
      bio: "With Master's degrees in Psychology and Sociology, Abhishek brings a unique perspective to education. He emphasizes clarity-based learning and student well-being.",
      expertise: ["Psychology", "Student Guidance", "Conceptual Learning"],
      quote: "When students are given conceptual clarity and patience, learning becomes meaningful rather than stressful."
    },
    {
      id: 2,
      name: "Savan Kumar",
      position: "Computer Science/Coding head Mentor",
      qualification: "MCA (AIML,JAVA,Python,MERN,SPring Boot),BCA (Java)",
      image: "/teacher2.jpg",
      bio: "An experienced educator dedicated to making complex scientific concepts simple and understandable through real-world examples and interactive teaching.",
      expertise: ["Computer Science","HTML", "CSS", "Python", "Java", "MERN Stack"],
      quote: "Coding is the language of the future. Learning to code empowers students to create, innovate, and solve problems effectively."
    },
    {
      id: 3,
      name: "Language Expert",
      position: "English & Language Arts Mentor",
      qualification: "M.A. English, B.Ed.",
      image: "/teacher3.jpg",
      bio: "Passionate about helping students develop strong communication skills and a love for literature. Focuses on building confidence in language learning.",
      expertise: ["English Grammar", "Literature", "Writing Skills"],
      quote: "Language is the bridge between minds. Clear communication is the foundation of all learning."
    },
    {
      id: 4,
      name: "Social Studies Guide",
      position: "History & Social Science Mentor",
      qualification: "M.A. History, B.Ed.",
      image: "/teacher4.jpg",
      bio: "Believes that understanding history and society helps students become responsible citizens. Makes learning engaging through storytelling and critical thinking.",
      expertise: ["History", "Geography", "Civics", "Social Studies"],
      quote: "History teaches us where we come from; social studies teach us where we're going."
    },
     {
      id: 5,
      name: "Language Expert",
      position: "English & Language Arts Mentor",
      qualification: "M.A. English, B.Ed.",
      image: "/teacher3.jpg",
      bio: "Passionate about helping students develop strong communication skills and a love for literature. Focuses on building confidence in language learning.",
      expertise: ["English Grammar", "Literature", "Writing Skills"],
      quote: "Language is the bridge between minds. Clear communication is the foundation of all learning."
    },
     {
      id: 6,
      name: "Language Expert",
      position: "English & Language Arts Mentor",
      qualification: "M.A. English, B.Ed.",
      image: "/teacher3.jpg",
      bio: "Passionate about helping students develop strong communication skills and a love for literature. Focuses on building confidence in language learning.",
      expertise: ["English Grammar", "Literature", "Writing Skills"],
      quote: "Language is the bridge between minds. Clear communication is the foundation of all learning."
    },
     {
      id: 7,
      name: "Language Expert",
      position: "English & Language Arts Mentor",
      qualification: "M.A. English, B.Ed.",
      image: "/teacher3.jpg",
      bio: "Passionate about helping students develop strong communication skills and a love for literature. Focuses on building confidence in language learning.",
      expertise: ["English Grammar", "Literature", "Writing Skills"],
      quote: "Language is the bridge between minds. Clear communication is the foundation of all learning."
    },
     {
      id: 8,
      name: "Language Expert",
      position: "English & Language Arts Mentor",
      qualification: "M.A. English, B.Ed.",
      image: "/teacher3.jpg",
      bio: "Passionate about helping students develop strong communication skills and a love for literature. Focuses on building confidence in language learning.",
      expertise: ["English Grammar", "Literature", "Writing Skills"],
      quote: "Language is the bridge between minds. Clear communication is the foundation of all learning."
    },
     {
      id: 9,
      name: "Language Expert",
      position: "English & Language Arts Mentor",
      qualification: "M.A. English, B.Ed.",
      image: "/teacher3.jpg",
      bio: "Passionate about helping students develop strong communication skills and a love for literature. Focuses on building confidence in language learning.",
      expertise: ["English Grammar", "Literature", "Writing Skills"],
      quote: "Language is the bridge between minds. Clear communication is the foundation of all learning."
    }
  ]

  const [selectedTeacher, setSelectedTeacher] = useState<number | null>(null)
  const [showModal, setShowModal] = useState(false)
  const teachersGridRef = useRef<HTMLDivElement>(null)

  const handleViewTeachers = (e: React.MouseEvent) => {
    e.preventDefault()
    teachersGridRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleMeetTeacher = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowModal(true)
  }

  const closeModal = () => setShowModal(false)

  return (
    <div className="app">
      <Header />

      <main className="teachers-container">
        {/* <section className="teachers-hero">
          <h1>Meet Our Teachers</h1>
          <p>Experienced educators dedicated to your success</p>
        </section> */}

        <section className="teachers-intro teachers-hero">
          <div className="intro-content">
            <h2>About Our Teaching Team</h2>
            <p>
              At Ishan Learning, we believe that great teachers are the backbone of meaningful education. Our team consists of experienced educators who are passionate about helping students understand concepts clearly and develop a genuine love for learning.
            </p>
            <p>
              Each teacher brings unique expertise and a student-centered approach to ensure that every learner feels supported, valued and confident in their academic journey.
            </p>
          </div>
        </section>

        {/* Teachers Grid Section - interactive */}
        {/* <div ref={teachersGridRef} id="your-teacher">
          <section className="teachers-grid">
            <h2>Our Teaching Faculty</h2>
            <div className="teachers-list">
              {teachers.map((teacher) => (
                <div
                  key={teacher.id}
                  className={`teacher-card${selectedTeacher === teacher.id ? " expanded" : ""}`}
                  onClick={() => setSelectedTeacher(selectedTeacher === teacher.id ? null : teacher.id)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="teacher-image-wrapper">
                    <div className="teacher-image-placeholder">{teacher.name.charAt(0)}</div>
                  </div>
                  <div className="teacher-content">
                    <h3>{teacher.name}</h3>
                    <p className="teacher-position">{teacher.position}</p>
                    <p className="teacher-qualification">{teacher.qualification}</p>
                    <p className="teacher-bio">{teacher.bio}</p>
                    {selectedTeacher === teacher.id && (
                      <>
                        <div className="teacher-expertise">
                          <h4>Expertise:</h4>
                          <div className="expertise-tags">
                            {teacher.expertise.map((skill, index) => (
                              <span key={index} className="expertise-tag">{skill}</span>
                            ))}
                          </div>
                        </div>
                        <div className="teacher-quote">
                          <p>"{teacher.quote}"</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section> */}
        {/* </div> */}

        {/* //add two buttons here one is View your teacer and meet your teacher */}
        <div className="teacher-buttons">
          <a href="/your-teacher" className="teacher-btn" target="_blank">View Your Teacher</a>
          <a href="/meet-teacher" className="teacher-btn secondary" target="_blank">Meet Your Teacher</a>
        </div>

        {/* Meet Your Teacher Modal */}

        <section className="teaching-philosophy">
          <h2>Our Teaching Philosophy</h2>
          <div className="philosophy-grid">
            <div className="philosophy-card">
              <div className="philosophy-icon">🎯</div>
              <h3>Clarity First</h3>
              <p>We prioritize clear explanations over rote memorization, ensuring students truly understand concepts.</p>
            </div>
            
            <div className="philosophy-card">
              <div className="philosophy-icon">🤝</div>
              <h3>Student-Centered</h3>
              <p>Every student is unique. We adapt our teaching methods to individual learning styles and pace.</p>
            </div>
            
            <div className="philosophy-card">
              <div className="philosophy-icon">💡</div>
              <h3>Conceptual Learning</h3>
              <p>We focus on building strong conceptual foundations that students can apply across different contexts.</p>
            </div>
            
            <div className="philosophy-card">
              <div className="philosophy-icon">❤️</div>
              <h3>Emotional Safety</h3>
              <p>A fear-free, supportive environment where students feel confident asking questions and learning.</p>
            </div>
          </div>
        </section>
        
        <section className="teacher-cta">
          <h2>Ready to Learn?</h2>
          <p>Start your learning journey with our experienced teachers</p>
          <a href="/#classes" className="cta-button">Explore Classes</a>
        </section>
      </main>

      <HomeButton />
      <Footer />
    </div>
  )
}
