const tabs = [
  { id: 'home', icon: '⌂', label: 'Home' },
  { id: 'workouts', icon: '◐', label: 'Move' },
  { id: 'water', icon: '◯', label: 'Water' },
  { id: 'mood', icon: '◇', label: 'Mood' },
];

export default function NavBar({ active, onChange }) {
  return (
    <nav className="nav-bar">
      {tabs.map((t) => (
        <button
          key={t.id}
          className={`nav-btn ${active === t.id ? 'active' : ''}`}
          onClick={() => onChange(t.id)}
        >
          <span className="nav-icon">{t.icon}</span>
          {t.label}
        </button>
      ))}
    </nav>
  );
}
