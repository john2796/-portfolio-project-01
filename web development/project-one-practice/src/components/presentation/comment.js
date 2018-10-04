import React, { Component } from "react";
import Style from "../styles";

class Comment extends Component {
  state = {};
  render() {
    const commentStyle = Style.comment;
    return (
      <div style={{ marginBottom: 16 }}>
        <p style={commentStyle.body}>{this.props.currentComment.body} </p>
        <span style={commentStyle.username}>
          {this.props.currentComment.username}
        </span>
        <span> | </span>
        <span>{this.props.currentComment.timestamp}</span>
        <hr />
      </div>
    );
  }
}

export default Comment;
