import React from "react";

//turniary expression is like if and else statement so if todo list is tru return the first argument if its false return the second argument

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            {todo.content}
          </span>
        </div> 
      );
    })
  ) : (
    <p className="center"> You have no todo's left, yay </p>
  );
  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
