import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const NavbarBtn = () => {
  return (
    <div>
      <button className="flex items-center gap-1 font-bold py-2 px-4 border-1 rounded-full bg-gradient-to-r from-[#8e2de2] to-[#ff6a00] hover:scale-105 transition-all duration-300
        max-md:text-sm md:text-md max-sm:px-3">
        Hire Me
        <FaArrowRight />
      </button>
    </div>
  );
};

export default NavbarBtn;
