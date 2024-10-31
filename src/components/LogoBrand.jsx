import React from "react";
import FuntastixLogo from "../assets/icons/funtastix-logo.png";

function LogoBrand() {
  return (
    <div className="shadow-2xl w-56 flex justify-center items-end">
      <img className="w-full" src={FuntastixLogo} alt="" />
    </div>
  );
}

export default LogoBrand;
