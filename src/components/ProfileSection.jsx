import React from "react";
import { Link } from "react-router-dom";

function ProfileSection(props) {
  return (
    <>
      {props.page === "profile" && (
        <div className="text-lg px-12 h-20 items-center bg-white rounded-2xl flex gap-14">
          <div className="border-b-2 h-full flex items-center border-secondtix">
            Account Settings
          </div>
          <div className="text-grey">
            <Link to="/order-history">Order History</Link>
          </div>
        </div>
      )}
      {props.page === "order-history" && (
        <div className="text-lg px-12 h-20 items-center bg-white rounded-2xl flex gap-14">
          <div className="text-grey">
            <Link to="/order-history">Account Settings</Link>
          </div>
          <div className="border-b-2 h-full flex items-center border-secondtix">
            Order History
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileSection;
