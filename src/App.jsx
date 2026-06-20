import { useState } from 'react';
import { useDailyData } from './hooks/useDailyData';
import Home from './components/Home';
import Workouts from './components/Workouts';
import Water from './components/Water';
import Mood from './components/Mood';
import NavBar from './components/NavBar';
import './App.css';

export default function App() {
  const [tab, setTab] = useState('home');
  const data = useDailyData();

  return (
    <div className="app-shell">
      <div className="app-content">
        {tab === 'home' && <Home day={data.day} onNavigate={setTab} />}
        {tab === 'workouts' && <Workouts day={data.day} addWorkout={data.addWorkout} removeWorkout={data.removeWorkout} />}
        {tab === 'water' && <Water day={data.day} addWater={data.addWater} />}
        {tab === 'mood' && <Mood day={data.day} setMood={data.setMood} />}
      </div>
      <NavBar active={tab} onChange={setTab} />
    </div>
  );
}
