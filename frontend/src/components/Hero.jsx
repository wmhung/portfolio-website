export default function Hero() {
  return (
    <section className='hero' id='top'>
      <div className='container hero-inner reveal'>
        <h2>Frontend Developer · Taipei</h2>
        <h1>
          I am <span className='mark'>Weiming&nbsp;Hung</span>
        </h1>
        <p>
          A frontend / full-stack developer from Taipei. I build things with
          HTML, CSS, JavaScript, React and Python, and I love solving problems
          through code. Currently seeking a frontend or full-stack developer
          role.
        </p>
        <div className='hero-actions'>
          <a href='#parks' className='btn btn-solid'>
            View my work
          </a>
          <a href='mailto:brucewmhung@gmail.com' className='btn'>
            Contact me
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
