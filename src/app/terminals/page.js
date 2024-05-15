"use client";
import React from "react";
import Link from "next/link";
import ModalForm from "../../components/Modal"
import {
  Textarea,
  FormErrorMessage,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  useDisclosure,
  Input,
} from "@chakra-ui/react";

const Terminal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const initialRef = React.useRef(null);

  return (
    <div className="min-h-screen bg-[#f4f5f7] px-2 md:px-0 pt-20 pb-16">
      <div className="about-bg text-white bg-[#f6f6f6] py-12 px-4 md:py-16 md:px-[20px] lg:px-[50px] xl:px-[130px] flex flex-col gap-7 ">
        <h6 className="text-center text-5xl font-semibold px-2">TERMINAL</h6>
        <span className="flex gap-x-3 items-center px-2">
          <Link className="hover:text-[#900C3F]" href="/">
            Home
          </Link>
          /<span className="font-semibold">Terminal</span>
        </span>
      </div>

      {/* Aba Terminal  */}
      <div className="border-animate__animated animate__fadeInLeft md:border-t md:border-b border-black mt-10 mx-auto max-w-[900px] w-full grid sm:grid-cols-2 gap-2 p-1 md:p-4 text-white">
        <div className="hidden md:block">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4894553503186!2d3.2095465736493427!3d6.4595008239065255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b86f36c73e4e1%3A0x1b8a0e2068cb014f!2sVolks%20Bus%20Stop!5e0!3m2!1sen!2sng!4v1715731120543!5m2!1sen!2sng"
            width="400"
            height="300"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className=" terminal-bg rounded-md p-10 md:p-5 flex flex-col gap-2 ">
          <h5 className="text-black font-bold text-2xl">Mile 2 Terminal</h5>
          <p className="text-black font-semibold">
            KM 10, Badagry Express Road, Mile 2, Volks Busstop, Lagos State
          </p>
          <p className=" text-[#333333]">08027200405</p>
          <p className=" text-[#333333]">07035356518</p>
          <p className=" text-[#333333]">08067197584</p>
          <p className=" text-[#333333]">08122912129</p>
        </div>
      </div>

      {/* Lagos Terminal */}
      <div className="animate__animated animate__fadeInLeft md:border-t md:border-b border-black mt-5 md:mt-10 mx-auto max-w-[900px] w-full grid sm:grid-cols-2 gap-2 p-1 md:p-4 text-white">
        <div className="hidden md:block">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.4630647162944!2d5.617897467832687!3d6.334007711343392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d3a064900d6d%3A0xab2fa08226fa6738!2sRing%20Road%20Bus%20Terminal!5e0!3m2!1sen!2sng!4v1715731257096!5m2!1sen!2sng"
            width="400"
            height="300"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className=" terminal-bg rounded-md p-10 md:p-5 flex flex-col gap-2 ">
          <h5 className="text-black font-bold text-2xl">Benin City Terminal</h5>
          <p className="text-black font-semibold">
            Ring Road, Opp. Oba Market, Benin City, Edo State
          </p>
          <p className=" text-[#333333]">08185769804</p>
          <p className=" text-[#333333]">07060658643</p>
        </div>
      </div>

      {/* Abuja Terminal */}
      <div className="animate__animated animate__fadeInLeft md:border-t md:border-b border-black mt-5 md:mt-10 mx-auto max-w-[900px] w-full grid sm:grid-cols-2 gap-2 p-1 md:p-4 text-white">
        <div className="hidden md:block">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.9421462454743!2d6.745860867822047!3d6.138475013951003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104393338f8a024b%3A0x43f6bc8ced29041!2sGod%20Is%20Good%20Motors%20Nigeria%20Limited!5e0!3m2!1sen!2sng!4v1715731512438!5m2!1sen!2sng"
            width="400"
            height="300"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className=" terminal-bg rounded-md p-10 md:p-5 flex flex-col gap-2 ">
          <h5 className="text-black font-bold text-2xl">Asaba Terminal</h5>
          <p className="text-black font-semibold">
            Opp. God is Good Motors, Before the Onitsha Head Bridge, Asaba,
            Delta State
          </p>
          <p className=" text-[#333333]">08132666710</p>
          <p className=" text-[#333333]">08024008830</p>
        </div>
      </div>

      {/* Enugu Terminal */}
      <div className="animate__animated animate__fadeInLeft md:border-t md:border-b border-black mt-5 md:mt-10 mx-auto max-w-[900px] w-full grid sm:grid-cols-2 gap-2 p-1 md:p-4 text-white">
        <div className="hidden md:block">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.108211301131!2d5.771873796599013!3d5.527689563200889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1041b3fce5706acb%3A0xd1e376d64c2038e2!2sEdewor%20Shopping%20Center!5e0!3m2!1sen!2sng!4v1715731759479!5m2!1sen!2sng"
            width="400"
            height="300"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className=" terminal-bg rounded-md p-10 md:p-5 flex flex-col gap-2 ">
          <h5 className="text-black font-bold text-2xl">Warri Terminal</h5>
          <p className="text-black font-semibold">
            Edewor Complex by Enere Junction, Warri, Delta State
          </p>
          <p className=" text-[#333333]">07015235913</p>
          <p className=" text-[#333333]">09030883728</p>
          <p className=" text-[#333333]">08038893954</p>
          <p className=" text-[#333333]">08033531681</p>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
