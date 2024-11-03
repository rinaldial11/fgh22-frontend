import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Step from "../components/Step";
import GooglePay from "../assets/icons/googlepay.png";
import Visa from "../assets/icons/visa.png";
import Gopay from "../assets/icons/gopay.png";
import Paypal from "../assets/icons/paypal.png";
import Bca from "../assets/icons/BCA.png";
import Bri from "../assets/icons/BRI.png";
import Ovo from "../assets/icons/ovo.png";
import AnchorMain from "../components/AnchorMain";

function Payment() {
  const [isShow, setShow] = React.useState(false);
  return (
    <>
      <NavBar />
      <main className="relative px-6 md:px-28 pb-32 text-base items-center flex flex-col bg-abumuda gap-5 text-maintext">
        {isShow && (
          <button
            type="button"
            onClick={() => setShow(!isShow)}
            className="w-full h-full bg-[#00000099] px-6 absolute flex justify-center items-center"
          >
            <div className="bg-white rounded-2xl pt-6 pb-14 px-4 flex flex-col gap-9">
              <div className="text-2xl font-bold text-center">Payment Info</div>
              <div className="flex flex-col md:flex-row md:gap-24 w-full gap-3 md:items-center">
                <div className="flex text-sm text-grey">
                  <div className="w-40 text-left md:w-40">
                    No. Rekening Virtual
                  </div>
                  <div>:</div>
                </div>
                <div className="flex justify-between md:justify-end items-center gap-5">
                  <div className="text-lg font-bold">12321328913829724</div>
                  <button className="border border-secondtix text-secondtix py-3 px-4 rounded">
                    Copy
                  </button>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:gap-24 w-full gap-3 md:items-center">
                <div className="flex text-sm text-grey">
                  <div className="w-40 text-left md:w-40">Total Payment</div>
                  <div>:</div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="text-lg font-bold text-secondtix">$30</div>
                </div>
              </div>
              <div className="max-w-lg text-left text-grey">
                Pay this payment bill before it is due,{" "}
                <span className="text-red font-semibold">on June 23, 2023</span>
                . If the bill has not been paid by the specified time, it will
                be forfeited
              </div>
              <div className="flex flex-col gap-6">
                <div className="h-14">
                  <AnchorMain content="Check Payment" page="/ticket-result" />
                </div>
                <div className="h-14">
                  <button className="w-full h-full text-secondtix font-bold">
                    Pay Later
                  </button>
                </div>
              </div>
            </div>
          </button>
        )}
        <div className="hidden md:flex mt-14 items-center gap-3 w-full justify-center">
          <Step content2={"Dates And Time"} status={"activated"} />
          <div>........................</div>
          <Step content={"2"} content2={"Seat"} status="activated" />
          <div>........................</div>
          <Step content={"3"} content2={"Payment"} status="done" />
        </div>
        <div className="bg-white w-full max-w-3xl min-w-96 py-14 px-9 flex mt-14 flex-col gap-12 rounded-md">
          <div className="flex flex-col gap-7">
            <div className="text-2xl font-bold">Payment Info</div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div className="text-sm text-grey">DATE & TIME</div>
                <div className="border-b border-maintix pb-2">
                  Tuesday, 07 July 2020 at 02:00pm
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm text-grey">MOVIE TITLE</div>
                <div className="border-b border-maintix pb-2">
                  Spider-Man: Homecoming
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm text-grey">CINEMA NAME</div>
                <div className="border-b border-maintix pb-2">
                  CineOne21 Cinema
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm text-grey">NUMBER OF TICKETS</div>
                <div className="border-b border-maintix pb-2">3 pieces</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm text-grey">TOTAL PAYMENT</div>
                <div className="border-b border-maintix pb-2 text-secondtix font-bold">
                  $30,00
                </div>
              </div>
            </div>
          </div>
          <form className="flex flex-col gap-7">
            <div className="text-2xl font-bold">Personal Information</div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <label className="text-grey" htmlFor="full-name">
                  Full Name
                </label>
                <div className="w-full h-16">
                  <input
                    className="placeholder:text-maintext outline-none w-full h-full border border-maintix rounded pl-11"
                    type="text"
                    name="full-name"
                    id="full-name"
                    placeholder="Jonas El Rodriguez"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <label className="text-grey" htmlFor="email">
                  Email
                </label>
                <div className="w-full h-16">
                  <input
                    className="placeholder:text-maintext outline-none w-full h-full border border-maintix rounded pl-11"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="jonasrodri123@gmail.com"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <label className="text-grey" htmlFor="phone">
                  Phone Number
                </label>
                <div className="flex items-center w-full h-16 border-maintix rounded border overflow-hidden">
                  <select
                    className="px-5 h-10 border-r border-maintix"
                    name="phone-code"
                    id="phone-code"
                  >
                    <option value="">+62</option>
                    <option value="">+12</option>
                    <option value="">+22</option>
                    <option value="">+32</option>
                    <option value="">+42</option>
                  </select>
                  <input
                    className="placeholder:text-maintext outline-none w-full h-full pl-5 "
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="81445687121"
                  />
                </div>
              </div>
            </div>
          </form>
          <div className="flex flex-col gap-7">
            <div className="text-2xl font-bold">Payment Method</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="w-36 h-14 border-2 border-maintix flex justify-center items-center rounded-lg">
                <img src={GooglePay} alt="" />
              </div>
              <div className="w-36 h-14 border-2 border-maintix flex justify-center items-center rounded-lg">
                <img src={Visa} alt="" />
              </div>
              <div className="w-36 h-14 border-2 border-maintix flex justify-center items-center rounded-lg">
                <img src={Gopay} alt="" />
              </div>
              <div className="w-36 h-14 border-2 border-maintix flex justify-center items-center rounded-lg">
                <img src={Paypal} alt="" />
              </div>
              <div className="w-36 p-5 h-14 border-2 border-maintix flex justify-center items-center rounded-lg">
                <img
                  src="https://s3-alpha-sig.figma.com/img/e489/e409/f2b6c371c9416678b9e17c1d240ee171?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kaXZDozVsh5ZR2xuMV5lTYvLDNY5nWBQ8WY13rDSxMTGDRqCVKRXkGdlEVapYlj4o8M1KJaroMghgRZ2xzh~2sWiT2eqdQGps1CVnWRHwBF2uugpfBYjMdrEdMi-JrW7V1V8~n58wp3xK7YrMTjeO~8JNvOyVQTYTfSpmbbvrRcBRUZX6sXtKx3~PXgrFCjh9g2jn7vg0OdR6ClbGp8x~9UCL2im~DElnFS40I0Q28l6rQWHEFaO9WxG7RJWiAZlPDGlMmQDOEUBDsDf7~y55wpCf1~9~ZrUHsMV7YOdCQIYKqvLQ1nld~khvBtRAGap0FT~sCtJ0XfmRhXcKW9uag__"
                  alt=""
                />
              </div>
              <div className="w-36 h-14 border-2 border-maintix flex justify-center items-center rounded-lg">
                <img src={Bca} alt="" />
              </div>
              <div className="w-36 h-14 border-2 border-maintix flex justify-center items-center rounded-lg">
                <img src={Bri} alt="" />
              </div>
              <div className="w-36 h-14 border-2 border-maintix flex justify-center items-center rounded-lg">
                <img src={Ovo} alt="" />
              </div>
            </div>
          </div>
          <div className="h-14">
            <button
              type="button"
              onClick={() => setShow(!isShow)}
              className="w-full h-full bg-secondtix text-maintix rounded-lg"
            >
              Pay Your Order
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Payment;
