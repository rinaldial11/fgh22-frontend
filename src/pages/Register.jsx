import React from "react";
import { Link } from "react-router-dom";
import ButtonMain from "../components/ButtonMain";
import ButtonSos from "../components/ButtonSos";
import Step from "../components/Step";
import LogoBrand from "../components/LogoBrand";
import { Alert } from "antd";
import { useRegister } from "../hooks/useRegister.jsx";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    isSuccess,
    message,
    type,
    icon,
    hidePassword,
  } = useRegister();

  return (
    <>
      <div>
        <div className="bg-[url(/src/assets/images/avengers-darken.png)] items-center py-16 px-5 md:px-10 w-screen h-screen md:h-full 2xl:h-screen bg-no-repeat bg-cover flex flex-col gap-5 text-maintext">
          <LogoBrand />
          <div className="flex flex-col gap-6 bg-white rounded-md w-full min-w-80 max-w-xl px-5 md:px-20 py-14">
            <div className="hidden md:flex items-center justify-center gap-3">
              <Step
                step={0}
                content1={"Fill Form"}
                content2={"Activate"}
                content3={"Done"}
              />
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
              onSubmit={handleSubmit(onSubmit)}
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
                <label htmlFor="email" className="cursor-pointer">
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
              <div className="flex items-center gap-5">
                <input
                  className="w-5 h-5 checkbox checkbox-secondary rounded-sm border-secondary-content"
                  type="checkbox"
                  id="terms"
                  {...register("agreeTOS", { required: true })}
                  value="true"
                />
                <label htmlFor="terms" className="flex gap-4 cursor-pointer">
                  I agree to terms & conditions
                </label>
              </div>
              {errors["agreeTOS"]?.message && (
                <div className="text-red opacity-80">
                  {errors["agreeTOS"]?.message}
                </div>
              )}
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
};

export default RegisterPage;
