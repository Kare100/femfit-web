const moods = [
  { emoji: '😄', label: 'Great' },
  { emoji: '🙂', label: 'Good' },
  { emoji: '😐', label: 'Okay' },
  { emoji: '😔', label: 'Low' },
  { emoji: '😩', label: 'Exhausted' },
  { emoji: '😤', label: 'Stressed' },
];

export default function Mood({ day, setMood }) {
  return (
    <div>
      <div className="page-header">
        <p className="eyebrow">Check-in</p>
        <h1 className="heading">How are you feeling?</h1>
        <p className="subtext">Tap a mood to log it for today.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
        {moods.map((m) => {
          const isActive = day.mood === m.label;
          return (
            <button
              key={m.label}
              onClick={() => setMood(m.label)}
              className="card"
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
                padding: '20px 8px', border: isActive ? '2px solid var(--clay)' : '2px solid transparent',
                background: isActive ? 'var(--clay-light)' : 'var(--paper)',
              }}
            >
              <span style={{ fontSize: 30 }}>{m.emoji}</span>
              <span style={{ fontSize: 13, fontWeight: isActive ? 600 : 500, color: isActive ? 'var(--plum)' : '#9A8E87' }}>
                {m.label}
              </span>
            </button>
          );
        })}
      </div>

      {day.mood && (
        <p style={{ textAlign: 'center', marginTop: 28, color: 'var(--clay)', fontWeight: 600 }}>
          You logged: {day.mood}
        </p>
      )}
    </div>
  );
}
