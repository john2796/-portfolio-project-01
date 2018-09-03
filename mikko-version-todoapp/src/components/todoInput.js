import React, { Component } from "react";

class TodoInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  handleChange = event => {
    this.setState({
      content: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state);
    console.log(this.state);

    this.setState({
      content: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.content}
            onChange={this.handleChange}
            type="text"
            placeholder="add todo list here . . ."
            className="form-control"
          />
        </form>
      </div>
    );
  }
}

export default TodoInput;
