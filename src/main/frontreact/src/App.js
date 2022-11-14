import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

//let name = "eggRollMaster";
//let [name, setName] = useState('egg');
//let num = 1;
let [num, setNum] = useState(1);


setTimeout(()=> {setNum(num = num+1)},1000);

  return (
    <div className="App">
      <header className="App-header">
        <div>{ num }</div>
        {<button onClick = {() => {setNum(num += 1)}}>버튼</button> }
      </header>
    </div>
  );
}

export default App;
