import ProgressRing from './ProgressRing';

const GOAL = 8;

export default function Water({ day, addWater }) {
  const done = day.water >= GOAL;

  return (
    <div>
      <div className="page-header">
        <p className="eyebrow">Hydration</p>
        <h1 className="heading">Water intake</h1>
        <p className="subtext">Goal: {GOAL} glasses a day</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', margin: '32px 0' }}>
        <ProgressRing value={day.water} max={GOAL} size={200} stroke={16} color="#5B8DB8" trackColor="#DCE9F2">
          <span style={{ fontSize: 38 }}>💧</span>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: 'var(--plum)' }}>{day.water}</span>
          <span className="subtext" style={{ marginTop: 0 }}>of {GOAL} glasses</span>
        </ProgressRing>
      </div>

      <p style={{ textAlign: 'center', color: done ? 'var(--sage)' : '#9A8E87', fontWeight: done ? 600 : 400, marginBottom: 28 }}>
        {done ? 'Goal reached — nice work!' : `${GOAL - day.water} more to go`}
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 24 }}>
        <button
          onClick={() => addWater(-1)}
          style={{
            width: 60, height: 60, borderRadius: '50%', border: 'none',
            background: '#FBE3DD', color: '#C97B5C', fontSize: 24, fontWeight: 600,
          }}
        >
          −
        </button>
        <button
          onClick={() => addWater(1)}
          style={{
            width: 60, height: 60, borderRadius: '50%', border: 'none',
            background: '#DCE9F2', color: '#5B8DB8', fontSize: 24, fontWeight: 600,
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
