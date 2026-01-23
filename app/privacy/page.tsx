import "@/styles/privacy.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HomeButton from "@/components/home-button";

export default function PrivacyPolicy() {
  return (
    <div>
      <Header />
      <div className="privacy-container">
        <div className="privacy-content">
          <h1>Privacy Policy</h1>
          <p className="effective-date">Effective Date: [dd/mm/yyyy]</p>

          <p className="intro">
            Ishan Learning respects the privacy of all visitors and users. This
            website is designed to share educational resources and academic
            guidance. We are committed to transparency and responsible handling
            of limited information that users may voluntarily share.
          </p>

          <section>
            <h2>1. Access to Learning Content</h2>
            <ul>
              <li>
                Users can access learning content without login or registration
              </li>
              <li>No account creation is required</li>
              <li>
                Learning materials are shared through:
                <ul>
                  <li>YouTube playlist links</li>
                  <li>PDF resources</li>
                </ul>
              </li>
              <li>
                Ishan Learning does not store user profiles or learning history.
              </li>
            </ul>
          </section>

          <section>
            <h2>2. Information We Collect (Only Through Google Forms)</h2>
            <p>
              Personal information is collected only when users voluntarily
              submit a query or request a guidance session through Google Forms
              linked on this website.
            </p>
            <p>The information may include:</p>
            <ul>
              <li>Name</li>
              <li>Email address or contact number</li>
              <li>Class or academic details</li>
              <li>Query or request message</li>
            </ul>
            <p>
              This data is collected only for the purpose of responding to the
              submitted request.
            </p>
          </section>

          <section>
            <h2>3. How Submitted Information Is Used</h2>
            <p>Information received through Google Forms is used solely to:</p>
            <ul>
              <li>Respond to user queries</li>
              <li>
                Provide academic guidance or session-related communication
              </li>
              <li>Improve clarity and relevance of learning support</li>
            </ul>
            <p>
              We do not sell, rent or share this information with third
              parties.
            </p>
          </section>

          <section>
            <h2>4. Data Storage and Handling</h2>
            <ul>
              <li>
                Submitted information is stored securely within Google Forms
              </li>
              <li>
                Ishan Learning does not maintain a separate cloud database or
                user management system
              </li>
              <li>
                Data is accessed only when required for response or guidance
                purposes
              </li>
            </ul>
          </section>

          <section>
            <h2>5. Cookies and Tracking</h2>
            <ul>
              <li>
                Ishan Learning does not use cookies or tracking tools to monitor
                individual users.
              </li>
              <li>
                However, external platforms such as Google or YouTube may apply
                their own cookies and data practices when accessed through
                links.
              </li>
            </ul>
          </section>

          <section>
            <h2>6. Third-Party Platforms</h2>
            <p>This website may link to:</p>
            <ul>
              <li>Google Forms</li>
              <li>YouTube</li>
              <li>Other educational resources</li>
            </ul>
            <p>
              Users are subject to the privacy policies of these third-party
              platforms.
            </p>
            <p>
              Ishan Learning is not responsible for their data collection or
              practices.
            </p>
          </section>

          <section>
            <h2>7. Children's Privacy</h2>
            <ul>
              <li>Ishan Learning supports school-level education.</li>
              <li>No personal data is collected automatically from children</li>
              <li>
                Any information submitted through forms should be done with
                parental or guardian awareness
              </li>
            </ul>
          </section>

          <section>
            <h2>8. No Clinical or Counselling Services</h2>
            <ul>
              <li>Ishan Learning is an academic learning support platform.</li>
              <li>
                We do not provide medical, psychological, counselling or
                therapeutic services and no data is used for diagnosis or
                treatment.
              </li>
            </ul>
          </section>

          <section>
            <h2>9. Data Security</h2>
            <ul>
              <li>
                We take reasonable care to handle submitted information
                responsibly.
              </li>
              <li>
                However, since data transmission occurs online, complete
                security cannot be guaranteed.
              </li>
            </ul>
          </section>

          <section>
            <h2>10. Changes to This Privacy Policy</h2>
            <p>
              This Privacy Policy may be updated if website features or data
              practices change.
            </p>
            <p>Any updates will be reflected on this page.</p>
          </section>

          <section>
            <h2>11. Contact Information</h2>
            <p>For queries related to learning support or privacy:</p>
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
  );
}
