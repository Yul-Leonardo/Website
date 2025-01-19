import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
//import Car from './Car.jsx';
import './App.css';

function App() {

  function Timer() {
    const [timeLeft, setTimeLeft] = useState(60); // Startwert: 60 Sekunden
    const [isRunning, setIsRunning] = useState(false);
    const [texto, setTexto] = useState(null);

    useEffect(() => {
      if (!isRunning) return;

      const interval = setInterval(() => {
        setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);

      // Cleanup-Funktion
      return () => clearInterval(interval);
    }, [isRunning]);

    const setTime = () => {
      setTexto(<h1>Sekunde: {timeLeft}</h1>)

    };

    const startTimer = () => setIsRunning(true);
    const stopTimer = () => setIsRunning(false);
    const resetTimer = () => {
      setIsRunning(false);
      setTimeLeft(60); // Zurücksetzen auf 60 Sekunden
    };

    const addSeconds = () => setTimeLeft((timeLeft) => timeLeft + 10);

    return (
      <div style={{ textAlign: "center", fontFamily: "Arial", marginTop: "50px" }}>
        <h1>Countdown Timer</h1>
        <h2>{timeLeft} Sekunden</h2>
        <button onClick={startTimer} disabled={isRunning}>
          Start
        </button>
        <button onClick={stopTimer} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={resetTimer}>Reset</button>
        <button onClick={addSeconds}>Add</button>
        <button onClick={setTime}>Time</button>
        <div>
          {texto}
        </div>
      </div>
    );
  }


    
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Timer />);
}

export default App;