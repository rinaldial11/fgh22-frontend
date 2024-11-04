import React from "react";
import { Link } from "react-router-dom";
import ButtonMain from "../components/ButtonMain";
import ButtonSos from "../components/ButtonSos";
import Step from "../components/Step";
import FormSign from "../components/FormSign";
import LogoBrand from "../components/LogoBrand";

function Register() {
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
            <form action="" className="flex flex-col gap-6">
              <FormSign />
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
