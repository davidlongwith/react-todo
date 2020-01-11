import React from "react";
import ToDo from "./ToDo.js";

// "onRemove" prop extracts todo id needed and sends it up the tree
// (placeholder function f=>f returns the first argument sent to it)
const ToDoList = ({ todos, onRemove = f => f }) => (
  <div className="todo-list">
    {todos.length === 0 ? (
      <p className="no-todos">No To-Do's Listed. (Add a To-Do)</p>
    ) : (
      todos.map(todo => (
        <ToDo key={todo.id} {...todo} onRemove={() => onRemove(todo.id)} />
      ))
    )}
  </div>
);

export default ToDoList;
