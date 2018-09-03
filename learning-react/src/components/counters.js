import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div className="App">
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        <button
          onClick={this.props.onAddItem}
          className="btn btn-primary btn-sm m-2"
        >
          Add Item
        </button>
        {this.props.counters.map(counter => (
          <Counter
            onReset={this.handleReset}
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
