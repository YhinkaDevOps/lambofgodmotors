"use client";
import React from "react";
import Link from "next/link";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Smooth Inter-State Travel",
      "Redefined Urban Transit",
      "Easy, Effortless Mobility",
    ],
    loop: 0,
  });

  return (
    <div className="hero-image min-h-screen">
      <div className="bg-text mt-24 md:mt-28">
        <div className="flex  flex-col gap-10 md:px-10">
          <div className="flex flex-col space-y-6 md:space-y-5 text-black">
            <h4 className="text-center ">
              <span className="flex flex-col gap-2 bowlby-one-regular text-3xl">
                <span className="text-white"> Welcome To</span>
                <span className="border-text text-center mx-auto"></span>
              </span>
            </h4>

            <h5 className="text-white text-3xl md:text-6xl flex gap-5 justify-center items-center">
              LAMB OF GOD MOTORS
            </h5>
            <h1
              className="text-white md:text-3xl"
              style={{
                paddingTop: "1rem",
                margin: "auto 0",
                fontWeight: "bold",
              }}
            >
              <span
                className="uppercase"
                style={{ color: "#c1121f", fontWeight: "bold" }}
              >
                {text}
              </span>
              <Cursor cursorColor="red" />
            </h1>

            <div className="flex justify-center items-center">
              <Link href="/about">
                <button className="text-white text-sm hover:opacity-70 bg-[#002244] rounded-md px-6 py-3">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
