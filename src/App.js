import React, { useState, useEffect, Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import List from './component/List/List';
import Header from './component/Header/Header';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoarray: [],
      text: '',
      tag: '',
      tagArray: []
    }

  }

  pusharray = (event) => {
    if (this.state.text.length !== 0) {

      if (localStorage.getItem("record") == null) {
        const list = [];
        list.push({ key: Math.random(), task: this.state.text, status: 0, });
        localStorage.setItem("record", JSON.stringify(list));
      } else {
        const list1 = JSON.parse(localStorage.getItem("record"));
        list1.unshift({ key: Math.random(), task: this.state.text, status: 0, });
        localStorage.setItem("record", JSON.stringify(list1));
      }

      this.setState({
        todoarray: (JSON.parse(localStorage.getItem("record"))),
        text: ''
      })
    }
  };


  myTagHandler = (event) => {

    this.setState({ tag: event.target.value })
  }

  componentDidMount() {
    const list = JSON.parse(localStorage.getItem('record'));
    if (list !== null)
      this.setState({ todoarray: list })
  }

  changeStatus = (x) => {
    const elementsIndex = this.state.todoarray.findIndex(element => element.key === x)

    if (this.state.todoarray[elementsIndex].status === 0) {

      let i;
      if (localStorage.getItem("counter") == null) {
        i = 1;
        localStorage.setItem("counter", JSON.stringify(i));
      } else {
        i = JSON.parse(localStorage.getItem("counter"));
        i = i + 1;
        localStorage.setItem("counter", JSON.stringify(i));
      }
      let newArray = [...this.state.todoarray];
      newArray[elementsIndex] = { key: newArray[elementsIndex].key, task: newArray[elementsIndex].task, status: i }
      this.setState({ todoarray: newArray })
      localStorage.setItem("record", JSON.stringify(newArray));
    }
  }

  resetList = () => {
    localStorage.clear();
    this.setState({ todoarray: [] })
  }

  hashTag = (event) => {
    if (this.state.tag.length !== 0) {
      const arr = [...this.state.tagArray];
      arr.push({ tagValue: this.state.tag })
      this.setState({ tagArray: arr, tag: '' })
    }
  };

  textHandler = (event) => {
    this.setState({ text: event.target.value })
  }

  showFilteredTask = (str) => {
    document.getElementById(str).style.backgroundColor = "rgb(128, 0, 128)";
    str = str.toLowerCase();
    console.log(str);

    const list = [...this.state.todoarray];
    const list1 = list.filter(item => {
      const l1 = item.task.toLowerCase();
      return l1.includes(str);
    });

    this.setState({ todoarray: list1 })

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header
            resetList={this.resetList}
            pusharray={this.pusharray}
            myTagHandler={this.myTagHandler}
            hashTag={this.hashTag}
            textHandler={this.textHandler}
            text={this.state.text}
            tag={this.state.tag}
          />
          {
            this.state.tagArray.map((item) => {
              return (
                <button id={item.tagValue} onClick={() => { this.showFilteredTask(item.tagValue) }} >{item.tagValue}</button>
              );

            })
          }
          <List array={this.state.todoarray.filter(items => items.status === 0)}
            changeStatus={this.changeStatus}
            word={this.state.tag} />
          <h2 style={{ textAlign: "center" }}>Completed</h2>
          <List array={this.state.todoarray.filter(item => item.status !== 0).sort((a, b) => { return b.status - a.status })}
            changeStatus={this.changeStatus}
            word={this.state.tag} />
        </header>
      </div >
    );
  }
}

export default App;
