import React from "react";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" min-h-[200px] footer-bg text-white px-4 py-10 md:py-16 border-dashed border-b-[1px] border-b-white">
      <div className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 ">
        <div>
          <span className="hover:opacity-70 flex flex-col gap-2 items-start flex-shrink-0">
            <img
              src="/assets/nav-logo.png"
              className="h-[65px]"
              alt="footer_logo"
            />

            <span className="font-bold text-sm">Lamb of God Motors</span>
          </span>
        </div>

        {/* Contact us */}
        <div className="pt-2 flex flex-col gap-2">
          <h3 className="font-bold">Experience</h3>

          {/* <span className="text-sm">
            https://chimkasimmatransportservices.vercel.app/
          </span> */}
          <Link href="/contact-us">
            <button className="hover:opacity-70 text-sm flex items-center flex-shrink-0 hover:underline">
              Contact Us
            </button>
          </Link>

          <Link href="/terminals">
            <button className="hover:opacity-70 text-sm flex items-center flex-shrink-0 hover:underline">
              Find a Terminal
            </button>
          </Link>
        </div>

        {/* Useful links */}
        <div className="pt-2 flex flex-col gap-2">
          <h1 className="font-bold">Terms</h1>
          <Link href="/terms">
            <button className="hover:opacity-70 text-sm flex items-center flex-shrink-0  hover:underline">
              Terms and conditions
            </button>
          </Link>
          {/* <Link href="#">
            <button className="hover:opacity-70 text-sm flex items-center flex-shrink-0 hover:underline">
              Privacy policy
            </button>
          </Link> */}
        </div>

        {/* Social Links */}
        <div className="pt-2 flex flex-col gap-2">
          <h1 className="font-bold">Connect With Us</h1>
          <div className="flex flex-row gap-3">
            <button className="hover:opacity-70">
              <Link href="https://web.facebook.com/p/Lamb-of-God-Motors-100063705652143/?_rdc=1&_rdr">
                <FaFacebook size={20} />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
