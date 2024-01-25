import React from 'react';
import './App.css';
import { PomodoroTimer } from './components/pomodoro-timer';

function App() {
  return (
    <div className="container">
      <PomodoroTimer
        pomodoroTime={2}
        shortRestTime={2}
        longRestTime={3}
        cycles={4}
      />
    </div>
  );
}

export default App;
