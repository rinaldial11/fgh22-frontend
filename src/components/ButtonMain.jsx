import React from "react";

function ButtonMain(props) {
  return (
    <button
      type={props.type}
      onClick={props.click}
      className="btn btn-primary text-secondary w-full h-full"
    >
      {props.content}
    </button>
  );
}

export default ButtonMain;
