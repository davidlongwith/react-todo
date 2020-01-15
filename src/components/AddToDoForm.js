import React from "react";
import "../AddToDoForm.css";
import PropTypes from "prop-types";

/*
 * This stateless functional component displays a form for the user to
 * enter new todo's.  The new todo is sent up the tree using the "onNewToDo"
 * callback function property.
 */
const AddToDoForm = ({ onNewToDo = f => f }) => {
  let _todo;

  const submit = e => {
    e.preventDefault();
    onNewToDo(_todo.value);
    _todo.value = "";
    _todo.focus();
  };

  return (
    <div className="add-todo-form-container">
      <form className="add-todo-form" onSubmit={submit}>
        <input
          ref={input => (_todo = input)} // save ref to local variable
          type="text"
          placeholder="Add new todo..."
          required
        />
        <button>+</button>
      </form>
    </div>
  );
};

// Typechecking with PropTypes
AddToDoForm.propTypes = {
  onNewToDo: PropTypes.func
};

export default AddToDoForm;
