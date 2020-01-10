import React from "react";
import { Component } from "react";
import { v4 } from "uuid";
import "./App.css";
import Header from "./components/Header.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {console.log(v4())}
      </div>
    );
  }
}

export default App;
