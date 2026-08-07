import { useState } from 'react';

// Brand logos come from the Devicon CDN at runtime. Skills without a logo
// (abstract ones, or ones intentionally left plain) render as text-only chips.
// Black logos (invert) flip to white in dark mode.
const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';

const GROUPS = [
  {
    key: 'languages',
    items: [
      { name: 'JavaScript (ES6)', icon: 'javascript/javascript-original' },
      { name: 'TypeScript', icon: 'typescript/typescript-original' },
      { name: 'HTML5', icon: 'html5/html5-original' },
      { name: 'CSS3', icon: 'css3/css3-original' },
      { name: 'Python', icon: 'python/python-original' },
    ],
  },
  {
    key: 'frameworks',
    items: [
      { name: 'React', icon: 'react/react-original' },
      { name: 'Next.js', icon: 'nextjs/nextjs-original', invert: true },
      { name: 'Tailwind CSS', icon: 'tailwindcss/tailwindcss-original' },
      { name: 'React Hook Form' },
      { name: 'Zod' },
    ],
  },
  {
    key: 'backend',
    items: [
      { name: 'Node.js', icon: 'nodejs/nodejs-original' },
      { name: 'Supabase', icon: 'supabase/supabase-original' },
      { name: 'PostgreSQL', icon: 'postgresql/postgresql-original' },
      { name: 'MongoDB', icon: 'mongodb/mongodb-original' },
      { name: 'NextAuth.js' },
      { name: 'REST APIs' },
      { name: 'OpenAI API' },
    ],
  },
  {
    key: 'cloud',
    items: [
      { name: 'Vercel', icon: 'vercel/vercel-original', invert: true },
      { name: 'Render' },
      { name: 'Netlify', icon: 'netlify/netlify-original' },
      { name: 'Git / GitHub', icon: 'git/git-original' },
    ],
  },
];

function SkillChip({ item }) {
  const [failed, setFailed] = useState(false);
  const showLogo = item.icon && !failed;

  return (
    <span className='skill-chip'>
      {showLogo && (
        <img
          className={item.invert ? 'dark-invert' : undefined}
          src={`${CDN}${item.icon}.svg`}
          alt=''
          loading='lazy'
          onError={() => setFailed(true)}
        />
      )}
      {item.name}
    </span>
  );
}

export default function Skills({ t }) {
  return (
    <section className='section' id='skills'>
      <div className='container'>
        <div className='reveal'>
          <h2 className='section-title'>{t.skills.title}</h2>
        </div>

        <div className='skills-grid'>
          {GROUPS.map((g) => (
            <div className='skill-card reveal' key={g.key}>
              <h3>
                <span className='dot'></span>
                {t.skills.groups[g.key]}
              </h3>
              <div className='skill-chips'>
                {g.items.map((it) => (
                  <SkillChip item={it} key={it.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
