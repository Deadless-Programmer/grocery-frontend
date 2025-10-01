import React from "react";
import { HiArrowRight } from "react-icons/hi";

const GetInTouch = () => {
  return (
    <div className="bg-white text-white py-16 px-4 md:px-6 lg:px-12 text-center">
      <div className="bg-green-600 rounded-2xl p-6 md:p-12 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto shadow">
        <h2 className="text-xl md:text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="mb-6 text-sm md:text-base">
          Have questions about our fresh groceries or delivery options? Contact us now to place an order, inquire about our organic products, or get assistance with your online grocery shopping.
        </p>
        <div className="flex justify-center">
          <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded shadow hover:bg-green-700 hover:text-white transition flex items-center gap-2">
            Order Fresh Groceries <HiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
