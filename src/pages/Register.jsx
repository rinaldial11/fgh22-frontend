import React from "react";
import { Link } from "react-router-dom";
import ButtonMain from "../components/ButtonMain";
import ButtonSos from "../components/ButtonSos";
import Step from "../components/Step";
import LogoBrand from "../components/LogoBrand";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/reducers/user";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registered = useSelector((state) => state.user.data);

  const [showError, setShowError] = React.useState("no");

  const regisValidation = yup.object({
    email: yup
      .string()
      .required("You must fill the email")
      .min(8, "Email minimal character length must be 8"),
    password: yup
      .string()
      .required("You must fill the password")
      .min(8, "Password must be at least 8 character")
      .matches(
        /^.*((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      ),
    agreeTOS: yup
      .string()
      .required()
      .is(["true"], "You have to agree with the terms and conditions"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(regisValidation) });

  const [type, setType] = React.useState("password");
  const [icon, setIcon] = React.useState(<FiEye />);

  function onSubmit(value) {
    const registeredData = registered.find((e) => e.email === value.email);
    if (registeredData?.email === value.email) {
      setShowError("yes");
      return;
    }
    setShowError("no");
    dispatch(addUser(value));
    reset();
    setTimeout(() => {
      navigate("/login");
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
  }, []);
  return (
    <>
      <div>
        <div className="bg-[url(/src/assets/images/avengers-darken.png)] items-center py-16 px-10 w-screen h-screen bg-no-repeat bg-cover flex flex-col gap-5 text-maintext">
          <LogoBrand />
          <div className="flex flex-col gap-6 bg-white rounded-md w-full min-w-80 max-w-xl md:h-fit px-5 md:px-20 py-14">
            <div className="hidden md:flex items-center gap-3">
              <Step content={"1"} content2={"Fill Form"} status={"done"} />
              <div>........................</div>
              <Step content={"2"} content2={"Activate"} status="ongoing" />
              <div>........................</div>
              <Step content={"3"} content2={"Done"} status="ongoing" />
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6"
            >
              <div className="w-full flex flex-col gap-3">
                <label htmlFor="email">Email</label>
                <div className="w-full h-16">
                  <input
                    className={
                      "w-full h-full rounded outline-none px-6 border border-maintix placeholder-secondtix" +
                      (errors.email?.message ? " border-red" : "")
                    }
                    type="email"
                    id="email"
                    {...register("email", { required: true })}
                    placeholder="Enter your email"
                  />
                </div>
                {showError === "yes" && (
                  <div className="text-red opacity-80">
                    Email is not available
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
                      "w-full h-full rounded outline-none px-6 border border-maintix placeholder-secondtix" +
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
              <div className="hidden md:flex items-center gap-5">
                <input
                  className="w-5 h-5"
                  type="checkbox"
                  id="terms"
                  {...register("agreeTOS", { required: true })}
                  value="true"
                />
                <label className="text-lg text-secondtix" htmlFor="terms">
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
}

export default Register;
