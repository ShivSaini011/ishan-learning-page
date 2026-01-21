import Link from "next/link"
import "@/styles/guidance.css"

export default function Guidance() {
  const cards = [
    {
      icon: "🧘",
      title: "Exam Stress Support",
      description: "Techniques to manage exam anxiety and boost confidence.",
      link: "Read Guide",
      href: "/exam-stress"
    },
    {
      icon: "🎯",
      title: "Career Awareness",
      description: "Discover your passion. Navigate your way to success.",
      link: "Explore Careers",
      href: "/careers"
    },
    {
      icon: "❤️",
      title: "Mental Health Check",
      description: "Ensure your well-being is prioritized during exams.",
      link: "Start Check",
      href: "/wellbeing"
    },
  ]

  return (
    <section className="guidance" id="guidance">
      <div className="guidance-container">
        <div className="guidance-header">
          <h2>Guidance & Well-Being Corner</h2>
          <p>Because a calm mind learns better. Access curated health resources designed for students.</p>
        </div>

        <div className="guidance-cards">
          {cards.map((card, index) => (
            <div key={index} className="guidance-card">
              <div className="card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
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
        <div className="request-a-session"> 
          <button className="session-btn">Request a Counseling Session</button>
        </div>
      </div>
    </section>
  )
}
