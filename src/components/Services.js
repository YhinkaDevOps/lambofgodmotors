"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
    useEffect(() => {
      AOS.init();
    }, []);
  return (
    <div className="w-full min-h-[300px] py-12 bg-white text-black px-4 md:px-0">
      <div
        data-aos="flip-right"
        data-aos-duration="1900"
        className="text-center mb-10"
      >
        <p className="text-4xl font-bold inline text-black">Our Services</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-auto max-w-[1000px] p-2 ">
        <div
          data-aos="flip-right"
          data-aos-duration="1900"
          className="flex flex-col gap-3 items-center"
        >
          <img src="/assets/bus.png" className="rounded h-10 " alt="" />
          <p className="font-bold text-[20px]">Transportation</p>
          <p className="text-[#8f8f8f]">
            We provide transportation services for inter city travelers...
          </p>
        </div>
        <div
          data-aos="flip-right"
          data-aos-duration="1900"
          className="flex flex-col gap-3 items-center"
        >
          <img src="/assets/deliveryman.png" className="rounded h-10 " alt="" />
          <p className="font-bold text-[20px]">Courier Services</p>
          <p className="text-[#8f8f8f]">
            We provide Courier Services for businesses and individual...
          </p>
        </div>
        <div
          data-aos="flip-right"
          data-aos-duration="1900"
          className="flex flex-col gap-3 items-center"
        >
          <img src="/assets/truck.png" className="rounded h-10 " alt="" />
          <p className="font-bold text-[20px]">Haulage</p>
          <p className="text-[#8f8f8f]">
            We provide haulage services for businesses and individual...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
