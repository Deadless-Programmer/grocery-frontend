import React from "react";
import { HiArrowRight } from "react-icons/hi";

const GetInTouch = () => {
  return (
    <div className=" bg-white text-white py-16 px-4 md:px-6 lg:px-12 text-center">
      <div className="bg-blue-600  rounded-2xl p-6 md:p-12 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto shadow">
        <h2 className="text-xl md:text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="mb-6 text-sm md:text-base ">
          Contact us now to enquire our plumbing services, whether you have a commercial project
          that requires support, or a domestic plumbing task that needs the attention of a trusted professional.
        </p>
        <div className="flex justify-center">
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-orange-500 hover:text-white transition flex items-center gap-2">
            Book a Professional Plumber <HiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
