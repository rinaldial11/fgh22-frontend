import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Movies from "../components/Movies";
import Subscribe from "../components/Subscribe";

function Home() {
  return (
    <>
      <NavBar />
      <main className="px-28 py-14 text-base flex flex-col gap-5 text-maintext">
        <div className="flex py-12 gap-5 items-center">
          <div className="flex flex-col gap-3 w-3/5">
            <div className="text-lg text-secondtix font-bold">
              MOVIE TICKET PURCHASES #1 IN INDONESIA
            </div>
            <div className="text-5xl text-maintext font-normal max-w-full">
              Experience the Magic of Cinema: Book Your Tickets Today
            </div>
            <div className="text-grey font-light">
              Sign up and get the ticket with a lot of discount
            </div>
          </div>
          <div className="columns-2 gap-3">
            <div className="mb-4 bg-maintext w-52 h-44 rounded-t-2xl"></div>
            <div className="bg-maintext h-60 w-52 rounded-b-2xl"></div>
            <div className="mb-4 bg-maintext w-52 h-60 rounded-t-2xl"></div>
            <div className="bg-maintext w-52 h-44 rounded-b-2xl"></div>
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
          <div className="flex gap-36">
            <div className="flex flex-col gap-3 max-w-96">
              <div className="w-14 h-14 bg-maintix rounded-full"></div>
              <div className="text-lg font-semibold">Guaranteed</div>
              <div className="text-grey">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </div>
            </div>
            <div className="flex flex-col gap-3 max-w-96">
              <div className="w-14 h-14 bg-maintix rounded-full"></div>
              <div className="text-lg font-semibold">Guaranteed</div>
              <div className="text-grey">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </div>
            </div>
            <div className="flex flex-col gap-3 max-w-96">
              <div className="w-14 h-14 bg-maintix rounded-full"></div>
              <div className="text-lg font-semibold">Guaranteed</div>
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
          <Movies />
          <div>View All</div>
        </div>
        <div>
          <div className="flex justify-between items-end">
            <div className="flex flex-col gap-3">
              <div className="text-lg text-secondtix font-bold">
                UPCOMING MOVIES
              </div>
              <div className="text-3xl text-maintext font-normal">
                Exciting Movie Coming Soon
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-16 h-16 bg-maintix rounded-full">
                <a href="#"></a>
              </div>
              <div className="w-16 h-16 bg-maintix rounded-full">
                <a href="#"></a>
              </div>
            </div>
          </div>
          <Movies />
        </div>
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}

export default Home;
