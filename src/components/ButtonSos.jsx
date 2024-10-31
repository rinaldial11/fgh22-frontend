import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

function ButtonSos() {
  return (
    <div className="flex gap-9 w-full justify-center">
      <div className="md:w-full text-center h-16">
        <button className="aspect-square md:w-full flex items-center justify-center gap-6 text-lg h-full shadow-lg text-grey">
          <FcGoogle /> <span className="hidden md:block">Google</span>
        </button>
      </div>
      <div className="md:w-full text-center h-16">
        <button className="rounded aspect-square md:w-full flex items-center justify-center gap-6 text-lg h-full shadow-lg text-grey">
          <FaFacebook className="text-birmud" />{" "}
          <span className="hidden md:block">Facebook</span>
        </button>
      </div>
    </div>
  );
}

export default ButtonSos;
