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
            <div className="mb-4 bg-maintext w-44 h-36 md:w-52 md:h-44 rounded-t-2xl overflow-hidden">
              <img
                src="https://s3-alpha-sig.figma.com/img/ba6c/8542/6b9695a38b785c873d1dea010d4df1e7?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l-oQohC6EZll9PxUgyfQkTJTJRvyaTP57jsewsmCRDvyQWsjgbbyHAlc~XvSsEc8VsycL5FwDLF1wbnfLXTKt2OJQTIGU8tV8aeE3vvPulbWWdAS-XjJI8VQbb~c5alRhCKUp7e7BDGT6wwDsDJ5wuNuz6-Bmu4rmzUUFRUDsP7xYyDj~Owbp1OGCkNp1I5dxOocDealRR5T-8uqSovBwciqAbHKpVvBba2dyCVtYJ8frTMEx8lN3bZz~wQdv1bX1AvnwYBQ-MsED1HxptQ1zHCOtNA6EOB~y1I91mxEnGdrTpGa88YXzVnsMvIF2J6ReDzaqNlCW6jiGCvaAKhh-Q__"
                alt="John Wick"
              />
            </div>
            <div className="bg-maintext w-44 h-52 md:h-60 md:w-52 rounded-b-2xl overflow-hidden">
              <img
                src="https://s3-alpha-sig.figma.com/img/166e/1a86/44251a092a8b683b8fa185edb10acbd5?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kpEDFwSxxYFxhInqsYFHLiHRPxnSjcj8qzqIqSGyFZWeR0hlHafowpI64uSvtR8ljPvULfLe3TOa04tO3XAZ3ntv2G2U5sgTdVs7Cpc~4gfxVsO6bVQh-X8GZvb80S5c~I7AJbL4cFkh5mO2724asjyIv9wvHYf8EMB0drmcayvWOMY-fXBogQsC-2bOPlTuROw0ZobpLQ-mV7AqqZmIgmA-ubnIH~prtT48Cx~iEMuRhYUY5ND63ciPyI~m9zNA1~H4RqZ~JRBPSmFFMMmWDIAw6f3LjRCJJZsBIMEzrTunngKFh7H12SCK0XqIz-wLWI3mAIbAOc8JF0spJ2idTw__"
                alt="Spiderman"
              />
            </div>
            <div className="mb-4 bg-maintext w-44 h-52 md:w-52 md:h-60 rounded-t-2xl overflow-hidden">
              <img
                src="https://s3-alpha-sig.figma.com/img/7121/6b61/0a78d36795c9b4cd7c94717ad6186838?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YlOKXGEaPmlVt6kLAeyQhW8EXX4rlZv4SgeymPHhbxwdgvcsr48-Bm4CWzVTZpoL6F8dOe1WCjMhUGr78s2esVaFQzCmVxyBDlvEiornqLa76~vfbG3gvLldRWBXJpx5dIDYXw4M9dEhjxjM2eBIPrpjPAvhIGEnMj3fu~MRqQy-c3EFklGDKa0YdP18cGm2~RCUrG1-txid-T1z183k1Vr~ycVw2tiLKzHta6aQ4O3IcWuGdVKyL5xs6MHv~9U1d6HH21cm7QqXJIRu3w0xtV344PYLSDFsSad5rG3x1fFyWBcj~Ng-GhmMzvJ-ixzRKJBvw3-7hy7g0bTCQ32-7A__"
                alt="Lion King"
              />
            </div>
            <div className="flex bg-maintext w-44 h-36 md:w-52 md:h-44 rounded-b-2xl overflow-hidden">
              <img
                className="object-cover"
                src="https://s3-alpha-sig.figma.com/img/df1d/d837/8a3f94fa88c1401667c23d45dc2867ce?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xf66dqF8fgtou1nULIKg4U58q5eYGUWz4K9lWBf~m~Y9MfAb2jzGi49CT8TUGnj~UxX86J9oEmeRR5ZdJ0Sc8T3hTyg-g9DYZSeg2m0Ibaskzn1nrmHmbnTRPI7IqZJa4ZD0qcOJ7XPWx7dZiAdTMaJbEOleXbj8Foct6ILb4GAWHCW8QgyTgrpxUu9qBmEeO2JAkALSlMUXEbKv2zI3C08AMIiv5ECT7AaVZhfkgWJ74r6sI8TzgAo-OBjlGjTtbTkWin0qPaxgJPxLcfUQEtaAgIN2uINTR9NORzHjIbT6u68PwVk-k7td0JPAmj5I7tds3W1Em4Q4E1iMeuQBJQ__"
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
