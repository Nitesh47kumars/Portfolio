import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const HeroContent = () => {
  return (
    <div className='flex flex-col max-md:items-center md:items-start gap-2'>

        <h1 className='uppercase font-bold text-5xl text-[#E8AA14]'>Nitesh Kumar</h1>
        <h1 className='text-[#7D869C] text-sm'>Front-end Web Developer | Video Editor </h1>

        <button className="flex items-center gap-1 font-semibold py-2 px-4 border-1 rounded-full bg-gradient-to-r from-[#8e2de2] to-[#ff6a00] hover:scale-105 transition-all duration-300">
            Contact Me<FaArrowRight />
        </button>
    </div>
  )
}

export default HeroContent
