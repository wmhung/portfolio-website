import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';
import { STRINGS } from './i18n.js';

export default function App() {
  // Start from the saved choice; default to light when nothing is stored.
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'light';
    } catch {
      return 'light';
    }
  });

  // Language: default English; remembered across reloads (same pattern as theme).
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('lang') || 'en';
    } catch {
      return 'en';
    }
  });

  // Apply theme to <html> and remember the choice across reloads.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* storage unavailable — ignore */
    }
  }, [theme]);

  // Apply language to <html lang> and remember the choice across reloads.
  useEffect(() => {
    document.documentElement.setAttribute(
      'lang',
      lang === 'zh' ? 'zh-Hant' : 'en',
    );
    try {
      localStorage.setItem('lang', lang);
    } catch {
      /* storage unavailable — ignore */
    }
  }, [lang]);

  // Reveal-on-scroll for elements with .reveal
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  const toggleLang = () => setLang((l) => (l === 'en' ? 'zh' : 'en'));

  const t = STRINGS[lang] || STRINGS.en;

  return (
    <>
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        t={t}
        onToggleLang={toggleLang}
      />
      <main>
        <Hero t={t} />
        <Skills t={t} />
        <Projects t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
