import { useState, useEffect } from 'react';
//import ReactDOM from 'react-dom/client';
//import Car from './Car.jsx';
import './App.css';

function App() {
  const [timeLeft, setTimeLeft] = useState(60); // Startwert: 60 Sekunden
  const [isRunning, setIsRunning] = useState(false);
  const [listItems, setlistItems] = useState([]);
  const [newTime, setnewTime] = useState(0);
  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          setTimeLeft(newTime);
          setIsRunning(false);
          return newTime;
        }
      });
    }, 1000);
    // Cleanup-Funktion
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTimeLeft(newTime);
  } 

  const setTime = () => {
    setlistItems((prevItems) => [
      ...prevItems,
      <p key={prevItems.length}>Sekunde: {timeLeft} </p>,
      <button>del</button>
    ]);
  };

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(); // Zurücksetzen auf 60 Sekunden
    if (newTime === 0) {
      setTimeLeft(0);
    } else {
      setTimeLeft(newTime);
    }
  };

  const addSeconds = () => setTimeLeft((timeLeft) => timeLeft + 10);

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial", marginTop: "50  px" }}>
      <h1 className='popo'>Countdown Timer</h1>
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

      <form onSubmit={handleSubmit}>
        <label> Enter time: 
          <input
            type="number" 
            value={newTime}
            onChange={(e) => setnewTime(Number(e.target.value))}

          />
        </label>
        <input type='submit'/>
      </form>

      <div>
        {listItems}
      </div>
    
    </div>
  );
}

export default App;