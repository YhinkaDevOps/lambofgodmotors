import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero-image min-h-screen">
      <div className="bg-text mt-28">
        <div className="flex flex-col gap-8 text-center">
          <h4 className="animate__animated animate__backInLeft text-4xl md:text-6xl font-bold leading-[70px] font-sans">
            Efficient urban commuting reimagined
          </h4>

          <p className="animate__animated animate__backInRight font-sans text-xl">
            Welcome to LOGM, your gateway to seamless inter-state transport
            services, connecting commuters across Nigeria with effortless
            mobility
          </p>
          <div className="animate__animated animate__animated">
            <button className=" text-white font-medium text-sm hover:opacity-70 bg-[#4175fc] rounded-l-[100px] rounded-r-[100px] px-8 py-3 transition duration-300 ease-in-out">
              <Link href="/about">Learn More</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
