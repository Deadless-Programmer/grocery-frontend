import React from "react";
// import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative">
      {/* Background image */}
      <div className="h-64 sm:h-80 md:h-96 lg:h-[520px] w-full overflow-hidden  shadow-md">
        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Grocery banner"
          className="w-full h-full object-cover object-center filter saturate-105"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="text-center px-4 sm:px-6 md:px-10 text-white max-w-3xl ">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow-md">
              Fresh groceries — delivered fast
            </h1>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-white/90">
              Shop daily essentials, fresh fruits & vegetables, and pantry favorites — all at great prices.
            </p>

            <div className="mt-6 flex justify-center gap-3">
              <Link
                to="/products"
                className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition"
              >
                Browse Products
              </Link>
              <Link
                to="/users"
                className="inline-block bg-white/90 hover:bg-white text-gray-800 font-medium px-4 py-2 rounded-lg shadow-sm transition"
              >
                Manage Users
              </Link>
            </div>

            {/* Small badges / features */}
            <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
              <span className="bg-white/10 px-3 py-1 rounded-full">Fast delivery</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">Fresh produce</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">Secure payments</span>
            </div>
          </div>
        </div>
      </div>

      {/* Optional small promo strip under hero */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 -mt-6 ">
        <div className="shadow-md p-3 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-sm sm:text-base text-white">
            🎉 Free delivery on orders over <strong>৳1500</strong>
          </div>
          <div className="text-sm text-gray-600">Open: 8:00 AM — 10:00 PM</div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
