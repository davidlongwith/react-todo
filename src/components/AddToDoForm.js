import React from "react";
import { Component } from "react";

class AddToDoForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit(e) {
    const { _todo } = this.refs;
    e.preventDefault();
    alert(`New Todo: ${_todo.value}`);
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

export default AddToDoForm;
