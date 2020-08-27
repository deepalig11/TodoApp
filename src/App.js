import React, { useState } from 'react';
import FlatList from 'flatlist-react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card'

import './App.css';

function App() {

  const [todoarray, funcArray] = useState([]);
  const [xyz, abc] = useState('');
  const pusharray = (event) => {
    event.preventDefault();
    if (xyz.length !== 0) {
      funcArray([{ key: Math.random(), task: xyz, status: 0 }, ...todoarray]);
      console.log(todoarray);
      abc('');
    }
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

  const changeStatus = (x) => {
    const elementsIndex = todoarray.findIndex(element => element.key === x)
    console.log(elementsIndex);
    let newArray = [...todoarray];
    newArray[elementsIndex] = { key: newArray[elementsIndex].key, task: newArray[elementsIndex].task, status: 1 }
    funcArray([...newArray]);
    // todoarray[elementsIndex].status = 1;
    console.log(todoarray);
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
        <ListGroup>
          {todoarray.map(item => {
            return (
              <ListGroup.Item variant="dark"
                onClick={() => { changeStatus(item.key) }}
              >
                <Card className="cardlist">

                  {item.task}
                </Card>
              </ListGroup.Item>

            )
          })}
        </ListGroup>
      </header>


    </div>
  );
}

export default App;
