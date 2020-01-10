import React from "react";
import { Component } from "react";
import { v4 } from "uuid";
import "./App.css";
import Header from "./components/Header.js";
import ToDoList from "./components/ToDoList.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: v4(),
          todo: "Add a todo"
        }
      ]
    };
    this.addToDo = this.addToDo.bind(this);
  }

  addToDo(todo) {
    const todos = [
      ...this.state.todos,
      {
        id: v4(),
        todo
      }
    ];
    this.setState({ todos });
  }

  render() {
    const { addToDo } = this;
    const { todos } = this.state;
    return (
      <div className="App">
        <Header onNewToDo={addToDo} />
        <ToDoList todos={todos} />
      </div>
    );
  }
}

export default App;
