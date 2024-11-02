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
      <footer className="flex text-sm flex-col items-start bg-secondtix py-24 px-28 gap-12 text-white">
        <div className="flex gap-24 items-start">
          <div className="flex flex-col gap-4">
            <LogoBrand />
            <div className="text-base max-w-72">
              Stop waiting in line. Buy tickets conveniently, watch movies
              quietly.
            </div>
          </div>
          <div className="flex gap-28">
            <div className="flex flex-col gap-3.5">
              <div className="text-base text-maintix pb-4 font-bold">
                Explore
              </div>
              <div>Cinemas</div>
              <div>Movies List</div>
              <div>My Ticket</div>
              <div>Notification</div>
            </div>
            <div className="flex flex-col gap-3.5">
              <div className="text-base text-maintix pb-4 font-bold">
                Our Sponsor
              </div>
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
            <div className="flex flex-col gap-3.5">
              <div className="text-base text-maintix pb-4 font-bold">
                Follow us
              </div>
              <div className="flex items-center gap-4">
                <FiFacebook className="text-lg" />
                Funtastix Cinema id
              </div>
              <div className="flex items-center gap-4">
                <FiInstagram className="text-lg" />
                funtastix.id
              </div>
              <div className="flex items-center gap-4">
                <FiTwitter className="text-lg" />
                funtastix.id
              </div>
              <div className="flex items-center gap-4">
                <FiYoutube className="text-lg" />
                Funtastix Cinema id
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
