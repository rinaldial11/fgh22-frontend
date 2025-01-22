import React from "react";
import { Link } from "react-router-dom";
import LogoBrand from "./LogoBrand";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { logOut } from "../redux/reducers/auth";
import { deleteProfile, setProfile } from "../redux/reducers/profile";
import { useSelector, useDispatch } from "react-redux";
import DefaultPict from "../assets/images/default-picture.png";
import { API_URL } from "../config/apiConfig.js";

function NavBar(props) {
  const [isShow, setShow] = React.useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const profileData = useSelector((state) => state.profile.data);

  function logout() {
    dispatch(deleteProfile());
    dispatch(logOut());
  }

  async function getProfile(tokenProfile) {
    const data = await (
      await fetch(`${API_URL}/users`, {
        headers: {
          Authorization: `Bearer ${tokenProfile}`,
        },
      })
    ).json();
    dispatch(setProfile(data.results));
  }

  React.useEffect(() => {
    if (token !== "") {
      getProfile(token);
    }
  }, [token]);

  return (
    <nav className="flex flex-col gap-5 items-center px-6 lg:px-28 py-7 bg-secondtix text-white text-sm shadow-lg h-fit md:h-28">
      <div className="flex w-full justify-between items-center">
        <Link to="/" className="w-fit md:w-2/3">
          <LogoBrand />
        </Link>
        <div className="flex items-center justify-end md:justify-between w-full">
          {props.isAdmin && props.page === "admin-dashboard" && (
            <ul className="hidden md:flex md:gap-6 lg:gap-14">
              <li className="text-maintix">
                <Link to="/admin-dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/add-movie">Movie</Link>
              </li>
            </ul>
          )}
          {props.isAdmin && props.page === "add-movie" && (
            <ul className="hidden md:flex md:gap-6 lg:gap-14">
              <li>
                <Link to="/admin-dashboard">Dashboard</Link>
              </li>
              <li className="text-maintix">
                <Link to="/add-movie">Movie</Link>
              </li>
            </ul>
          )}
          {!props.isAdmin && (
            <ul className="hidden md:flex md:gap-6 lg:gap-14">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/admin-dashboard">Movie</Link>
              </li>
              <li>
                <Link to="/order">Buy Ticket</Link>
              </li>
            </ul>
          )}

          {token !== "" && (
            <div className="hidden md:flex gap-5 items-center">
              {/* <div>
                <select
                  className="bg-secondtix w-full h-full"
                  name="location"
                  id="location"
                >
                  <option selected disabled value="">
                    location
                  </option>
                  <option value="">Jakarta</option>
                  <option value="">Bandung</option>
                  <option value="">Surabaya</option>
                </select>
              </div> */}
              {/* <div>
                <FaMagnifyingGlass />
              </div> */}
              <Link
                className="w-14 h-14 rounded-full bg-maintix overflow-hidden flex items-center justify-center border shadow-lg"
                to="/profile"
              >
                {" "}
                <img
                  src={
                    profileData.picture === ""
                      ? DefaultPict
                      : `${API_URL}/profile/images/${profileData.picture}`
                  }
                  alt="Avatar"
                />
              </Link>
              <div className="flex flex-col gap-3 justify-center items-center">
                <div className="text-white">
                  {profileData.firstName === ""
                    ? `Hallo, ${profileData.email} !`
                    : `Hallo, ${profileData.firstName} !`}
                </div>
                <div className="shadow-xl">
                  <button
                    className="bg-secondtix rounded-md text-maintix border border-maintix px-3 py-1"
                    type="button"
                    onClick={logout}
                  >
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          )}
          {token === "" && (
            <div className="hidden md:flex gap-3">
              <Link
                to="/login"
                className="flex justify-center items-center border border-maintix bg-secondtix w-24 h-12 text-center px-4.5 py-3 text-maintix rounded-lg shadow-lg"
                href="#"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="flex justify-center items-center bg-maintix w-24 h-12 text-center px-4.5 py-3 text-secondtix rounded-lg shadow-lg"
                href="#"
              >
                Sign Up
              </Link>
            </div>
          )}

          <button
            type="button"
            onClick={() => setShow(!isShow)}
            className="block text-3xl text-maintix md:hidden"
          >
            <IoMenu />
          </button>
        </div>
      </div>
      {isShow && (
        <div className="flex flex-col gap-7 items-center">
          {props.isAdmin && props.page === "admin-dashboard" && (
            <ul className="md:hidden flex-col items-center gap-5 flex md:gap-6 lg:gap-14">
              <li className="text-maintix">
                <Link to="/admin-dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/add-movie">Movie</Link>
              </li>
            </ul>
          )}
          {props.isAdmin && props.page === "add-movie" && (
            <ul className="md:hidden flex flex-col items-center gap-5 md:gap-6 lg:gap-14">
              <li>
                <Link to="/admin-dashboard">Dashboard</Link>
              </li>
              <li className="text-maintix">
                <Link to="/add-movie">Movie</Link>
              </li>
            </ul>
          )}
          {!props.isAdmin && (
            <ul className="md:hidden flex-col items-center gap-5 flex md:gap-6 lg:gap-14">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/admin-dashboard">Movie</Link>
              </li>
              <li>
                <Link to="/order">Buy Ticket</Link>
              </li>
            </ul>
          )}

          {token !== "" && (
            <div className="md:hidden flex gap-3 items-center">
              <div>
                <select
                  className="bg-secondtix w-full h-full"
                  name="location"
                  id="location"
                >
                  <option selected disabled value="">
                    location
                  </option>
                  <option value="">Jakarta</option>
                  <option value="">Bandung</option>
                  <option value="">Surabaya</option>
                </select>
              </div>
              <div>
                <FaMagnifyingGlass />
              </div>
              <Link
                className="w-14 h-14 bg-maintix rounded-full overflow-hidden flex items-center justify-center border shadow-lg"
                to="/profile"
              >
                {" "}
                <img
                  className="w-full"
                  src={
                    profileData.picture === ""
                      ? DefaultPict
                      : `${API_URL}/profile/images/${profileData.picture}`
                  }
                  alt="Avatar"
                />
              </Link>
              <div className="shadow-xl">
                <button
                  className="bg-secondtix rounded-md text-maintix border border-maintix px-3 py-1"
                  type="button"
                  onClick={logout}
                >
                  Log Out
                </button>
              </div>
            </div>
          )}
          {token === "" && (
            <div className="md:hidden flex flex-col w-screen px-6 gap-3">
              <Link
                to="/login"
                className="flex justify-center items-center border border-maintix bg-secondtix w-full h-12 text-center px-4.5 py-3 text-maintix rounded-lg shadow-lg"
                href="#"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="flex justify-center items-center bg-maintix w-full h-12 text-center px-4.5 py-3 text-secondtix rounded-lg shadow-lg"
                href="#"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default NavBar;
