import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";

const NavbarBtn = () => {
  return (
    <div className=''>
      <button className='flex items-center gap-1 font-semibold py-2 px-4 border-1 rounded-full bg-gradient-to-r from-[#8e2de2] to-[#ff6a00] hover:scale-105 transition-all duration-200 '>
        Hire Me<FaArrowRight />
      </button>
    </div>
  )
}

export default NavbarBtn
