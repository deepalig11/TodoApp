import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import List from './component/List/List';
import Header from './component/Header/Header';

import './App.css';

function App() {

  const [todoarray, funcArray] = useState([]);
  const [text, setText] = useState('');
  const [tag, setTag] = useState('');
  const [tagArray, setTagArray] = useState([]);

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


  const myTagHandler = (event) => {
    setTag(event.target.value);
    // const str = (event.target.value).toLowerCase();
    // let list1 = [];
    // if (event.target.value === null) {
    //   list1 = JSON.parse(localStorage.getItem("record"));
    // }
    // else {
    //   const list = JSON.parse(localStorage.getItem("record"));
    //   list1 = list.filter(item => {
    //     const l1 = item.task.toLowerCase();
    //     return l1.includes(str);
    //   });
    // }
    // funcArray(list1);
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

  const hashTag = (event) => {
    event.preventDefault();
    if (tag.length !== 0) {
      const arr = [...tagArray];
      arr.push({ tagValue: tag })
      setTagArray(arr);
      setTag('');
    }

    console.log(tagArray);
  };

  const textHandler = (event) => {
    setText(event.target.value);
  }

  const showFilteredTask = (str) => {
    document.getElementById(str).style.backgroundColor = "rgb(128, 0, 128)";
    str = str.toLowerCase();
    console.log(str);

    const list = [...todoarray];
    const list1 = list.filter(item => {
      const l1 = item.task.toLowerCase();
      return l1.includes(str);
    });

    funcArray(list1);

  }




  return (
    <div className="App">
      <header className="App-header">
        <Header
          resetList={resetList}
          pusharray={pusharray}
          myTagHandler={myTagHandler}
          hashTag={hashTag}
          textHandler={textHandler}
          text={text}
          tag={tag}
        />
        {
          tagArray.map((item) => {
            return (
              <button id={item.tagValue} onClick={() => { showFilteredTask(item.tagValue) }} >{item.tagValue}</button>
            );

          })
        }
        <List array={todoarray.filter(items => items.status === 0)}
          changeStatus={changeStatus}
          word={tag} />
        <h2 style={{ textAlign: "center" }}>Completed</h2>
        <List array={todoarray.filter(item => item.status !== 0).sort((a, b) => { return b.status - a.status })}
          changeStatus={changeStatus}
          word={tag} />



      </header>
    </div >
  );
}

export default App;
