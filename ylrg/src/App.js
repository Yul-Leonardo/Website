import './App.css';
import FormGenerator from './components/FormGenerator'

function App() {
  
  return (
    <div>
      <h1> Hallo Welt !</h1>
      <h2> Mumu </h2>
      <input type="text" name="test" id="test" action="/action_page.php"></input>
      <button type="button" value="Submit" onclick="myFunktion()">Submit</button>

    </div>
  );
}

export default App;
