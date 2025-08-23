import React from 'react'
import {motion} from "motion/react"
import { animation } from '../../Motions/Animation';

const AboutImage = () => {
  return (
    <motion.div
    variants={animation("left",0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{once:true,amount:0}}
    className='overflow-hidden lg:w-[40%] relative -z-1'>
      <div className='w-full lg:h-120 max-lg:h-140 max-md:h-100 max-sm:h-100 object-cover overflow-hidden
      max-lg:translate-y-[-10rem] max-sm:translate-y-[-5rem] max-md:translate-y-[-4rem]'>
        <video src='/video.mp4'
          loop
          muted
          autoPlay
          playsInline
          className='h-full w-full object-cover rounded-2xl'
        />
      </div>
      <div className='absolute top-0 right-0 h-full w-full max-lg:bg-gradient-to-b lg:bg-gradient-to-r from-black to-transparent'/>
    </motion.div>
  )
}

export default AboutImage
