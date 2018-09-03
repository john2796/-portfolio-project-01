import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CommentItem from "./CommentItem";
import Form from "./Form";

class App extends Component {
  state = {
    comments: [
      { id: 1, content: "hello " },
      { id: 2, content: "my name is  " },
      { id: 3, content: "John Benedict Miranda " }
    ]
  };

  addTodo(todo) {
    todo.id = Math.random();
    const comments = [...this.state.comments, todo];
    this.setState({
      comments
    });
  }

  deleteTodo(id) {
    const comments = this.state.comments.filter(comment => {
      return comment.id !== id;
    });

    this.setState({
      comments
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Form addTodo={this.addTodo.bind(this)} />
        <br />
        {this.state.comments.map(comment => (
          <CommentItem
            comment={comment}
            key={comment.id}
            id={comment.id}
            deleteTodo={this.deleteTodo.bind(this)}
          />
        ))}
      </div>
    );
  }
}

export default App;
