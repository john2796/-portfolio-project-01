import React, { Component } from "react";

class Form extends Component {
  state = {
    content: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ""
    });
  };

  handleChange = event => {
    this.setState({
      content: event.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>This is a form </p>
        <input
          value={this.state.content}
          type="text"
          onChange={this.handleChange}
          placeholder="add todo here . . ."
        />
      </form>
    );
  }
}

export default Form;
