"use client"

import { useState } from "react"
import "@/styles/faq.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HomeButton from "@/components/home-button"
import { useLanguage } from "@/components/language-context"

export default function FAQ() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      questionKey: "faqQ1",
      answerKey: "faqA1"
    },
    {
      questionKey: "faqQ2",
      answerKey: "faqA2"
    },
    {
      questionKey: "faqQ3",
      answerKey: "faqA3"
    },
    {
      questionKey: "faqQ4",
      answerKey: "faqA4"
    },
    {
      questionKey: "faqQ5",
      answerKey: "faqA5"
    },
    {
      questionKey: "faqQ6",
      answerKey: "faqA6"
    },
    {
      questionKey: "faqQ7",
      answerKey: "faqA7"
    },
    {
      questionKey: "faqQ8",
      answerKey: "faqA8"
    },
    {
      questionKey: "faqQ9",
      answerKey: "faqA9"
    },
    {
      questionKey: "faqQ10",
      answerKey: "faqA10"
    },
    {
      questionKey: "faqQ11",
      answerKey: "faqA11"
    },
    {
      questionKey: "faqQ12",
      answerKey: "faqA12"
    },
    {
      questionKey: "faqQ13",
      answerKey: "faqA13"
    },
    {
      questionKey: "faqQ14",
      answerKey: "faqA14"
    },
    {
      questionKey: "faqQ15",
      answerKey: "faqA15"
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
        <h1>{t("faq")}</h1>
        <p>{t("findAnswers")}</p>
      </div>

      <div className="faq-content">
        <div className="faq-accordion">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className={`faq-question ${openIndex === index ? "active" : ""}`}
                onClick={() => toggleAccordion(index)}
              >
                <span className="faq-question-text">{t(faq.questionKey)}</span>
                <span className="faq-icon">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{t(faq.answerKey)}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="faq-footer">
        <p>{t("didntFind")}</p>
        <p>
          <a href="/contact">{t("contact")}</a> {t("contactUsQuery")}
        </p>
      </div>
          <HomeButton />
    </div>
    <Footer />
    </div>
  )
}
