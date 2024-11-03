"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isClick, setisClick] = useState(false);

  const handleClick = () => setisClick(!isClick);

  return (
    <nav className="navbar w-full fixed z-50 bg-white md:px-[20px] lg:px-[50px] xl:px-[120px]">
      <div className="mx-auto px-2 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <button className="hover:opacity-70 flex items-center flex-shrink-0">
              <img
                src="/assets/nav-logo.png"
                className="h-[40px] md:h-[65px]"
                alt="Navigation_logo"
              />
            </button>
          </Link>

          <div className="hidden md:block nav-text font-semibold">
            <ul className="nav-list flex gap-x-9 items-center text-base ">
              <li className="text-[#808080]  hover:text-[#1d1160] ">
                <Link href="/">Home</Link>
              </li>
              <li className="text-[#808080]  hover:text-[#1d1160] ">
                <Link href="/about">About</Link>
              </li>
              <li className="text-[#808080]  hover:text-[#1d1160] ">
                <Link href="/terminals">Terminals</Link>
              </li>
              <li className="text-[#808080]  hover:text-[#1d1160] ">
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center p-2 rounded-md focus:outline-none md:hidden border-2 border-[#333663]">
            <button onClick={handleClick} className="">
              {isClick ? <FaTimes size={30} /> : <FaBars size={30} />}
            </button>
          </div>
        </div>
      </div>

      <div>
        {isClick && (
          <div className="nav-bg md:hidden">
            <div className="px-2 pt-2 pb-2 space-y-1 sm:px-3">
              <ul className="list-none space-y-2">
                <li className="text-white hover:bg-white font-medium hover:text-black rounded-lg p-2">
                  <Link href="/">Home</Link>
                </li>
                <li className="text-white hover:bg-white font-medium hover:text-black rounded-lg p-2">
                  <Link href="/about">About</Link>
                </li>
                <li className="text-white hover:bg-white font-medium hover:text-black rounded-lg p-2">
                  <Link href="/terminals">Terminals</Link>
                </li>
                <li className="text-white hover:bg-white font-medium hover:text-black rounded-lg p-2">
                  <Link href="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
