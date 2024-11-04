import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Funtastix from "../assets/icons/funtastix-logo.png";
import Barcode from "../assets/images/barcode.png";
import AnchorMain from "../components/AnchorMain";
import { GoDownload } from "react-icons/go";

function TicketResult() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavBar />
      <main className="text-base flex lg:flex-row flex-col items-center gap-14 lg:gap-1 bg-abumuda text-maintext">
        <div className="relative w-full lg:w-3/5 h-[920px] bg-avengers bg-no-repeat bg-cover">
          <div className="absolute lg:text-left text-center gap-5 flex-col text-white px-6 lg:px-28 pt-80 pb-60 bg-[#000000CC] w-full h-full flex lg:items-start items-center ">
            <div className="w-72">
              <img src={Funtastix} alt="Funtastix" />
            </div>
            <div className="text-3xl lg:text-5xl font-bold">
              Thankyou For Purchasing
            </div>
            <div className="text-lg lg:text-2xl text-[#FFFFFFB2] w-full max-w-xl">
              Lorem ipsum dolor sit amet consectetur. Quam pretium pretium
              tempor integer sed magna et.
            </div>
            <div className="text-lg font-bold">Please Download Your Ticket</div>
          </div>
        </div>
        <div className="flex gap-6 pb-16 justify-center w-2/5 flex-col items-center">
          <div className="bg-white rounded-lg w-80 px-6 py-8 max-w-2xl flex flex-col items-center gap-10">
            <div>
              <img src={Barcode} alt="" />
            </div>
            <div className="flex w-full items-center justify-between">
              <div className="w-8 h-8 bg-[#F5F6F8] rounded-full -ml-10"></div>
              <div className="text-[#F5F6F8]">
                ----------------------------------------
              </div>
              <div className="w-8 h-8 bg-[#F5F6F8] rounded-full -mr-10"></div>
            </div>
            <div className="w-full flex flex-col gap-6">
              <div className="flex w-full">
                <div className="w-48">
                  <div className="text-grey text-xs">Movie</div>
                  <div className="text-sm">Spider-Man: ..</div>
                </div>
                <div>
                  <div className="text-grey text-xs">Category</div>
                  <div className="text-sm">PG-13</div>
                </div>
              </div>
              <div className="flex  w-full">
                <div className="w-48">
                  <div className="text-grey text-xs">Date</div>
                  <div className="text-sm">07 Jul</div>
                </div>
                <div>
                  <div className="text-grey text-xs">Time</div>
                  <div className="text-sm">2:00pm</div>
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-48">
                  <div className="text-grey text-xs">Count</div>
                  <div className="text-sm">3 pcs</div>
                </div>
                <div>
                  <div className="text-grey text-xs">Seats</div>
                  <div className="text-sm">C4, C5, C6</div>
                </div>
              </div>
            </div>
            <div className="flex justify-between w-full px-6 py-3 border border-maintix rounded">
              <div>Total</div>
              <div className="font-semibold">$30.00</div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <button className="flex justify-center items-center gap-6 w-80 lg:w-96 h-14 border border-secondtix text-secondtix rounded">
              <GoDownload className="text-2xl" />
              Download
            </button>
            <div className="w-80 lg:w-96 h-14">
              <AnchorMain content="Done" page="/profile" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default TicketResult;
