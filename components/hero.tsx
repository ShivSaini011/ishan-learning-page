import "@/styles/hero.css";
import { useLanguage } from "@/components/language-context";
// import Image from "@/components/optimized-image"
export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          {/* <div className="hero-badge">✨ ENROLLMENT OPEN FOR 2024-25</div> */}
          <h1 className="hero-title">
            {t("Class 6 to 12 - Learn Smart,")}{" "}
            <span className="highlight">{t("Stay Confident")}</span>
          </h1>
          <div className="youtubeican">
            <a href="#" className="socialyt" title="YouTube">
              ▶
            </a>
            <div className="youtubetxt ">@LshanLearning</div>
          </div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search Class..."
              className="search-input"
            />
            <button className="search-btn">🔍</button>
          </div>
        </div>

        <div className="hero-right-section">
          {/* Search bar */}
          {/* <div className="search-bar">
            <input type="text" placeholder="Search courses..." className="search-input" />
            <button className="search-btn">🔍</button>
          </div> */}
          {/* Logo */}
          <div className="hero-logo">
            <div className="logo-placeholder">
              <img src="logo.png" alt="Logo" className="logo-image" />
            </div>
          </div>

          {/* Social media icons */}
          <div className="social-icons">
            <a href="#" className="social-icon" title="Facebook">
              <img src="/face.png" alt="Instagram" width={65} height={65} />
            </a>
            <a href="#" className="social-icon" title="Twitter">
              <img src="/x.png" alt="Instagram" width={65} height={65} />
            </a>
            <a href="#" className="social-icon" title="Instagram">
              <img src="/insta.png" alt="Instagram" width={64} height={64} />
            </a>
            <a href="#" className="social-icon" title="LinkedIn">
              <img src="/tele.png" alt="Instagram" width={54} height={54} />
            </a>
            <a href="#" className="social-icon" title="YouTube">
              <img src="/what.png" alt="Instagram" width={45} height={45} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
