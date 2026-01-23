"use client"

import { useState } from "react"
import "@/styles/faq.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Home from "@/components/home-button"
import HomeButton from "@/components/home-button"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is Ishan Learning?",
      answer: "Ishan Learning is an academic learning support platform designed to work alongside the school education system. It helps students strengthen conceptual understanding, revise topics and study with clarity and confidence."
    },
    {
      question: "Is Ishan Learning a coaching institute or a replacement for schools?",
      answer: "No. Ishan Learning does not replace schools, boards or formal education. It supports classroom learning by helping students understand concepts more clearly and reduce academic confusion."
    },
    {
      question: "Which classes does Ishan Learning support?",
      answer: "Ishan Learning primarily supports school-level students (Classes 6 to 12) across subjects aligned with the school curriculum."
    },
    {
      question: "Do students need to create an account or log in?",
      answer: "No. There is no login or registration required. Students can freely access learning content through YouTube playlists and PDFs."
    },
    {
      question: "How is the learning content provided?",
      answer: "Learning materials are shared through: Curated YouTube playlist links and PDF study resources. These are meant to support school learning in a clear and structured way."
    },
    {
      question: "What is the 'Ask Query' or 'Request a Session' option?",
      answer: "Students or parents can submit questions or learning-related requests through a Google Form. The information shared is used only to respond to that specific request."
    },
    {
      question: "Is Ishan Learning suitable for students below 18 years of age?",
      answer: "Yes. Ishan Learning supports school students, including those below 18. Parents are encouraged to stay aware and involved, especially when queries or session requests are submitted."
    },
    {
      question: "How does Ishan Learning help students who feel stressed or confused about studies?",
      answer: "By focusing on: Conceptual clarity, Step-by-step explanations and A calm and supportive learning approach. Better understanding naturally reduces academic pressure."
    },
    {
      question: "Does Ishan Learning provide counselling or therapy?",
      answer: "No. Ishan Learning provides academic learning support. Psychology-related concepts are used only to support learning and understanding."
    },
    {
      question: "Are topics like stress, attention or Emotional Intelligence discussed?",
      answer: "Yes, these topics are discussed in relation to learning, study habits and academic confidence, not as professional mental health services."
    },
    {
      question: "Is any personal data collected?",
      answer: "No personal data is collected for accessing content. Information is shared only if a user voluntarily fills out a Google Form."
    },
    {
      question: "Does Ishan Learning guarantee marks or exam results?",
      answer: "No. The platform focuses on understanding and learning consistency, not guarantees of marks or ranks."
    },
    {
      question: "Can parents use this platform?",
      answer: "Yes. Parents can explore content, understand the learning approach and guide their children in a balanced and supportive way."
    },
    {
      question: "Is Ishan Learning suitable for students who struggle with basics?",
      answer: "Yes. The platform is especially helpful for students who want to strengthen foundations and clear doubts at their own pace."
    },
    {
      question: "How can we contact Ishan Learning?",
      answer: "You can use the Ask Query / Request a Session form or contact through the official email provided on the website."
    }
  ]

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="faq-page">
        <Header />
    <div className="faq-container">
      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about Ishan Learning</p>
      </div>

      <div className="faq-content">
        <div className="faq-accordion">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className={`faq-question ${openIndex === index ? "active" : ""}`}
                onClick={() => toggleAccordion(index)}
              >
                <span className="faq-question-text">{faq.question}</span>
                <span className="faq-icon">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="faq-footer">
        <p>Didn't find what you're looking for?</p>
        <p>
          <a href="/contact">Contact us</a> or submit your query through our Ask Query form
        </p>
      </div>
          <HomeButton />
    </div>
    <Footer />
    </div>
  )
}
