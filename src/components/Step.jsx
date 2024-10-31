import React from "react";
import { FaCheck } from "react-icons/fa6";

function Step(props) {
  return (
    <div className="flex flex-col gap-2 items-center text-center">
      {props.status === "activated" && (
        <div className="w-14 h-14 rounded-full bg-maintext text-maintix flex items-center justify-center">
          <FaCheck />
        </div>
      )}
      {props.status === "done" && (
        <div className="w-14 h-14 rounded-full bg-secondtix text-maintix flex items-center justify-center">
          {props.content}
        </div>
      )}
      {props.status === "ongoing" && (
        <div className="w-14 h-14 rounded-full bg-maintix text-secondtix flex items-center justify-center">
          {props.content}
        </div>
      )}
      {props.status === "on" && (
        <div className="w-14 h-14 rounded-full bg-white text-secondtix flex items-center justify-center">
          {props.content}
        </div>
      )}
      {props.status === "done" && <div>{props.content2}</div>}
      {props.status === "activated" && <div>{props.content2}</div>}
      {props.status !== "done" && props.status !== "activated" && (
        <div className="text-grey">{props.content2}</div>
      )}
    </div>
  );
}

export default Step;
