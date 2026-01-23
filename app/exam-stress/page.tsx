"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import HomeButton from "@/components/home-button"
import "@/styles/exam-stress.css"

export default function ExamStress() {
  return (
    <>
      <Header />
      <HomeButton />

      <main className="exam-stress-page">
        {/* Hero Section */}
        <section className="exam-stress-hero">
          <div className="hero-content">
            <h1>Exam Stress Support</h1>
            <p className="hero-subtitle">
              Exam stress is not a sign of weakness. It is a common response to pressure, expectations and uncertainty.
            </p>
            <p className="hero-description">
              At Ishan Learning, exam stress support is not about eliminating stress completely. It is about helping students understand what they are experiencing and learning how to manage it in healthier ways.
            </p>
          </div>
        </section>

        {/* Understanding Exam Stress */}
        <section className="exam-stress-section">
          <h2>Why Exam Stress Happens</h2>
          <p>
            Exams carry more than just questions. They often carry expectations from parents, teachers, peers and sometimes from the student themselves.
          </p>
          <p>
            Fear of failure, pressure to perform, comparison with others and limited time can make even well-prepared students feel anxious. When stress increases, the mind starts focusing more on outcomes than understanding, which makes learning harder.
          </p>
          <p>
            This page exists to help students recognise exam stress and respond to it with awareness rather than fear.
          </p>
        </section>

        <section className="exam-stress-section">
          <h2>Understanding Exam Stress</h2>
          <p>
            Some level of stress before exams is normal. It can increase alertness and motivation.
          </p>
          <p>
            Problems begin when stress becomes excessive or constant. At that point, students may experience difficulty concentrating, mental fatigue, self-doubt or fear of blanking out during exams.
          </p>
          <p>
            Exam stress is not always about lack of preparation. Many times, it is about how the mind reacts to pressure.
          </p>
        </section>

        <section className="exam-stress-section">
          <h2>When Studying Starts Feeling Heavy</h2>
          <p>
            Students often say that despite studying, they feel restless, tired or stuck. This happens when the mind is overloaded and does not get enough space to recover.
          </p>
          <p>
            Continuous pressure without rest can reduce efficiency. Studying longer hours does not always mean studying better. Learning becomes more effective when the mind feels calm enough to process information.
          </p>
          <p>
            Understanding this helps students stop blaming themselves unnecessarily.
          </p>
        </section>

        <section className="exam-stress-section">
          <h2>Before the Exam: Managing the Build-Up</h2>
          <p>
            As exams approach, thoughts about results and performance often increase. This can make students feel rushed or panicked.
          </p>
          <p>
            At this stage, it is important to slow down mentally, focus on what is within control and avoid last-minute comparison. Calm routines, realistic expectations and clarity about revision help reduce anxiety.
          </p>
          <p>
            Stress reduces when the mind feels prepared and supported, not when it is pushed harder.
          </p>
        </section>

        <section className="exam-stress-section">
          <h2>During the Exam: Staying Grounded</h2>
          <p>
            Many students worry about blanking out or losing control during exams. This fear itself can increase anxiety.
          </p>
          <p>
            When the mind feels overwhelmed, grounding attention back to the present moment helps. Taking a few calm breaths, reading questions slowly and reminding oneself that stress does not mean failure can bring stability.
          </p>
          <p>
            Exams test understanding and recall, not perfection.
          </p>
        </section>

        <section className="exam-stress-section">
          <h2>After the Exam: Letting Go</h2>
          <p>
            Stress does not always end when the exam ends. Some students continue replaying mistakes or worrying about outcomes.
          </p>
          <p>
            Once an exam is over, repeatedly analysing it often increases anxiety without changing results. Learning to let go after effort is an important part of emotional balance.
          </p>
          <p>
            Recovery time is not wasted time. It helps the mind reset for what comes next.
          </p>
        </section>

        {/* Notes for Different Groups */}
        <section className="exam-stress-notes">
          <h2>Voices of Support</h2>
          <div className="notes-container">
            <div className="note-card note-card-students">
              <div className="note-icon">🎓</div>
              <h3>A Note for Students</h3>
              <p>
                Feeling stressed during exams does not mean you are weak or incapable. It usually means you care and want to do well.
              </p>
              <p>
                You are allowed to feel nervous. You are also allowed to rest. Exam stress does not define your intelligence or your future. Learning to manage pressure is a skill that develops with time and practice.
              </p>
            </div>

            <div className="note-card note-card-parents">
              <div className="note-icon">👨‍👩‍👧‍👦</div>
              <h3>A Note for Parents</h3>
              <p>
                Students often absorb stress from the environment around them. Support becomes most helpful when it focuses on reassurance rather than constant reminders.
              </p>
              <p>
                Listening without judgement, avoiding comparison and acknowledging effort can reduce anxiety significantly. When students feel safe, they perform better emotionally and academically.
              </p>
            </div>

            <div className="note-card note-card-teachers">
              <div className="note-icon">👨‍🏫</div>
              <h3>A Note for Teachers</h3>
              <p>
                Teachers influence how students perceive exams and failure. Calm communication, realistic expectations and balanced feedback help students manage stress more effectively.
              </p>
              <p>
                When classrooms emphasise understanding over fear, students develop healthier attitudes toward exams and learning.
              </p>
            </div>
          </div>
        </section>

        {/* Psychology Perspective */}
        <section className="exam-stress-section highlight-section">
          <h2>A Psychology-Informed Perspective</h2>
          <p>
            Psychology shows that excessive anxiety interferes with attention, memory and recall. When the nervous system feels threatened, the brain focuses on survival rather than thinking clearly.
          </p>
          <p>
            Calmness supports learning. Reassurance, structure and emotional safety help students perform closer to their actual ability.
          </p>
          <p>
            Exam stress support focuses on restoring balance, not removing responsibility.
          </p>
        </section>

        {/* Boundary */}
        <section className="exam-stress-section boundary-box">
          <h3>Important Boundary</h3>
          <p>
            Ishan Learning does not provide clinical counselling or therapeutic services through this section. This page offers academic and psychological awareness only.
          </p>
          <p>
            Students experiencing severe or persistent distress are encouraged to seek support from trusted adults, school counsellors or qualified professionals.
          </p>
        </section>

        {/* Closing Reflection */}
        <section className="exam-stress-section highlight-section">
          <h2>A Gentle Closing</h2>
          <p>
            Exams are important, but they are not everything. They measure performance in a moment, not potential over a lifetime.
          </p>
          <p>
            Taking care of your mental well-being during exams is not a distraction from success. It is part of learning responsibly.
          </p>
        </section>

        {/* Practical Techniques */}
        <section className="exam-stress-techniques">
          <h2>Practical Techniques to Reduce Exam Stress</h2>
          <p className="intro-text">
            Exam stress usually increases when the mind feels that everything has to be handled at once. Stress reduces when the mind starts feeling control, clarity and structure.
          </p>
          <p className="intro-text">
            These techniques are not meant to eliminate stress completely. They are meant to lower mental overload and help the mind function more steadily during exam periods.
          </p>

          <ol className="techniques-grid">
            <li className="technique-card">
              <h3>Strengthen What You Already Know</h3>
              <p>
                One of the biggest sources of exam stress is focusing too much on what is not yet clear.
              </p>
              <p>
                Instead, begin by identifying topics that you already understand reasonably well. Revising and strengthening these topics builds confidence.
              </p>
              <p>
                When the mind recognises that some areas are already under control, anxiety naturally reduces. Revising strong topics is not avoidance - it is psychological grounding.
              </p>
            </li>

            <li className="technique-card">
              <h3>Break the Syllabus Into Manageable Units</h3>
              <p>
                Looking at the entire syllabus at once often overwhelms the mind. A more effective approach is to divide the syllabus into small, manageable parts.
              </p>
              <p>
                During each study session, focus only on a short and realistic target. Instead of thinking about finishing everything, focus on handling the next 40-60 minutes.
              </p>
              <p>
                The mind copes better with present tasks than future pressure.
              </p>
            </li>

            <li className="technique-card">
              <h3>Use Active Recall Instead of Repeated Reading</h3>
              <p>
                Reading the same material again and again may create familiarity, but it does not always create confidence.
              </p>
              <p>
                After studying a topic, pause and try to recall the key ideas without looking at the book. This process strengthens memory and reduces fear related to forgetting during exams.
              </p>
              <p>
                Confidence grows from recall, not from repeated reading.
              </p>
            </li>

            <li className="technique-card">
              <h3>Practice With Time, Without Judging Yourself</h3>
              <p>
                Timed practice is often seen as stressful, but when used correctly, it reduces exam fear.
              </p>
              <p>
                Occasionally practise answering questions within a time limit, without judging your performance harshly. The goal is not perfection, but familiarity with time pressure.
              </p>
              <p>
                When the brain experiences exam-like situations calmly, stress reduces.
              </p>
            </li>

            <li className="technique-card">
              <h3>Create a Simple and Realistic Revision Loop</h3>
              <p>
                In the final days before exams, trying to learn new topics often increases stress.
              </p>
              <p>
                A simple revision loop works better. Begin with topics you are confident in, then review moderately difficult areas and finally take a brief overview of remaining content.
              </p>
              <p>
                Revision does not mean making everything perfect. It means keeping concepts familiar and accessible.
              </p>
            </li>

            <li className="technique-card">
              <h3>Calm the Body to Calm the Mind</h3>
              <p>
                Stress is not only mental; it is physical as well. If the body feels tense or restless, the mind cannot stay calm.
              </p>
              <p>
                Between study sessions, take short breaks. Walk a little, drink water, stretch lightly or practise slow breathing.
              </p>
              <p>
                Slow breathing sends a signal to the nervous system that the situation is safe.
              </p>
            </li>

            <li className="technique-card">
              <h3>Stop Studying When the Mind Is Exhausted</h3>
              <p>
                Studying with an exhausted mind often feels unproductive and increases frustration.
              </p>
              <p>
                When mental fatigue sets in, continuing to study becomes punishment rather than learning. Rest at the right time improves retention and recall later.
              </p>
              <p>
                Taking breaks is not laziness. It is a learning strategy.
              </p>
            </li>

            <li className="technique-card">
              <h3>Reduce Comparison During Exam Periods</h3>
              <p>
                Comparing preparation levels with others during exam time increases stress rapidly.
              </p>
              <p>
                Seeing someone else's progress can make your own preparation feel insufficient, even when it is not. Exam preparation is personal.
              </p>
              <p>
                During this phase, focus on your clarity and progress rather than others'.
              </p>
            </li>
          </ol>

          <div className="reminder-box">
            <h3>A Gentle Reminder for Students</h3>
            <p>
              Feeling stressed does not mean you are weak. It often means you care and are putting in effort.
            </p>
            <p>
              Your goal is not perfection. Your goal is to give your best possible effort with a calm and stable mind.
            </p>
          </div>
        </section>

        {/* Exam Day Calm Routine */}
        <section className="exam-stress-routine">
          <h2>Exam Day Calm Routine</h2>
          <p className="intro-text">
            The goal on exam day is not to feel completely calm. Some nervousness is normal and expected. The goal is to keep anxiety manageable, so the mind stays stable and functional.
          </p>
          <p className="intro-text">
            This routine covers what to do before the exam, during the exam and after the exam.
          </p>

          <ol className="routine-cards">
            <li className="routine-card">
              <h3>Before Leaving for the Exam</h3>
              <p>
                On exam morning, the mind often jumps ahead to results, mistakes or difficult questions. Trying to study new topics at this stage usually increases anxiety.
              </p>
              <p>
                Limit revision to familiar points only. Focus on what you already know rather than what you have not covered perfectly. Confidence comes from familiarity, not last-minute pressure.
              </p>
              <p>
                Before leaving home, take three or four slow, deep breaths. Slow breathing signals safety to the nervous system and helps reduce physical tension.
              </p>
            </li>

            <li className="routine-card">
              <h3>Just Before Entering the Exam Hall</h3>
              <p>
                Anxiety often peaks just before entering the exam hall. This is normal.
              </p>
              <p>
                Avoid last-minute discussions, question predictions, or comparison with others. These conversations usually increase confusion and panic.
              </p>
              <p>
                Bring your attention to simple physical sensations. Stand comfortably, feel your feet on the ground, and keep your breathing steady. Grounding attention in the present moment helps calm the mind.
              </p>
            </li>

            <li className="routine-card">
              <h3>During the Exam</h3>
              <p>
                When you receive the question paper, do not rush. Take one or two minutes to look through the paper calmly.
              </p>
              <p>
                If a question increases anxiety, skip it temporarily and move to another one. Stress blocks thinking and forcing yourself to solve a difficult question immediately often increases panic.
              </p>
              <p>
                If your thoughts start racing, pause briefly and slow your breathing for a few seconds. Anxiety does not mean you are blank; it usually means the mind is overloaded.
              </p>
            </li>

            <li className="routine-card">
              <h3>If You Feel Stuck or Blank</h3>
              <p>
                Feeling blank during an exam is a very common experience. It does not reflect your intelligence or preparation.
              </p>
              <p>
                If this happens, take your eyes off the paper for a few seconds, relax your shoulders and slow your breathing. Giving the mind a short pause often helps recall return naturally.
              </p>
            </li>

            <li className="routine-card">
              <h3>After Finishing the Exam</h3>
              <p>
                Once the exam is over, many students replay mistakes or compare answers. This usually increases anxiety without changing anything.
              </p>
              <p>
                What is done cannot be changed. Repeated analysis after the exam does not improve outcomes and only adds mental strain.
              </p>
              <p>
                Allow your mind to rest before moving on to the next task.
              </p>
            </li>

            <li className="routine-card">
              <h3>Between Exams</h3>
              <p>
                If exams are spread across multiple days, mental recovery between papers is important.
              </p>
              <p>
                Carrying stress from one exam into the next increases overall anxiety. Treat each exam as a separate event and allow yourself to reset mentally after each one.
              </p>
            </li>
          </ol>

          <div className="closing-reminder">
            <p>
              <strong>A Simple Reminder:</strong> Exams measure performance in a moment, not your ability or future.
            </p>
            <p>
              Your responsibility is to give sincere effort with a calm and steady mind, not to be perfect. A calmer mind often performs closer to its actual ability.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
