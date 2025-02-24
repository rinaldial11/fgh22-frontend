import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ButtonMain from "../components/ButtonMain";
import { CiCalendar } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import AnchorMain from "../components/AnchorMain";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Ebv from "../assets/icons/ebv.png";
import Cineone from "../assets/icons/cineone.png";
import Hiflix from "../assets/icons/hiflix.png";
import { useParams } from "react-router-dom";
import { API_URL } from "../config/apiConfig";
import { convertDateDetails, convertTime } from "../lib/parsedate";
import {
  Link,
  useLocation,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../redux/reducers/order";
import { useAtom } from "jotai";
import { OrderAtom } from "../jotai/order";

function Details() {
  const navigate = useNavigate();
  const order = useSelector((state) => state.order.data);
  const userId = useSelector((state) => state.profile.data.id);
  const dispatch = useDispatch();
  const [isInitialLoad, setIsInitialLoad] = React.useState(true);
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [cinemaId, setCinemaId] = useState([]);
  const [cinema, setCinema] = useState([]);
  const [dateId, setDateId] = React.useState([]);
  const [timeId, setTimeId] = React.useState([]);
  const [locationId, setLocationId] = React.useState([]);
  const [date, setDate] = React.useState([]);
  const [time, setTime] = React.useState([]);
  const [locations, setLocations] = React.useState([]);
  const [isShow, setShow] = React.useState(false);
  const [isShow2, setShow2] = React.useState(false);
  const [isShow3, setShow3] = React.useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  // const searchForm = useForm();
  const searchForm = useForm();
  const [cinemaAtom, setCinemaAtom] = useAtom(OrderAtom);

  function fetchData(dateid, timeid, locationid) {
    const url = new URL(`${API_URL}/movies/${id}/cinema`);
    const params = new URLSearchParams();

    if (date) {
      url.searchParams.append("date", dateid);
      params.set("date", dateid);
    }
    if (time) {
      url.searchParams.append("time", timeid);
      params.set("time", timeid);
    }
    if (location) {
      url.searchParams.append("location", locationid);
      params.set("location", locationid);
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCinemaId(data.results?.cinemaId) || [];
        setCinema(data.results?.cinema) || [];
        setSearchParams(params);
      });
  }

  function searchCinema(v) {
    fetchData(v.date, v.time, v.location);
    dispatch(
      addOrder({
        user_id: userId,
        movie_id: id,
        date_id: v.date,
        time_id: v.time,
        location_id: v.location,
      })
    );
  }

  React.useEffect(() => {
    // const queryString = new URLSearchParams(location.search);
    // fetchData(
    //   queryString.get("date"),
    //   queryString.get("time"),
    //   queryString.get("location")
    // );

    fetch(`${API_URL}/movies/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data.results);
        // setCinema(data.results);
        setDateId(data.results.dateId) || [];
        setTimeId(data.results.timeId) || [];
        setLocationId(data.results.locationId) || [];
        setDate(data.results.date) || [];
        setTime(data.results.time) || [];
        setLocations(data.results.location) || [];
        setCinemaAtom({
          dateName: data.results.date,
          timeName: data.results.time,
        });
      });
    if (isInitialLoad) {
      window.scrollTo(0, 0);
      setIsInitialLoad(false); // Tandai bahwa ini bukan load pertama lagi
    }
  }, [location.search]);

  return (
    <>
      <NavBar />
      <div className="2xl:h-[800px] flex justify-center items-center lg:items-start overflow-hidden">
        <img
          className="w-full min-w-[712px]"
          src={`${API_URL}/movie/banner/${movie?.banner}`}
          alt={`${movie?.title}`}
        />
      </div>
      <main className="px-6 md:px-28 py-14 text-base flex flex-col gap-8 text-maintext">
        <div className="flex top-80 justify-center md:justify-start flex-wrap -mt-72 md:-mt-40 items-end gap-5">
          <div className="w-64 rounded-md overflow-hidden">
            <img
              src={`${API_URL}/movie/image/${movie?.image}`}
              alt={`${movie?.title}`}
            />
          </div>
          <div className="flex items-center md:items-start flex-col gap-5">
            <div className="text-3xl text-center md:text-left font-bold">
              {movie?.title}
            </div>
            <div className="flex gap-5">
              {movie?.genre?.slice(0, 2).map((v) => {
                return (
                  <div className="bg-abumuda text-secondtix px-5 py-1 rounded-3xl">
                    {v}
                  </div>
                );
              })}
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <div className="text-sm text-grey">Release date</div>
                <div>{convertDateDetails(movie?.releaseDate)}</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm text-grey">Directed by</div>
                <div>{movie?.author}</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm text-grey">Duration</div>
                <div>{convertTime(movie?.duration)}</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm text-grey">Casts</div>
                <div>{movie?.casts?.join(", ")}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-xl font-semibold">Synopsis</div>
          <div className="text-grey w-full max-w-4xl">{movie?.synopsis}</div>
        </div>
        <div className="flex text-center md:text-left flex-col gap-9">
          <div className="text-4xl">Book Tickets</div>
          <form
            onSubmit={searchForm.handleSubmit(searchCinema)}
            className="flex flex-wrap gap-8 items-end"
          >
            <div className="flex w-full md:w-72 flex-col gap-3">
              <label
                className="hidden md:block text-xl font-semibold"
                htmlFor="date"
              >
                Choose Date
              </label>
              <label
                className="block md:hidden pb-5 text-xl font-semibold"
                htmlFor="date"
              >
                Showtimes and Tickets
              </label>
              <div className="relative w-full md:w-72 h-14">
                <CiCalendar className="absolute top-1/3 left-6" />
                <select
                  className="w-full h-full bg-abumuda px-16 rounded-sm"
                  {...searchForm.register("date")}
                  id="date"
                >
                  <option disabled selected value={dateId[1]}>
                    Choose date
                  </option>
                  {date.map((v, index) => {
                    return (
                      <option value={dateId[index]}>
                        {convertDateDetails(v)}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="hidden md:flex flex-col gap-3">
              <label className="text-xl font-semibold" htmlFor="date">
                Choose Time
              </label>
              <div className="relative w-72 h-14">
                <IoMdTime className="absolute top-1/3 left-6" />
                <select
                  className="w-full h-full bg-abumuda px-16 rounded-sm"
                  {...searchForm.register("time")}
                  id="date"
                >
                  <option disabled selected value={timeId[0]}>
                    Choose Time
                  </option>
                  {time.map((v, index) => {
                    return <option value={timeId[index]}>{v}</option>;
                  })}
                </select>
              </div>
            </div>
            <div className="flex w-full md:w-72 flex-col gap-3">
              <label
                className="hidden md:block text-xl font-semibold"
                htmlFor="date"
              >
                Choose Location
              </label>
              <div className="relative w-full md:w-72 h-14">
                <CiLocationOn className="absolute top-1/3 left-6" />
                <select
                  className="w-full h-full bg-abumuda px-16 rounded-sm"
                  {...searchForm.register("location")}
                  id="date"
                >
                  <option disabled selected value={locationId[0]}>
                    Choose Location
                  </option>
                  {locations.map((v, index) => {
                    return <option value={locationId[index]}>{v}</option>;
                  })}
                </select>
              </div>
            </div>
            <div className="h-14 w-full md:w-44">
              <ButtonMain content="Filter" />
            </div>
          </form>
        </div>
        <div className="flex flex-col gap-9 py-5">
          <div className="flex gap-9">
            <div className="text-xl md:block hidden font-semibold">
              Choose Cinema
            </div>
            {/* <div className="text-lg text-center w-full md:max-w-xs md:text-left text-grey font-bold">
              39 Result{" "}
            </div> */}
          </div>
          <div className="hidden md:flex justify-start w-full max-w-full min-w-full gap-10 overflow-x-scroll">
            {/* {cinema?.map((v) => (
              <div className="group hover:bg-secondtix flex-shrink-0 w-64 h-36 border border-abu rounded-lg flex justify-center items-center">
                {" "}
                {v}
                <img
                  className="group-hover:brightness-0 group-hover:invert"
                  // src={}
                  alt="ebv"
                />
              </div>
            ))} */}
            {cinema.map((v, index) => {
              return (
                <div
                  onClick={() => {
                    console.log(cinema[index]);
                    dispatch(addOrder({ cinema_id: cinemaId[index] }));
                    setCinemaAtom({
                      dateName: date,
                      timeName: time,
                      cinemaName: cinema[index],
                    });
                  }}
                  className="group hover:bg-secondtix flex-shrink-0 w-64 h-36 border border-abu rounded-lg flex justify-center items-center"
                >
                  {v === "ebv.id" && <img src={Ebv} />}
                  {v === "cineone21" && <img src={Cineone} />}
                  {v === "hiflix" && <img src={Hiflix} />}
                  {/* <img
                    className="group-hover:brightness-0 group-hover:invert"
                    src={v}
                    alt="hiflix"
                  /> */}
                </div>
              );
            })}
            {/* <div className="group hover:bg-secondtix flex-shrink-0 w-64 h-36 border border-abu rounded-lg flex justify-center items-center">
              <img
                className="group-hover:brightness-0 group-hover:invert"
                src={Hiflix}
                alt="hiflix"
              />
            </div> */}
            {/* <div className="group hover:bg-secondtix flex-shrink-0 w-64 h-36 border border-abu rounded-lg flex justify-center items-center">
              <img
                className="group-hover:brightness-0 group-hover:invert"
                src={Cineone}
                alt="cineone"
              />
            </div>
            <div className="group hover:bg-secondtix flex-shrink-0 w-64 h-36 border border-abu rounded-lg flex justify-center items-center">
              <img
                className="group-hover:brightness-0 group-hover:invert"
                src={Ebv}
                alt="ebv"
              />
            </div>
            <div className="group hover:bg-secondtix flex-shrink-0 w-64 h-36 border border-abu rounded-lg flex justify-center items-center">
              <img
                className="group-hover:brightness-0 group-hover:invert"
                src={Hiflix}
                alt="hiflix"
              />
            </div>
            <div className="group hover:bg-secondtix flex-shrink-0 w-64 h-36 border border-abu rounded-lg flex justify-center items-center">
              <img
                className="group-hover:brightness-0 group-hover:invert"
                src={Cineone}
                alt="cineone"
              />
            </div> */}
          </div>
          <div className="flex flex-col md:hidden gap-11">
            <div className="flex flex-col w-full border border-maintix rounded-xl px-8 py-5">
              <div className="flex justify-between pb-6">
                <div className="flex w-full max-w-56 flex-col gap-5">
                  <div className="w-20">
                    <img src={Ebv} alt="ebv" />
                  </div>
                  <div className="text-2xl font-bold">EBV.id</div>
                  <div className="text-xs text-grey">
                    Whatever street No.12, South Purwokerto
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShow(!isShow)}
                  className=" flex justify-end items-center w-28 text-2xl"
                >
                  {isShow && <IoIosArrowUp />}
                  {!isShow && <IoIosArrowDown />}
                </button>
              </div>
              {isShow && (
                <div className="flex flex-col gap-7 py-6 border-t border-maintix">
                  <div className="flex flex-col gap-7">
                    <div className="text-xl font-semibold">REGULAR</div>
                    <div className="grid grid-cols-2 gap-6 w-2/3">
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        08:30 AM
                      </div>
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        10:30 AM
                      </div>
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        13:30 AM
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 w-2/3">
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        08:30 AM
                      </div>
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        10:30 AM
                      </div>
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        13:30 AM
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-7">
                    <div className="text-xl font-semibold">GOLD</div>
                    <div className="grid grid-cols-2 gap-6 w-2/3">
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        08:30 AM
                      </div>
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        10:30 AM
                      </div>
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        13:30 AM
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 w-2/3">
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        08:30 AM
                      </div>
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        10:30 AM
                      </div>
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        13:30 AM
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-7">
                    <div className="text-xl font-semibold">PLATINUM S</div>
                    <div className="grid grid-cols-2 gap-6 w-2/3">
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        08:30 AM
                      </div>
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        10:30 AM
                      </div>
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        13:30 AM
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 w-2/3">
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        08:30 AM
                      </div>
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        10:30 AM
                      </div>
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        13:30 AM
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col w-full border border-maintix rounded-xl px-8 py-5">
              <div className="flex justify-between pb-6">
                <div className="flex w-full max-w-56 flex-col gap-5">
                  <div className="w-20">
                    <img src={Cineone} alt="Cineone" />
                  </div>
                  <div className="text-2xl font-bold">Cineone 21</div>
                  <div className="text-xs text-grey">
                    Whatever street No.12, South Purwokerto
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShow2(!isShow2)}
                  className=" flex justify-end items-center w-28 text-2xl"
                >
                  {isShow2 && <IoIosArrowUp />}
                  {!isShow2 && <IoIosArrowDown />}
                </button>
              </div>
              {isShow2 && (
                <div className="flex flex-col gap-7 py-6 border-t border-maintix">
                  <div className="flex flex-col gap-7">
                    <div className="text-xl font-semibold">REGULAR</div>
                    <div className="grid grid-cols-2 gap-6 w-2/3">
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        08:30 AM
                      </div>
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        10:30 AM
                      </div>
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        13:30 AM
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 w-2/3">
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        08:30 AM
                      </div>
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        10:30 AM
                      </div>
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        13:30 AM
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-7">
                    <div className="text-xl font-semibold">GOLD</div>
                    <div className="grid grid-cols-2 gap-6 w-2/3">
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        08:30 AM
                      </div>
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        10:30 AM
                      </div>
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        13:30 AM
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 w-2/3">
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        08:30 AM
                      </div>
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        10:30 AM
                      </div>
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        13:30 AM
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-7">
                    <div className="text-xl font-semibold">PLATINUM S</div>
                    <div className="grid grid-cols-2 gap-6 w-2/3">
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        08:30 AM
                      </div>
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        10:30 AM
                      </div>
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        13:30 AM
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 w-2/3">
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        08:30 AM
                      </div>
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        10:30 AM
                      </div>
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        13:30 AM
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col w-full border border-maintix rounded-xl px-8 py-5">
              <div className="flex justify-between pb-6">
                <div className="flex w-full max-w-56 flex-col gap-5">
                  <div className="w-20">
                    <img src={Hiflix} alt="Hiflix" />
                  </div>
                  <div className="text-2xl font-bold">Hiflix Cinema</div>
                  <div className="text-xs text-grey">
                    Whatever street No.12, South Purwokerto
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShow3(!isShow3)}
                  className=" flex justify-end items-center w-28 text-2xl"
                >
                  {isShow3 && <IoIosArrowUp />}
                  {!isShow3 && <IoIosArrowDown />}
                </button>
              </div>
              {isShow3 && (
                <div className="flex flex-col gap-7 py-6 border-t border-maintix">
                  <div className="flex flex-col gap-7">
                    <div className="text-xl font-semibold">REGULAR</div>
                    <div className="grid grid-cols-2 gap-6 w-2/3">
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        08:30 AM
                      </div>
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        10:30 AM
                      </div>
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        13:30 AM
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 w-2/3">
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        08:30 AM
                      </div>
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        10:30 AM
                      </div>
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        13:30 AM
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-7">
                    <div className="text-xl font-semibold">GOLD</div>
                    <div className="grid grid-cols-2 gap-6 w-2/3">
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        08:30 AM
                      </div>
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        10:30 AM
                      </div>
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        13:30 AM
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 w-2/3">
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        08:30 AM
                      </div>
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        10:30 AM
                      </div>
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        13:30 AM
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-7">
                    <div className="text-xl font-semibold">PLATINUM S</div>
                    <div className="grid grid-cols-2 gap-6 w-2/3">
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        08:30 AM
                      </div>
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        10:30 AM
                      </div>
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        13:30 AM
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 w-2/3">
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        08:30 AM
                      </div>
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        10:30 AM
                      </div>
                      <div className="hover:bg-secondtix hover:text-maintix flex justify-center items-center rounded-3xl bg-maintix w-24 h-8 text-sm">
                        13:30 AM
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
            <div className="hidden md:block w-44 h-14">
              <AnchorMain content="Book Now" page={`/order/${movie?.id}`} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Details;
