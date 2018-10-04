import React from "react";

const CharComponent = ({ char, clicked }) => {
  return (
    <div
      style={{
        display: "inline-block",
        padding: "16px",
        textAlign: "center",
        margin: "16px",
        border: "1px solid black"
      }}
    >
      <p onClick={clicked}>{char}</p>
    </div>
  );
};

export default CharComponent;
