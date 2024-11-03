"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full min-h-[500px] py-10 bg-[#f4f5f7] text-black ">
      <div
        data-aos="flip-right"
        data-aos-duration="1900"
        className="text-center mb-10"
      >
        <p className="text-4xl text-[#71717a] mt-3">
          What our customers say about us
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-auto max-w-[1100px] p-2 ">
        <div className="bg-[#002244] shadow-lg group container rounded-md flex justify-center items-center mx-auto p-4">
          <div data-aos="flip-right" data-aos-duration="1900">
            <p className="text-justify text-white">
              "As a frequent traveler, I've experienced various transportation
              services, but Chimkasimma Transport Services stands out. Their
              commitment to customer satisfaction is evident in the
              well-maintained vehicles, friendly drivers, and efficient booking
              system. Whether it's a short intra-state trip or a long
              inter-state journey, Chimkasimma consistently delivers quality
              service.
            </p>
            <p className="mt-4 text-center font-semibold text-white">
              Emeka Madueke
            </p>
          </div>
        </div>
        <div className="bg-[#002244] shadow-lg  group container rounded-md flex justify-center items-center mx-auto p-4">
          <div data-aos="flip-right" data-aos-duration="1900">
            <p className="text-justify text-white">
              "As a frequent traveler between Warri and Benin City, I rely on
              Lamb of God Motors for their efficient and punctual services.
              Their dedication to quality and their use of technology make
              booking and traveling with them a breeze. I trust Lamb of God
              Motors for a smooth and enjoyable travel experience every time."
            </p>
            <p className="mt-4 text-center font-semibold text-white">
              Abiodun Animashaun
            </p>
          </div>
        </div>
        <div className="bg-[#002244] shadow-lg  group container rounded-md flex justify-center items-center mx-auto p-4">
          <div data-aos="flip-right" data-aos-duration="1900">
            <p className="text-justify text-white">
              "Lamb of God Motors has been my go-to transport service for
              inter-state travel in Nigeria. Their commitment to reliability and
              exceptional customer service is unmatched. I always feel safe and
              comfortable during my journeys with them. Highly recommended!"
            </p>
            <p className="mt-4 text-center font-semibold text-white">
              Temiloluwa Victoria
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
