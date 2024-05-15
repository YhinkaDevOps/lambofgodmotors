import React from "react";
// import styles from './about.module.css'
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full min-h-screen py-16 bg-[#f4f5f7] text-black">
      <div className="mx-auto max-w-[1100px] w-full grid sm:grid-cols-2 gap-8 px-4">
        <div className="text-center shadow-md rounded-tl-[150px] rounded-tr-[50px]">
          <img
            className="about-image"
            src="/assets/about-bg.jpg" // Path to the image in the `public` directory
            alt="about-bg"
          />
        </div>
        <div className="flex flex-col gap-2 p-4 text-justify">
          <p className="animate__animated animate__zoomIn">
            Welcome to Lamb of God Motors, a distinguished Nigerian inter-state
            transport division that stands as a premier provider of road
            transport solutions for individuals spanning Lagos, Warri, Benin
            City, and Onitsha.
          </p>
          <p className="animate__animated animate__zoomIn">
            Our unwavering commitment lies in delivering dependable mobility
            services to commuters nationwide. At the heart of our operations is
            a dynamic and diverse workforce, led by a team of seasoned
            professionals with extensive expertise across various industries.
          </p>
          <p className="animate__animated animate__zoomIn">
            With an expanding operational footprint, bolstered by a robust fleet
            and a steadfast dedication to exceptional customer service, Lamb of
            God Motors is at the forefront of the industry. We harness
            technology to optimize our operations and ensure efficiency,
            allowing us to consistently deliver outstanding services at
            competitive rates to our valued commuters. Experience the difference
            with Lamb of God Motors – where reliability, professionalism, and
            customer satisfaction converge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
