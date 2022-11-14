import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

//let name = "eggRollMaster";

let [name, setName] = useState('egg');

  return (
    <div className="App">
      <header className="App-header">
        <div>{ name }</div>
      </header>
    </div>
  );
}

export default App;
