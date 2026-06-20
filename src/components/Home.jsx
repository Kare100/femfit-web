import ProgressRing from './ProgressRing';

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 17) return 'Good afternoon';
  return 'Good evening';
}

export default function Home({ day, onNavigate }) {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  const ringValue = day.water + day.workouts.length + (day.mood ? 1 : 0);
  const ringMax = 8 + 1 + 1; // water goal + at least one workout + mood

  return (
    <div>
      <div className="page-header">
        <p className="eyebrow">{today}</p>
        <h1 className="heading">{greeting()}</h1>
        <p className="subtext">Here's how today is shaping up.</p>
      </div>

      <div className="card" style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <ProgressRing value={ringValue} max={ringMax} size={110} stroke={10}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 24, color: 'var(--plum)' }}>
            {Math.round((ringValue / ringMax) * 100)}%
          </span>
        </ProgressRing>
        <div>
          <p style={{ fontWeight: 600, marginBottom: 8 }}>Today's progress</p>
          <p className="subtext" style={{ margin: 0 }}>💧 {day.water} of 8 glasses</p>
          <p className="subtext" style={{ margin: 0 }}>◐ {day.workouts.length} workout{day.workouts.length !== 1 ? 's' : ''}</p>
          <p className="subtext" style={{ margin: 0 }}>◇ {day.mood || 'No check-in yet'}</p>
        </div>
      </div>

      <p className="section-label">Track your day</p>

      <button className="action-row" onClick={() => onNavigate('workouts')}>
        <div className="action-icon" style={{ background: 'var(--clay-light)' }}>◐</div>
        <div>
          <div className="action-title">Log a workout</div>
          <div className="action-subtitle">{day.workouts.length} logged today</div>
        </div>
        <span className="chevron">›</span>
      </button>

      <button className="action-row" onClick={() => onNavigate('water')}>
        <div className="action-icon" style={{ background: '#DCE9F2' }}>◯</div>
        <div>
          <div className="action-title">Water intake</div>
          <div className="action-subtitle">{day.water} of 8 glasses</div>
        </div>
        <span className="chevron">›</span>
      </button>

      <button className="action-row" onClick={() => onNavigate('mood')}>
        <div className="action-icon" style={{ background: 'var(--sage-light)' }}>◇</div>
        <div>
          <div className="action-title">Mood check-in</div>
          <div className="action-subtitle">{day.mood || 'How are you feeling?'}</div>
        </div>
        <span className="chevron">›</span>
      </button>
    </div>
  );
}
