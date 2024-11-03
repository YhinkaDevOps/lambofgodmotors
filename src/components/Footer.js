import React from "react";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className=" min-h-[200px] bg-black text-white px-4 py-10 md:py-10 border-dashed border-b-[1px] border-b-white">
      <div className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 ">
        <div className="flex flex-col md:px-4 gap-3">
          <button className="font-bold hover:opacity-70 flex text-start gap-2">
            CONTACT US
          </button>
          <div className="flex gap-3 items-start text-[#bbbbbb] text-sm">
            <button className="flex-shrink-0">
              <FaLocationDot size={20} />
            </button>

            <div>
              <p>
                KM 10, Badagry Express Road, Mile 2, Volks Busstop, Lagos State
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-start ">
            <button className="flex-shrink-0">
              <FaPhone size={20} />
            </button>

            <div className="text-[#bbbbbb] text-sm">
              <p>2348027200405</p>
              <p>2347035356518</p>
              <p>2348185769804</p>
              <p></p>
            </div>
          </div>

          <div className="flex gap-3 items-start ">
            <button className="flex-shrink-0">
              <MdEmail size={20} />
            </button>

            <div>
              <p className="text-[#bbbbbb] text-sm">
                lambofgodmotors.limited@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Contact us */}
        <div className="flex flex-col gap-2 lg:items-center">
          <h3 className="font-bold">QUICK LINKS</h3>

          {/* <span className="text-sm">
            https://chimkasimmatransportservices.vercel.app/
          </span> */}
          <Link href="/about">
            <button className="text-[#bbbbbb] text-sm hover:opacity-70 hover:underline inline-block">
              About Us
            </button>
          </Link>
          <Link href="/services">
            <button className="text-[#bbbbbb] hover:opacity-70 text-sm flex items-center flex-shrink-0 hover:underline">
              Find a Terminal
            </button>
          </Link>
          <Link href="/contact-us">
            <button className="text-[#bbbbbb] hover:opacity-70 text-sm flex items-center flex-shrink-0 hover:underline">
              Contact Us
            </button>
          </Link>
          <Link href="/terms">
            <button className="text-[#bbbbbb] hover:opacity-70 text-sm flex items-center flex-shrink-0 hover:underline">
              Terms and Conditions
            </button>
          </Link>
          {/* <Link href="/privacy-policy">
            <button className="text-[#bbbbbb] hover:opacity-70 text-sm flex items-center flex-shrink-0 hover:underline">
              Privacy Policy
            </button>
          </Link> */}
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-2 lg:items-center">
          <h1 className="font-bold">CONNECT WITH US</h1>
          <div className="flex flex-row gap-3">
            <button className="hover:opacity-70">
              <Link href="https://web.facebook.com/profile.php?id=100057420880407">
                <FaFacebook size={20} />
              </Link>
            </button>
          </div>
        </div>

        {/* Useful links */}
        <div className=" flex flex-col gap-2">
          <h1 className="font-bold">ABOUT US</h1>
          <p className="text-[#bbbbbb] text-sm">
            With an expanding operational footprint, bolstered by a robust fleet
            and a steadfast dedication to exceptional customer service, Lamb of
            God Motors is at the forefront of the industry. We harness
            technology to optimize our operations and ensure efficiency,
            allowing us to consistently deliver outstanding services at
            competitive rates to our valued commuters. Experience the difference
            with Lamb of God Motors – where reliability, professionalism, and
            customer satisfaction converge.
          </p>

          {/* <Link href="#">
            <button className="hover:opacity-70 text-sm flex items-center flex-shrink-0 hover:underline">
              Privacy policy
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
