import React from "react";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

function FormSign() {
  const [type, setType] = React.useState("password");
  const [icon, setIcon] = React.useState(<FiEye />);

  function hidePassword() {
    if (type === "password") {
      setType("text");
      setIcon(<FiEyeOff />);
    } else {
      setType("password");
      setIcon(<FiEye />);
    }
  }
  return (
    <>
      <div className="w-full flex flex-col gap-3">
        <label htmlFor="email">Email</label>
        <div className="w-full h-16">
          <input
            className="w-full h-full rounded outline-none px-6 border border-maintix placeholder-secondtix box-border"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-3">
        <label htmlFor="email">Password</label>
        <div className="relative flex w-full h-16">
          <input
            className="w-full h-full rounded outline-none px-6 border border-maintix placeholder-secondtix box-border"
            id="password"
            name="password"
            type={type}
            placeholder="Enter your password"
          />
          <button
            type="button"
            onClick={hidePassword}
            className="absolute right-6 top-1/3 text-xl"
          >
            {icon}
          </button>
        </div>
      </div>
    </>
  );
}

export default FormSign;
