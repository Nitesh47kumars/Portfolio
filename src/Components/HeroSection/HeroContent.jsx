import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import {Copy} from '../../UI/Icons/Copy'
import {Check} from '../../UI/Icons/Check'
import {motion, useAnimation} from "motion/react"
import { animation } from '../../Motions/Animation';
import { Link } from 'react-scroll';

const HeroContent = () => {
  const [copy, setCopy] = useState(false);
  const controls = useAnimation();

  const handleCopy = () => {
    setCopy(true);
    navigator.clipboard.writeText("niteshshah028@gmail.com");
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  };

  return (
    <div className="cursor-default w-full flex flex-col max-md:items-center md:items-start gap-4 max-md:gap-3">

      <motion.h1
        variants={animation("down",0.2)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once:true, amount: 0}}
        className=" uppercase font-bold text-[#E8AA14] leading-none md:text-[clamp(2rem,5vw,3.7rem)] max-md:text-[clamp(1.8rem,6vw,2rem)]">
          Nitesh Kumar
      </motion.h1>
      <motion.h1
        variants={animation("right",0.2)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once:true,amount:0}}
        className="uppercase font-semibold text-[#7D869C] leading-tight text-[0.7rem] md:text-[0.7rem] lg:text-[1.2rem]">
        Front-end Web Developer | Video Editor
      </motion.h1>

      <motion.div
        variants={animation("up",0.2)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once:true,amount:0}}
        className="flex flex-col md:flex-row items-center w-full gap-2 max-md:gap-3">

        <Link
        to="contact"
        smooth={600}
        offset={-100}
        className="cursor-pointer w-40 max-md:w-full flex justify-center items-center gap-1 text-[clamp(0.75rem,2vw,1rem)] font-semibold py-2 px-4 rounded-full bg-gradient-to-r from-[#8e2de2] to-[#ff6a00] hover:scale-105 transition-transform duration-300 whitespace-nowrap">
          Contact Me
          <FaArrowRight className='inline align-middle mt-0.5'/>
        </Link>

        <motion.button
          onClick={handleCopy}
          onMouseEnter={() => controls.start("animate")}
          onMouseLeave={() => controls.start("normal")}
          variants={animation("up",0.2)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{once:true,amount:0}}
          className="flex items-center md:text-[clamp(0.8rem,1vw,1rem)] cursor-pointer whitespace-nowrap">
          {copy ? <Check className='mx-2' /> : <Copy controls={controls} className='mx-2'/>}
          niteshShah028@gmail.com
        </motion.button>

      </motion.div>
    </div>
  );
};

export default HeroContent;
