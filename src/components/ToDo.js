import React from "react";

const ToDo = ({ todo, onRemove = f => f }) => (
  <section className="todo-entry-container">
    <button onClick={onRemove}>x</button>
    <p>{todo}</p>
  </section>
);

export default ToDo;
