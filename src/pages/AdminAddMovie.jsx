import React from "react";
import NavBar from "../components/NavBar";
import ButtonMain from "../components/ButtonMain";
import { CiCalendar } from "react-icons/ci";
import { HiPlus } from "react-icons/hi";

function AdminAddMovie() {
  return (
    <>
      <NavBar isLog={true} isAdmin={true} page="add-movie" />
      <main className="bg-abumuda py-14 px-6 lg:px-52">
        <div className="bg-white rounded-md flex flex-col gap-6 py-14">
          <div className="text-2xl font-bold px-9">Add New Movie</div>
          <div className="flex flex-col px-6 md:px-14 gap-4">
            <div className="text-grey">Upload Image</div>
            <div className="w-28 h-8 text-xs">
              <ButtonMain content="Upload" />
            </div>
            <form className="flex text-secondtix flex-col gap-6">
              <div className="flex flex-col gap-3">
                <label htmlFor="movie-name">Movie Name</label>
                <div className="h-16">
                  <input
                    className="w-full px-9 h-full outline-none rounded bg-abumuda border border-maintix placeholder:text-secondtix"
                    type="text"
                    id="movie-name"
                    name="movie"
                    placeholder="Spider-Man: Homecoming"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="category">Category</label>
                <div className="h-16">
                  <input
                    className="w-full px-9 h-full outline-none rounded bg-abumuda border border-maintix placeholder:text-secondtix"
                    type="text"
                    id="category"
                    name="category"
                    placeholder="Action, Adventure, Sci-Fi"
                  />
                </div>
              </div>
              <div className="flex md:flex-row flex-col justify-between gap-11">
                <div className="flex flex-col gap-3 w-full">
                  <label htmlFor="date">Release date</label>
                  <div className="h-16">
                    <input
                      className="w-full px-9 h-full outline-none rounded bg-abumuda border border-maintix placeholder:text-secondtix"
                      type="date"
                      id="date"
                      name="date"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="hour">Duration (hour / minute)</label>
                  <div className="flex md:flex-row flex-col gap-6">
                    <input
                      className="placeholder:text-center w-full px-9 h-16 md:h-full outline-none rounded bg-abumuda border border-maintix placeholder:text-secondtix"
                      type="number"
                      id="hour"
                      name="hour"
                      placeholder="2"
                    />
                    <input
                      className="placeholder:text-center w-full px-9 h-16 md:h-full outline-none rounded bg-abumuda border border-maintix placeholder:text-secondtix"
                      type="number"
                      id="minute"
                      name="minute"
                      placeholder="13"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="director-name">Director Name</label>
                <div className="h-16">
                  <input
                    className="w-full px-9 h-full outline-none rounded bg-abumuda border border-maintix placeholder:text-secondtix"
                    type="text"
                    id="director-name"
                    name="director-name"
                    placeholder="Jon Watts"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="cast">Cast</label>
                <div className="h-16">
                  <input
                    className="w-full px-9 h-full outline-none rounded bg-abumuda border border-maintix placeholder:text-secondtix"
                    type="text"
                    id="cast"
                    name="cast"
                    placeholder="Tom Holland, Michael Keaton, Robert Dow.."
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="synopsis">Synopsis</label>
                <div className="w-full h-52">
                  <textarea
                    className="w-full h-full p-6 outline-none rounded bg-abumuda border border-maintix placeholder:text-secondtix"
                    name="synopsis"
                    id="synopsis"
                    rows="10"
                    placeholder="Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, | "
                  ></textarea>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="location">Add Location</label>
                <div className="h-16">
                  <input
                    className="w-full px-9 h-full outline-none rounded bg-abumuda border border-maintix placeholder:text-secondtix"
                    type="text"
                    id="location"
                    name="location"
                    placeholder="Purwokerto, Bandung, Bekasi"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="location">Set Date & Time</label>
                <div className="relative w-full md:w-56 h-10">
                  <CiCalendar className="absolute top-1/3 left-6" />
                  <select
                    className="outline-none w-full h-full bg-maintix pl-16 rounded-lg"
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
              <div className="flex gap-8 h-8 items-center">
                <button className="h-full w-16 text-blue flex justify-center items-center border border-blue rounded">
                  <HiPlus />
                </button>
                <div className=" text-sm">08:30am</div>
                <div className=" text-sm">10:30pm</div>
              </div>
              <div className="py-6 border-t border-maintix">
                <div className="h-14 shadow-2xl">
                  <ButtonMain content="Save Movie" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default AdminAddMovie;
