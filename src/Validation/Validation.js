import React from "react";

const validation = props => {
  let validationMessage = "Text long enough";

  if (props.inputLength <= 5) validationMessage = "Text too short";
  return (
    <div>
      {validationMessage}
      <p>{props.inputLength}</p>
    </div>
  );
};

export default validation;
