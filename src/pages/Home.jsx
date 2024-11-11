import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";
import { BsShieldFillCheck } from "react-icons/bs";
import { FaCircleCheck } from "react-icons/fa6";
import { HiChatAlt2 } from "react-icons/hi";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import Spiderman from "../assets/images/Spiderman.png";
import Tenet from "../assets/images/Tenet.png";
import Witches from "../assets/images/The-Witches.png";
import Widow from "../assets/images/Black-Widow.png";

function Home() {
  const [rick, setRick] = React.useState([]);

  React.useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        setRick(data.results);
      });

    window.scrollTo(0, 0);
  }, []);
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
              <img src={Spiderman} alt="John Wick" />
            </div>
            <div className="flex justify-center items-center bg-maintext w-44 h-52 md:h-60 md:w-52 rounded-b-2xl overflow-hidden">
              <img src={Tenet} alt="Spiderman" />
            </div>
            <div className="flex justify-center items-center mb-4 bg-maintext w-44 h-52 md:w-52 md:h-60 rounded-t-2xl overflow-hidden">
              <img src={Widow} alt="Lion King" />
            </div>
            <div className="flex justify-center items-center bg-maintext w-44 h-36 md:w-52 md:h-44 rounded-b-2xl overflow-hidden">
              <img src={Witches} alt="Roblox" />
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
            <div className="flex items-center md:items-start flex-col gap-3 max-w-96">
              <div className="flex justify-center items-center w-14 h-14 bg-maintix rounded-full">
                <BsShieldFillCheck className="text-xl" />
              </div>
              <div className="text-lg font-semibold">Guaranteed</div>
              <div className="text-grey">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start gap-3 max-w-96">
              <div className="flex justify-center items-center w-14 h-14 bg-maintix rounded-full">
                <FaCircleCheck className="text-xl" />
              </div>
              <div className="text-lg font-semibold">Affordable</div>
              <div className="text-grey">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start gap-3 max-w-96">
              <div className="flex justify-center items-center w-14 h-14 bg-maintix rounded-full">
                <HiChatAlt2 className="text-3xl" />
              </div>
              <div className="text-lg font-semibold">24/7 Customer Support</div>
              <div className="text-grey">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-center gap-3 py-12">
          <div className="flex flex-col gap-3">
            <div className="text-lg text-secondtix font-bold">MOVIES</div>
            <div className="text-3xl text-maintext font-normal max-w-96">
              Exciting Movies That Should Be Watched Today
            </div>
          </div>
          <div className="flex w-full gap-6 justify-between py-12 overflow-x-scroll">
            {rick.map((char) => {
              return (
                <MovieCard
                  source={char.image}
                  charname={char.name}
                  // tittle={"Black Widow"}
                  // genre1={"Action"}
                  // genre2={"Adventure"}
                />
              );
            })}

            {/* <MovieCard
              tittle={"The Witches"}
              genre1={"Action"}
              genre2={"Adventure"}
            />
            <MovieCard
              tittle={"Tenet"}
              genre1={"Action"}
              genre2={"Adventure"}
            />
            <MovieCard
              tittle={"Spiderman"}
              genre1={"Action"}
              genre2={"Adventure"}
            />
            <MovieCard
              tittle={"Black Widow"}
              genre1={"Action"}
              genre2={"Adventure"}
            /> */}
          </div>
          <Link className="flex items-center gap-2" to="/home">
            View All <GoArrowRight className="text-xl" />
          </Link>
        </div>
        <div>
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
              <button className="flex justify-center hover:bg-secondtix hover:text-maintix items-center w-16 h-16 bg-maintix rounded-full">
                <GoArrowLeft className="text-3xl" />
              </button>
              <button className="flex justify-center hover:bg-secondtix hover:text-maintix items-center w-16 h-16 bg-maintix rounded-full">
                <GoArrowRight className="text-3xl" />
              </button>
            </div>
          </div>
          <div className="flex w-full gap-6 justify-between py-12 overflow-x-scroll">
            {rick.map((char) => {
              return (
                <MovieCard
                  source={char.image}
                  charname={char.name}
                  // tittle={"Black Widow"}
                  // genre1={"Action"}
                  // genre2={"Adventure"}
                />
              );
            })}
            {/* <MovieCard
              date={"December 2024"}
              tittle={"Black Widow"}
              genre1={"Action"}
              genre2={"Adventure"}
            />
            <MovieCard
              date={"January 2024"}
              tittle={"The Witches"}
              genre1={"Action"}
              genre2={"Adventure"}
            />
            <MovieCard
              date={"Juny 2024"}
              tittle={"Tenet"}
              genre1={"Action"}
              genre2={"Adventure"}
            />
            <MovieCard
              date={"March 2024"}
              tittle={"Spiderman"}
              genre1={"Action"}
              genre2={"Adventure"}
            />
            <MovieCard
              date={"December 2024"}
              tittle={"Black Widow"}
              genre1={"Action"}
              genre2={"Adventure"}
            /> */}
          </div>
        </div>
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}

export default Home;
