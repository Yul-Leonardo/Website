import './App.css';
import Gay from './images/gay.png';

function App() {
  return (
    <div classNome="App">
      <div className="center">
        <h1> YAGO IST GAY </h1>
      </div>
      <div className="center">
        <img src={Gay} alt="Gay Flagge" />
      </div>
    </div>
  );
}

export default App;