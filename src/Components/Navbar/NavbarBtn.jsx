import React, { useState } from "react";
import { Download } from "../../UI/Icons/Download";

const NavbarBtn = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a href="/Nitesh_Resume.pdf" download
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex items-center gap-1 font-bold py-2 px-4 border-1 rounded-full bg-gradient-to-r from-[#8e2de2] to-[#ff6a00] hover:scale-105 transition-all duration-300
        max-md:text-sm md:text-md max-sm:px-3"
    >
      Resume
      <Download isHovered={isHovered} />
    </a>
  );
};

export default NavbarBtn;
