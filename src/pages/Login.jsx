import React from "react";
import ButtonMain from "../components/ButtonMain";
import ButtonSos from "../components/ButtonSos";
import LogoBrand from "../components/LogoBrand";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setProfile } from "../redux/reducers/profile";
import { logIn } from "../redux/reducers/auth";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Login() {
  const dispatch = useDispatch();
  const registered = useSelector((state) => state.user.data);
  const isLog = useSelector((state) => state.token);
  const navigate = useNavigate();

  const [showError, setShowError] = React.useState("no");

  const [type, setType] = React.useState("password");
  const [icon, setIcon] = React.useState(<FiEye />);

  const regisValidation = yup.object({
    email: yup
      .string()
      .required("You must fill the email")
      .min(8, "Email minimal character length must be 8"),
    password: yup.string().required("You must fill the password"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(regisValidation) });

  function formSubmit(value) {
    const registeredData = registered.find((e) => e.email === value.email);

    if (value.email !== registeredData?.email) {
      setShowError("yes email");
      return;
    }
    if (value.password !== registeredData?.password) {
      setShowError("yes pass");
      return;
    }
    setShowError("no");

    dispatch(setProfile(value));
    dispatch(logIn(true));
    reset();
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }

  function hidePassword() {
    if (type === "password") {
      setType("text");
      setIcon(<FiEyeOff />);
    } else {
      setType("password");
      setIcon(<FiEye />);
    }
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (isLog.token === true) {
      navigate("/");
    }
  }, [isLog]);
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
              <div>{registered.email}</div>
              <div className="text-grey w-full max-w-80 md:w-full md:max-w-full text-lg">
                Sign in with your data that you entered during your registration
              </div>
            </div>
            <form
              onSubmit={handleSubmit(formSubmit)}
              className="flex flex-col gap-6"
            >
              <div className="w-full flex flex-col gap-3">
                <label htmlFor="email">Email</label>
                <div className="w-full h-16">
                  <input
                    className={
                      "w-full h-full rounded outline-none px-6 border border-maintix placeholder-secondtix box-border" +
                      (errors.email?.message ? " border-red" : "")
                    }
                    type="email"
                    id="email"
                    {...register("email", { required: true })}
                    placeholder="Enter your email"
                  />
                </div>
                {showError === "yes email" && (
                  <div className="text-red opacity-80">
                    Email is not registered
                  </div>
                )}
                {errors.email?.message && (
                  <div className="text-red opacity-80">
                    {errors.email?.message}
                  </div>
                )}
              </div>
              <div className="w-full flex flex-col gap-3">
                <label htmlFor="email">Password</label>
                <div className="relative flex w-full h-16">
                  <input
                    className={
                      "w-full h-full rounded outline-none px-6 border border-maintix placeholder-secondtix box-border" +
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
                    className="absolute right-6 top-1/3 text-xl"
                  >
                    {icon}
                  </button>
                </div>
                {showError === "yes pass" && (
                  <div className="text-red opacity-80">Invalid password</div>
                )}
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
}

export default Login;
