import React from "react";

function FormSign() {
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
        <div className="w-full h-16">
          <input
            className="w-full h-full rounded outline-none px-6 border border-maintix placeholder-secondtix box-border"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
      </div>
    </>
  );
}

export default FormSign;
