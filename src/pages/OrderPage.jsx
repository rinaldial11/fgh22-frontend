import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Step from "../components/Step";
import Spiderman from "../assets/images/Spiderman.png";
import ButtonMain from "../components/ButtonMain";
import Cineone from "../assets/icons/cineone.png";
import AnchorMain from "../components/AnchorMain";

function OrderPage() {
  return (
    <>
      <NavBar />
      <main className="px-28 pt-14 pb-32 text-base items-center flex flex-col bg-abumuda gap-5 text-maintext">
        <div className="hidden md:flex items-center gap-3 w-full justify-center">
          <Step content2={"Dates And Time"} status={"activated"} />
          <div>........................</div>
          <Step content={"2"} content2={"Seat"} status="done" />
          <div>........................</div>
          <Step content={"3"} content2={"Payment"} status="on" />
        </div>
        <div className="flex gap-4">
          <div className="bg-white px-5 py-10 rounded-md flex flex-col gap-9">
            <div className="w-full px-6 py-3 border flex border-maintix gap-4 rounded-sm">
              <div className="w-48 h-32 overflow-hidden">
                <img src={Spiderman} alt="" />
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-3xl font-semibold">
                  Spiderman: Homecoming
                </div>
                <div className="flex gap-2">
                  <div className="bg-abumuda text-secondtix px-3 py-1 rounded-3xl">
                    Action
                  </div>
                  <div className="bg-abumuda text-secondtix px-3 py-1 rounded-3xl">
                    Adventure
                  </div>
                </div>
                <div>Regular - 13:00 PM</div>
              </div>
              <div className="h-full flex items-end">
                <div className="w-28 h-8">
                  <AnchorMain content="Change" page="/home" />
                </div>
              </div>
            </div>
            <div className="text-2xl font-bold">Choose Your Seat</div>
            <div className="flex flex-col gap-6">
              <div className="pl-12 pr-32 text-center flex flex-col gap-2">
                <div className="text-sm">Screen</div>
                <div className="w-full h-2 bg-abu rounded-md"></div>
              </div>
              <div className="pl-4 w-full flex gap-20">
                <div className="w-64 grid grid-cols-8 gap-2">
                  <button className="hover:bg-secondtix w-6 h-6 bg-white rounded">
                    A
                  </button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-maintext rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-white rounded">
                    B
                  </button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-maintext rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-maintext rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-white rounded">
                    C
                  </button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-white rounded">
                    D
                  </button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-maintext rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-white rounded">
                    E
                  </button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-maintext rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-white rounded">
                    F
                  </button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-white rounded">
                    G
                  </button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-maintext rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-white rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-white rounded">
                    1
                  </button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-white rounded">
                    2
                  </button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-white rounded">
                    3
                  </button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-white rounded">
                    4
                  </button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-white rounded">
                    5
                  </button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-white rounded">
                    6
                  </button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-white rounded">
                    7
                  </button>
                </div>
                <div className="w-64 grid grid-cols-8 gap-2">
                  <button className="hover:bg-secondtix w-6 h-6 bg-white rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-maintext rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-white rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-white rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-maintext rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-maintext rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-white rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-maintext rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-maintext rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-white rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-white rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-14 h-6 bg-pink rounded"></button>
                  <button className="hover:bg-secondtix w-6 invisible h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-maintext rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-white rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-abu rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-white rounded"></button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-white rounded">
                    8
                  </button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-white rounded">
                    9
                  </button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-white rounded">
                    10
                  </button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-white rounded">
                    11
                  </button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-white rounded">
                    12
                  </button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-white rounded">
                    13
                  </button>
                  <button className="hover:bg-secondtix w-6 h-6 bg-white rounded">
                    14
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-5 pl-6">
                <div className="text-lg font-semibold">Seating key</div>
                <div className="flex gap-10">
                  <div className="flex gap-4">
                    <div className="w-6 h-6 bg-abu rounded"></div>
                    <div>Available</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-6 h-6 bg-secondtix rounded"></div>
                    <div>Selected</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-6 h-6 bg-pink rounded"></div>
                    <div>Love nest</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-6 h-6 bg-maintext rounded"></div>
                    <div>Sold</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full flex flex-col gap-11">
            <div className="bg-white px-6 py-4 h-full flex flex-col items-center rounded-md shadow-md gap-8">
              <div className="text-center flex flex-col items-center gap-6">
                <div className="pt-8">
                  <img src={Cineone} alt="" />
                </div>
                <div className="text-2xl font-semibold">CineOne21 Cinema</div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between gap-5">
                  <div className="text-sm text-grey">Movie selected</div>
                  <div className="text-sm font-semibold">
                    Spider-Man: Homecoming
                  </div>
                </div>
                <div className="flex justify-between gap-5">
                  <div className="text-sm text-grey">Tuesday, 07 July 2020</div>
                  <div className="text-sm font-semibold">13:00pm</div>
                </div>
                <div className="flex justify-between gap-5">
                  <div className="text-sm text-grey">One ticket price</div>
                  <div className="text-sm font-semibold">$10</div>
                </div>
                <div className="flex justify-between gap-5">
                  <div className="text-sm text-grey">Seat choosed</div>
                  <div className="text-sm font-semibold">C4, C5, C6</div>
                </div>
              </div>
              <div className="flex justify-between items-center py-6 border-t border-maintix w-full">
                <div className="text-lg font-semibold">Total Payment</div>
                <div className="text-2xl font-bold text-secondtix">$30</div>
              </div>
            </div>
            <div className="shadow-xl flex w-full h-14">
              <AnchorMain content="Checkout now" page="/payment" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default OrderPage;
