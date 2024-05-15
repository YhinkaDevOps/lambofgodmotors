import React from 'react';
import Image from "next/image";

const Choose = () => {
  return (
    <div className="w-full min-h-[250px] py-16 [#f4f5f7] text-black">
      <div className="mx-auto max-w-[1100px] flex flex-col md:flex-row my-5 px-4 gap-10">
        <div>
          <h4 className="font-bold text-2xl text-[#444444] text-end">
            WHY CHOOSE
          </h4>
          <h2 className="text-[#444444] text-4xl font-bold text-end">
            Lamb of God Motors?
          </h2>
        </div>

        <div className="basis-[45%] flex flex-col gap-3">
          <p className="text-[#ff0000] text-xl font-bold">
            Motto: Safety and Comfort
          </p>
          <p>
            At Lamb of God Motors, we provide a diverse selection of
            contemporary travel options, allowing customers to choose the option
            that best suits their specific needs.
          </p>
          <p>
            Our committed customer care team is available around the clock,
            24/7, to provide timely solutions and support.
          </p>
        </div>

        <div className="text-center shadow-md rounded-tl-[150px] rounded-tr-[50px]">
          <Image
            className="choose-image"
            src="/assets/about-bg.jpg" // Path to the image in the `public` directory
            alt="about-bg"
            width={300}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}

export default Choose