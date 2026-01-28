import "@/styles/hero.css";
import { useLanguage } from "@/components/language-context";
import SearchClass from "@/components/search"
// import Image from "@/components/optimized-image"
export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          {/* <div className="hero-badge">✨ ENROLLMENT OPEN FOR 2024-25</div> */}
          <div className="hero-title">
            <div className="hero-txt"> {t("class6to12")}</div>
            <span className="highlight">{t("stayConfident")}</span>
          </div>
          <a href="https://www.youtube.com/@IshanLearning" className="youtubeican" title="YouTube" target="_blank">
            <div className="socialyt" title="YouTube" >
              ▶
            </div>
            <div className="youtubetxt ">@IshanLearning</div>
          </a>
          {/* <SearchClass/> */}
          <div className="education-right">{t("education_right")}</div>
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
            <a href="https://www.facebook.com/ishanlearning/" className="social-icon" title="Facebook" target="_blank">
              <img src="/face.png" alt="Instagram" width={65} height={65} />
            </a>
            <a href="https://www.twitter.com/ishanlearning" className="social-icon" title="Twitter" target="_blank">
              <img src="/x.png" alt="Instagram" width={65} height={65} />
            </a>
            <a href="https://www.instagram.com/ishanlearning/" className="social-icon" title="Instagram" target="_blank">
              <img src="/insta.png" alt="Instagram" width={64} height={64} />
            </a>
            <a href="#" className="social-icon" title="Telegram" target="_blank">
              <img src="/tele.png" alt="Telegram" width={54} height={54} />
            </a>
            <a href="#" className="social-icon linkedin" title="LinkedIn" target="_blank">
              <img src="/in.png" alt="LinkedIn" width={45} height={45} />
            </a>
            <a href="#" className="social-icon1 whatsapp" title="Whatsapp" target="_blank">
              <img src="/what.png" alt="Whatsapp" width={45} height={45} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
