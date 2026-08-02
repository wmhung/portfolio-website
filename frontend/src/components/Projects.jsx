import TwoColProject from './TwoColProject.jsx';

export default function Projects() {
  return (
    <>
      {/* Full-stack section — Projects 04 & 03 */}
      <section className='section section-alt' id='full-stack-02'>
        <div className='container'>
          <div className='reveal'>
            <h2 className='section-title'>Projects</h2>
          </div>

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

          {/* Project 03 */}
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
              <div className='project-media'>
                <img
                  src='/img/parks.webp'
                  alt='Taipei Parks Explorer — searchable grid of Taipei parks'
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
            action={
              <a
                href='/parks/index.html'
                target='_blank'
                rel='noreferrer'
                className='btn'
              >
                Live Demo
              </a>
            }
            reverse
          />
        </div>
      </section>

      {/* front-end section — Projects 02 & 01 */}
      <section className='section' id='front-end'>
        <div className='container'>
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
                <img
                  src='/img/hbomax.webp'
                  alt='HBO Max–style streaming interface study'
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
                <img
                  src='/img/rwd.webp'
                  alt='Responsive layout showcase'
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
