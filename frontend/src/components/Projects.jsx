import BrandCard from './BrandCard.jsx';
import TwoColProject from './TwoColProject.jsx';

export default function Projects() {
  return (
    <>
      {/* Full-stack section */}
      <section className='section section-alt' id='full-stack-02'>
        <div className='container'>
          <div className='reveal'>
            <h2 className='section-title'>Projects</h2>
          </div>

          <h3 className='group-title reveal'>Full-stack</h3>

          {/* Project 04 — FNN */}
          <TwoColProject
            tag='Project 04'
            title='FNN — Park Finder'
            desc='A full-stack Next.js app for finding parks to explore with young kids. Search parks by GPS location or keyword, save favourites to a personal place list, and get point-to-point routes drawn on an interactive Leaflet map. Includes full auth (register, login, password reset), user profiles, form validation, and transactional email.'
            chips={[
              'Next.js',
              'TypeScript',
              'Supabase',
              'Leaflet',
              'React Hook Form',
              'Zod',
              'Tailwind',
            ]}
            media={
              <div className='project-media'>
                <img
                  src='/img/fnn.webp'
                  alt='FNN — Park Finder app (map and saved place list)'
                  loading='lazy'
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top',
                  }}
                />
              </div>
            }
          />
        </div>
      </section>

      {/* Project 03 */}
      <section className='section' id='full-stack-01'>
        <div className='container'>
          <TwoColProject
            tag='Project 03'
            title='Taipei Parks Explorer'
            desc='Browse all 830 Taipei parks, green spaces and plazas. A React front end fetches from my own Flask REST API — with search, filtering and pagination handled server-side. Open-data source: Taipei City Government.'
            chips={[
              'React',
              'Flask',
              'REST API',
              'Fetch / async',
              'Pagination',
            ]}
            media={
              <BrandCard
                title='Taipei Parks Explorer'
                subtitle='Browse 830 Taipei parks'
              />
            }
            action={
              <a
                href='http://localhost:5173'
                target='_blank'
                rel='noreferrer'
                className='btn'
              >
                Live Demo (runs locally)
              </a>
            }
            reverse
          />
        </div>
      </section>

      {/* front-end section */}
      <section className='section section-alt' id='front-end'>
        <div className='container'>
          <h3 className='group-title reveal'>Front-end</h3>

          {/* Project 02 */}
          <TwoColProject
            tag='Project 02 '
            title='Streaming PlatformUI'
            desc='A framework-free HBO Max–style streaming interface, built as a responsive design study. A sticky nav that collapses into a slide-in mobile menu, a gradient-scrim spotlight hero, horizontal scroll-snap carousels generated from a data array, and a CSS-Grid genre wall that steps 2 → 3 → 4 columns. Mobile-first, placeholder imagery only — no HBO assets or trademarks.'
            chips={[
              'HTML5',
              'CSS3',
              'Flexbox',
              'CSS Grid',
              'Scroll Snap',
              'Vanilla JS',
            ]}
            media={
              <div className='project-media'>
                <iframe
                  src='/hbomax/index.html'
                  title='MAX streaming UI study'
                  loading='lazy'
                ></iframe>
              </div>
            }
            action={
              <a
                href='/hbomax/index.html'
                target='_blank'
                rel='noreferrer'
                className='btn'
              >
                Live Demo
              </a>
            }
            reverse
          />

          {/* Project 01 */}
          <TwoColProject
            tag='Project 01'
            title='Responsive Layout Showcase'
            desc='A hand-coded responsive page from my bootcamp — no frameworks, no Bootstrap. Fluid images and mobile-first breakpoints at 600 / 900 / 1200px, with card sections that reflow from a single column up to a full multi-column row.'
            chips={['HTML5', 'CSS3', 'Flexbox', 'Media Queries']}
            media={
              <div className='project-media'>
                <iframe
                  src='/rwd/index.html'
                  title='Responsive layout showcase'
                  loading='lazy'
                ></iframe>
              </div>
            }
            action={
              <a
                href='/rwd/index.html'
                target='_blank'
                rel='noreferrer'
                className='btn'
              >
                Live Demo
              </a>
            }
          />
        </div>
      </section>
    </>
  );
}
