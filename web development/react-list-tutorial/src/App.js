import React, { Component } from "react";
import "./App.css";
import User from "./components/user";
import UinqueId from "react-html-id";

class App extends Component {
  constructor(props) {
    super(props);
    UinqueId.enableUniqueIds(this);
    this.state = {
      users: [
        { id: this.nextUniqueId(), name: "mikko", age: 22 },
        { id: this.nextUniqueId(), name: "beh", age: 25 },
        { id: this.nextUniqueId(), name: "janine", age: 4 }
      ]
    };
    console.log(this.state);
  }

  handleDelete = (index, e) => {
    const users = Object.assign([], this.state.users);
    users.splice(index, 1);
    this.setState({
      users: users
    });
  };

  handleChangeEvents = (id, e) => {
    const index = this.state.users.findIndex(user => {
      return user.id === id;
    });
    const user = Object.assign({}, this.state.users[index]);

    user.name = e.target.value;

    const users = Object.assign([], this.state.users);

    users[index] = user;

    this.setState({
      users: users
    });
  };

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.users.map(user => {
            return (
              <User
                key={user.id}
                onDelete={this.handleDelete.bind(this)}
                age={user.age}
                onChangeEvent={this.handleChangeEvents.bind(this, user.id)}
              >
                {" "}
                {user.name}{" "}
              </User>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
