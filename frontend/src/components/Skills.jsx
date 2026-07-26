const GROUPS = [
  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "Responsive / RWD", "Flexbox", "Media Queries", "BEM"],
  },
  {
    title: "JavaScript",
    items: ["ES6+", "DOM & Events", "Fetch / AJAX", "Promises / async", "OOP & Prototypes"],
  },
  {
    title: "React",
    items: ["Components", "Hooks", "State & Props", "Vite"],
  },
  {
    title: "Backend & Data",
    items: ["Python", "Flask", "REST APIs", "pandas", "JSON", "Validation"],
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="reveal">
          <p className="eyebrow">What I work with</p>
          <h2 className="section-title">Skills</h2>
          <p className="lead">
            Built up through the WeHelp full-stack bootcamp and hands-on
            projects — from responsive layouts to REST APIs.
          </p>
        </div>

        <div className="skills-grid">
          {GROUPS.map((g) => (
            <div className="skill-card reveal" key={g.title}>
              <h3>
                <span className="dot"></span>
                {g.title}
              </h3>
              <div className="chips">
                {g.items.map((i) => (
                  <span className="chip" key={i}>
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
