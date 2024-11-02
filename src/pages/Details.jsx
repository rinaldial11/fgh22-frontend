import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ButtonMain from "../components/ButtonMain";
import { CiCalendar } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import AnchorMain from "../components/AnchorMain";

function Details() {
  return (
    <>
      <NavBar />
      <div className="bg-[url(/src/assets/images/spiderman-details.png)] w-screen h-[550px] bg-no-repeat bg-cover"></div>
      <main className="px-28 py-14 text-base flex flex-col gap-8 text-maintext">
        <div className="flex -mt-48 items-end gap-5">
          <div className="">
            <img src="/src/assets/images/Spiderman.png" alt="Spiderman" />
          </div>
          <div className="flex flex-col gap-5">
            <div className="text-3xl font-bold">Spider-Man: Homecoming</div>
            <div className="flex gap-2">
              <div className="bg-abumuda text-secondtix px-3 py-1 rounded-3xl">
                Action
              </div>
              <div className="bg-abumuda text-secondtix px-3 py-1 rounded-3xl">
                Adventure
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <div className="text-sm text-grey">Release date</div>
                <div>June 28, 2017</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm text-grey">Directed by</div>
                <div>Jon Watss</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm text-grey">Duration</div>
                <div>2 hours 13 minutes </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm text-grey">Casts</div>
                <div>Tom Holland, Michael Keaton, Robert Downey Jr</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-xl font-semibold">Synopsis</div>
          <div className="text-grey w-full max-w-4xl">
            Thrilled by his experience with the Avengers, Peter returns home,
            where he lives with his Aunt May, under the watchful eye of his new
            mentor Tony Stark, Peter tries to fall back into his normal daily
            routine - distracted by thoughts of proving himself to be more than
            just your friendly neighborhood Spider-Man - but when the Vulture
            emerges as a new villain, everything that Peter holds most important
            will be threatened.{" "}
          </div>
        </div>
        <div className="flex flex-col gap-9">
          <div className="text-4xl">Book Tickets</div>
          <div className="flex gap-8 items-end">
            <div className="flex flex-col gap-3">
              <label className="text-xl font-semibold" htmlFor="date">
                Choose Date
              </label>
              <div className="relative w-72 h-14">
                <CiCalendar className="absolute top-1/3 left-6" />
                <select
                  className="w-full h-full bg-maintix px-16 rounded-sm"
                  name="date"
                  id="date"
                >
                  <option disabled selected value="30/10/24">
                    Choose date
                  </option>
                  <option value="30/10/24">30/10/24</option>
                  <option value="01/11/24">01/11/24</option>
                  <option value="02/11/24">02/11/24</option>
                  <option value="03/11/24">03/11/24</option>
                  <option value="04/11/24">04/11/24</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-xl font-semibold" htmlFor="date">
                Choose Time
              </label>
              <div className="relative w-72 h-14">
                <IoMdTime className="absolute top-1/3 left-6" />
                <select
                  className="w-full h-full bg-maintix px-16 rounded-sm"
                  name="date"
                  id="date"
                >
                  <option disabled selected value="30/10/24">
                    Choose Time
                  </option>
                  <option value="08 : 30 AM">08 : 30 AM</option>
                  <option value="08 : 30 AM">08 : 30 AM</option>
                  <option value="08 : 30 AM">08 : 30 AM</option>
                  <option value="08 : 30 AM">08 : 30 AM</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-xl font-semibold" htmlFor="date">
                Choose Location
              </label>
              <div className="relative w-72 h-14">
                <CiLocationOn className="absolute top-1/3 left-6" />
                <select
                  className="w-full h-full bg-maintix px-16 rounded-sm"
                  name="date"
                  id="date"
                >
                  <option disabled selected value="30/10/24">
                    Choose Location
                  </option>
                  <option value="Purwokerto">Purwokerto</option>
                  <option value="Purwokerto">Purwokerto</option>
                  <option value="Purwokerto">Purwokerto</option>
                  <option value="Purwokerto">Purwokerto</option>
                  <option value="Purwokerto">Purwokerto</option>
                </select>
              </div>
            </div>
            <div className="h-14 w-44">
              <ButtonMain content="Filter" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 py-5">
          <div className="flex gap-9">
            <div className="text-xl font-semibold">Choose Cinema</div>
            <div className="text-lg text-grey font-bold">39 Result </div>
          </div>
          <div className="flex w-full max-w-full min-w-full gap-4 overflow-x-clip">
            <div className="group hover:bg-secondtix flex-shrink-0 w-64 h-36 border border-abu rounded-lg flex justify-center items-center">
              <img
                className="group-hover:brightness-0 group-hover:invert"
                src="/src/assets/icons/ebv.png"
                alt="ebv"
              />
            </div>
            <div className="group hover:bg-secondtix flex-shrink-0 w-64 h-36 border border-abu rounded-lg flex justify-center items-center">
              <img
                className="group-hover:brightness-0 group-hover:invert"
                src="/src/assets/icons/hiflix.png"
                alt="hiflix"
              />
            </div>
            <div className="group hover:bg-secondtix flex-shrink-0 w-64 h-36 border border-abu rounded-lg flex justify-center items-center">
              <img
                className="group-hover:brightness-0 group-hover:invert"
                src="/src/assets/icons/cineone.png"
                alt="cineone"
              />
            </div>
            <div className="group hover:bg-secondtix flex-shrink-0 w-64 h-36 border border-abu rounded-lg flex justify-center items-center">
              <img
                className="group-hover:brightness-0 group-hover:invert"
                src="/src/assets/icons/ebv.png"
                alt="ebv"
              />
            </div>
            <div className="group hover:bg-secondtix flex-shrink-0 w-64 h-36 border border-abu rounded-lg flex justify-center items-center">
              <img
                className="group-hover:brightness-0 group-hover:invert"
                src="/src/assets/icons/hiflix.png"
                alt="hiflix"
              />
            </div>
            <div className="group hover:bg-secondtix flex-shrink-0 w-64 h-36 border border-abu rounded-lg flex justify-center items-center">
              <img
                className="group-hover:brightness-0 group-hover:invert"
                src="/src/assets/icons/cineone.png"
                alt="cineone"
              />
            </div>
            <div className="group hover:bg-secondtix flex-shrink-0 w-64 h-36 border border-abu rounded-lg flex justify-center items-center">
              <img
                className="group-hover:brightness-0 group-hover:invert"
                src="/src/assets/icons/ebv.png"
                alt="ebv"
              />
            </div>
            <div className="group hover:bg-secondtix flex-shrink-0 w-64 h-36 border border-abu rounded-lg flex justify-center items-center">
              <img
                className="group-hover:brightness-0 group-hover:invert"
                src="/src/assets/icons/hiflix.png"
                alt="hiflix"
              />
            </div>
            <div className="group hover:bg-secondtix flex-shrink-0 w-64 h-36 border border-abu rounded-lg flex justify-center items-center">
              <img
                className="group-hover:brightness-0 group-hover:invert"
                src="/src/assets/icons/cineone.png"
                alt="cineone"
              />
            </div>
            <div className="group hover:bg-secondtix flex-shrink-0 w-64 h-36 border border-abu rounded-lg flex justify-center items-center">
              <img
                className="group-hover:brightness-0 group-hover:invert"
                src="/src/assets/icons/ebv.png"
                alt="ebv"
              />
            </div>
            <div className="group hover:bg-secondtix flex-shrink-0 w-64 h-36 border border-abu rounded-lg flex justify-center items-center">
              <img
                className="group-hover:brightness-0 group-hover:invert"
                src="/src/assets/icons/hiflix.png"
                alt="hiflix"
              />
            </div>
            <div className="group hover:bg-secondtix flex-shrink-0 w-64 h-36 border border-abu rounded-lg flex justify-center items-center">
              <img
                className="group-hover:brightness-0 group-hover:invert"
                src="/src/assets/icons/cineone.png"
                alt="cineone"
              />
            </div>
          </div>
          <div className="flex gap-2 justify-center w-full">
            <button className="w-10 h-10 rounded-lg  hover:bg-secondtix hover:text-maintix">
              1
            </button>
            <button className="w-10 h-10 rounded-lg  hover:bg-secondtix hover:text-maintix">
              2
            </button>
            <button className="w-10 h-10 rounded-lg  hover:bg-secondtix hover:text-maintix">
              3
            </button>
            <button className="w-10 h-10 rounded-lg  hover:bg-secondtix hover:text-maintix">
              4
            </button>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-44 h-14">
              <AnchorMain content="Book Now" page="/order" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Details;
