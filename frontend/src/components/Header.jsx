import { useEffect, useState } from 'react';

const LINKS = [
  ['#skills', 'Skills'],
  ['#full-stack-02', 'Full-stack'],
  ['#full-stack-01', 'Full-stack'],
  ['#front-end', 'Front-end'],
];

export default function Header({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <a href='#top' className='logo' onClick={close}>
          WEIMING<span>.</span>
        </a>

        <nav className='nav-desktop'>
          <ul>
            {LINKS.map(([href, label]) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <button
            className='theme-toggle'
            onClick={onToggleTheme}
            aria-label='Toggle dark mode'
            title='Toggle theme'
          >
            {theme === 'light' ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='24px'
                viewBox='0 -960 960 960'
                width='24px'
                fill='#000000'
              >
                <path d='M484-80q-84 0-157.5-32t-128-86.5Q144-253 112-326.5T80-484q0-146 93-257.5T410-880q-18 99 11 193.5T521-521q71 71 165.5 100T880-410q-26 144-138 237T484-80Z' />
              </svg>
            ) : (
              <svg
                viewBox='0 -960 960 960'
                width='20'
                height='20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path d='M440-800v-120h80v120h-80Zm0 760v-120h80v120h-80Zm360-400v-80h120v80H800Zm-760 0v-80h120v80H40Zm708-252-56-56 70-72 58 58-72 70ZM198-140l-58-58 72-70 56 56-70 72Zm564 0-70-72 56-56 72 70-58 58ZM212-692l-72-70 58-58 70 72-56 56Zm98 382q-70-70-70-170t70-170q70-70 170-70t170 70q70 70 70 170t-70 170q-70 70-170 70t-170-70Z' />
              </svg>
            )}
          </button>
          <button
            className={`hamburger ${open ? 'open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-label='Menu'
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className={`overlay ${open ? 'show' : ''}`} onClick={close}></div>
      <nav className={`mobile-menu ${open ? 'show' : ''}`}>
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
