import React from "react";
import { Component } from "react";
import PropTypes from "prop-types";

class AddToDoForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit(e) {
    const { _todo } = this.refs;
    e.preventDefault();
    // pass todo data up to parent component with callback function property "onNewToDo"
    this.props.onNewToDo(_todo.value);
    _todo.value = "";
    _todo.focus();
  }
  render() {
    return (
      <form onSubmit={this.submit}>
        <input ref="_todo" type="text" placeholder="Add new todo..." required />
        <button>ADD</button>
      </form>
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
