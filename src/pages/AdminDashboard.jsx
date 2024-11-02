import React from "react";
import NavBar from "../components/NavBar";
import ButtonMain from "../components/ButtonMain";
import Graph from "../assets/images/graph.png";

function AdminDashboard() {
  return (
    <>
      <NavBar isLog={true} isAdmin={true} page="admin-dashboard" />
      <main className="px-28 pt-11 pb-32 text-base flex flex-col bg-abumuda gap-12 text-maintext">
        <div className="flex flex-col gap-9 px-14 py-10 bg-white rounded-2xl w-full">
          <div className="text-2xl font-bold">Sales Chart</div>
          <div className="flex gap-5">
            <select
              className="bg-abumuda w-56 h-12 px-5 rounded-lg"
              name="movie"
              id="movie"
            >
              <option disabled selected value="">
                Movies Name
              </option>
            </select>
            <select
              className="bg-abumuda w-40 h-12 px-5 rounded-lg"
              name="weekly"
              id="Weekly"
            >
              <option disabled selected value="">
                Weekly
              </option>
            </select>
            <div className="w-32">
              <ButtonMain content="Filter" />
            </div>
          </div>
          <div>Avengers: End Game</div>
          <div className="flex flex-col w-full max-w-5xl gap-5">
            <div className="flex gap-8 h-80 items-end">
              <div className="text-grey pb-8 text-[11px] h-full flex flex-col justify-between">
                <div>$800</div>
                <div>$600</div>
                <div>$400</div>
                <div>$200</div>
                <div>$0</div>
              </div>
              <div className="h-full flex items-end">
                <img src={Graph} alt="" />
              </div>
            </div>
            <div className="text-grey pb-8 text-[11px] h-full flex justify-around pr-10">
              <div>Jan</div>
              <div>Feb</div>
              <div>Mar</div>
              <div>Apr</div>
              <div>May</div>
              <div>Jun</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 px-14 py-10 bg-white rounded-2xl w-full">
          <div className="text-2xl font-bold">Ticket Sales</div>
          <div className="flex gap-5">
            <select
              className="bg-abumuda w-56 h-12 px-5 rounded-lg"
              name="category"
              id="category"
            >
              <option disabled selected value="">
                Category
              </option>
            </select>
            <select
              className="bg-abumuda w-40 h-12 px-5 rounded-lg"
              name="weekly"
              id="location"
            >
              <option disabled selected value="">
                Location
              </option>
            </select>
            <div className="w-32">
              <ButtonMain content="Filter" />
            </div>
          </div>
          <div>Adventure, Purwokerto</div>
          <div className="flex flex-col w-full max-w-5xl gap-5">
            <div className="flex gap-8 h-80 items-end">
              <div className="text-grey pb-8 text-[11px] h-full flex flex-col justify-between">
                <div>$800</div>
                <div>$600</div>
                <div>$400</div>
                <div>$200</div>
                <div>$0</div>
              </div>
              <div className="h-full flex items-end">
                <img src={Graph} alt="" />
              </div>
            </div>
            <div className="text-grey pb-8 text-[11px] h-full flex justify-around pr-10">
              <div>Jan</div>
              <div>Feb</div>
              <div>Mar</div>
              <div>Apr</div>
              <div>May</div>
              <div>Jun</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default AdminDashboard;