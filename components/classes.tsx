import "@/styles/classes.css";
import Link from "next/link";
import { useLanguage } from "@/components/language-context";

export default function Classes() {
  const { t } = useLanguage();
  
  const classes = [
    { path: "/class/6", number: "06", nameKey: "class6" },
    { path: "/class/7", number: "07", nameKey: "class7" },
    { path: "/class/8", number: "08", nameKey: "class8" },
    { path: "/class/9", number: "09", nameKey: "class9" },
    { path: "/class/10", number: "10", nameKey: "class10" },
    { path: "/class/11", number: "11", nameKey: "class11" },
    { path: "/class/12", number: "12", nameKey: "class12" },
  ];

  return (
    <section className="classes" id="classes">
      <div className="classes-container">
        <h2>{t("exploreYourClass")}</h2>
        <div className="classes-grid">
          {classes.map((cls, index) => (
            <Link href={cls.path} key={index}>
              <div className="class-card1">
                <div className="class-number">{cls.number}</div>
                <div className="class-name">{t(cls.nameKey)}</div>
                <div className="class-courses">{t("viewCourses")}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="note">
        {t("learningResourcesMsg")}
      </div>
      <div className="Schedule">
        <div className="Schedule-placeholder">
          <a href="Class Schedule Link" target="_blank" rel="noopener noreferrer">
            <img src="Schedule.png" alt="Logo" className="Schedule-image" />
            <div className="TDYC">{t("todayClassSchedule")}</div>
          </a>
        </div>
      </div>
      <div className="request-a-session">
        <Link href="/beyond">
          <button className="classbtn">{t("beyondClassroom")}
            <h5 className="bytxt">{t("beyondDesc")}</h5>
          </button>
        </Link>
      </div>
    </section>
  );
}
