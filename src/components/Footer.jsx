import React from "react";
import LogoBrand from "./LogoBrand";
import Cineone from "../assets/icons/cineone.png";
import Ebv from "../assets/icons/ebv.png";
import Hiflix from "../assets/icons/hiflix.png";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";

function Footer() {
  return (
    <>
      <footer className="flex text-sm flex-col items-start bg-secondtix py-24 px-6 lg:px-28 gap-12 text-white">
        <div className="flex flex-col lg:flex-row gap-24 items-start">
          <div className="flex flex-col gap-4">
            <LogoBrand />
            <div className="text-base max-w-72">
              Stop waiting in line. Buy tickets conveniently, watch movies
              quietly.
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-12 md:gap-28">
            <div className="flex flex-col gap-3.5">
              <div className="text-base text-maintix pb-4 font-bold">
                Explore
              </div>
              <div className="flex gap-11 flex-wrap md:flex-col md:gap-3.5">
                <div>Cinemas</div>
                <div>Movies List</div>
                <div>My Ticket</div>
                <div>Notification</div>
              </div>
            </div>
            <div className="flex flex-col gap-3.5">
              <div className="text-base text-maintix pb-4 font-bold">
                Our Sponsor
              </div>
              <div className="flex gap-11 items-center md:items-start flex-wrap md:flex-col md:gap-3.5">
                <div>
                  <img src={Ebv} alt="Ebv" />
                </div>
                <div>
                  <img
                    className="brightness-0 invert"
                    src={Cineone}
                    alt="Cineone"
                  />
                </div>
                <div>
                  <img src={Hiflix} alt="Hiflix" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3.5">
              <div className="text-base text-maintix pb-4 font-bold">
                Follow us
              </div>
              <div className="flex gap-11 items-center md:items-start flex-wrap md:flex-col md:gap-3.5">
                <div className="flex items-center gap-4">
                  <FiFacebook className="text-lg" />
                  <span className="hidden md:block">Funtastix Cinema id</span>
                </div>
                <div className="flex items-center gap-4">
                  <FiInstagram className="text-lg" />
                  <span className="hidden md:block">funtastix.id</span>
                </div>
                <div className="flex items-center gap-4">
                  <FiTwitter className="text-lg" />
                  <span className="hidden md:block">funtastix.id</span>
                </div>
                <div className="flex items-center gap-4">
                  <FiYoutube className="text-lg" />
                  <span className="hidden md:block">Funtastix Cinema id</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center text-center text-white">
          © 2020 Tickitz. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
