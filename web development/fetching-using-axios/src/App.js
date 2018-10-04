import React, { Component } from "react";

import "./App.css";
import PersonInput from "./PersonInput";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Fetching through axios</h1>
        <PersonInput />
      </div>
    );
  }
}

export default App;
