import React from "react";

function NavBar() {
  return (
    <div className="flex justify-between items-center px-32 py-7 bg-maintix h-28 text-maintext text-sm shadow-lg">
      <div>Funtastix</div>
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
          className="flex justify-center items-center border border-secondtix bg-maintix w-24 h-12 text-center px-4.5 py-3 text-secondtix rounded-lg shadow-lg"
          href="#"
        >
          Sign In
        </a>
        <a
          className="flex justify-center items-center bg-secondtix w-24 h-12 text-center px-4.5 py-3 text-maintix rounded-lg shadow-lg"
          href="#"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
}

function App() {
  return <NavBar />;
}

export default App;
