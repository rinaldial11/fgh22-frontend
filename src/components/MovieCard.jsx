import React from "react";
import BlackWidow from "../assets/images/Black-Widow.png";
import TheWitches from "../assets/images/The-Witches.png";
import Tenet from "../assets/images/Tenet.png";
import Spiderman from "../assets/images/Spiderman.png";
import { Link } from "react-router-dom";

function MovieCard(props) {
  return (
    <>
      <div className="group relative flex flex-col gap-5 text-start">
        <div className="w-64 rounded-lg h-fit overflow-hidden">
          {/* {props.tittle === "Black Widow" && (
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
          )} */}
          <img src={props.source} alt="" />
        </div>
        {props.tittle === "Tenet" && !props.date && (
          <div className="absolute bg-secondtix mt-2 -ml-2 text-maintix text-sm py-1 px-4 w-32 rounded-e-2xl rounded-tl-xl">
            Recommended
          </div>
        )}
        {props.tittle === "The Witches" && !props.date && (
          <div className="absolute bg-secondtix mt-2 -ml-2 text-maintix text-sm py-1 px-4 w-32 rounded-e-2xl rounded-tl-xl">
            Recommended
          </div>
        )}
        <div className="absolute hidden group-hover:flex h-64 rounded-md w-64 flex-col justify-center items-center gap-3 bg-[#00000066]">
          <Link
            className="w-44 h-12 border border-maintix flex justify-center items-center text-maintix rounded-md"
            to="/details"
          >
            Details
          </Link>
          <Link
            className="w-44 h-12 bg-secondtix flex justify-center items-center text-maintix rounded-md"
            to="/order"
          >
            Buy Ticket
          </Link>
        </div>
        <div className="text-2xl font-semibold">{props.charname}</div>
        {props.date && (
          <div className="text-lg text-grey font-semibold">{props.date}</div>
        )}
        {/* <div className="flex gap-3">
          <div className="bg-abumuda text-secondtix px-3 py-1 rounded-3xl">
            {props.genre1}
          </div>
          <div className="bg-abumuda text-secondtix px-3 py-1 rounded-3xl">
            {props.genre2}
          </div>
        </div> */}
      </div>
    </>
  );
}

export default MovieCard;
