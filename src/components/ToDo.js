import React from "react";

const ToDo = ({ todo, onRemove = f => f }) => (
  <section className="todo-container">
    <button onClick={onRemove}>-</button>
    <p>{todo}</p>
  </section>
);

export default ToDo;
