import React from "react";

const User = props => {
  return (
    <li>
      <span>
        {" "}
        name: {props.children} age: {props.age}
      </span>
      <input type="text" onChange={props.onChangeEvent} />
      <button onClick={props.onDelete}>Delete</button>
    </li>
  );
};

export default User;
