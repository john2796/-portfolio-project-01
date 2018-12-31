import React, { Component } from "react";
import "./App.css";
import TestFile from "./Components/testFile";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Repos Search</h1>
        <TestFile />
        <h2>testing testfile </h2>
      </div>
    );
  }
}

export default App;
