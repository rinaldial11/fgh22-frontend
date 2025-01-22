import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineFileUpload } from "react-icons/md";
import Star from "../assets/icons/star.png";
import { useDispatch, useSelector } from "react-redux";
import DefaultPict from "../assets/images/default-picture.png";
import { object } from "yup";
import { setProfile } from "../redux/reducers/profile";
import { API_URL } from "../config/apiConfig.js";

function ProfileCard(props) {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profile.data);
  const token = useSelector((state) => state.auth.token);

  function setFile(e) {
    const selected = e.target.files[0];
    const formData = new FormData();
    formData.append("picture", selected);
    // console.log(formData);

    fetch(`${API_URL}/profiles`, {
      method: "PATCH",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => dispatch(setProfile(data.results)));
  }

  return (
    <>
      <div className="flex w-80 flex-col px-10 pb-28 h-fit pt-10 gap-10 bg-white rounded-3xl">
        <div className="flex justify-between items-center">
          <div className="text-grey">INFO</div>
          <div className="text-2xl">
            <label className="cursor-pointer w-full" htmlFor="picture">
              <MdOutlineFileUpload />
            </label>
            <input
              className="hidden"
              type="file"
              id="picture"
              name="picture"
              onChange={setFile}
            />
          </div>
        </div>
        <form className="flex flex-col items-center gap-8">
          <div className="flex justify-center bg-secondtix items-center w-32 h-32 rounded-full overflow-hidden">
            <img
              src={
                profileData.picture === ""
                  ? DefaultPict
                  : `${API_URL}/profile/images/${profileData.picture}`
              }
              alt=""
            />
          </div>
          <div className="flex flex-col text-center gap-3">
            <div className="text-xl font-semibold">
              {profileData.firstName === ""
                ? profileData.email
                : `${profileData.firstName} ${profileData.lastName}`}
            </div>
            <div className="text-grey text-sm">Moviegoers</div>
          </div>
        </form>
        <div className="pt-10 border-t border-maintix flex flex-col gap-10 w-full">
          <div>Loyalty Points</div>
          <div className="shadow-2xl shadow-grey bg-secondtix text-maintix h-32 flex flex-col justify-between rounded-2xl p-4">
            <div className="flex justify-between">
              <div className="text-lg font-bold ">Moviegoers</div>
              <div className="w-12 h-12 -mt-2">
                <img className="w-full h-full" src={Star} alt="" />
              </div>
            </div>
            <div className="flex gap-1 items-end">
              <div className="text-2xl font-semibold">{profileData.point}</div>
              <div className="text-xs">points</div>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-center">
            <div>180 points become a master</div>
            <div className="flex">
              <div className="h-4 w-32 md:absolute bg-secondtix rounded-lg"></div>
              <div className="shadow-inner h-4 w-full bg-maintix rounded-lg"></div>
            </div>
          </div>
        </div>
        <div className="h-14 mt-4 block md:hidden">
          <button
            type="button"
            onClick={props.fungsi}
            className="w-full h-full border border-secondtix text-secondtix rounded-2xl"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
