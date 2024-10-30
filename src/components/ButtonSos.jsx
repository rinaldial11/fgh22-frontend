import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

function ButtonSos() {
  return (
    <div className="flex gap-9 w-full justify-center">
      <div className="w-full text-center h-16">
        <button className="w-full flex items-center justify-center gap-6 text-lg h-full shadow-lg text-grey">
          <FcGoogle /> Google
        </button>
      </div>
      <div className="w-full text-center h-16">
        <button className="rounded w-full flex items-center justify-center gap-6 text-lg h-full shadow-lg text-grey">
          <FaFacebook className="text-birmud" /> Facebook
        </button>
      </div>
    </div>
  );
}

export default ButtonSos;
