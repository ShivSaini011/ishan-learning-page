import "@/styles/classes.css";
import Link from "next/link";

export default function Classes() {
  const classes = [
    { path: "/class/6", number: "06", name: "CLASS 6" },
    { path: "/class/7", number: "07", name: "CLASS 7" },
    { path: "/class/8", number: "08", name: "CLASS 8" },
    { path: "/class/9", number: "09", name: "CLASS 9" },
    { path: "/class/10", number: "10", name: "CLASS 10" },
    { path: "/class/11", number: "11", name: "CLASS 11" },
    { path: "/class/12", number: "12", name: "CLASS 12" },
  ];

  return (
    <section className="classes" id="classes">
      <div className="classes-container">
        <h2>Explore Your Class</h2>
        <div className="classes-grid">
          {classes.map((cls, index) => (
            <Link href={cls.path} key={index}>
              <div className="class-card1">
                <div className="class-number">{cls.number}</div>
                <div className="class-name">{cls.name}</div>
                <div className="class-courses">View Courses →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="note">
        Learning resources are being added progressively.
      </div>
      <div className="request-a-session">
        <Link href="/beyond">
          <button className="classbtn">Beyond the Classroom
          <h5 className="bytxt">learning through experience, creativity and inspiration</h5>
          </button>
        </Link>
      </div>
    </section>
  );
}
