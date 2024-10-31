import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Details() {
  return (
    <>
      <NavBar />
      <div className="bg-[url(/src/assets/images/spiderman-details.png)] w-screen h-[550px] bg-no-repeat bg-cover"></div>
      <main>
        <div>
          <div></div>
          <div></div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Details;
