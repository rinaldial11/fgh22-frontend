import React from "react";
import { Link } from "react-router-dom";
import LogoBrand from "./LogoBrand";
import { FaMagnifyingGlass } from "react-icons/fa6";
import ProfilePicture from "../assets/images/profile-picture.png";

function NavBar(props) {
  return (
    <nav className="flex justify-between items-center px-28 py-7 bg-secondtix h-28 text-white text-sm shadow-lg">
      <LogoBrand />
      <ul className="flex gap-14">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/home">Movie</Link>
        </li>
        <li>
          <Link to="/order">Buy Ticket</Link>
        </li>
      </ul>
      {props.isLog && (
        <div className="flex gap-3 items-center">
          <div>
            <select
              className="bg-secondtix w-full h-full"
              name="location"
              id="location"
            >
              <option selected disabled value="">
                location
              </option>
              <option value="">Jakarta</option>
              <option value="">Bandung</option>
              <option value="">Surabaya</option>
            </select>
          </div>
          <div>
            <FaMagnifyingGlass />
          </div>
          <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center">
            <img className="w-full h-full" src={ProfilePicture} alt="Profile" />
          </div>
        </div>
      )}
      {!props.isLog && (
        <div className="flex gap-3">
          <Link
            to="/login"
            className="flex justify-center items-center border border-maintix bg-secondtix w-24 h-12 text-center px-4.5 py-3 text-maintix rounded-lg shadow-lg"
            href="#"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="flex justify-center items-center bg-maintix w-24 h-12 text-center px-4.5 py-3 text-secondtix rounded-lg shadow-lg"
            href="#"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
