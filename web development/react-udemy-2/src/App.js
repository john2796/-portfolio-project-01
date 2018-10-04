import React, { Component } from "react";
import "./App.css";

import ValidationComponent from "./ValidationComponent";
import CharComponent from "./CharComponent";

class App extends Component {
  state = {
    content: ""
  };

  handleInputChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  deleteCharHandler = index => {
    //converting string to array
    const text = this.state.content.split("");
    text.splice(index, 1);
    //converting array to string 
    const updatedText = text.join("");
    this.setState({
      content: updatedText
    });
  };

  render() {
    const charList = this.state.content.split("").map((char, index) => {
      return (
        <CharComponent
          key={index}
          char={char}
          clicked={() => this.deleteCharHandler(index)}
        />
      );
    });
    return (
      <div>
        <input
          value={this.state.content}
          type="text"
          onChange={this.handleInputChange}
        />
        <p>{this.state.content}</p>
        <ValidationComponent contentLength={this.state.content.length} />
        {charList}
      </div>
    );
  }
}

export default App;
