import React from 'react';
import ReactDOM from 'react-dom/client';
//import Car from './Car.jsx';
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

    //function Car(props) {
      //return <h2> I am a {props.color} Car! </h2>;
    //}

    //function Garage() {
      //return (
        //<>
          //<h1>Who lives in my Garage?</h1>
          //<Car />
        //</>
      //)
    //}

    //class Car extends React.Component {

      //constructor() {
        //super();
        //this.state = {color: "red"};
      //}
      //render() {
        //return <h2>I am a {this.state.color} Car!</h2>
      //}
    //}

    //class Car extends React.Component {

      //constructor(props) {
        //super(props);
        //this.state = {color: "red"};
      //}
      //render() {
        //return <h2>I am a {this.props.model} Car!</h2>
      //}
    //}

    //class Car extends React.Component {
      //render() {
        //return <h2>I am a Car!</h2>
      //}
    //}

    //class Garage extends React.Component {
      //render() {
        //return (
          //<div>
            //<h1>Who lives in my Garage?</h1>
            //<Car />
          //</div>
        //)
      //}
    //}

    //class Car extends React.Component {
      //constructor(props) {
        //super(props);
      //this.state = {
        //brand: "Ford",
        //model: "Mustang",
        //color: "red",
        //year: 1964
      //};
    //}

    //changeColor = () => {
      //this.setState({color: "blue"});
    //}
      //render() {
        //return (
          //<div>
            //<h1>My {this.state.brand} Car</h1>
            //<p>
              //It is a {this.state.color}
              //{this.state.model}
              //from {this.state.year}.
            //</p>
            //<button
              //type="button"
              //onClick={this.changeColor}
            //>Change color</button>
          //</div>
        //)
      //}
    //}

    class Container extends React.Component {
      constructor(props) {
        super(props);
        this.state = {show : true};
      }
      //static getDerivedStateFromProps(props, state) {
        //return {favoritecolor : props.favcol};
      //}

      //shouldComponentUpdate() {
        //return true;
      //}

      //changeColor = () => {
        //this.setState({favoritecolor: "blue"})
      //}
      
      //componentDidMount() {
        //setTimeout(() => {
          //this.setState({favoritecolor: "yellow"})
        //}, 1000)
      //}

      //getSnapshotBeforeUpdate(prevProps, prevState) {
        //document.getElementById("div1").innerHTML =
        //"Before the update, the favorite was " + prevState.favoritecolor;
      //}

      //componentDidUpdate() {
        //document.getElementById("mydiv").innerHTML =
        //"The updated favourite is" + this.state.favoritecolor;
      //}

      delHeader = () => {
        this.setState({show: false});
      }

      render() {
        let myheader;
        if (this.state.show) {
          myheader = <Child />;
        };
        return (
          <div>
            {myheader}
            <button type='button' onClick={this.delHeader}>Delete Header</button>
          </div>
        );
      }
    }

    class Child extends React.Component {
      componentWillUnmount() {
        alert("The component named Header is about to be unmounted.");
      }
      render() {
        return(
          <h1>Hello world!</h1>
        );
      }
    }

    
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Container />);
}

export default App;