import React from "react";
import BlackWidow from "../assets/images/Black-Widow.png";
import TheWitches from "../assets/images/The-Witches.png";
import Tenet from "../assets/images/Tenet.png";
import Spiderman from "../assets/images/Spiderman.png";
import { Link } from "react-router-dom";

function MovieCard(props) {
  return (
    <>
      <div className="flex flex-col gap-5 text-start">
        <div className="w-64 rounded-lg h-96 overflow-hidden">
          {props.tittle === "Black Widow" && (
            <img
              className="group-hover:opacity-40 relative"
              src={BlackWidow}
              alt="Black Widow"
            />
          )}
          {props.tittle === "The Witches" && (
            <img
              className="group-hover:opacity-40 relative"
              src={TheWitches}
              alt="The Witches"
            />
          )}
          {props.tittle === "Tenet" && (
            <img
              className="group-hover:opacity-40 relative"
              src={Tenet}
              alt="Tenet"
            />
          )}
          {props.tittle === "Spiderman" && (
            <img
              className="group-hover:opacity-40 relative"
              src={Spiderman}
              alt="Spiderman"
            />
          )}
        </div>
        <div className="text-2xl font-semibold">{props.tittle}</div>
        {!props.date || (
          <div className="text-lg text-grey font-semibold">{props.date}</div>
        )}
        <div className="flex gap-3">
          <div className="bg-abumuda text-secondtix px-3 py-1 rounded-3xl">
            {props.genre1}
          </div>
          <div className="bg-abumuda text-secondtix px-3 py-1 rounded-3xl">
            {props.genre2}
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
