import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-svh pt-[79px]">
      <div className="about-bg text-white bg-[#f6f6f6] py-12 px-4 md:py-16 md:px-[20px] lg:px-[50px] xl:px-[130px] flex flex-col gap-7 ">
        <h6 className="text-center text-2xl md:text-5xl font-semibold px-2 uppercase">
          Terms and Conditions
        </h6>
        <span className="flex gap-x-3 items-center px-2">
          <Link className="hover:text-[#900C3F]" href="/">
            Home
          </Link>
          /<span className="font-semibold">TERMS AND CONDITIONS</span>
        </span>
      </div>

      <div className="text-[#000000] px-4 md:px-0 mx-auto max-w-[1050px] py-16 flex flex-col gap-4">
        <h6 className="text-xl font-bold">
          Welcome to Lamb of God Motors Ltd.! These terms and conditions outline
          the rules and regulations for the use of our services.
        </h6>
        <p className="text-justify">
          By accessing this website and utilizing our services, we assume you
          accept these terms and conditions. Do not continue to use Lamb of God
          Motors Ltd. if you do not agree with all of the terms and conditions
          stated on this page.
        </p>
        <p>
          <span className="font-bold text-lg">1. Service Overview </span>
          <br />
          Lamb of God Motors Ltd. is a premier transportation provider operating
          interstate services across Nigeria. Our fleet of modern and
          environmentally friendly vehicles serves more than 25 destinations,
          ensuring safe, enjoyable, and affordable travel experiences for our
          passengers.
        </p>
        <p>
          <span className="font-bold text-lg">2. Booking and Reservations</span>
          <br />
          a. Passengers can make bookings for our scheduled passenger services
          through our website or authorized agents. <br /> b. All bookings are
          subject to availability and confirmation. <br />
          c. Customers are advised to provide accurate information during
          booking to avoid discrepancies.
        </p>
        <p>
          <span className="font-bold text-lg">3. Payment Terms</span>
          <br />
          a. All fares and charges are in Nigerian Naira (NGN) unless otherwise
          stated. <br />
          b. Additional charges may apply for extra services requested by
          passengers.
        </p>
        <p>
          <span className="font-bold text-lg">4. Cancellation and Refunds</span>
          <br />
          a. Cancellations made by passengers are subject to our cancellation
          policy. <br />
          b. Refunds, if applicable, will be processed in accordance with our
          refund policy.
        </p>
        <p>
          <span className="font-bold text-lg">
            5. Package Delivery Services
          </span>
          <br />
          a. Lamb of God Motors Ltd. offers value-priced same-day and
          early-next-day haulage and package delivery services to various
          destinations in Nigeria.
          <br /> b. Customers must ensure packages are properly packed and
          labeled to avoid damage during transit.
        </p>
        <p>
          <span className="font-bold text-lg">
            6. Responsibilities of Passengers
          </span>
          <br />
          a. Passengers must comply with safety regulations and instructions
          provided by our staff. <br />
          b. Any behavior that disrupts the comfort and safety of other
          passengers will not be tolerated.
        </p>
        <p>
          <span className="font-bold text-lg">7. Liability</span>
          <br />
          a. Lamb of God Motors Ltd. will not be liable for any loss or damage
          to personal belongings during travel. <br />
          b. We reserve the right to alter schedules or cancel services due to
          unforeseen circumstances.
        </p>
        <p>
          <span className="font-bold text-lg">8. Privacy Policy</span> <br />
          a. Our Privacy Policy governs the collection, use, and disclosure of
          personal information provided by users of our services.
        </p>
        <p>
          <span className="font-bold text-lg">9. Intellectual Property</span>{" "}
          <br />
          a. All content and materials on this website are the property of Lamb
          of God Motors Ltd. and are protected by intellectual property laws.
        </p>
        <p>
          <span className="font-bold text-lg">10. Governing Law</span> <br />
          a. These terms and conditions are governed by and construed in
          accordance with the laws of Nigeria.
        </p>
 
      </div>
    </div>
  );
};

export default page;
