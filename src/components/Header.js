import React from "react";
import logo from "../logo.svg";
import AddToDoForm from "./AddToDoForm.js";

const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1>React To-Do</h1>
    <AddToDoForm />
  </header>
);

export default Header;
