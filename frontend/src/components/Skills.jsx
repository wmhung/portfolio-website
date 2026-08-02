const GROUPS = [
  {
    title: 'Languages',
    items: ['JavaScript (ES6)', 'TypeScript', 'HTML5', 'CSS3', 'Python'],
  },
  {
    title: 'Frameworks / Libraries',
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
    title: 'Backend & Database',
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
    title: 'Cloud & DevOps',
    items: ['Vercel', 'Render', 'Netlify', 'Docker', 'Git / GitHub'],
  },
];

export default function Skills() {
  return (
    <section className='section' id='skills'>
      <div className='container'>
        <div className='reveal'>
          <h2 className='section-title'>Skills</h2>
        </div>

        <div className='skills-grid'>
          {GROUPS.map((g) => (
            <div className='skill-card reveal' key={g.title}>
              <h3>
                <span className='dot'></span>
                {g.title}
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
