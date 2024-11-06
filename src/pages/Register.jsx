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

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registered = useSelector((state) => state.user.data);

  const [showAlert, setShowAlert] = React.useState(false);
  const [textAlert, setTextAlert] = React.useState("");
  const [type, setType] = React.useState("password");
  const [icon, setIcon] = React.useState(<FiEye />);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      setShowAlert(true);
      setTextAlert("Email dan Password harus diisi!");
      return;
    }

    const found = registered.find((e) => e.email === email);
    console.log(found);

    if (found !== registered.email) {
      setShowAlert(true);
      setTextAlert("Email sudah terdaftar");
      return;
    }

    dispatch(
      addUser({
        email,
        password,
      })
    );
    navigate("/login");
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
            {showAlert && (
              <div className="bg-red w-full p-5 text-lg rounded-lg opacity-80 text-center text-white">
                {textAlert}
              </div>
            )}
            <form onSubmit={onSubmit} className="flex flex-col gap-6">
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
              <div className="hidden md:flex items-center gap-5">
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
