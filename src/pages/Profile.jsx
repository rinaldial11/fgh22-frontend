import React from "react";
import NavBar from "../components/NavBar";
import ProfileCard from "../components/ProfileCard";
import ProfileSection from "../components/ProfileSection";
import AnchorMain from "../components/AnchorMain";

function Profile() {
  return (
    <>
      <NavBar isLog={true} />
      <main className="px-20 pt-14 pb-32 text-base flex bg-abumuda gap-8 text-maintext">
        <ProfileCard />
        <div className="flex flex-col gap-12 w-full max-w-screen-xl">
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
                <div className="w-full">
                  <input
                    className="p-6 border placeholder:text-secondtix border-maintix rounded-2xl w-full"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Write your password"
                  />
                </div>
              </div>
              <div className=" flex flex-col gap-3">
                <label htmlFor="confirm-password">Confirm Password</label>
                <div className="w-full">
                  <input
                    className="p-6 border placeholder:text-secondtix border-maintix rounded-2xl w-full"
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
                    placeholder="Confirm your password"
                  />
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
