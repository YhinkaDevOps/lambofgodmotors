"use client";
import React from "react";
import Link from "next/link";
import about from "../../../public/assets/info.gif";
import mission from "../../../public/assets/mission.gif";
import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-svh pt-[79px] ">
      <div className="about-bg text-white bg-[#f6f6f6] py-12 px-4 md:py-16 md:px-[20px] lg:px-[50px] xl:px-[130px] flex flex-col gap-7 ">
        <h6 className="text-center text-5xl font-semibold px-2">ABOUT US</h6>
        <span className="flex gap-x-3 items-center px-2">
          <Link className="hover:text-[#900C3F]" href="/">
            Home
          </Link>
          /<span className="font-semibold">About Us</span>
        </span>
      </div>

      <div className="text-[#000000] md:px-0 mx-auto max-w-[1080px] pt-16 pb-10 flex flex-col gap-4 px-4">
        <div className="about-box rounded-md py-7 px-8 flex flex-col md:flex-row gap-10">
          <div className="hidden md:block">
            <Image src={about} width={200} height={50} alt="mission" />
          </div>
          <div className="block md:hidden">
            <Image src={about} width={80} height={50} alt="mission" />
          </div>

          <div className="flex flex-col space-y-3">
            <h4 className="font-semibold text-lg">ABOUT US</h4>

            <p>
              Established on September 21, 2016, Lamb of God Motors Ltd. has
              earned a distinguished reputation as a leading name in Nigeria's
              transportation sector. Renowned for its extensive interstate
              network, the company boasts one of the country's largest fleets of
              modern, eco-friendly vehicles, connecting over 25 key destinations
              across Nigeria.
            </p>

            <p>
              Lamb of God Motors Ltd. has emerged as an industry icon, setting
              the standard for safe, enjoyable, and affordable travel, serving
              millions of passengers annually. Beyond its renowned passenger
              services, the company offers a comprehensive range of solutions to
              meet diverse customer needs. This includes value-driven same-day
              and early-next-day haulage and package delivery services to
              various locations nationwide.
            </p>

            <p>
              With a commitment to excellence and customer satisfaction, Lamb of
              God Motors Ltd. continues to redefine transportation standards in
              Nigeria, ensuring reliability, comfort, and efficiency for all its
              valued clientele.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1080px] flex flex-col md:flex-row gap-10 mb-10 px-4 md:px-0">
        <div className="about-box rounded-md py-7 px-8 basis-1/2 flex flex-col md:flex-row gap-10">
          <div className="hidden md:block">
            <Image src={mission} width={350} height={50} alt="mission" />
          </div>
          <div className="block md:hidden">
            <Image src={mission} width={80} height={50} alt="mission" />
          </div>

          <div className="flex flex-col space-y-3">
            <h4 className="font-semibold text-lg">Our Mission</h4>

            <p className="">
              A pioneering force in Nigeria's transportation industry,
              delivering safe, affordable, and environmentally friendly travel
              solutions. We strive to connect people and communities through our
              expansive interstate network while providing exceptional service
              and value to our passengers and cargo customers alike.
            </p>
          </div>
        </div>

        <div className="about-box rounded-md py-7 px-8 basis-1/2 flex flex-col md:flex-row gap-10">
          <div className="hidden md:block">
            <Image src={mission} width={350} height={50} alt="mission" />
          </div>
          <div className="block md:hidden">
            <Image src={mission} width={80} height={50} alt="mission" />
          </div>

          <div className="flex flex-col space-y-3">
            <h4 className="font-semibold text-lg">Our Vision</h4>

            <p className="">
              We aim to be acknowledged by our current and future customers as
              the epitome of excellence in the transportation sector. This
              recognition will be achieved through the adoption of innovative
              business approaches and a steadfast focus on ensuring customer
              satisfaction.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#084274] py-16 abd px-4 md:px-0">
        <h5 className="text-white font-bold text-4xl text-center mb-10">
          OUR CORE VALUES
        </h5>
        <div className="mx-auto max-w-[1080px] flex flex-col md:flex-row gap-10">
          <div className="core-values basis-1/2 p-5 flex flex-col gap-5">
            <h4 className="text-center font-bold">Synergy</h4>
            <p className="font-semibold">
              Collaboration Drives Success Our team upholds the highest
              standards of honesty, trust, and ethics in all endeavors. We
              prioritize accountability to our colleagues and customers as
              essential to achieving our goals. Our commitment to teamwork and
              unity fosters a welcoming environment for our customers.
            </p>
          </div>
          <div className="core-values basis-1/2 p-5 flex flex-col gap-5">
            <h4 className="text-center font-bold">Motto: Safety and Comfort</h4>
            <p className="font-semibold">
              Our Motto: Ensuring Safe Journeys for All. Our drivers are
              courteous, skilled, and extensively trained professionals. Our
              vehicles undergo regular inspections and maintenance to ensure
              dependable service. We remain adaptable to meet evolving customer
              demands. Our dedication to customer satisfaction extends from our
              terminals to every interaction. Through collaboration with our
              customers, we strive to surpass expectations together.
            </p>
          </div>
          <div className="core-values basis-1/2 p-5 flex flex-col gap-5">
            <h4 className="text-center font-bold">Community</h4>
            <p className="font-semibold">
              Our Connection with Society: Embracing Our History, Present, and
              Future Our company is rooted in local ownership, staffed by
              community members, and operated locally. Our dedication to the
              areas we serve drives our philanthropic efforts, including
              donations and scholarships. Our commitment to expansion will be
              fueled by continuous learning, ethical business standards, and the
              creation of employment opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
