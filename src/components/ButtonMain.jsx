import React from "react";

function ButtonMain(props) {
  return (
    <button
      type={props.type}
      onClick={props.click}
      className="w-full h-full text-maintix rounded-md bg-secondtix"
    >
      {props.content}
    </button>
  );
}

export default ButtonMain;
