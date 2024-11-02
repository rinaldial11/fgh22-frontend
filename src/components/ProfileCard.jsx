import React from "react";
import { BsThreeDots } from "react-icons/bs";
import ProfilePicture from "../assets/images/profile-picture.png";
import Star from "../assets/icons/star.png";

function ProfileCard() {
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
          <div className="w-32 h-32 rounded-full">
            <img src={ProfilePicture} alt="" />
          </div>
          <div className="flex flex-col text-center gap-3">
            <div className="text-xl font-semibold">Jonas El Rodriguez</div>
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
            <div className="relative flex">
              <div className="h-4 w-32 bg-secondtix absolute rounded-lg"></div>
              <div className="shadow-inner h-4 w-full bg-maintix rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
