"use client"

import "@/styles/contact.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HomeButton from "@/components/home-button"

export default function Contact() {
  return (
    <div className="contact">
    <Header />
    <div className="contact-container">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <h2>With Us</h2>
        <p>We're here to help with your academic journey</p>
      </div>

      <div className="contact-content">
        <div className="contact-card">
          <div className="card-icon">📚</div>
          <h3>Academic Queries & Guidance</h3>
          <p>For questions related to learning, concepts, or guidance requests, please use:</p>
          
          <div className="contact-actions">
            <a href="#ask-query" className="contact-button query-button">
              <span className="button-icon">✉️</span>
              Ask Query
            </a>
            <a href="#request-session" className="contact-button session-button">
              <span className="button-icon">📅</span>
              Request a Session
            </a>
          </div>

          <div className="contact-note">
            <p>✓ Quick response to your learning questions</p>
            <p>✓ Personalized guidance sessions available</p>
            <p>✓ Support for all classes (6-12)</p>
          </div>
        </div>

        <div className="contact-card">
          <div className="card-icon">✉️</div>
          <h3>Email Us</h3>
          <p>Reach out to us directly for any inquiries:</p>
          
          <div className="email-section">
            <a href="mailto:info@ishanlearning.com" className="email-link">
              info@ishanlearning.com
            </a>
          </div>

          <div className="contact-note">
            <p>✓ We typically respond within 24-48 hours</p>
            <p>✓ Professional and supportive communication</p>
            <p>✓ All your questions are welcome</p>
          </div>
        </div>
      </div>

      <div className="contact-footer">
        <div className="footer-note">
          <p className="note-icon">⚠️</p>
          <p>Students below 18 are advised to connect with parental awareness.</p>
        </div>
      </div>
    </div>
    <HomeButton />
    <Footer />
    </div>
  )
}
