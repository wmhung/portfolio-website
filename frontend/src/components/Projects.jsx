import TwoColProject from './TwoColProject.jsx';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();
  return (
    <>
      {/* Full-stack section — Projects 04 & 03 */}
      <section className='section section-alt' id='full-stack'>
        <div className='container'>
          <div className='reveal'>
            <h2 className='section-title'>{t('projects.title')}</h2>
          </div>

          {/* Project 04 — FNN */}
          <TwoColProject
            tag='Project 04'
            title='Finding Next Neverland'
            desc={t('projects.p04')}
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
                  srcSet='/img/fnn-640.webp 640w, /img/fnn.webp 1600w'
                  sizes='(max-width: 700px) 92vw, 560px'
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
            action={
              <a
                href='https://findingneverland.vercel.app/'
                target='_blank'
                rel='noreferrer'
                className='btn'
              >
                {t('projects.liveDemo')}
              </a>
            }
          />

          {/* Project 03 */}
          <TwoColProject
            tag='Project 03'
            title='Taipei Parks Explorer'
            desc={t('projects.p03')}
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
                  srcSet='/img/parks-640.webp 640w, /img/parks.webp 1500w'
                  sizes='(max-width: 700px) 92vw, 560px'
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
              /* TODO: fill in the Project 03 live-demo URL (standalone app) */
              <a href='#' target='_blank' rel='noreferrer' className='btn'>
                {t('projects.liveDemo')}
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
            desc={t('projects.p02')}
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
                  srcSet='/img/hbomax-640.webp 640w, /img/hbomax.webp 1500w'
                  sizes='(max-width: 700px) 92vw, 560px'
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
                {t('projects.liveDemo')}
              </a>
            }
            reverse
          />

          {/* Project 01 */}
          <TwoColProject
            tag='Project 01'
            title='Responsive Layout Showcase'
            desc={t('projects.p01')}
            chips={['HTML5', 'CSS3', 'Flexbox', 'Media Queries']}
            media={
              <div className='project-media'>
                <img
                  src='/img/rwd.webp'
                  srcSet='/img/rwd-640.webp 640w, /img/rwd.webp 1500w'
                  sizes='(max-width: 700px) 92vw, 560px'
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
                {t('projects.liveDemo')}
              </a>
            }
          />
        </div>
      </section>
    </>
  );
}
