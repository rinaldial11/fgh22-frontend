import React from "react";

function MovieCard(props) {
  return (
    <>
      <div className="flex flex-col gap-5 text-start">
        <div className="w-64 rounded-lg h-96 bg-maintext"></div>
        <div className="text-2xl font-semibold">{props.tittle}</div>
        {!props.date || (
          <div className="text-lg text-grey font-semibold">{props.date}</div>
        )}
        <div className="flex gap-3">
          <div className="bg-maintix text-secondtix px-3 py-1 rounded-3xl">
            {props.genre1}
          </div>
          <div className="bg-maintix text-secondtix px-3 py-1 rounded-3xl">
            {props.genre2}
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
