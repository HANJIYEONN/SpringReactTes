import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

let [num, setNum] = useState(1);

  return (
    <div className="App">
      <header className="App-header">
        <div style={{color : "red"}}>{ num }</div>
        <div className="number">{ num }</div>
      </header>
    </div>
  );
}

export default App;
