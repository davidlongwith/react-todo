import React from "react";

const ToDo = ({ todo }) => (
  <section className="todo-container">
    <button>-</button>
    <p>{todo}</p>
  </section>
);

export default ToDo;
