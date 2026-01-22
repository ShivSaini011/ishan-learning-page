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
          <a href="\ytpage"className="youtubeican" title="YouTube" target="_blank">
            <div className="socialyt" title="YouTube" >
              ▶
            </div>
            <div className="youtubetxt ">@IshanLearning</div>
          </a>
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
            <a href="#" className="social-icon" title="Facebook" target="_blank">
              <img src="/face.png" alt="Instagram" width={65} height={65} />
            </a>
            <a href="#" className="social-icon" title="Twitter" target="_blank">
              <img src="/x.png" alt="Instagram" width={65} height={65} />
            </a>
            <a href="#" className="social-icon" title="Instagram" target="_blank">
              <img src="/insta.png" alt="Instagram" width={64} height={64} />
            </a>
            <a href="#" className="social-icon" title="LinkedIn" target="_blank">
              <img src="/tele.png" alt="Instagram" width={54} height={54} />
            </a>
            <a href="#" className="social-icon1 whatsapp" title="YouTube" target="_blank">
              <img src="/what.png" alt="Instagram" width={45} height={45} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
