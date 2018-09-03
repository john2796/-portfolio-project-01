import React from "react";

const ValidationComponent = ({ contentLength }) => {
  let validationMessage = "text long enoug";
  if (contentLength <= 5) {
    validationMessage = "text too short";
  }
  return (
    <div>
      <p>{validationMessage}</p>
    </div>
  );
};

export default ValidationComponent;
