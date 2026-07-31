export default function TwoColProject({
  tag,
  title,
  desc,
  chips,
  media,
  action,
  reverse,
}) {
  const text = (
    <div>
      <span className='project-tag'>{tag}</span>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className='tech-row'>
        {chips.map((c) => (
          <span className='chip' key={c}>
            {c}
          </span>
        ))}
      </div>
      {action}
    </div>
  );

  return (
    <div className='project reveal' style={{ marginTop: '50px' }}>
      {reverse ? (
        <>
          {media}
          {text}
        </>
      ) : (
        <>
          {text}
          {media}
        </>
      )}
    </div>
  );
}
