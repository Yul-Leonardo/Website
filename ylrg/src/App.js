import React from 'react';
import ReactDOM from 'react-dom/client';

import './App.css';

function App() {

    //const myElement = <h1>React is {5+5} times better with JSX </h1>;

    //const myElement = (
      //<ul>
        //<li>Apples</li>
        //<li>Banana</li>
        //<li>Pears</li>
      //</ul>
    //)

    //const myElement = <input type="text" />;

    //const myElement = <h1 className='myclass'>Hello World</h1>

    //const x = 10;
    //let text = "Goodbye";
    //if (x < 10) {
      //text = "Hello"
    //}

    //const myElement = <h1>{text}</h1>

    //const x = 10;

    //const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;

    //const root = ReactDOM.createRoot(document.getElementById('root'));
    //root.render(myElement);

    //class Car extends React.Component{
      //render() {
        //return <h2>Hi, I am a Car!</h2>
      //}
    //}

    function Car(props) {
      return <h2> I am a {props.color} Car! </h2>;
    }

    function Garage() {
      return (
        <>
          <h1>Who lives in my Garage?</h1>
          <Car />
        </>
      )
    }
  
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Garage />);
}

export default App;
