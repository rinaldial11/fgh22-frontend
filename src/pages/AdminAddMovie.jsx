import React from "react";
import NavBar from "../components/NavBar";
import ButtonMain from "../components/ButtonMain";
import { CiCalendar } from "react-icons/ci";
import { HiPlus } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { API_URL } from "../config/apiConfig.js";

function AdminAddMovie() {
  const { register, handleSubmit } = useForm();

  function formMovie(value) {
    const query = new URLSearchParams(value);
    const queryString = query.toString();

    fetch(`${API_URL}/movies`, {
      method: "POST",
      body,
    });
    console.log(value);
    console.log(queryString);
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
            <form
              className="flex text-secondtix flex-col gap-6"
              onSubmit={handleSubmit(formMovie)}
            >
              <div className="flex flex-col gap-3">
                <label htmlFor="movie-name">Movie Name</label>
                <div className="h-16">
                  <input
                    className="w-full px-9 h-full outline-none rounded bg-abumuda border border-maintix placeholder:text-secondtix"
                    type="text"
                    id="movie-name"
                    {...register("title")}
                    placeholder="Movie title"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="genre">Category</label>
                <div className="h-16">
                  <input
                    className="w-full px-9 h-full outline-none rounded bg-abumuda border border-maintix placeholder:text-secondtix"
                    type="text"
                    id="genre"
                    {...register("genre_name")}
                    placeholder="Movie genre"
                  />
                </div>
              </div>
              <div className="flex md:flex-row flex-col justify-between gap-11">
                <div className="flex flex-col gap-3 w-full">
                  <label htmlFor="date">Release date</label>
                  <div className="h-16">
                    <input
                      className="w-full px-9 h-full outline-none rounded bg-abumuda border border-maintix placeholder:text-secondtix"
                      type="text"
                      id="date"
                      {...register("release_date")}
                      placeholder="YYYY-MM-DD"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3 w-1/3">
                  <label htmlFor="duration">
                    Duration (hour / minute / second)
                  </label>
                  <div className="flex md:flex-row flex-col md:h-16 gap-6">
                    <input
                      className="px-9 w-full h-16 md:h-full outline-none rounded bg-abumuda border border-maintix placeholder:text-secondtix"
                      type="text"
                      id="duration"
                      {...register("duration")}
                      placeholder="HH:MM:SS"
                    />
                    {/* <input
                      className="placeholder:md:text-center w-full px-9 h-16 md:h-full outline-none rounded bg-abumuda border border-maintix placeholder:text-secondtix"
                      type="number"
                      id="minute"
                      name="minute"
                      placeholder="13"
                    /> */}
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
                    {...register("author")}
                    placeholder="Movie director"
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
                    {...register("cast_name")}
                    placeholder="Movie cast"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="synopsis">Synopsis</label>
                <div className="w-full h-52">
                  <textarea
                    className="w-full h-full p-6 outline-none rounded bg-abumuda border border-maintix placeholder:text-secondtix"
                    {...register("synopsis")}
                    id="synopsis"
                    rows="10"
                    placeholder="Movie synopsis..."
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
                    placeholder="Movie location"
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
