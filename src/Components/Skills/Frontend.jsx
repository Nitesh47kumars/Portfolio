import React from 'react';
import {motion} from 'motion/react'
import {animation} from '../../Motions/Animation'

const Frontend = () => {
  const images = [
    '/HTML5_Badge.svg.png',
    '/CSS3_logo.svg.png',
    '/Unofficial_JavaScript_logo_2.svg.png',
    '/React-icon.svg.png',
    '/tailwind-icon-md.png'
  ]
  return (
    <motion.div
      variants={animation("right",0.2)}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{once:false, amount:0}}
      className='col-span-2 px-5 h-[300px] rounded-xl bg-black group
        shadow-[inset_6px_6px_60px_rgba(225,225,225,0.2)] hover:shadow-[inset_0_0px_80px_rgba(255,255,255,0.2)]'>
        <h1 className='text-center pt-10 text-white text-xl'>Frontend Skills</h1>

        <ul className='flex justify-between p-5'>
          {images.map((curr,idx)=>{
            return <li
            key={idx}
            className="h-24 w-24 rounded-[20px] border-2 p-2 transition-all duration-500 md:group-hover:-translate-y-2 md:group-hover:border-indigo-400
              hover:border-blue-600">
                <div className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] dark:border-[#5A5F661F]/10 dark:bg-[#1A1B1E]"
                  style={{'box-shadow':'rgba(165, 174, 184, 0.32) 0px 2px 1.5px 0px inset'}}>
                  <img className="h-[40px] w-[45px] rounded object-cover" src={curr} alt="img"/>
                </div>
            </li>
          })}
        </ul>
    </motion.div>
  );
};

export default Frontend;
