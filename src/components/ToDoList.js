import React from "react";

const ToDoList = ({ todos }) => (
  <div className="todo-list">
    {todos.length === 0 ? (
      <p>No To-Do's Listed. (Add a To-Do)</p>
    ) : (
      todos.map(todo => <p key={todo.id}>{todo.todo}</p>)
    )}
  </div>
);

export default ToDoList;
