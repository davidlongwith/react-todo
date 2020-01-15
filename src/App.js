import React from "react";
import { Component } from "react";
import { v4 } from "uuid";
import "./App.css";
import Header from "./components/Header.js";
import ToDoList from "./components/ToDoList.js";

/*
 * Root application ES6 component class with constructor and custom methods.  All application
 * state managed here.
 *
 * <Header /> contains the user input form for new todos and invokes addToDo()
 * using a callback function property when the form is submitted.
 *
 * <ToDoList /> recieves the full todos array with prop "todos", and invokes removeToDo()
 * when the callback function property "onRemove" is activated by the remove todo button event.
 */
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: v4(), // unique id generated with uuid npm package, v4() is for random based identifer
          todo: "Add a todo"
        }
      ]
    };
    this.addToDo = this.addToDo.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
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

  removeToDo(id) {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos });
  }

  render() {
    const { addToDo, removeToDo } = this;
    const { todos } = this.state;
    return (
      <div className="App">
        <Header onNewToDo={addToDo} />
        <ToDoList todos={todos} onRemove={removeToDo} />
      </div>
    );
  }
}
