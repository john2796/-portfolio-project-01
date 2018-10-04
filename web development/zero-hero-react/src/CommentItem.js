import React from "react";

const CommentItem = ({ comment, deleteTodo, id }) => {
  return (
    <div>
      <div>
        {comment.content}
        <button
          onClick={() => {
            deleteTodo(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CommentItem;
