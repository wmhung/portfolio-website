import { useEffect, useState } from "react";

const LINKS = [
  ["#skills", "Skills"],
  ["#projects", "Projects"],
  ["#parks", "Parks Explorer"],
  ["#contact", "Contact"],
];

export default function Header({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <a href="#top" className="logo" onClick={close}>
          WEIMING<span>.</span>
        </a>

        <nav className="nav-desktop">
          <ul>
            {LINKS.map(([href, label]) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label="Toggle dark mode"
            title="Toggle theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <button
            className={`hamburger ${open ? "open" : ""}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div
        className={`overlay ${open ? "show" : ""}`}
        onClick={close}
      ></div>
      <nav className={`mobile-menu ${open ? "show" : ""}`}>
        <ul>
          {LINKS.map(([href, label]) => (
            <li key={href}>
              <a href={href} onClick={close}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
