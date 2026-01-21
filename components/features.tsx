import "@/styles/features.css"

export default function Features() {
  const features = [
    {
      icon: "🎓",
      title: "Strong Conceptual Foundation",
      description: "Clear and structured aligned with CBSC and state boards curricula, helping students understand concepts deeply and learn with confidence without unnecessary stress.",
    },
    {
      icon: "🌱",
      title: "Holistic Growth",
      description: "Focusing on emotional intelligence, confidence building, and personality development.",
    },
    {
      icon: "👥",
      title: "Student Support",
      description: "24/7 access to dedicated mentors who guide you through every academic and personal hurdle.",
    },
  ]

  return (
    <section className="features classes-container">
      <h2>Our Learning Approach</h2>
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
