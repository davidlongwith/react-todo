import React from "react";
import logo from "../logo.svg";
import AddToDoForm from "./AddToDoForm.js";
import PropTypes from "prop-types";

// Pass callback function property "onNewToDo" up the tree to App component.
// (placeholder function f=>f returns the first argument sent to it)
const Header = ({ onNewToDo = f => f }) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1>React To-Do</h1>
    <AddToDoForm onNewToDo={onNewToDo} />
  </header>
);

// Typechecking with PropTypes
AddToDoForm.propTypes = {
  onNewToDo: PropTypes.func
};
AddToDoForm.defaultProps = {
  onNewToDo: f => f
};

export default Header;
