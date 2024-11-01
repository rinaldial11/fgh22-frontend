import React from "react";
import { Link } from "react-router-dom";

function AnchorMain(props) {
  return (
    <>
      <Link
        to={props.page}
        className="w-full h-full flex justify-center items-center text-maintix rounded-md bg-secondtix"
      >
        {props.content}
      </Link>
    </>
  );
}

export default AnchorMain;
