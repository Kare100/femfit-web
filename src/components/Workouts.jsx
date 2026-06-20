import { useState } from 'react';

const suggestions = ['30 min run', '20 min yoga', '45 min gym', '15 min stretching', '30 min cycling', '20 min HIIT', '1 hour walk', '30 min swimming'];

export default function Workouts({ day, addWorkout, removeWorkout }) {
  const [text, setText] = useState('');

  const submit = (val) => {
    addWorkout(val);
    setText('');
  };

  return (
    <div>
      <div className="page-header">
        <p className="eyebrow">Movement</p>
        <h1 className="heading">Log a workout</h1>
        <p className="subtext">{day.workouts.length} logged today</p>
      </div>

      <div style={{ display: 'flex', gap: 10, marginBottom: 18 }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && submit(text)}
          placeholder="e.g. 30 min run"
          style={{
            flex: 1, padding: '13px 16px', borderRadius: 12, border: '1px solid #EFE7DF',
            background: 'var(--paper)', fontSize: 14,
          }}
        />
        <button
          onClick={() => submit(text)}
          style={{
            background: 'var(--clay)', color: '#fff', border: 'none', borderRadius: 12,
            padding: '0 18px', fontWeight: 600, fontSize: 18,
          }}
        >
          +
        </button>
      </div>

      <p className="section-label" style={{ marginTop: 0 }}>Quick add</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
        {suggestions.map((s) => (
          <button
            key={s}
            onClick={() => submit(s)}
            style={{
              background: 'var(--clay-light)', border: 'none', borderRadius: 20,
              padding: '8px 14px', fontSize: 12, color: 'var(--plum)', fontWeight: 500,
            }}
          >
            {s}
          </button>
        ))}
      </div>

      <p className="section-label" style={{ marginTop: 0 }}>Today's workouts</p>
      {day.workouts.length === 0 ? (
        <p className="subtext">Nothing logged yet — add your first one above.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {day.workouts.map((w, i) => (
            <div key={i} className="card" style={{
              display: 'flex', alignItems: 'center', padding: '14px 16px', gap: 10,
            }}>
              <span style={{ color: 'var(--sage)' }}>✓</span>
              <span style={{ flex: 1, fontSize: 14 }}>{w}</span>
              <button
                onClick={() => removeWorkout(i)}
                style={{ background: 'none', border: 'none', color: '#C9BFB8', fontSize: 16 }}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
