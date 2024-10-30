import React from "react";
import { Link } from "react-router-dom";
import ButtonMain from "../components/ButtonMain";
import ButtonSos from "../components/ButtonSos";

function Register() {
  return (
    <>
      <div>
        <div className="bg-avengers relative items-center py-16 px-10 w-screen h-screen bg-no-repeat bg-cover flex flex-col gap-5 text-maintext">
          <div className="h-1/6 flex justify-center items-end">
            <span className="font-bold text-5xl text-white">Funtastix</span>
          </div>
          <div className="flex flex-col gap-6 bg-white rounded-md w-full min-w-80 max-w-xl h-full px-20 py-14">
            <div className="step"></div>
            <form action="" className="flex flex-col gap-6">
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
              <div className="flex items-center gap-5">
                <input
                  className="w-5 h-5"
                  type="checkbox"
                  id="terms"
                  name="terms"
                  value="true"
                />
                <label className="text-lg text-secondtix" htmlFor="terms">
                  I agree to terms & conditions
                </label>
              </div>
              <div className="w-full h-16">
                <ButtonMain content={"Join For Free Now"} />
              </div>
            </form>
            <div className="w-full text-center">
              <div className="font-semibold text-grey">
                Already have an account?{" "}
                <Link to="/login" className="underline text-birmud">
                  Log in
                </Link>
              </div>
            </div>
            <div className="text-center">
              <div></div>
              <div className="text-grey">or</div>
              <div></div>
            </div>
            <div>
              <ButtonSos />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
