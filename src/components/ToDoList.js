import React from "react";
import ToDo from "./ToDo.js";

const ToDoList = ({ todos }) => (
  <div className="todo-list">
    {todos.length === 0 ? (
      <p>No To-Do's Listed. (Add a To-Do)</p>
    ) : (
      todos.map(todo => <ToDo key={todo.id} {...todo} />)
    )}
  </div>
);

export default ToDoList;
