import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { IoCopy } from "react-icons/io5";

const HeroContent = () => {
  return (
    <div className="w-full flex flex-col max-md:items-center md:items-start gap-4 max-md:gap-3">

      <h1 className="uppercase font-bold text-[#E8AA14] leading-none md:text-[clamp(2rem,5vw,3.7rem)] max-md:text-[clamp(1.5rem,6vw,2rem)]">
        Nitesh Kumar
      </h1>
      <h1 className="uppercase font-semibold text-[#7D869C] leading-tight md:text-[clamp(0.8rem,2vw,1.4rem)] max-md:text-[clamp(0.8rem,3vw,1.5rem)]">
        Front-end Web Developer | Video Editor
      </h1>

      <div className="flex flex-col md:flex-row items-center w-full gap-3">

        <button className="w-full md:w-auto flex items-center justify-center gap-2 text-[clamp(0.75rem,2vw,1rem)] font-semibold py-2 px-6 rounded-full bg-gradient-to-r from-[#8e2de2] to-[#ff6a00] hover:scale-105 transition-transform duration-300">
          Contact Me
          <FaArrowRight />
        </button>

        <p className="flex items-center gap-1 text-[clamp(0.8rem,1vw,1rem)] cursor-pointer whitespace-nowrap">
          <IoCopy />
          niteshShah028@gmail.com
        </p>

      </div>
    </div>
  );
};

export default HeroContent;
