export default function BrandCard({ title, subtitle }) {
  return (
    <div
      className='project-media'
      style={{
        display: 'grid',
        placeItems: 'center',
        textAlign: 'center',
        padding: '30px',
        background:
          'linear-gradient(135deg, var(--bg-alt) 0%, var(--panel) 100%)',
      }}
    >
      <div>
        <div
          style={{
            width: '44px',
            height: '6px',
            background: 'var(--accent)',
            margin: '0 auto 18px',
            borderRadius: '999px',
          }}
        ></div>
        <div style={{ fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.2 }}>
          {title}
        </div>
        <div
          style={{
            fontSize: '0.9rem',
            color: 'var(--muted)',
            marginTop: '8px',
          }}
        >
          {subtitle}
        </div>
      </div>
    </div>
  );
}
