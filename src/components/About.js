"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full min-h-screen py-16 bg-[#f4f5f7] text-black">
      <div className="mx-auto max-w-[1100px] w-full grid sm:grid-cols-2 gap-8 px-4">
        <div className="text-center ">
          <img
            className="about-image"
            data-aos="flip-right"
            data-aos-duration="1900"
            src="/assets/about-bg.jpg" // Path to the image in the `public` directory
            alt="about-bg"
          />
        </div>
        <div className="flex flex-col gap-2 text-start text-[#666666]">
          <h4
            data-aos="fade-right"
            data-aos-duration="1500"
            className=" text-[#232323] text-3xl md:text-3xl font-bold mb-1"
          >
            ABOUT US
          </h4>
          <p
            data-aos="fade-right"
            data-aos-duration="1700"
            className="text-justify"
          >
            Welcome to Lamb of God Motors, a distinguished Nigerian inter-state
            transport division that stands as a premier provider of road
            transport solutions for individuals spanning Lagos, Warri, Benin
            City, and Onitsha.
          </p>
          <p
            data-aos="fade-right"
            data-aos-duration="1700"
            className="text-justify"
          >
            Our unwavering commitment lies in delivering dependable mobility
            services to commuters nationwide. At the heart of our operations is
            a dynamic and diverse workforce, led by a team of seasoned
            professionals with extensive expertise across various industries.
          </p>
          <p
            data-aos="fade-right"
            data-aos-duration="1700"
            className="text-justify"
          >
            With an expanding operational footprint, bolstered by a robust fleet
            and a steadfast dedication to exceptional customer service, Lamb of
            God Motors is at the forefront of the industry. We harness
            technology to optimize our operations and ensure efficiency,
            allowing us to consistently deliver outstanding services at
            competitive rates to our valued commuters. Experience the difference
            with Lamb of God Motors – where reliability, professionalism, and
            customer satisfaction converge.
          </p>
          <Link href="/about" className="mt-3">
            <button
              data-aos="fade-right"
              data-aos-duration="1770"
              className="text-white font-semibold hover:opacity-70 bg-[#002244] px-9 py-3 md:px-10 md:py-4 rounded-md"
            >
              READ MORE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
