import "@/styles/why-choose.css"
import { useLanguage } from "@/components/language-context"

export default function WhyChoose() {
  const { t } = useLanguage()
  
  return (
    <section className="why-choose">
      <div className="why-choose-container">
        <div className="why-choose-content">
          <h2>{t("whyChooseHeading")}</h2>
          <p>
            {t("whyChooseDesc")}
          </p>

          <div className="features-list">
            <div className="feature-item">
              <input type="checkbox" checked readOnly />
              <span>{t("interactiveVideos")}</span>
              <p>{t("interactiveDesc")}</p>
            </div>
            <div className="feature-item">
              <input type="checkbox" checked readOnly />
              <span>{t("ncertNotes")}</span>
              <p>{t("ncertDesc")}</p>
            </div>
            <div className="feature-item">
              <input type="checkbox" checked readOnly />
              <span>{t("guidanceWellbeing")}</span>
              <p>{t("guidanceDesc")}</p>
            </div>
          </div>
        </div>

        <div className="why-choose-image">
          <div className="query-form-container">
            <h2 className="qrtxt">{t("haveQuestions")}</h2>
            <img className="whyimg" src="/qr.png" alt="Query Illustration" width={380} height={380} />
              <div className="query-instructions">
              <h2  className="qrtxt">{t("submitYourQuery")}</h2>
              <a href="\submit"  target="_blank">
              <button className="submit-query-btn">{t("submitBtn")}</button>
              </a>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}
