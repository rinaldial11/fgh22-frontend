import React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import LazyLoad from "react-lazyload";

import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { BsShieldFillCheck } from "react-icons/bs";
import { FaCircleCheck } from "react-icons/fa6";
import { HiChatAlt2 } from "react-icons/hi";
import { GoArrowRight } from "react-icons/go";
import { API_URL } from "../config/apiConfig.js";
import { convertDate } from "../lib/parsedate.js";
import { Badge } from "antd";
import { useMovies } from "../hooks/useMovies.jsx";

const Features = [
  {
    logo: BsShieldFillCheck,
    title: "Guaranteed",
    body: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",
  },
  {
    logo: FaCircleCheck,
    title: "Affordable",
    body: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",
  },
  {
    logo: HiChatAlt2,
    title: "24/7 Customer Support",
    body: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",
  },
];

const HomePage = () => {
  const { movies, upcomingMovies } = useMovies({ type: "homepage" });

  return (
    <>
      <NavBar />
      <main className="px-6 lg:px-28 py-14 text-base text-center md:text-left flex flex-col gap-5 md:gap-5 text-maintext">
        <div className="flex md:py-12 flex-col md:flex-row gap-5 md:gap-5 items-center">
          <div className="flex flex-col gap-3 w-full md:w-3/5">
            <div className="text-lg text-secondtix font-bold">
              MOVIE TICKET PURCHASES #1 IN INDONESIA
            </div>
            <div className="text-3xl md:text-5xl text-maintext font-normal max-w-full">
              Experience the Magic of Cinema: Book Your Tickets Today
            </div>
            <div className="text-grey font-light">
              Sign up and get the ticket with a lot of discount
            </div>
          </div>
          <div className="columns-2 gap-3">
            <div className="flex justify-center items-center mb-4 bg-maintext w-44 h-36 md:w-52 md:h-44 rounded-t-2xl overflow-hidden">
              <img
                src={`${API_URL}/movie/image/30c956c8-5f58-4309-bebd-f0ea537a1c99.jpg`}
                alt="John Wick"
              />
            </div>
            <div className="flex justify-center items-center bg-maintext w-44 h-52 md:h-60 md:w-52 rounded-b-2xl overflow-hidden">
              <img
                src={`${API_URL}/movie/image/3797a50a-c21b-4628-95e9-bc3fae5928b1.jpg`}
                alt="Spiderman"
              />
            </div>
            <div className="flex justify-center items-center mb-4 bg-maintext w-44 h-52 md:w-52 md:h-60 rounded-t-2xl overflow-hidden">
              <img
                src={`${API_URL}/movie/image/ca9959a4-8c96-4ccc-8266-7afec0fd50ea.jpg`}
                alt="Lion King"
              />
            </div>
            <div className="flex justify-center items-center bg-maintext w-44 h-36 md:w-52 md:h-44 rounded-b-2xl overflow-hidden">
              <img
                src={`${API_URL}/movie/image/8be76213-32c5-409c-9575-3d451537d439.jpg`}
                alt="Roblox"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col py-12">
          <div className="flex flex-col gap-3 py-12">
            <div className="text-lg text-secondtix font-bold">
              WHY CHOOSE US
            </div>
            <div className="text-3xl text-maintext font-normal">
              Unleashing the Ultimate Movie Experience
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start md:flex-row gap-8 md:gap-36">
            {Features.map((v, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center md:items-start flex-col gap-3 max-w-96"
                >
                  <div className="flex text-xl justify-center items-center w-14 h-14 bg-abumuda rounded-full">
                    <v.logo />
                  </div>
                  <div className="text-lg font-semibold">{v.title}</div>
                  <div className="text-grey">{v.body}</div>
                </div>
              );
            })}
          </div>
        </div>
        <LazyLoad once>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 1,
            }}
            className="flex flex-col items-center text-center gap-3 py-12"
          >
            <div className="flex flex-col gap-3">
              <div className="text-lg text-secondtix font-bold">MOVIES</div>
              <div className="text-3xl text-maintext font-normal max-w-96">
                Exciting Movies That Should Be Watched Today
              </div>
            </div>
            <div className="flex w-full gap-10 justify-between py-12 px-2 overflow-x-scroll">
              {movies?.slice(0, 5).map((movie, index) => {
                return (
                  <>
                    {movie.isRecommended && (
                      <Badge.Ribbon
                        key={`movie-list-${movie.id}-${index}`}
                        className="bg-primary font-light px-2 py-1"
                        text={movie.isRecommended && "recommended"}
                      >
                        <div
                          key={`movie-list-${movie.id}-${index}`}
                          className="group relative flex flex-col gap-5 text-start"
                        >
                          <div className="w-64 rounded-lg h-fit overflow-hidden">
                            <LazyLoad height={375} offset={100} once>
                              <img
                                src={`${API_URL}/movie/image/${movie.image}`}
                                alt=""
                              />
                            </LazyLoad>
                            {/* {movie.isRecommended === true && (
                        <div className="absolute bg-secondtix top-3 -left-2 text-maintix text-sm py-1 px-4 w-32 rounded-e-2xl rounded-tl-xl">
                          Recommended
                        </div>
                      )} */}
                          </div>
                          <div className="absolute hidden group-hover:flex h-[375px] rounded-md w-64 flex-col justify-center items-center gap-3 bg-[#00000066]">
                            <Link
                              className="btn hover:border-secondary hover:text-secondary w-44 h-12 border border-maintix flex justify-center items-center text-maintix rounded-md"
                              to={`/movie/${movie.id}`}
                            >
                              Details
                            </Link>
                            {/* <Link
                      className="w-44 h-12 bg-secondtix flex justify-center items-center text-maintix rounded-md"
                      to="/order"
                    >
                      Buy Ticket
                    </Link> */}
                          </div>
                          <div className="text-xl font-semibold h-10 max-w-64">
                            {movie.title}
                          </div>
                          <div className="flex gap-3 flex-wrap">
                            {movie.genre.slice(0, 2).map((v, index) => {
                              return (
                                <div
                                  key={index}
                                  className="bg-abumuda text-secondtix px-5 py-1 rounded-3xl"
                                >
                                  {v}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </Badge.Ribbon>
                    )}
                    {!movie.isRecommended && (
                      <div
                        key={`movie-list-${movie.id}-${index}`}
                        className="group relative flex flex-col gap-5 text-start"
                      >
                        <div className="w-64 rounded-lg h-fit overflow-hidden">
                          <LazyLoad height={375} offset={100} once>
                            <img
                              src={`${API_URL}/movie/image/${movie.image}`}
                              alt=""
                            />
                          </LazyLoad>
                          {/* {movie.isRecommended === true && (
                        <div className="absolute bg-secondtix top-3 -left-2 text-maintix text-sm py-1 px-4 w-32 rounded-e-2xl rounded-tl-xl">
                          Recommended
                        </div>
                      )} */}
                        </div>
                        <div className="absolute hidden group-hover:flex h-[375px] rounded-md w-64 flex-col justify-center items-center gap-3 bg-[#00000066]">
                          <Link
                            className="btn w-44 h-12 border border-maintix flex justify-center items-center text-maintix rounded-md"
                            to={`/movie/${movie.id}`}
                          >
                            Details
                          </Link>
                          {/* <Link
                      className="w-44 h-12 bg-secondtix flex justify-center items-center text-maintix rounded-md"
                      to="/order"
                    >
                      Buy Ticket
                    </Link> */}
                        </div>
                        <div className="text-xl font-semibold h-10 max-w-64">
                          {movie.title}
                        </div>
                        <div className="flex gap-3 flex-wrap">
                          {movie.genre.slice(0, 2).map((v, index) => {
                            return (
                              <div
                                key={index}
                                className="bg-abumuda text-secondtix px-5 py-1 rounded-3xl"
                              >
                                {v}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </>
                );
              })}
            </div>
            <Link
              className="btn border-none flex items-center gap-2"
              to="/movies"
            >
              View All <GoArrowRight className="text-xl" />
            </Link>
          </motion.div>
        </LazyLoad>
        <LazyLoad once>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 1,
            }}
          >
            <div className="flex justify-between items-end">
              <div className="flex items-center w-full md:items-start flex-col gap-3">
                <div className="text-lg text-secondtix font-bold">
                  UPCOMING MOVIES
                </div>
                <div className="text-3xl text-maintext font-normal">
                  Exciting Movie Coming Soon
                </div>
              </div>
              <div className="hidden md:flex gap-3">
                {/* <button className="flex justify-center hover:bg-secondtix hover:text-maintix items-center w-16 h-16 bg-maintix rounded-full">
                <GoArrowLeft className="text-3xl" />
              </button>
              <button className="flex justify-center hover:bg-secondtix hover:text-maintix items-center w-16 h-16 bg-maintix rounded-full">
                <GoArrowRight className="text-3xl" />
              </button> */}
              </div>
            </div>
            <div className="flex w-full gap-6 justify-between py-12 overflow-x-scroll">
              {upcomingMovies?.slice(0, 5).map((movie, index) => {
                return (
                  <div
                    key={`movie-list-${movie.id}-${index}`}
                    className="group relative flex flex-col gap-5 text-start"
                  >
                    <div className="w-64 rounded-lg h-[375px] overflow-hidden">
                      <LazyLoad
                        className="h-[375px]"
                        height={375}
                        offset={100}
                        once
                      >
                        <img
                          className="h-full"
                          src={`${API_URL}/upcomingmovie/image/${movie.image}`}
                          alt=""
                        />
                      </LazyLoad>
                    </div>
                    <div className="absolute hidden group-hover:flex h-[375px] rounded-md w-64 flex-col justify-center items-center gap-3 bg-[#00000066]">
                      <Link
                        className="btn w-44 h-12 border border-maintix flex justify-center items-center text-maintix rounded-md"
                        to={`/movie/${movie.id}`}
                      >
                        Details
                      </Link>
                    </div>
                    <div className="text-xl font-semibold h-10 max-w-64">
                      {movie.title}
                    </div>
                    <div className="text-lg text-grey font-semibold">
                      {convertDate(movie.releaseDate)}
                    </div>
                    <div className="flex gap-3 flex-wrap">
                      {movie.genre.slice(0, 2).map((v) => {
                        return (
                          <div
                            key={index}
                            className="bg-abumuda text-secondtix px-3 py-1 rounded-3xl"
                          >
                            {v}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </LazyLoad>
        <LazyLoad once>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 1,
            }}
          >
            <Subscribe />
          </motion.div>
        </LazyLoad>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
