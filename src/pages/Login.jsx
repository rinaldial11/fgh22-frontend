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
import { API_URL } from "../config/apiConfig.js";

function Login() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  const [message, setMessage] = React.useState("");
  const [isSuccess, setIsSuccess] = React.useState(null);
  const [type, setType] = React.useState("password");
  const [icon, setIcon] = React.useState(<FiEye />);

  const regisValidation = yup.object({
    email: yup
      .string()
      .required("You must fill the email")
      .min(12, "Email minimal character length must be 12"),
    password: yup.string().required("You must fill the password"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(regisValidation) });

  function formSubmit(value) {
    const query = new URLSearchParams(value);
    const queryString = query.toString();

    fetch(`${API_URL}/auth/login`, {
      method: "POST",
      body: queryString,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((response) => response.json())
      .then((v) => {
        dispatch(logIn(v.results));
        setMessage(v.message);
        setIsSuccess(v.success);

        if (v.success) {
          dispatch(logIn(v.results));
          navigate("/profile"); // Navigasi ke halaman profile
        } else {
          setMessage(v.message); // Set error message
        }
      });
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
    if (isSuccess || token) {
      navigate("/");
      return;
    }
    window.scrollTo(0, 0);
  }, [isSuccess, token]);
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
              <div className="bg-red text-white text-center flex-col opacity-60 h-16 flex items-center justify-center rounded">
                <span>{message}</span>
              </div>
            )}
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
