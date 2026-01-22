import "@/styles/why-choose.css"

export default function WhyChoose() {
  return (
    <section className="why-choose">
      <div className="why-choose-container">
        <div className="why-choose-content">
          <h2>Why Indian Students Choose Ishan</h2>
          <p>
            We understand the unique pressures of the Indian education system. Our approach is designed to produce
            results while maintaining peace of mind.
          </p>

          <div className="features-list">
            <div className="feature-item">
              <input type="checkbox" checked readOnly />
              <span>Interactive Video Lessons</span>
              <p>Engaging content delivered by expert educators.</p>
            </div>
            <div className="feature-item">
              <input type="checkbox" checked readOnly />
              <span>NCERT Integrated Notes</span>
              <p>Comprehensive notes aligned with NCERT textbooks.</p>
            </div>
            <div className="feature-item">
              <input type="checkbox" checked readOnly />
              <span>Guidance and Mental Wellbeing</span>
              <p>Support that helps you stay confident, focused, and consistent.</p>
            </div>
          </div>
        </div>

        <div className="why-choose-image">
          <div className="query-form-container">
            <h2 className="qrtxt">Have Questions?</h2>
            <img src="/qr.png" alt="Query Illustration" width={400} height={200} />
              <div className="query-instructions">
              <h2  className="qrtxt">Submit Your Query....</h2>
              <a href="\submit"  target="_blank">
              <button className="submit-query-btn">Submit</button>
              </a>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}
