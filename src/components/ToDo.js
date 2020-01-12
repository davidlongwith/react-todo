import React from "react";
import PropTypes from "prop-types";

// send onClick event to parent component with "onRemove" callback function prop
const ToDo = ({ todo, onRemove }) => (
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
