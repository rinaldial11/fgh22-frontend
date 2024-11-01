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
  return (
    <>
      <NavBar />
      <main className="px-28 pt-14 pb-32 text-base items-center flex flex-col bg-abumuda gap-5 text-maintext">
        <div className="hidden md:flex items-center gap-3 w-full justify-center">
          <Step content2={"Dates And Time"} status={"activated"} />
          <div>........................</div>
          <Step content={"2"} content2={"Seat"} status="activated" />
          <div>........................</div>
          <Step content={"3"} content2={"Payment"} status="done" />
        </div>
        <div className="bg-white w-full max-w-3xl min-w-96 py-14 px-9 flex flex-col gap-12 rounded-md">
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
          <div className="flex flex-col gap-7">
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
                <div className="w-full h-16">
                  <input
                    className="placeholder:text-maintext outline-none w-full h-full border border-maintix rounded pl-11"
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="81445687121"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <div className="text-2xl font-bold">Payment Method</div>
            <div className="grid grid-cols-4 gap-8">
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
            <AnchorMain content="Pay your order" page="/payment-modal" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Payment;
