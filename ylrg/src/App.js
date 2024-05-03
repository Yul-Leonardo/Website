import './App.css';
<<<<<<< Updated upstream
import FormGenerator from './components/FormGenerator'

function App() {
  return (
    <div className="container">
      <div className='item-3'>
        <FormGenerator/>
      </div>
      <h1 className="item-1"> YLRG </h1>
      <div className="item-2">

      </div> 
=======

function App() {
  
  function myFunktion() {
    document.getElementById("test").submit();
  }

  return (
    <div>
      <h1> Hallo Welt !</h1>
      <input type="text" name="test" id="test" action="/action_page.php"></input>
      <button type="button" value="Submit" onclick="myFunktion()">Submit</button>

>>>>>>> Stashed changes
    </div>
  );
}

export default App;
