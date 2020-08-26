import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let todoarray = [{ id: '', task: '' }]
  const [xyz, abc] = useState('s');
  function pusharray() {
    console.log(xyz);
    todoarray.push({ id: '0', task: xyz });
  };
  const myChangeHandler = (event) => {
    abc(event.target.value);
    todoarray.push(xyz);

  }




  return (
    <div className="App">
      <header className="App-header">
        <h1>TO-DO Application</h1>
        <form>
          <p>Task</p>
          <input id="todo" type="text" value={xyz} onChange={myChangeHandler} />
          <button onClick={pusharray}>Save</button>
        </form>


      </header>
    </div>
  );
}

export default App;
