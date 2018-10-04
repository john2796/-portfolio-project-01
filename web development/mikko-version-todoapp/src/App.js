import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/todoList";
import TodoInput from "./components/todoInput";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 1, content: "Be A Front End Developer By Next Year" },
        { id: 2, content: "Make Dinner" },
        { id: 3, content: "create React App" },
        { id: 4, content: "learn React " }
      ]
    };
  }

  deleteTodos = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });

    this.setState({
      todos
    });
  };

  addTodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];

    this.setState({
      todos
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todo App</h1>
        </header>
        <br />
        <TodoInput addTodo={this.addTodo} />
        <TodoList deleteTodos={this.deleteTodos} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
