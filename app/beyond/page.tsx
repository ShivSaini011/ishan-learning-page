"use client";

import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HomeButton from "@/components/home-button";
import "@/styles/beyond.css";

export default function Beyond() {
  const classes = [
    {
      image: "/1.jpg",
      name: "Real stories that spark dreams, build confidence, and shape strong values.",
      button: "Stories That Inspire",
    },
    {
      image: "/2.jpg",
      name: "Ask questions, explore ideas, and learn how to think, not just memorize.",
      button: "Think & Explore",
    },
    {
      image: "/3.jpg",
      name: "Break learning myths, discover the truth, and grow with the right mindset.",
      button: "Learning Myths & Facts",
    },
    {
      image: "/4.jpg",
      name: "Fun, bite-sized challenges that turn learning into an exciting habit.",
      button: "Mini Challenges",
    },
    {
      image: "/5.jpg",
      name: "Create, express, and share thoughts through art and imagination.",
      button: "Art & Creative Expression",
    },
    {
      image: "/6.jpg",
      name: "Calm the mind, sharpen focus, and build inner strength every day.",
      button: "Yoga & Mind Discipline",
    },
  ];

  return (
    <div className="app">
      <Header />

      <main className="beyond-container">
        <section className="beyond-hero">
          <h1>Beyond the Classroom</h1>
          <p>Learning through experience, creativity and inspiration</p>
        </section>
        <section className="beyond-content">
          {/* <p className="beyond-description">
            Discover unique learning experiences that go beyond traditional textbooks. 
            Each class offers specialized programs designed to unlock creativity and practical skills.
          </p> */}

          <div className="beyond-grid">
            {classes.map((cls, index) => (
              <div key={index} className="beyond-card">
                <div className="card-image">
                  <Image
                    src={cls.image}
                    alt={cls.name}
                    width={180}
                    height={180}
                  />
                </div>
                <div className="card-name">{cls.name}</div>
                {/* <div className="card-subtitle">Special Programs</div> */}
                <button className="card-button">{cls.button}</button>
              </div>
            ))}
          </div>
        </section>

        {/* <section className="beyond-cta">
          <h2>Ready to Explore Beyond the Classroom?</h2>
          <p>Join our specialized programs and unlock your true potential</p>
          <button className="cta-button">Get Started</button>
        </section> */}
      </main>
    
      <HomeButton />
      <Footer />
    </div>
  );
}
