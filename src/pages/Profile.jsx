import React from "react";
import NavBar from "../components/NavBar";
import ProfileCard from "../components/ProfileCard";
import ProfileSection from "../components/ProfileSection";
import AnchorMain from "../components/AnchorMain";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

function Profile() {
  const [type, setType] = React.useState("password");
  const [icon, setIcon] = React.useState(<FiEye />);
  const [type2, setType2] = React.useState("password");
  const [icon2, setIcon2] = React.useState(<FiEye />);
  const [isShow, setShow] = React.useState(false);

  function hidePassword() {
    if (type === "password") {
      setType("text");
      setIcon(<FiEyeOff />);
    } else {
      setType("password");
      setIcon(<FiEye />);
    }
  }
  function hidePasswordDua() {
    if (type2 === "password") {
      setType2("text");
      setIcon2(<FiEyeOff />);
    } else {
      setType2("password");
      setIcon2(<FiEye />);
    }
  }

  return (
    <>
      <NavBar isLog={true} />
      <main className="relative justify-center md:px-20 md:pt-14 md:pb-32 text-base flex items-center md:items-start flex-col md:flex-row bg-abumuda gap-8 text-maintext">
        <div className="flex w-full items-start md:hidden">
          <ProfileSection page="profile" />
        </div>
        {isShow && (
          <button
            type="button"
            onClick={() => setShow(!isShow)}
            className="flex justify-center items-center text-left px-6 w-full h-full md:hidden bg-[#00000099] absolute"
          >
            <form className="text-lg w-full px-6 py-10 bg-white rounded-3xl flex flex-col gap-12">
              <div className="text-2xl font-bold w-full">Account Settings</div>
              <div className="w-full pb-4 border-b border-maintix">
                Details Information
              </div>
              <div className="text-secondtix text-sm flex flex-col gap-6">
                <div className=" flex flex-col gap-3">
                  <label htmlFor="name">Full Name</label>
                  <div className="w-full h-12">
                    <input
                      className="p-6 border h-full placeholder:text-secondtix border-maintix rounded-2xl w-full"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Jonas El Rodriguez"
                    />
                  </div>
                </div>
                <div className=" flex flex-col gap-3">
                  <label htmlFor="email">E-mail</label>
                  <div className="w-full h-12">
                    <input
                      className="p-6 border h-full placeholder:text-secondtix border-maintix rounded-2xl w-full"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="jonasrodrigu123@gmail.com"
                    />
                  </div>
                </div>
                <div className=" flex flex-col gap-3">
                  <label htmlFor="phone-number">Phone Number</label>
                  <div className="w-full h-12">
                    <input
                      className="p-6 border h-full placeholder:text-secondtix border-maintix rounded-2xl w-full"
                      type="number"
                      id="phone-number"
                      name="phone-number"
                      placeholder="81445687121"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full mt-5 pb-4 border-b border-maintix">
                Account and Privacy
              </div>
              <div className="text-secondtix text-sm flex flex-col gap-6">
                <div className=" flex flex-col gap-3">
                  <label htmlFor="password">New Password</label>
                  <div className="relative h-12 flex w-full">
                    <input
                      className="p-6 h-full border placeholder:text-secondtix border-maintix rounded-2xl w-full"
                      type={type}
                      id="password"
                      name="password"
                      placeholder="Write your password"
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
                <div className=" flex flex-col gap-3">
                  <label htmlFor="confirm-password">Confirm Password</label>
                  <div className="relative h-12 flex w-full">
                    <input
                      className="p-6 h-full border placeholder:text-secondtix border-maintix rounded-2xl w-full"
                      type={type2}
                      id="confirm-password"
                      name="confirm-password"
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={hidePasswordDua}
                      className="absolute right-6 top-1/3 text-xl"
                    >
                      {icon2}
                    </button>
                  </div>
                </div>
              </div>
              <div className="h-10">
                <button className="bg-secondtix rounded-lg text-sm font-bold text-maintix w-full h-full">
                  Update changes
                </button>
              </div>
            </form>
          </button>
        )}
        <ProfileCard fungsi={() => setShow(!isShow)} />
        <div className="hidden md:flex flex-col gap-12 w-full max-w-screen-xl">
          <ProfileSection page="profile" />
          <div className="text-lg px-8 py-10 bg-white rounded-3xl flex flex-col gap-12">
            <div className="w-full pb-4 border-b border-maintix">
              Details Information
            </div>
            <div className="text-secondtix grid grid-cols-2 gap-6">
              <div className=" flex flex-col gap-3">
                <label htmlFor="first-name">First Name</label>
                <div className="w-full">
                  <input
                    className="p-6 border placeholder:text-secondtix border-maintix rounded-2xl w-full"
                    type="text"
                    id="first-name"
                    name="first name"
                    placeholder="Jonas"
                  />
                </div>
              </div>
              <div className=" flex flex-col gap-3">
                <label htmlFor="last-name">Last Name</label>
                <div className="w-full">
                  <input
                    className="p-6 border placeholder:text-secondtix border-maintix rounded-2xl w-full"
                    type="text"
                    id="last-name"
                    name="last name"
                    placeholder="El Rodriguez"
                  />
                </div>
              </div>
              <div className=" flex flex-col gap-3">
                <label htmlFor="email">E-mail</label>
                <div className="w-full">
                  <input
                    className="p-6 border placeholder:text-secondtix border-maintix rounded-2xl w-full"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="jonasrodrigu123@gmail.com"
                  />
                </div>
              </div>
              <div className=" flex flex-col gap-3">
                <label htmlFor="phone-number">Phone Number</label>
                <div className="w-full">
                  <input
                    className="p-6 border placeholder:text-secondtix border-maintix rounded-2xl w-full"
                    type="number"
                    id="phone-number"
                    name="phone-number"
                    placeholder="Jonas"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="text-lg px-8 py-10 bg-white rounded-3xl flex flex-col gap-12">
            <div className="w-full pb-4 border-b border-maintix">
              Account and Privacy
            </div>
            <div className="text-secondtix grid grid-cols-2 gap-6">
              <div className=" flex flex-col gap-3">
                <label htmlFor="password">New Password</label>
                <div className="relative flex w-full">
                  <input
                    className="p-6 border placeholder:text-secondtix border-maintix rounded-2xl w-full"
                    type={type}
                    id="password"
                    name="password"
                    placeholder="Write your password"
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
              <div className=" flex flex-col gap-3">
                <label htmlFor="confirm-password">Confirm Password</label>
                <div className="relative flex w-full">
                  <input
                    className="p-6 border placeholder:text-secondtix border-maintix rounded-2xl w-full"
                    type={type2}
                    id="confirm-password"
                    name="confirm-password"
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={hidePasswordDua}
                    className="absolute right-6 top-1/3 text-xl"
                  >
                    {icon2}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-96 h-14 rounded-2xl overflow-hidden">
            <AnchorMain content="Update changes" />
          </div>
        </div>
      </main>
    </>
  );
}

export default Profile;
