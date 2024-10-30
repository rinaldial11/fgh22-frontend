import React from "react";

function MovieCard(props) {
  return (
    <>
      <div className="flex flex-col gap-5 text-start">
        <div className="w-64 rounded-lg h-96 bg-maintext"></div>
        <div className="text-2xl font-semibold">Black Widow</div>
        {!props.date || (
          <div className="text-lg text-grey font-semibold">{props.date}</div>
        )}
        <div className="flex gap-3">
          <div className="bg-maintix text-secondtix px-3 py-1 rounded-3xl">
            Action
          </div>
          <div className="bg-maintix text-secondtix px-3 py-1 rounded-3xl">
            Adventure
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
