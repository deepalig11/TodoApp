import React, { useState } from 'react';
import FlatList from 'flatlist-react';
import ListGroup from 'react-bootstrap/ListGroup';
import './App.css';

function App() {

  const [todoarray] = useState([]);
  const [xyz, abc] = useState('');
  const pusharray = (event) => {
    event.preventDefault();
    console.log(xyz);
    // list.push({ task: xyz });
    todoarray.push({ key: Math.random(), task: xyz });
    // todoarray = list;
    // localStorage.setItem(todoarray);
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
        {/* <FlatList
          list={todoarray}
          renderItem={renderList}
          renderWhenEmpty={() => <div>No task available</div>}
        /> */}
        <ListGroup>
          {todoarray.map(item => {
            return (

              <ListGroup.Item variant="dark"
              // onClick={() => this.deleteItem(item.id)}
              >
                {todoarray.value}
              </ListGroup.Item>
            )
          })}
        </ListGroup>
      </header>


    </div>
  );
}

export default App;
