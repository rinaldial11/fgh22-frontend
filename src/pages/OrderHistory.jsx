import React from "react";
import NavBar from "../components/NavBar";
import ProfileCard from "../components/ProfileCard";
import ProfileSection from "../components/ProfileSection";
import Cineone from "../assets/icons/cineone.png";
import Ebv from "../assets/icons/ebv.png";
import PaidStatus from "../components/PaidStatus";
import { IoIosArrowDown } from "react-icons/io";
import ButtonMain from "../components/ButtonMain";
import { IoIosArrowUp } from "react-icons/io";
import Barcode from "../assets/images/barcode.png";

function OrderHistory() {
  const [isShow1, setShow1] = React.useState(false);
  const [isShow2, setShow2] = React.useState(false);
  const [isShow3, setShow3] = React.useState(false);
  return (
    <>
      <NavBar isLog={true} />
      <main className="justify-center md:px-20 md:pt-14 md:pb-32 text-base flex items-center md:items-start flex-col md:flex-row bg-abumuda gap-8 text-maintext">
        <div className="flex w-full items-start md:hidden">
          <ProfileSection page="order-history" />
        </div>
        <div className="hidden lg:block">
          <ProfileCard />
        </div>
        <div className="flex flex-col gap-12 px-6 md:px-0 w-full max-w-screen-xl">
          <div className="hidden md:block">
            <ProfileSection page="order-history" />
          </div>
          <div className="text-lg px-12 py-10 bg-white rounded-3xl flex flex-col gap-12">
            <div className="flex flex-col md:flex-row md:gap-0 gap-5 md:items-center pb-12 border-b border-maintix md:justify-between">
              <div className="block md:hidden">
                <img src={Cineone} alt="Cineone" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-grey text-sm">
                  Tuesday, 07 July 2020 - 04:30pm
                </div>
                <div className="text-2xl font-semibold">
                  Spider-Man: Homecoming
                </div>
              </div>
              <div className="hidden md:block">
                <img src={Cineone} alt="Cineone" />
              </div>
            </div>
            <div className="flex md:flex-row flex-col md:gap-0 gap-6 items-center justify-between">
              <div className="w-full">
                <PaidStatus status="active" />
              </div>
              <div className="md:w-44">
                <button
                  type="button"
                  onClick={() => setShow1(!isShow1)}
                  className="flex items-center text-grey text-lg gap-4"
                >
                  Show Details {!isShow1 && <IoIosArrowDown />}
                  {isShow1 && <IoIosArrowUp />}
                </button>
              </div>
            </div>
            {isShow1 && (
              <div className="flex flex-col gap-7">
                <div className="text-lg">Ticket Information</div>
                <div className="flex flex-col md:flex-row md:gap-24 w-full md:justify-between items-start md:items-center">
                  <div className="flex text-sm text-grey">
                    <div className="w-40">No. Rekening Virtual</div>
                    <div>:</div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="text-lg font-bold">12321328913829724</div>
                    <button className="border border-secondtix text-secondtix py-3 px-4 rounded">
                      Copy
                    </button>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between w-full items-start gap-4 md:items-center">
                  <div className="flex text-sm text-grey">
                    <div className="w-40">Total Payment</div>
                    <div>:</div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="text-lg font-bold text-secondtix">$30</div>
                  </div>
                </div>
                <div className=" text-grey">
                  Pay this payment bill before it is due,{" "}
                  <span className="text-red font-semibold">
                    on June 23, 2023
                  </span>
                  . If the bill has not been paid by the specified time, it will
                  be forfeited
                </div>
                <div className="h-12 w-full md:w-48 text-sm">
                  <ButtonMain content="Cek Pembayaran" />
                </div>
              </div>
            )}
          </div>
          <div className="text-lg px-12 py-10 bg-white rounded-3xl flex flex-col gap-12">
            <div className="flex flex-col md:flex-row md:gap-0 gap-5 md:items-center pb-12 border-b border-maintix md:justify-between">
              <div className="block md:hidden">
                <img src={Ebv} alt="Ebv" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-grey text-sm">
                  Monday, 14 June 2020 - 02:00pm
                </div>
                <div className="text-2xl font-semibold">Avengers: End Game</div>
              </div>
              <div className="hidden md:block">
                <img src={Ebv} alt="Ebv" />
              </div>
            </div>
            <div className="flex md:flex-row flex-col md:gap-0 gap-6 items-center justify-between">
              <div className="w-full">
                <PaidStatus status="used" isPaid={true} />
              </div>
              <div className="md:w-44">
                <button
                  type="button"
                  onClick={() => setShow2(!isShow2)}
                  className="flex items-center text-grey text-lg gap-4"
                >
                  Show Details {!isShow2 && <IoIosArrowDown />}
                  {isShow2 && <IoIosArrowUp />}
                </button>
              </div>
            </div>
            {isShow2 && (
              <div className="flex flex-col gap-1">
                <div className="text-lg">Ticket Information</div>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-11">
                  <div>
                    <img src={Barcode} alt="barcode" />
                  </div>
                  <div className="grid grid-cols-3 gap-5">
                    <div className="flex flex-col gap-1">
                      <div className="text-grey text-xs">Category</div>
                      <div className="text-sm">PG-13</div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-grey text-xs">Time</div>
                      <div className="text-sm">2:00pm</div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-grey text-xs">Seats</div>
                      <div className="text-sm">C4, C5, C6</div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-grey text-xs">Movie</div>
                      <div className="text-sm">Spider-Man: ..</div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-grey text-xs">Date</div>
                      <div className="text-sm">07 Jul</div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-grey text-xs">Count</div>
                      <div className="text-sm">3 pcs</div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div>Total</div>
                    <div className="text-2xl font-semibold">$30.00</div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="text-lg px-12 py-10 bg-white rounded-3xl flex flex-col gap-12">
            <div className="flex flex-col md:flex-row md:gap-0 gap-5 md:items-center pb-12 border-b border-maintix md:justify-between">
              <div className="md:hidden block">
                <img src={Ebv} alt="Ebv" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-grey text-sm">
                  Monday, 14 June 2020 - 02:00pm
                </div>
                <div className="text-2xl font-semibold">Avengers: End Game</div>
              </div>
              <div className="hidden md:block">
                <img src={Ebv} alt="Ebv" />
              </div>
            </div>
            <div className="flex md:flex-row flex-col md:gap-0 gap-6 items-center justify-between">
              <div className="w-full">
                <PaidStatus status="used" isPaid={true} />
              </div>
              <div className="md:w-44">
                <button
                  type="button"
                  onClick={() => setShow3(!isShow3)}
                  className="flex items-center text-grey text-lg gap-4"
                >
                  Show Details {!isShow3 && <IoIosArrowDown />}
                  {isShow3 && <IoIosArrowUp />}
                </button>
              </div>
            </div>
            {isShow3 && (
              <div className="flex flex-col gap-1">
                <div className="text-lg">Ticket Information</div>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-11">
                  <div>
                    <img src={Barcode} alt="barcode" />
                  </div>
                  <div className="grid grid-cols-3 gap-5">
                    <div className="flex flex-col gap-1">
                      <div className="text-grey text-xs">Category</div>
                      <div className="text-sm">PG-13</div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-grey text-xs">Time</div>
                      <div className="text-sm">2:00pm</div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-grey text-xs">Seats</div>
                      <div className="text-sm">C4, C5, C6</div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-grey text-xs">Movie</div>
                      <div className="text-sm">Spider-Man: ..</div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-grey text-xs">Date</div>
                      <div className="text-sm">07 Jul</div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-grey text-xs">Count</div>
                      <div className="text-sm">3 pcs</div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div>Total</div>
                    <div className="text-2xl font-semibold">$30.00</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default OrderHistory;
