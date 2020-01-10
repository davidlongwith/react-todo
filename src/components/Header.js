import React from "react";
import logo from "../logo.svg";
import AddToDoForm from "./AddToDoForm.js";

const Header = ({ onNewToDo = f => f }) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1>React To-Do</h1>
    <AddToDoForm onNewToDo={onNewToDo} />
  </header>
);

export default Header;
