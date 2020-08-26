import React, { useState } from 'react';
import FlatList from 'flatlist-react';
import './App.css';

function App() {

  const [todoarray] = useState([]);
  const [xyz, abc] = useState('');
  const pusharray = (event) => {
    event.preventDefault();
    console.log(xyz);
    // list.push({ task: xyz });
    todoarray.push({ task: xyz });
    // todoarray = list;
    console.log(todoarray);
    abc('');
  };
  const myChangeHandler = (event) => {
    abc(event.target.value);


  }
  const renderList = (list) => {
    return (
      <li key={list.id}>
        <b>{list.value}</b>
      </li>
    );
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
        <FlatList
          list={todoarray[{ value: 2 }, { value: 0 }, { value: '' }]}
          renderItem={renderList}
          renderWhenEmpty={() => <div>No task available</div>}
        />
      </header>


    </div>
  );
}

export default App;
