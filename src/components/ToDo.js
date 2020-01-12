import React from "react";
import PropTypes from "prop-types";

// send onClick event to parent component with "onRemove" callback function prop
const ToDo = ({ todo, onRemove = f => f }) => (
  <section className="todo-entry-container">
    <button onClick={onRemove}>x</button>
    <p>{todo}</p>
  </section>
);

// Typechecking with PropTypes
ToDo.propTypes = {
  onRemove: PropTypes.func
};
ToDo.defaultProps = {
  onRemove: f => f
};

export default ToDo;
