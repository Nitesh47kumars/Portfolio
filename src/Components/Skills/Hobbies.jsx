import React from 'react';
import {motion} from 'motion/react'
import {animation} from '../../Motions/Animation'

const Hobbies = () => {
  return (
    <motion.div
      variants={animation("up",0.2)}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{once:false, amount:0}}
      className='h-[300px] col-span-2 rounded-xl bg-black text-white
      shadow-[inset_-6px_-6px_60px_rgba(225,225,225,0.2)] hover:shadow-[inset_0_0px_80px_rgba(255,255,255,0.2)]'>
        <h1 className='text-center pt-10 text-xl'>Hobbies...</h1>
    </motion.div>
  );
};

export default Hobbies;
