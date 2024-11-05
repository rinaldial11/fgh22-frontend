import React from "react";
import ButtonMain from "../components/ButtonMain";
import ButtonSos from "../components/ButtonSos";
import { Link } from "react-router-dom";
import LogoBrand from "../components/LogoBrand";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

function Login() {
  const [type, setType] = React.useState("password");
  const [icon, setIcon] = React.useState(<FiEye />);

  function formSubmit(e) {
    e.preventDefault();

    const data = new FormData(e.target);
    const email = data.get("email");
    const password = data.get("password");

    if (!email || !password) {
      window.alert("form login harus diisi");
      return;
    }
    if (email !== "rinaldi@gmail.com") {
      window.alert("email belum terdaftar");
      return;
    }
    if (password !== "1234") {
      window.alert("password salah");
      return;
    }
    window.open("/");
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
          <div className="flex flex-col gap-6 bg-white rounded-md w-full min-w-80 max-w-xl h-fit px-5 md:px-20 py-14">
            <div className="flex flex-col gap-6">
              <div className="text-2xl md:text-3xl font-semibold">
                Welcome Back👋
              </div>
              <div className="text-grey w-full max-w-80 md:w-full md:max-w-full text-lg">
                Sign in with your data that you entered during your registration
              </div>
            </div>
            <form
              action=""
              onSubmit={formSubmit}
              className="flex flex-col gap-6"
            >
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
              <div className="w-full text-end text-birmud">
                <a href="#">Forgot your password?</a>
              </div>
              <button className="w-full h-16">
                <ButtonMain content={"Login"} />
              </button>
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
