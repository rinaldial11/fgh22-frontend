import React from "react";
import { Link } from "react-router-dom";

function ProfileSection(props) {
  return (
    <>
      {props.page === "profile" && (
        <div className="text-lg px-12 h-20 items-center bg-white rounded-2xl hidden md:flex gap-14">
          <div className="border-b-2 h-full flex items-center border-secondtix">
            Account Settings
          </div>
          <div className="text-grey">
            <Link to="/order-history">Order History</Link>
          </div>
        </div>
      )}
      {props.page === "order-history" && (
        <div className="text-lg px-12 h-20 items-center bg-white rounded-2xl hidden md:flex gap-14">
          <div className="text-grey">
            <Link to="/profile">Account Settings</Link>
          </div>
          <div className="border-b-2 h-full flex items-center border-secondtix">
            Order History
          </div>
        </div>
      )}
      {props.page === "profile" && (
        <div className="w-full text-lg text-center px-12 h-20 items-center bg-secondtix justify-center  md:hidden flex gap-28">
          <div className="text-maintix border-b-2 h-full flex items-center border-maintix">
            Details Account
          </div>
          <div className="text-white">
            <Link to="/order-history">Order History</Link>
          </div>
        </div>
      )}
      {props.page === "order-history" && (
        <div className="w-full text-lg px-12 h-20  text-center items-center bg-secondtix  md:hidden flex gap-28">
          <div className="text-white">
            <Link to="/profile">Details Account</Link>
          </div>
          <div className="text-maintix border-b-2 h-full flex items-center justify-center border-secmaintixondtix">
            Order History
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileSection;
