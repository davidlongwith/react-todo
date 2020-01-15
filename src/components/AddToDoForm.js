import React from "react";
import { Component } from "react";
import "../AddToDoForm.css";
import PropTypes from "prop-types";

class AddToDoForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit(e) {
    const { _todo } = this.refs;
    e.preventDefault();
    // pass new todo input ref value up to parent component with callback function property "onNewToDo"
    this.props.onNewToDo(_todo.value);
    _todo.value = "";
    _todo.focus();
  }
  render() {
    return (
      <div className="add-todo-form-container">
        <form className="add-todo-form" onSubmit={this.submit}>
          <input
            ref="_todo"
            type="text"
            placeholder="Add new todo..."
            required
          />
          <button>+</button>
        </form>
      </div>
    );
  }
}

// Typechecking with PropTypes
AddToDoForm.propTypes = {
  onNewToDo: PropTypes.func
};
AddToDoForm.defaultProps = {
  onNewToDo: f => f
};

export default AddToDoForm;
