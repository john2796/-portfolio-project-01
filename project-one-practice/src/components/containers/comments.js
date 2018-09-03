import React, { Component } from "react";
import Comment from "../presentation/comment";
import Style from "../styles";

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: {
        username: "",
        body: "",
        timestamp: ""
      },
      list: [
        { body: "comment 1", username: "dtrupm", timestamp: "10:33" },
        { body: "comment 2", username: "dtaaam", timestamp: "20:33" },
        { body: "comment 3", username: "dtrss", timestamp: "33" }
      ]
    };

    this.submitComment = this.submitComment.bind(this);
    this.updateUserName = this.updateUserName.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.updateTimeStamp = this.updateTimeStamp.bind(this);
  }

  submitComment() {
    // console.log("connected", JSON.stringify(this.state.comment));
    let updatedList = Object.assign([], this.state.list);
    updatedList.push(this.state.comment);

    this.setState({
      list: updatedList
    });
  }

  updateUserName(event) {
    let updatedComment = Object.assign({}, this.state.comment);
    updatedComment["username"] = event.target.value;
    this.setState({
      comment: updatedComment
    });
  }

  updateBody(event) {
    let updatedComment = Object.assign({}, this.state.comment);
    updatedComment["body"] = event.target.value;
    this.setState({
      comment: updatedComment
    });
  }

  updateTimeStamp(event) {
    let updatedComment = Object.assign({}, this.state.comment);
    updatedComment["timestamp"] = event.target.value;
    this.setState({
      comment: updatedComment
    });
  }

  render() {
    const commentStyle = Style.comment;
    const commentList = this.state.list.map((comment, i) => {
      return (
        <li key={i}>
          <Comment currentComment={comment} />
        </li>
      );
    });
    return (
      <div>
        <h2>Comments : Zone 1</h2>
        <div style={commentStyle.commentsBox}>
          <ul style={commentStyle.uL}>{commentList}</ul>

          <input
            onChange={this.updateUserName}
            className="form-control"
            type="text"
            placeholder="Username"
          />
          <br />

          <input
            onChange={this.updateBody}
            className="form-control"
            type="text"
            placeholder="Comment"
          />
          <br />
          <input
            className="form-control"
            type="text"
            placeholder="timestamp"
            onChange={this.updateTimeStamp}
          />

          <br />
          <button onClick={this.submitComment} className="btn btn-info">
            Submit Comment
          </button>
        </div>
      </div>
    );
  }
}

export default Comments;
