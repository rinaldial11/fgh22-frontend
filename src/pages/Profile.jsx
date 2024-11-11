import React from "react";
import NavBar from "../components/NavBar";
import ProfileCard from "../components/ProfileCard";
import ProfileSection from "../components/ProfileSection";
import { setProfile } from "../redux/reducers/profile";
import { editUser } from "../redux/reducers/user";
import { useNavigate } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import ButtonMain from "../components/ButtonMain";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Profile() {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profile);
  const registered = useSelector((state) => state.user.data);
  const isLog = useSelector((state) => state.token);
  const navigate = useNavigate();

  const [type, setType] = React.useState("password");
  const [icon, setIcon] = React.useState(<FiEye />);
  const [type2, setType2] = React.useState("password");
  const [icon2, setIcon2] = React.useState(<FiEye />);
  const [isShow, setShow] = React.useState(false);

  const profileValidSchema = yup.object({
    firstname: yup
      .string()
      .required("What your name?")
      .min(3, "Name minimal character at least 3"),
    lastname: yup.string(),
    email: yup
      .string()
      .required("You must fill the email")
      .min(8, "Email minimal character length must be 8"),
    phonenumber: yup.string().min(4, "Phone number at least must 4 number"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 character")
      .matches(
        /^.*((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      ),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password")], "Your passwords do not match."),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(profileValidSchema) });

  function formProfile(value) {
    dispatch(setProfile(value));
    dispatch(editUser(value));
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (isLog.token === false) {
      navigate("/");
      return;
    }
  }, [isLog]);

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
          <div className="flex justify-center items-center text-left px-6 w-full h-full md:hidden bg-[#00000099] absolute">
            <form className="text-lg w-full px-6 py-10 bg-white rounded-3xl flex flex-col gap-12">
              <div>
                <button
                  className="text-2xl"
                  type="button"
                  onClick={() => setShow(!isShow)}
                >
                  <IoIosArrowBack />
                </button>
                <div className="text-2xl font-bold w-full">
                  Account Settings
                </div>
              </div>
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
                      placeholder="Write your  Full name"
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
                      placeholder="Write your email"
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
                      placeholder="Your phone number"
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
          </div>
        )}
        <div>
          <ProfileCard fungsi={() => setShow(!isShow)} />
        </div>
        <form
          onSubmit={handleSubmit(formProfile)}
          className="hidden md:flex flex-col gap-12 w-full max-w-screen-xl"
        >
          <ProfileSection page="profile" />
          <div className="text-lg px-8 py-10 bg-white rounded-3xl flex flex-col gap-12">
            <div className="w-full pb-4 border-b border-maintix">
              Details Information
            </div>
            <div className="text-secondtix md:flex md:flex-col lg:grid lg:grid-cols-2 gap-6">
              <div className=" flex flex-col gap-3">
                <label htmlFor="first-name">First Name</label>
                <div className="w-full">
                  <input
                    className="p-6 border placeholder:text-secondtix border-maintix rounded-2xl w-full"
                    type="text"
                    id="firstname"
                    {...register("firstname")}
                    placeholder="Write your firstname"
                    value={profileData.profile?.firstname}
                  />
                </div>
                {errors.firstname?.message && (
                  <div className="text-red opacity-80">
                    {errors.firstname?.message}
                  </div>
                )}
              </div>
              <div className=" flex flex-col gap-3">
                <label htmlFor="last-name">Last Name</label>
                <div className="w-full">
                  <input
                    className="p-6 border placeholder:text-secondtix border-maintix rounded-2xl w-full"
                    type="text"
                    id="last-name"
                    {...register("lastname")}
                    placeholder="Write your lastname"
                    value={profileData.profile?.lastname}
                  />
                </div>
                {errors.lastname?.message && (
                  <div className="text-red opacity-80">
                    {errors.lastname?.message}
                  </div>
                )}
              </div>
              <div className=" flex flex-col gap-3">
                <label htmlFor="email">E-mail</label>
                <div className="w-full">
                  <input
                    className="p-6 border placeholder:text-secondtix border-maintix rounded-2xl w-full"
                    type="email"
                    id="email"
                    {...register("email")}
                    placeholder="Write your email"
                    value={profileData.profile?.email}
                  />
                </div>
                {errors.email?.message && (
                  <div className="text-red opacity-80">
                    {errors.email?.message}
                  </div>
                )}
              </div>
              <div className=" flex flex-col gap-3">
                <label htmlFor="phone-number">Phone Number</label>
                <div className="w-full">
                  <input
                    className="p-6 border placeholder:text-secondtix border-maintix rounded-2xl w-full"
                    type="number"
                    id="phone-number"
                    {...register("phonenumber")}
                    placeholder="Write your phone number"
                    value={profileData.profile?.phonenumber}
                  />
                </div>
                {errors.phonenumber?.message && (
                  <div className="text-red opacity-80">
                    {errors.phonenumber?.message}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="text-lg px-8 py-10 bg-white rounded-3xl flex flex-col gap-12">
            <div className="w-full pb-4 border-b border-maintix">
              Account and Privacy
            </div>
            <div className="text-secondtix md:flex md:flex-col lg:grid lg:grid-cols-2 gap-6">
              <div className=" flex flex-col gap-3">
                <label htmlFor="password">New Password</label>
                <div className="relative flex w-full">
                  <input
                    className="p-6 border placeholder:text-secondtix border-maintix rounded-2xl w-full"
                    type={type}
                    id="password"
                    {...register("password")}
                    placeholder="Write your password"
                    value={profileData.profile?.password}
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
              <div className=" flex flex-col gap-3">
                <label htmlFor="confirm-password">Confirm Password</label>
                <div className="relative flex w-full">
                  <input
                    className="p-6 border placeholder:text-secondtix border-maintix rounded-2xl w-full"
                    type={type2}
                    id="confirm-password"
                    {...register("confirmpassword")}
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
                {errors.confirmpassword?.message && (
                  <div className="text-red opacity-80">
                    {errors.confirmpassword?.message}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="w-96 h-14 rounded-2xl overflow-hidden">
            <button className="w-full h-full rounded-lg text-maintix bg-secondtix">
              Update Changes
            </button>
          </div>
        </form>
      </main>
    </>
  );
}

export default Profile;
