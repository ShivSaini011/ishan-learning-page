import "@/styles/features.css"
import { useLanguage } from "@/components/language-context"

export default function Features() {
  const { t } = useLanguage()
  
  const features = [
    {
      icon: "🎓",
      title: t("strongConceptual"),
      description: t("conceptDesc"),
    },
    {
      icon: "🌱",
      title: t("holisticGrowthTitle"),
      description: t("holisticDesc"),
    },
    {
      icon: "👥",
      title: t("studentSupportTitle"),
      description: t("studentSupportDesc"),
    },
  ]

  return (
    <section className="features classes-container">
      <h2>{t("ourLearningApproach")}</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
