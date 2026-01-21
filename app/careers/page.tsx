"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import HomeButton from "@/components/home-button"
import Link from "next/link"
import "@/styles/careers.css"

export default function Careers() {
  return (
    <div className="app">
      <Header />

      <main className="careers-container">
        <section className="careers-hero">
          <h1>Career Awareness</h1>
          <p>Thinking clearly about your future without panic, pressure, or comparison</p>
        </section>

        {/* Opening Section */}
        <section className="careers-section">
          <div className="section-content">
            <p className="intro-text">
              Career awareness is not about reaching certainty early. It is about learning to think clearly about the future without panic, pressure, or comparison.
            </p>
            <p className="intro-text">
              At Ishan Learning, career awareness is treated as a supportive process. This space exists to help students slow down, reflect, and understand that career development happens gradually, not in a single moment.
            </p>
          </div>
        </section>

        {/* Why Difficult */}
        <section className="careers-section highlight-section">
          <div className="section-content">
            <h2>Why Career Conversations Feel Difficult</h2>
            <p>
              For many students, the word "career" brings anxiety. This anxiety usually comes from the idea that one decision will decide everything that follows.
            </p>
            <p>
              Very early in school life, students begin to hear that they must be clear, confident, and sure. Marks, rankings, and comparisons slowly start defining self-worth. When clarity does not come immediately, uncertainty begins to feel like failure. Over time, even capable students start doubting themselves.
            </p>
            <p className="emphasis">
              This page exists to interrupt that pressure and remind students that uncertainty during school years is common and normal.
            </p>
          </div>
        </section>

        {/* Career as Process */}
        <section className="careers-section">
          <div className="section-content">
            <h2>Career as a Developing Process</h2>
            <p>
              Careers rarely follow a straight or fixed path. For most people, interests change, skills develop, and opportunities appear only after time and exposure.
            </p>
            <p>
              Many individuals understand what they enjoy only after trying different subjects, roles, or environments. Some change directions completely, while others combine skills in unexpected ways. Early uncertainty does not indicate poor planning. In many cases, it reflects growth that is still unfolding.
            </p>
            <p className="emphasis">
              Career awareness begins with accepting that not knowing everything yet is part of the process.
            </p>
          </div>
        </section>

        {/* Class 10 */}
        <section className="careers-section highlight-section">
          <div className="section-content">
            <h2>After Class 10: Direction, Not Definition</h2>
            <p>
              After Class 10, students usually move into broader academic directions such as science, commerce, humanities, or skill-based pathways. These choices provide structure for learning, but they do not define an entire future.
            </p>
            <p>
              At this stage, the focus should remain on understanding subjects, developing learning habits, and observing interests as they form. Decisions made here are starting directions, not permanent commitments.
            </p>
          </div>
        </section>

        {/* Class 12 */}
        <section className="careers-section">
          <div className="section-content">
            <h2>After Class 12: Paths That Continue to Evolve</h2>
            <p>
              After Class 12, career possibilities often widen into academic, professional, creative, or skill-based fields. These paths are not final destinations. They are entry points that can continue to change as students gain experience and exposure.
            </p>
            <p>
              Expecting complete certainty at this stage often adds pressure without improving clarity. Growth continues beyond formal education, and career understanding keeps evolving with time.
            </p>
          </div>
        </section>

        {/* Self Understanding */}
        <section className="careers-section highlight-section">
          <div className="section-content">
            <h2>Understanding Yourself Before Choosing Anything</h2>
            <p className="emphasis">
              Career clarity does not begin with options. It begins with understanding how you function as a learner and as a person.
            </p>
            <p>
              Some students enjoy reading and understanding concepts deeply. Others prefer applying ideas practically. Some feel comfortable with structure and routine, while others learn better with flexibility. These preferences are not right or wrong. They simply show how a student engages with learning.
            </p>
            <p>
              Perfect answers are not required. Noticing patterns in how you study, think, and feel is enough at this stage.
            </p>
          </div>
        </section>

        {/* How Interests Develop */}
        <section className="careers-section">
          <div className="section-content">
            <h2>How Interests Actually Develop</h2>
            <p>
              Many students believe that interest should be clear from the beginning. Psychology suggests that this is rarely true.
            </p>
            <p>
              Interest usually develops after exposure, not before it. As understanding increases, confidence grows, and curiosity often follows. It is common for a subject to feel boring or difficult at first and meaningful later. It is also common to like something only after spending time with it.
            </p>
            <p className="emphasis">
              Students are not expected to feel passion immediately.
            </p>
          </div>
        </section>

        {/* Pressure and Reality */}
        <section className="careers-section highlight-section">
          <div className="section-content">
            <h2>Pressure, Marks, and Reality</h2>
            <p>
              Marks are important, but they do not tell the full story of a student's future. They reflect performance within a specific system at a specific time.
            </p>
            <p>
              Pressure, comparison, and fear tend to narrow thinking. When the mind feels rushed, it tries to escape uncertainty rather than understand it. If career thoughts feel confusing or anxiety-provoking, pausing is often more helpful than forcing clarity.
            </p>
            <p className="emphasis">
              Clarity does not come from panic.
            </p>
          </div>
        </section>

        {/* What Career Path Means */}
        <section className="careers-section">
          <div className="section-content">
            <h2>What a Career Path Really Means</h2>
            <p>
              A career path is not a job title chosen once. It is a direction that keeps changing as learning and experience increase.
            </p>
            <p>
              Some paths begin academically and later become practical. Others start with skills and later include formal education. Many change completely as people discover new interests. Very few careers remain fixed forever.
            </p>
            <p className="emphasis">
              Nothing is as locked as it feels in the early years.
            </p>
          </div>
        </section>

        {/* Timing and Readiness */}
        <section className="careers-section highlight-section">
          <div className="section-content">
            <h2>About Timing and Readiness</h2>
            <p>
              Career clarity develops at different speeds for different people. Being clear early is not an achievement. Taking time is not a failure.
            </p>
            <p>
              Some students need more exposure, some need reassurance, and some need space to think without pressure. Growth into clarity happens gradually.
            </p>
            <p className="emphasis">
              Students are allowed to take time.
            </p>
          </div>
        </section>

        {/* Notes */}
        <section className="careers-notes">
          <h2>Voices of Guidance</h2>
          <div className="notes-grid">
            <div className="note-card note-card-students">
              <div className="note-icon">📚</div>
              <h3>A Note for Students</h3>
              <p>
                Feeling unsure about your career does not mean you are behind or incapable. It often means you are thinking seriously about your future.
              </p>
              <p>
                You do not need to compare your journey with anyone else's. Understanding yourself step by step matters more than finding a perfect answer. Career thinking is not about deciding everything at once, but about making thoughtful choices over time.
              </p>
            </div>

            <div className="note-card note-card-parents">
              <div className="note-icon">👨‍👩‍👧</div>
              <h3>A Note for Parents</h3>
              <p>
                Career development is deeply influenced by the environment students grow up in. Support works best when it reduces fear rather than increases urgency.
              </p>
              <p>
                When students are given space to think, allowed to grow at their own pace, and valued for effort as well as results, confidence develops more naturally. Comparison and constant pressure often increase anxiety without improving clarity.
              </p>
            </div>

            <div className="note-card note-card-teachers">
              <div className="note-icon">🏫</div>
              <h3>A Note for Teachers</h3>
              <p>
                Teachers play an important role in shaping how students view their abilities and future possibilities. Classroom experiences often influence confidence, interest, and self-belief.
              </p>
              <p>
                When expectations are realistic and guidance is patient, students feel safer exploring options. Learning environments that reduce fear and judgement support healthier career thinking.
              </p>
            </div>
          </div>
        </section>

        {/* Psychology Perspective */}
        <section className="careers-section highlight-section">
          <div className="section-content">
            <h2>A Psychology-Informed Perspective</h2>
            <p>
              Psychology shows that anxiety narrows thinking, while emotional safety allows reflection. Interest develops through exposure, not urgency. Clarity grows when pressure reduces.
            </p>
            <p className="emphasis">
              Career awareness focuses on creating conditions where students can think calmly and realistically about their future.
            </p>
          </div>
        </section>

        {/* Boundary */}
        <section className="careers-section">
          <div className="section-content">
            <div className="boundary-box">
              <h3>⚠️ Important Boundary</h3>
              <p>
                Ishan Learning does not provide career prediction, aptitude testing, counselling, or placement guidance. This page exists only for awareness and reflection.
              </p>
              <p className="emphasis">
                Its purpose is to support thoughtful thinking, not to define outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="careers-closing">
          <div className="section-content">
            <h2>A Gentle Closing</h2>
            <p className="closing-emphasis">
              Career development is not a race.
            </p>
            <p className="closing-text">
              Most clarity comes with time, learning, and experience.
            </p>
            <p className="closing-text">
              Exploring options, asking questions, and allowing uncertainty are part of responsible planning—not signs of delay or failure.
            </p>
          </div>
        </section>
<br />
        {/* CTA */}
        <section className="careers-cta">
          <h2>Ready to Explore?</h2>
          <p>Take your time. Think about your interests. Ask questions. Grow at your own pace.</p>
          <Link href="/#classes" className="cta-button">
            Explore Classes & Subjects
          </Link>
        </section>
      </main>

<br />
      <HomeButton />
      <Footer />
    </div>
  )
}
