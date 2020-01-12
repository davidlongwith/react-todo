import React from "react";
import ToDo from "./ToDo.js";
import PropTypes from "prop-types";

// "onRemove" prop extracts todo id needed and sends it up the tree
// (placeholder function f=>f returns the first argument sent to it)
const ToDoList = ({ todos, onRemove }) => (
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

// Typechecking with PropTypes
ToDoList.propTypes = {
  todos: PropTypes.array,
  onRemove: PropTypes.func
};

export default ToDoList;
