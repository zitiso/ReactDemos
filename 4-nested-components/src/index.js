import React from 'react';
import ReactDOM from 'react-dom/client';
import Dog from "./components/dog";
import Cat from "./components/cat";
import Garage from './components/garage';

const myFirstElement = <h1>Hello React! I am using JSX!</h1>

const mySecondElement = <h1>React is {5 + 5} times better with JSX</h1>;

const myThirdElement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);

const myFourthElement = (
  <div>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </div>
);



const myElement = React.createElement('h1', {}, 'I do not use JSX!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage/>);