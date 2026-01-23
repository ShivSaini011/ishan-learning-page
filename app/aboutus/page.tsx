"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import HomeButton from "@/components/home-button"
import "@/styles/about.css"

export default function AboutUs() {
  return (
    <div className="app">
      <Header />
      
      <main className="about-container">
        <section className="about-hero">
          <h1>About Ishan Learning</h1>
          <p>Clarity, Confidence and Supportive Learning</p>
        </section>

        {/* Ishan Learning */}
        <section className="about-section">
          <div className="section-content">
            <h2>Ishan Learning</h2>
            <p>
              Ishan Learning is a learning support platform designed to work alongside the school education system, not to replace it.
            </p>
            <p>
              Schools play a central role in shaping a student's academic foundation. However, due to limited classroom time, syllabus pressure and large class sizes, many students are unable to fully understand what is taught in school. Over time, doubts remain unresolved and learning begins to feel stressful rather than meaningful.
            </p>
            <p>
              <strong>Ishan Learning exists to support students in understanding school subjects clearly, strengthening their conceptual foundations and studying with confidence in a calm and supportive learning environment.</strong>
            </p>
          </div>
        </section>

        {/* Core Belief */}
        <section className="about-section highlight-section">
          <div className="section-content">
            <h2>Our Core Belief</h2>
            <div className="belief-box">
              <h3>Education is a right, not a privilege.</h3>
              <p>We believe every student deserves:</p>
              <ul className="belief-list">
                <li>✓ Clear explanations</li>
                <li>✓ Patient and respectful guidance</li>
                <li>✓ A supportive learning environment free from fear and unnecessary pressure</li>
              </ul>
              <p className="belief-note">
                While pressure and fear may push short-term performance, clarity, confidence and emotional safety support long-term learning and growth.
              </p>
            </div>
          </div>
        </section>

        {/* Why Created */}
        <section className="about-section">
          <div className="section-content">
            <h2>Why Ishan Learning Was Created</h2>
            <p>
              While observing students and common classroom learning patterns, one concern consistently stood out:
            </p>
            <p><strong>Many students are capable and genuinely interested in learning, yet struggle because:</strong></p>
            <ul className="reason-list">
              <li>Lessons move too quickly</li>
              <li>Doubts remain unanswered</li>
              <li>Exams become more important than understanding</li>
              <li>Academic pressure continues to increase</li>
            </ul>
            <p>
              Ishan Learning was created as a learning support system to help students revisit concepts, clear doubts and build confidence-without fear, comparison or unnecessary stress.
            </p>
          </div>
        </section>

        {/* Learning & Mental Well-Being */}
        <section className="about-section highlight-section">
          <div className="section-content">
            <h2>Learning and Mental Well-Being</h2>
            <p>
              We believe meaningful learning is closely connected to mental calmness and emotional safety.
            </p>
            <div className="wellbeing-grid">
              <div className="wellbeing-item">
                <h4>No Labels or Judgment</h4>
                <p>Students are not labeled or judged</p>
              </div>
              <div className="wellbeing-item">
                <h4>Respected Pace</h4>
                <p>Learning pace is respected</p>
              </div>
              <div className="wellbeing-item">
                <h4>Fear-Free Learning</h4>
                <p>Fear-based motivation is avoided</p>
              </div>
              <div className="wellbeing-item">
                <h4>Clarity First</h4>
                <p>Clarity and reassurance are prioritised</p>
              </div>
            </div>
            <p className="note">
              <em>This platform does not provide clinical, counselling or therapeutic services. However, learning is guided with psychological sensitivity, recognising attention span, learning pace and emotional readiness.</em>
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="about-section">
          <div className="vision-mission-grid">
            <div className="vision-card">
              <h3>Our Vision</h3>
              <p>To build a supportive learning ecosystem that works in coordination with schools and helps students:</p>
              <ul>
                <li>Develop strong conceptual understanding</li>
                <li>Reduce academic stress</li>
                <li>Maintain balance between learning and well-being</li>
                <li>Grow into confident and independent learners</li>
              </ul>
            </div>
            <div className="mission-card">
              <h3>Our Mission</h3>
              <p>To simplify school-level concepts through clear and structured teaching:</p>
              <ul>
                <li>Reinforce classroom learning rather than compete with schools</li>
                <li>Encourage understanding instead of rote memorisation</li>
                <li>Apply psychology-informed principles related to attention, understanding and learning pace</li>
                <li>Support students with responsibility, care and academic integrity</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What Makes Different */}
        <section className="about-section">
          <div className="section-content">
            <h2>What Makes Ishan Learning Different</h2>
            <div className="difference-grid">
              <div className="difference-card">
                <h4>School-Supportive Approach</h4>
                <p>We strengthen what students learn in school rather than replacing formal education.</p>
              </div>
              <div className="difference-card">
                <h4>Focus on Conceptual Clarity</h4>
                <p>Priority is given to understanding, revision and doubt resolution.</p>
              </div>
              <div className="difference-card">
                <h4>Psychology-Informed Learning</h4>
                <p>Teaching is guided by attention span, learning pace and emotional comfort.</p>
              </div>
              <div className="difference-card">
                <h4>Student-Centred Guidance</h4>
                <p>Students are supported without comparison, fear or pressure.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="about-section highlight-section">
          <div className="section-content">
            <h2>Who We Serve</h2>
            <p>Ishan Learning supports:</p>
            <ul className="serve-list">
              <li>School students seeking clearer understanding of concepts</li>
              <li>Learners who need reinforcement beyond classrooms</li>
              <li>Students experiencing academic pressure or confusion</li>
              <li>Families looking for balanced and stress-aware learning support</li>
            </ul>
          </div>
        </section>

        {/* Founder */}
        <section className="about-section founder-section">
          <div className="section-content">
            <h2>Founder</h2>
            <div className="founder-card">
              <h3>Abhishek Saini</h3>
              <p className="founder-title">Founder, Ishan Learning</p>
              <p>
                Ishan Learning was created to support school students in understanding their subjects clearly and studying with confidence.
              </p>
              <p>
                The platform is guided by Abhishek Saini, who holds Master's degrees in Psychology and Sociology. He is a Gold Medalist in Psychology, has qualified UGC-NET in Psychology and UGC-NET with JRF in Sociology and is currently pursuing a PhD in Sociology.
              </p>
              <p>
                Drawing from his academic training, Abhishek focuses on clarity-based learning, balanced academic expectations and responsible student guidance.
              </p>
              <div className="founder-quote">
                <blockquote>
                  "When students are given conceptual clarity and patience, learning becomes meaningful rather than stressful."
                </blockquote>
                <p>— Abhishek Saini</p>
              </div>
            </div>
          </div>
        </section>

        {/* Role & Responsibility */}
        <section className="about-section highlight-section">
          <div className="section-content">
            <h2>Our Role & Responsibility</h2>
            <div className="responsibility-box">
              <p><strong>Ishan Learning is an academic learning support platform.</strong></p>
              <p>We do not replace schools, formal education systems or clinical or therapeutic services.</p>
              <p>
                Our role is to support learning, reinforce understanding and promote a healthy and balanced academic approach.
              </p>
            </div>
          </div>
        </section>

        {/* Join Journey */}
        <section className="about-section cta-section">
          <div className="section-content">
            <h2>Join Our Learning Journey</h2>
            <p>
              We believe schools build the foundation and supportive learning helps strengthen it.
            </p>
            <p>
              At Ishan Learning, we invite students and parents to be part of a learning journey based on clarity, balance and understanding.
            </p>
            <div className="journey-tagline">
              <p><strong>Learn clearly.</strong></p>
              <p><strong>Strengthen foundations.</strong></p>
              <p><strong>Grow with confidence.</strong></p>
            </div>
          </div>
        </section>
      </main>

      <HomeButton />
      <Footer />
    </div>
  )
}
