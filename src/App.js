import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card'

import './App.css';

function App() {

  const [todoarray, funcArray] = useState([]);
  const [text, setText] = useState('');

  const pusharray = (event) => {
    event.preventDefault();
    if (text.length !== 0) {

      if (localStorage.getItem("record") == null) {
        const list = [];
        list.push({ key: Math.random(), task: text, status: 0, });
        localStorage.setItem("record", JSON.stringify(list));
      } else {
        const list1 = JSON.parse(localStorage.getItem("record"));
        list1.unshift({ key: Math.random(), task: text, status: 0, });
        localStorage.setItem("record", JSON.stringify(list1));
      }

      // todoarray.unshift({ key: Math.random(), task: text, status: 0, })
      funcArray(JSON.parse(localStorage.getItem("record")));
      // console.log('task added', todoarray);
      setText('');
    }
  };


  const myChangeHandler = (event) => {
    setText(event.target.value);
  }

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('record'));
    if (list !== null)
      funcArray(list);
  }, [])

  const changeStatus = (x) => {
    const elementsIndex = todoarray.findIndex(element => element.key === x)

    if (todoarray[elementsIndex].status === 0) {

      let i;
      if (localStorage.getItem("counter") == null) {
        i = 1;
        localStorage.setItem("counter", JSON.stringify(i));
      } else {
        i = JSON.parse(localStorage.getItem("counter"));
        i = i + 1;
        localStorage.setItem("counter", JSON.stringify(i));
      }
      let newArray = [...todoarray];
      newArray[elementsIndex] = { key: newArray[elementsIndex].key, task: newArray[elementsIndex].task, status: i }
      funcArray(newArray);
      console.log(todoarray);
      localStorage.setItem("record", JSON.stringify(newArray));
    }
  }

  const resetList = () => {
    localStorage.clear();
    funcArray([]);
  }





  return (
    <div className="App">
      <header className="App-header">
        <h1>TO-DO Application</h1>
        <button onClick={resetList}>Reset</button>
        <form>
          <p>Task</p>
          <input id="todo" type="text" value={text} onChange={myChangeHandler} />

          <button onClick={pusharray}>Save</button>
        </form>
        <ListGroup>
          {todoarray.map(item => {
            return (
              <>
                {item.status === 0 ?
                  <ListGroup.Item variant="dark" key={item.key}
                    onClick={() => { changeStatus(item.key) }}>
                    <Card className="cardlist">
                      {item.task}
                    </Card>
                  </ListGroup.Item>
                  : null}
              </>
            )
          })}
        </ListGroup>
        <h2>Completed</h2>
        <ListGroup>
          {todoarray.filter(item => item.status !== 0).sort((a, b) => { return b.status - a.status }).map(item => {
            return (
              <>
                <ListGroup.Item variant="dark" key={item.key}
                  onClick={() => { changeStatus(item.key) }}>
                  <Card className="cardlist">
                    {item.task}
                  </Card>
                </ListGroup.Item>
              </>
            )
          })}
        </ListGroup>


      </header>


    </div >
  );
}

export default App;
