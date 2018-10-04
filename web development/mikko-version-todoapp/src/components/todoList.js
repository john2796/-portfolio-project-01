import React from "react";

const TodoList = ({ todos, deleteTodos }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      // console.log(todo);
      return (
        <div key={todo.id}>
          <span>{todo.content}</span>
          <button
            onClick={() => {
              deleteTodos(todo.id);
            }}
            className="btn btn-danger m-2"
          >
            delete
          </button>
        </div>
      );
    })
  ) : (
    <p>You have no todo's left, yay</p>
  );
  return <div>{todoList}</div>;
};

export default TodoList;
