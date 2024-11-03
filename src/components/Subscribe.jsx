import React from "react";

function Subscribe() {
  return (
    <div className="rounded-2xl flex flex-col gap-12 items-center justify-center text-center py-20 bg-secondtix">
      <div className="text-maintix text-5xl font-light">
        Subscribe to our newsletter
      </div>
      <div className="flex flex-col lg:flex-row gap-5 px-9 items-center">
        <div className="h-16 w-64">
          <input
            className="w-full h-full px-5 bg-secondtix border border-maintix rounded-md placeholder-maintix placeholder:text-lg"
            type="text"
            placeholder="First name"
          />
        </div>
        <div className="h-16 w-64">
          <input
            className="w-full h-full px-5 bg-secondtix border border-maintix rounded-md placeholder-maintix placeholder:text-lg"
            type="email"
            placeholder="Email address"
          />
        </div>
        <div className="h-16 w-64 lg:w-56">
          <button className="bg-maintix text-secondtix w-full h-full rounded-xl text-xl font-medium">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
