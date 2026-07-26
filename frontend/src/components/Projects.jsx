import ParksExplorer from "./ParksExplorer.jsx";

export default function Projects() {
  return (
    <>
      <section className="section section-alt" id="projects">
        <div className="container">
          <div className="reveal">
            <p className="eyebrow">Selected work</p>
            <h2 className="section-title">Projects</h2>
            <p className="lead">
              Two pieces that show both sides of my work — pixel-accurate
              responsive layout, and a real React front end talking to my own
              REST API.
            </p>
          </div>

          {/* Project 1 — RWD Showcase */}
          <div className="project reveal" style={{ marginTop: "50px" }}>
            <div>
              <span className="project-tag">Project 01 · Frontend</span>
              <h3>Responsive Layout Showcase</h3>
              <p>
                A hand-coded responsive page from my bootcamp — no frameworks,
                no Bootstrap. Fixed 1200px content column that stays centred
                from 1200px to 1920px, an equal-height card grid, and images
                that keep their aspect ratio at every breakpoint. Built to spec
                and tested across screen widths with dev tools.
              </p>
              <div className="tech-row">
                <span className="chip">HTML5</span>
                <span className="chip">CSS3</span>
                <span className="chip">Flexbox</span>
                <span className="chip">Media Queries</span>
              </div>
              <a
                href="/rwd/index.html"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Open live page
              </a>
            </div>
            <div className="project-media">
              <iframe
                src="/rwd/index.html"
                title="Responsive layout showcase"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Project 2 — Parks Explorer (own section, full width for the grid) */}
      <section className="section" id="parks">
        <div className="container">
          <div className="reveal">
            <span className="project-tag">Project 02 · Full-stack</span>
            <h2 className="section-title" style={{ marginTop: "10px" }}>
              Taipei Parks Explorer
            </h2>
            <p className="lead">
              Browse all 830 of Taipei&apos;s parks, green spaces and plazas.
              A React front end fetches from my own Flask REST API — with search,
              filtering and pagination handled server-side. Open-data source:
              Taipei City Government.
            </p>
            <div className="tech-row" style={{ marginTop: "18px" }}>
              <span className="chip">React</span>
              <span className="chip">Flask</span>
              <span className="chip">REST API</span>
              <span className="chip">Fetch / async</span>
              <span className="chip">Pagination</span>
            </div>
          </div>

          <ParksExplorer />
        </div>
      </section>
    </>
  );
}
