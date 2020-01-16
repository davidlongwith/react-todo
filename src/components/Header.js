import React from "react";
import "../Header.css";
import logo from "../logo.svg";
import AddToDoForm from "./AddToDoForm.js";
import PropTypes from "prop-types";

/*
 * The app header and user input form are displayed together in this stateless functional
 * component.  The "onNewToDo" callback function property simply passes data from the
 * form component up the tree for use in <App /> where state is managed.
 */
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

export default Header;
