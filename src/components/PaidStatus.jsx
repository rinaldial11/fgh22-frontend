import React from "react";

function PaidStatus(props) {
  return (
    <>
      <div className="flex gap-4">
        {props.status === "active" && (
          <div className="bg-[#00BA8833] text-[#00BA88] text-sm font-bold w-48 h-10 flex justify-center items-center rounded-lg">
            Ticket in active
          </div>
        )}
        {props.status === "used" && (
          <div className="bg-[#6E719133] text-[#6E7191] text-sm font-bold w-48 h-10 flex justify-center items-center rounded-lg">
            Ticket used
          </div>
        )}
        {props.isPaid && (
          <div className="bg-[#1D4ED833] text-[#1D4ED8] text-sm font-bold w-44 h-10 flex justify-center items-center rounded-lg">
            Paid
          </div>
        )}
        {!props.isPaid && (
          <div className="bg-[#E82C2C33] text-[#E82C2C] text-sm font-bold w-44 h-10 flex justify-center items-center rounded-lg">
            Not Paid
          </div>
        )}
      </div>
    </>
  );
}

export default PaidStatus;
