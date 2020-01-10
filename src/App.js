import React from "react";
import { Component } from "react";
import { v4 } from "uuid";
import "./App.css";
import Header from "./components/Header.js";

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
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <Header />
        {console.log(todos)}
      </div>
    );
  }
}

export default App;
