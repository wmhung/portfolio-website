const GROUPS = [
  {
    key: 'languages',
    items: ['JavaScript (ES6)', 'TypeScript', 'HTML5', 'CSS3', 'Python'],
  },
  {
    key: 'frameworks',
    items: [
      'React',
      'Next.js',
      'Redux',
      'Tailwind CSS',
      'React Hook Form',
      'Zod',
    ],
  },
  {
    key: 'backend',
    items: [
      'Node.js / Express',
      'Supabase',
      'PostgreSQL',
      'MongoDB',
      'NextAuth.js',
      'REST APIs',
      'OpenAI API',
    ],
  },
  {
    key: 'cloud',
    items: ['Vercel', 'Render', 'Netlify', 'Docker', 'Git / GitHub'],
  },
];

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
              <div className='chips'>
                {g.items.map((i) => (
                  <span className='chip' key={i}>
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
