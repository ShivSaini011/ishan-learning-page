import "@/styles/terms.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HomeButton from "@/components/home-button"

export default function TermsOfService() {
  return (
    <div className="terms">
      <Header />
    <div className="terms-container">
      <div className="terms-content">
        <h1>Terms of Services</h1>
        <p className="effective-date">Effective Date: [dd/mm/yyyy]</p>

        <p className="intro">
          Welcome to Ishan Learning.
          By accessing or using this website, you acknowledge that you have read, understood and agree to be bound by these Terms of Services. If you do not agree with any part of these terms, you are advised to discontinue use of the website.
        </p>

        <section>
          <h2>1. Nature and Scope of the Platform</h2>
          <p>
            Ishan Learning is an academic learning support platform created to complement and reinforce the school education system.
            The platform focuses on:
          </p>
          <ul>
            <li>Conceptual understanding of school-level subjects</li>
            <li>Academic reinforcement and revision</li>
            <li>Learning guidance informed by principles of psychology such as attention, motivation, stress awareness and emotional regulation</li>
          </ul>
          <p>Psychology-related content is provided solely for educational and awareness purposes and does not constitute professional mental health services.</p>
        </section>

        <section>
          <h2>2. No Clinical, Counselling or Therapeutic Services</h2>
          <p>Ishan Learning does not provide:</p>
          <ul>
            <li>Medical or healthcare services</li>
            <li>Psychological counselling or psychotherapy</li>
            <li>Diagnosis or treatment of mental health conditions</li>
            <li>Clinical assessment of intelligence (IQ), emotional intelligence (EI), personality or psychological disorders</li>
          </ul>
          <p>All guidance offered through the platform is non-clinical, non-diagnostic and academic in nature.</p>
        </section>

        <section>
          <h2>3. Access to Content</h2>
          <ul>
            <li>No user registration or login is required to access the website content</li>
            <li>Learning resources are provided through:
              <ul>
                <li>External YouTube playlist links</li>
                <li>Downloadable or viewable PDF materials</li>
              </ul>
            </li>
            <li>All content is intended for personal and non-commercial educational use only.</li>
          </ul>
        </section>

        <section>
          <h2>4. Ask Query and Request a Session (Google Forms)</h2>
          <p>Users may voluntarily submit information through Google Forms made available on the website for:</p>
          <ul>
            <li>Academic queries</li>
            <li>Requests for learning-related guidance or sessions</li>
          </ul>
          <p>By submitting a form, users agree that:</p>
          <ul>
            <li>The information provided is accurate and submitted voluntarily</li>
            <li>Communication may occur solely to address the submitted request</li>
            <li>Submission of a form does not guarantee a response, session or outcome</li>
            <li>Ishan Learning reserves the right to review, accept or decline requests at its discretion.</li>
          </ul>
        </section>

        <section>
          <h2>5. User Responsibilities</h2>
          <p>Users agree to:</p>
          <ul>
            <li>Use the website only for lawful, ethical and educational purposes</li>
            <li>Refrain from misuse, disruption or unauthorized use of content</li>
            <li>Not reproduce, distribute or commercially exploit materials without prior permission</li>
          </ul>
        </section>

        <section>
          <h2>6. Intellectual Property Rights</h2>
          <ul>
            <li>All original website content, text, structure and learning materials are the intellectual property of Ishan Learning</li>
            <li>Content accessed through third-party platforms (such as YouTube) remains subject to their respective terms and policies</li>
            <li>PDFs and resources are provided exclusively for individual educational use</li>
            <li>Unauthorized copying, redistribution or commercial use is strictly prohibited.</li>
          </ul>
        </section>

        <section>
          <h2>7. Third-Party Platforms and External Links</h2>
          <p>The website may contain links to third-party services including, but not limited to:</p>
          <ul>
            <li>YouTube</li>
            <li>Google Forms</li>
          </ul>
          <p>Ishan Learning does not control and is not responsible for the content, availability or data practices of these external platforms.</p>
        </section>

        <section>
          <h2>8. Limitation of Responsibility</h2>
          <p>Ishan Learning shall not be held responsible for:</p>
          <ul>
            <li>Academic performance, examination results or learning outcomes</li>
            <li>Emotional responses, stress levels or personal decisions of users</li>
            <li>Technical issues, interruptions or errors arising from third-party platforms</li>
          </ul>
          <p>Use of the website and its resources is at the user's own discretion.</p>
        </section>

        <section>
          <h2>9. Modification or Discontinuation of Services</h2>
          <p>Ishan Learning reserves the right to:</p>
          <ul>
            <li>Modify, update, or remove content</li>
            <li>Introduce new features or discontinue existing services</li>
            <li>Change website structure or offerings</li>
          </ul>
          <p>without prior notice.</p>
        </section>

        <section>
          <h2>10. Amendments to These Terms</h2>
          <p>These Terms of Services may be updated periodically.</p>
          <p>Continued use of the website after changes are posted constitutes acceptance of the revised terms.</p>
        </section>

        <section>
          <h2>11. Governing Law</h2>
          <p>These Terms of Services shall be governed by and interpreted in accordance with the applicable laws of India.</p>
        </section>

        <section>
          <h2>12. Contact Information</h2>
          <p>For any questions or concerns regarding these Terms of Services, please contact:</p>
          <ul className="contact-list">
            <li>📧 Email: [your email here]</li>
            <li>🌐 Website: Ishan Learning</li>
          </ul>
        </section>
      </div>
    </div>
        <HomeButton />
        <Footer />
    </div>
  )
}
