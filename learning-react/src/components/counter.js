import React, { Component } from "react";

class Counter extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <span className={this.getBadgesClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* this is the && and logical operator both has to be true to render the tags state 
        so if tags length is zero it will render please create new tag but if its true it will ignore */}
        {/* {this.state.tags.length === 0 && "Please create a new tag"} */}
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  getBadgesClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
