export default function Hero({ t }) {
  return (
    <section className='hero' id='top'>
      <div className='container hero-inner reveal'>
        <h2>{t.hero.role}</h2>
        <h1>
          {t.hero.iam} <span className='mark'>{t.hero.name}&nbsp;</span>
        </h1>
        <p>{t.hero.intro}</p>
        <div className='hero-actions'>
          <a href='#full-stack' className='btn btn-solid'>
            {t.hero.cta}
          </a>
          <a
            href='https://github.com/wmhung'
            target='_blank'
            rel='noreferrer'
            className='icon-link'
            aria-label='GitHub'
            title='GitHub'
          >
            <svg viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
              <path d='M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.4-5.25 5.68.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z' />
            </svg>
          </a>
          {/* Hidden resume link */}
          {/* <a
            href='/resume.pdf'
            target='_blank'
            rel='noreferrer'
            className='icon-link'
            aria-label={t.hero.resume}
            title={t.hero.resume}
          >
            <svg
              viewBox='0 -960 960 960'
              fill='currentColor'
              aria-hidden='true'
            >
              <path d='M320-240h320v-80H320v80Zm0-160h320v-80H320v80Zm-80 320q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520Z' />
            </svg>
          </a> */}
          <a
            href='mailto:brucewmhung@gmail.com'
            className='icon-link'
            aria-label={t.hero.contact}
            title={t.hero.contact}
          >
            <svg
              viewBox='0 -960 960 960'
              fill='currentColor'
              aria-hidden='true'
            >
              <path d='M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z' />
            </svg>
          </a>
        </div>
      </div>

      <a href='#skills' className='scroll-arrow' aria-label='Scroll down'>
        <svg width='42' height='42' viewBox='0 0 20 11' fill='currentColor'>
          <path d='M10 11 0 1 1.4 0 10 8.2 18.6 0 20 1z' />
        </svg>
      </a>
    </section>
  );
}
