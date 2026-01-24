import Link from "next/link"
import { useLanguage } from "@/components/language-context"
import "@/styles/guidance.css"

export default function Guidance() {
  const { t } = useLanguage()
  
  const cards = [
    {
      icon: "🧘",
      title: t("examStressSupport"),
      description: t("examStressDesc"),
      link: t("readGuide"),
      href: "/exam-stress"
    },
    {
      icon: "🎯",
      title: t("careerAwareness"),
      description: t("careerDesc"),
      link: t("exploreCareers"),
      href: "/careers"
    },
    {
      icon: "❤️",
      title: t("mentalWellbeing"),
      title1: t("selfReflection"),
      description: t("wellbeingDesc"),
      link: t("startCheck"),
      href: "/wellbeing"
    },
  ]

  return (
    <section className="guidance" id="guidance">
      <div className="guidance-container">
        <div className="guidance-header">
          <h2>{t("guidanceWellbeingCorner")}</h2>
          <p>{t("calmMindLearns")}</p>
        </div>

        <div className="guidance-cards">
          {cards.map((card, index) => (
            <div key={index} className="guidance-card">
              <div className="card-icon">{card.icon}</div>
             <h3 className="text1">{card.title}<br/>{card.title1}</h3>
            
              <p>{card.description}</p>
              {card.href ? (
                <Link href={card.href} className="card-link">
                  {card.link}
                </Link>
              ) : (
                <a href="#" className="card-link">
                  {card.link}
                </a>
              )}
            </div>
          ))}
        </div>
        <a className="request-a-session" href="/reqest" target="_blank"> 
          <button className="session-btn">{t("requestCounseling")}</button>
        </a>
      <Link href="\tdy" className="home-button1" target="_blank">
      {/* <span className="home-icon-txt">Today's Class Schedule </span> */}
      </Link>
      </div>
    </section>
  )
}
