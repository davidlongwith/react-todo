import React from "react";
import PropTypes from "prop-types";

/*
 * A stateless functional component that displays each to-do item.  The object property "todo"
 * is available by use of JSX spread operator in parent component.  The "onRemove" callback function
 * property passes the button click event to remove this todo up the tree.
 */
const ToDo = ({ todo, onRemove = f => f }) => (
  <section className="todo-entry-container">
    <button onClick={onRemove}>x</button>
    <p>{todo}</p>
  </section>
);

// Typechecking with PropTypes
ToDo.propTypes = {
  todo: PropTypes.string,
  onRemove: PropTypes.func
};

export default ToDo;
