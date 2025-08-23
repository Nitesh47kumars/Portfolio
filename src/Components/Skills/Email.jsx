import React from "react";
import {Copy} from "../../UI/Icon"
import { motion } from "motion/react";
import { animation } from "../../Motions/Animation";

const Email = () => {
  return (
    <motion.div
      variants={animation("scale", 0.2)}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{once:true,amount:0}}
      className="h-[200px] rounded relative transition-shadow duration-500
      shadow-[inset_0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[inset_0_0px_80px_rgba(0,0,0,0.6)] overflow-hidden"
    >
      <div className="absolute top-0 left-0 z-[-1] ">
        <img
          className="h-full w-full blur-[1px]"
          src="/Email-bg.avif"
        />
      </div>
      <div className="h-full flex flex-col items-center justify-around">
        <motion.h1
        variants={animation("", 0.6)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once:true,amount:0}}
        className="text-white w-[90%] text-[1.3rem]"
        style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.8)" }}>
          Feel free to reach out for collaborations, freelance work, or just to
          say hello!
        </motion.h1>
        <motion.button
        variants={animation("", 0.6)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once:true,amount:0}}
          type="button"
          style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.8)" }}
          className="items-center gap-2 py-3 text-base text-black dark:text-white/75 outline-hidden transition-all duration-500 cursor-pointer hover:text-black/60 dark:hover:text-white/100 flex w-[80%] justify-center rounded-md bg-white/10 px-8 shadow-[inset_0_3px_10px_#ffffff3f]
          backdrop-blur-[1px] font-bold tracking-wide text-shadow-lg"
          >
          <Copy className='h-5 p-0'/>
          niteshshah@gmail.com
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Email;
