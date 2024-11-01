import React from "react";
import { Link } from "react-router-dom";
import LogoBrand from "./LogoBrand";

function NavBar() {
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
    </nav>
  );
}

export default NavBar;
