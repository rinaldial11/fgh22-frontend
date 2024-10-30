import React from "react";

function Step(props) {
  return (
    <div className="flex flex-col gap-2 items-center text-center">
      {props.status !== "done" || (
        <div className="w-14 h-14 rounded-full bg-secondtix text-maintix flex items-center justify-center">
          {props.content}
        </div>
      )}
      {props.status === "done" || (
        <div className="w-14 h-14 rounded-full bg-maintix text-secondtix flex items-center justify-center">
          {props.content}
        </div>
      )}
      {props.status === "done" || (
        <div className="text-grey">{props.content2}</div>
      )}
      {props.status !== "done" || <div>{props.content2}</div>}
    </div>
  );
}

export default Step;
