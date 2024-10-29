import React from "react";

function NavBar() {
  return (
    <nav className="flex justify-between items-center px-28 py-7 bg-secondtix h-28 text-white text-sm shadow-lg">
      <div className="font-bold text-3xl text-maintix">Funtastix</div>
      <ul className="flex gap-14">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Movie</a>
        </li>
        <li>
          <a href="#">Buy Ticket</a>
        </li>
      </ul>
      <div className="flex gap-3">
        <a
          className="flex justify-center items-center border border-maintix bg-secondtix w-24 h-12 text-center px-4.5 py-3 text-maintix rounded-lg shadow-lg"
          href="#"
        >
          Sign In
        </a>
        <a
          className="flex justify-center items-center bg-maintix w-24 h-12 text-center px-4.5 py-3 text-secondtix rounded-lg shadow-lg"
          href="#"
        >
          Sign Up
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
