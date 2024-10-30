import React from "react";

function ButtonMain(props) {
  return (
    <button className="w-full h-full text-maintix rounded-md bg-secondtix">
      {props.content}
    </button>
  );
}

export default ButtonMain;
