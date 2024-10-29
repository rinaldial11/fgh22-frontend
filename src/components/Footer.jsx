import React from "react";

function Footer() {
  return (
    <>
      <footer className="flex text-sm flex-col items-start bg-secondtix py-24 px-28 gap-12 text-white">
        <div className="flex gap-24 items-start">
          <div className="flex flex-col gap-4">
            <div className="font-bold text-3xl text-maintix">Funtastix</div>
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
              <div>EBV</div>
              <div>Cine One</div>
              <div>Hiflix</div>
            </div>
            <div className="flex flex-col gap-3.5">
              <div className="text-base text-maintix pb-4 font-bold">
                Follow us
              </div>
              <div>Funtastix Cinema id</div>
              <div>funtastix.id</div>
              <div>funtastix.id</div>
              <div>Funtastix Cinema id</div>
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
