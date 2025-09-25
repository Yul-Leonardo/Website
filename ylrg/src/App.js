import { useState, useEffect } from "react";
import './App.css';

function App() {
  const taskDescriptions = {
    "Küche": `- Arbeitsflächen abwischen
  - Herd und Backofen reinigen
  - Kühlschrank kontrollieren und ggf. abwischen
  - Spüle reinigen und Wasserhahn polieren
  - Müll leeren und Papier nachfüllen
  - Boden fegen und wischen`,
    
    "Bad": `- Waschbecken und Armaturen reinigen
  - Toilette innen und außen putzen
  - Dusche/Badewanne + Fugen reinigen
  - Spiegel putzen
  - Boden wischen
  - Handtücher wechseln`,
    
    "Wohnzimmer": `- Staub wischen (Regale, Möbel)
  - Oberflächen abwischen
  - Teppiche saugen
  - Kissen aufschütteln
  - Fensterbänke reinigen`,
    
    "Balkon": `- Boden kehren oder wischen
  - Möbel abwischen
  - Pflanzen gießen
  - Geländer reinigen
  - Müll entsorgen`
  };

  const tasks = ["Küche", "Bad", "Wohnzimmer", "Balkon"];
  const weeks = ["Week 1","Week 2","Week 3","Week 4","Week 5","Week 6"];

  const profiles = {
    Yago: "#f44336",
    Yul: "#2196f3",
    Saphira: "#ff9800",
    Done: "#008000"
  };

  const [currentProfile, setCurrentProfile] = useState("Yago");
  const [dayColors, setDayColors] = useState(() => {
    const stored = localStorage.getItem("dayColors");
    return stored ? JSON.parse(stored) : {};
  });

  const [modalTask, setModalTask] = useState(null); // Task für Modal

  useEffect(() => {
    localStorage.setItem("dayColors", JSON.stringify(dayColors));
  }, [dayColors]);

  const handleDayClick = (task, week) => {
    const key = `${task}-${week}`;
    setDayColors(prev => ({
      ...prev,
      [key]: currentProfile
    }));
  };

  const openTaskModal = (task) => {
    setModalTask(task);
  };

  const closeTaskModal = () => {
    setModalTask(null);
  };

  return (
    <div>
      {/* Profile Auswahl */}
      <div className="profiles">
        {Object.keys(profiles).map(profile => (
          <button
            key={profile}
            className={`profile-btn ${currentProfile === profile ? "selected" : ""}`}
            style={{ backgroundColor: profiles[profile] }}
            onClick={() => setCurrentProfile(profile)}
          >
            {profile}
          </button>
        ))}
      </div>

      {/* Kalender */}
      <div className="calendar">
        <div className="week">Woche / Aufgabe</div>
        {weeks.map((week) => (
          <div key={week} className="week">{week}</div>
        ))}

        {tasks.map((task) => (
          <>
            {/* Task als Button */}
            <button
              key={task}
              className="task-btn"
              onClick={() => openTaskModal(task)}
            >
              {task}
            </button>

            {weeks.map((week, idx) => {
              const key = `${task}-${week}`;
              const profile = dayColors[key];
              return (
                <button
                  key={key}
                  className="day"
                  onClick={() => handleDayClick(task, week)}
                  style={{
                    backgroundColor: profile ? profiles[profile] : "#fff",
                    color: profile ? "#fff" : "#000",
                    position: "relative",
                  }}
                >
                  {idx + 1}
                  {profile === "Done" && (
                    <span className="done-flag">✅</span>
                  )}
                </button>
              );
            })}
          </>
        ))}
      </div>

      {/* Modal */}
      {modalTask && (
        <div className="modal-overlay" onClick={closeTaskModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>{modalTask}</h2>
            <pre>{taskDescriptions[modalTask]}</pre>
            <button onClick={closeTaskModal}>Schließen</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
