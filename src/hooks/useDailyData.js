import { useState, useEffect, useCallback } from 'react';

const todayKey = () => new Date().toISOString().slice(0, 10);

function readStore() {
  try {
    const raw = localStorage.getItem('femfit-data');
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeStore(data) {
  localStorage.setItem('femfit-data', JSON.stringify(data));
}

const emptyDay = () => ({ water: 0, workouts: [], mood: '' });

export function useDailyData() {
  const [date, setDate] = useState(todayKey());
  const [day, setDay] = useState(() => {
    const store = readStore();
    return store[todayKey()] || emptyDay();
  });

  // poll for date change so the tracker resets after midnight
  useEffect(() => {
    const interval = setInterval(() => {
      const current = todayKey();
      if (current !== date) {
        setDate(current);
        const store = readStore();
        setDay(store[current] || emptyDay());
      }
    }, 30000);
    return () => clearInterval(interval);
  }, [date]);

  const persist = useCallback((updater) => {
    setDay((prev) => {
      const next = updater(prev);
      const store = readStore();
      store[todayKey()] = next;
      writeStore(store);
      return next;
    });
  }, []);

  const addWater = useCallback((delta) => {
    persist((prev) => ({ ...prev, water: Math.max(0, Math.min(12, prev.water + delta)) }));
  }, [persist]);

  const addWorkout = useCallback((label) => {
    if (!label.trim()) return;
    persist((prev) => ({ ...prev, workouts: [...prev.workouts, label.trim()] }));
  }, [persist]);

  const removeWorkout = useCallback((index) => {
    persist((prev) => ({ ...prev, workouts: prev.workouts.filter((_, i) => i !== index) }));
  }, [persist]);

  const setMood = useCallback((mood) => {
    persist((prev) => ({ ...prev, mood }));
  }, [persist]);

  return { day, addWater, addWorkout, removeWorkout, setMood };
}
