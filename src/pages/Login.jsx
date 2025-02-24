import React from "react";
import ButtonMain from "../components/ButtonMain";
import ButtonSos from "../components/ButtonSos";
import LogoBrand from "../components/LogoBrand";
import { Link } from "react-router-dom";
import { Alert } from "antd";
import { useLogin } from "../hooks/useLogin";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    errors,
    formSubmit,
    isSuccess,
    message,
    type,
    icon,
    hidePassword,
  } = useLogin();
  return (
    <>
      <div>
        <div className="bg-[url(/src/assets/images/avengers-darken.png)] items-center py-16 px-5 md:px-10 w-screen h-screen bg-no-repeat bg-cover flex flex-col gap-5 text-maintext">
          <LogoBrand />
          <div className="flex flex-col gap-2 bg-white rounded-md w-full min-w-80 max-w-xl md:h-fit h-full px-5 md:px-20 py-14">
            <div className="flex flex-col gap-6">
              <div className="text-2xl md:text-3xl font-semibold">
                Welcome Back👋
              </div>
              <div className="text-grey w-full max-w-80 md:w-full md:max-w-full text-lg">
                Sign in with your data that you entered during your registration
              </div>
            </div>
            {isSuccess === false && (
              <>
                <Alert
                  className="rounded-lg"
                  type="error"
                  message={message}
                  banner
                />
              </>
            )}
            {isSuccess === true && (
              <>
                <Alert
                  className="rounded-lg"
                  type="success"
                  message={message}
                  banner
                />
              </>
            )}
            <form
              onSubmit={handleSubmit(formSubmit)}
              className="flex flex-col gap-6"
            >
              <div className="w-full flex flex-col gap-3">
                <label htmlFor="email" className="cursor-pointer">
                  Email
                </label>
                <div className="w-full h-16">
                  <input
                    className={
                      "w-full h-full rounded outline-none px-6 border border-abu placeholder-secondary-content hover:border-secondary focus:border-secondary focus:shadow-sm" +
                      (errors.email?.message ? " border-red" : "")
                    }
                    type="email"
                    id="email"
                    {...register("email", { required: true })}
                    placeholder="Enter your email"
                  />
                </div>
                {errors.email?.message && (
                  <div className="text-red opacity-80">
                    {errors.email?.message}
                  </div>
                )}
              </div>
              <div className="w-full flex flex-col gap-3">
                <label htmlFor="password" className="cursor-pointer">
                  Password
                </label>
                <div className="relative flex w-full h-16">
                  <input
                    className={
                      "w-full h-full rounded outline-none px-6 border border-abu placeholder-secondary-content hover:border-secondary focus:border-secondary focus:shadow-sm" +
                      (errors.password?.message ? " border-red" : "")
                    }
                    id="password"
                    {...register("password", { required: true })}
                    type={type}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={hidePassword}
                    className="absolute text-secondary-content right-6 top-1/3 text-xl"
                  >
                    {icon}
                  </button>
                </div>
                {errors.password?.message && (
                  <div className="text-red opacity-80">
                    {errors.password?.message}
                  </div>
                )}
              </div>
              <div className="w-full text-end text-birmud">
                <a href="#">Forgot your password?</a>
              </div>
              <button className="w-full h-16">
                <ButtonMain content={"Login"} />
              </button>
            </form>
            <div>
              <div className="text-center text-grey">
                Doesn't have an account?{" "}
                <Link className="text-blue underline" to="/register">
                  Register
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
};

export default LoginPage;
