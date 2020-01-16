import React from "react";
import "../css/ToDoList.css";
import ToDo from "./ToDo.js";
import PropTypes from "prop-types";

/*
 * This stateless functional component is responsible for displaying all
 * of the todo's, or a default message if there aren't any.  The "todos" prop contains
 * the array of all to-do's passed down from <App />.  The "onRemove" callback
 * function property passes relevant event data from <ToDo /> up the tree to <App />.
 */
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

// Typechecking with PropTypes
ToDoList.propTypes = {
  todos: PropTypes.array,
  onRemove: PropTypes.func
};

export default ToDoList;
