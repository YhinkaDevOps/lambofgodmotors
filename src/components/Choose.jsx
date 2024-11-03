"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Choose = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full min-h-[250px] py-16 [#f4f5f7] text-black">
      <div className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-3 my-5 px-4 gap-10">
        <div data-aos="flip-right" data-aos-duration="1700">
          <h4 className="font-bold text-2xl text-[#444444] text-start md:text-end">
            WHY CHOOSE
          </h4>
          <h2 className="text-[#444444] text-4xl font-bold text-start md:text-end">
            Lamb of God Motors?
          </h2>
        </div>

        <div
          data-aos="flip-right"
          data-aos-duration="1790"
          className="basis-[45%] flex flex-col gap-3 text-justify"
        >
          <p className="text-[#002244] text-xl font-bold">
            Motto: Safety and Comfort
          </p>
          <p>
            At Lamb of God Motors, we provide a diverse selection of
            contemporary travel options, allowing customers to choose the option
            that best suits their specific needs.
          </p>

          <p>
            With a focus on reliability, convenience, and comfort, Lamb of God
            Motors strives to redefine the travel experience, prioritizing
            safety and personalized service in every journey. Choose Lamb of God
            Motors for an exceptional travel experience designed to get you
            where you need to go, with peace of mind and unparalleled support."
          </p>
        </div>

        <div
          data-aos="flip-right"
          data-aos-duration="1800"
          className="text-center"
        >
          <img
            className="choose-image"
            src="/assets/about-bg.jpg" // Path to the image in the `public` directory
            alt="about-bg"
          />
        </div>
      </div>
    </div>
  );
};

export default Choose;
