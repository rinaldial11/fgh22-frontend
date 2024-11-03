import React from "react";
import ButtonMain from "../components/ButtonMain";
import ButtonSos from "../components/ButtonSos";
import FormSign from "../components/FormSign";
import { Link } from "react-router-dom";
import LogoBrand from "../components/LogoBrand";

function Login() {
  return (
    <>
      <div>
        <div className="bg-[url(/src/assets/images/avengers-darken.png)] items-center py-16 px-10 w-screen h-screen bg-no-repeat bg-cover flex flex-col gap-5 text-maintext">
          <LogoBrand />
          <div className="flex flex-col gap-6 bg-white rounded-md w-full min-w-80 max-w-xl h-fit px-5 md:px-20 py-14">
            <div className="flex flex-col gap-6">
              <div className="text-2xl md:text-3xl font-semibold">
                Welcome Back👋
              </div>
              <div className="text-grey w-full max-w-80 md:w-full md:max-w-full text-lg">
                Sign in with your data that you entered during your registration
              </div>
            </div>
            <form action="" className="flex flex-col gap-6">
              <FormSign />
              <div className="w-full text-end text-birmud">
                <a href="#">Forgot your password?</a>
              </div>
              <div className="w-full h-16">
                <Link to="/">
                  {" "}
                  <ButtonMain content={"Login"} />{" "}
                </Link>
              </div>
            </form>

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

export default Login;
