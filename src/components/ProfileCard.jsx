import React from "react";
import { BsThreeDots } from "react-icons/bs";
import ProfilePicture from "../assets/images/profile-picture.png";
import Star from "../assets/icons/star.png";
import { useSelector } from "react-redux";
import DefaultPict from "../assets/images/default-picture.png";

function ProfileCard(props) {
  const profileData = useSelector((state) => state.profile);
  const registeredUser = useSelector((state) => state.user.data);

  return (
    <>
      <div className="flex w-80 flex-col px-10 pb-28 h-fit pt-10 gap-10 bg-white rounded-3xl">
        <div className="flex justify-between items-center">
          <div className="text-grey">INFO</div>
          <div>
            <BsThreeDots />
          </div>
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="flex justify-center bg-secondtix items-center w-32 h-32 rounded-full overflow-hidden">
            <img
              src={
                profileData.profile?.image
                  ? URL.createObjectURL(profileData.profile?.image[0])
                  : DefaultPict
              }
              alt=""
            />
          </div>
          <div className="flex flex-col text-center gap-3">
            <div className="text-xl font-semibold">
              {profileData.profile?.firstname
                ? profileData.profile?.firstname
                : profileData.profile?.email}{" "}
              {profileData.profile?.lastname}
            </div>
            <div className="text-grey text-sm">Moviegoers</div>
          </div>
        </div>
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
              <div className="text-2xl font-semibold">320</div>
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
