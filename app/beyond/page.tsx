"use client";

import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HomeButton from "@/components/home-button";
import { useLanguage } from "@/components/language-context";
import "@/styles/beyond.css";

export default function Beyond() {
  const { t } = useLanguage();
  
  const classes = [
    {
      image: "/1.jpg",
      name: t("storiesInspire"),
      button: t("storiesInspireBtn"),
      link: "/abc",
    },
    {
      image: "/2.jpg",
      name: t("thinkExplore"),
      button: t("thinkExploreBtn"),
      link: "/abc",
    },
    {
      image: "/3.jpg",
      name: t("learningMyths"),
      button: t("learningMythsBtn"),
      link: "/abc",
    },
    {
      image: "/4.jpg",
      name: t("miniChallenges"),
      button: t("miniChallengesBtn"),
      link: "/abc",
    },
    {
      image: "/5.jpg",
      name: t("artCreative"),
      button: t("artCreativeBtn"),
      link: "/abc",
    },
    {
      image: "/6.jpg",
      name: t("yogaMind"),
      button: t("yogaMindBtn"),
      link: "/abc",
    },
  ];

  return (
    <div className="app">
      <Header />

      <main className="beyond-container">
        <section className="beyond-hero">
          <h1>{t("beyondTheClassroom")}</h1>
          <p>{t("learningExperienceCreativity")}</p>
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
                <a className="card-button" href={cls.link} target="_blank">
                  <button className="card-bt" >{cls.button}</button></a>
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
