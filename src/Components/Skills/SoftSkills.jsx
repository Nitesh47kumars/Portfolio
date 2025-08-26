import React from "react";
import { motion } from "motion/react";
import { animation } from "../../Motions/Animation";
import Card from "../../UI/Card";

const SoftSkills = () => {
  return (
    <motion.div
      variants={animation("right", 0.4)}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{once:true,amount:0}}
      style={{background:"linear-gradient(145deg,#333,#000 40%)"}}
      className="w-full md:col-span-3 lg:col-span-2 md:row-span-2 max-md:row-span-1 h-full rounded p-5
      shadow-[inset_0_0_50px_rgba(225,225,225,0.1)]"
    >
      <motion.h1
      variants={animation("scale", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{once:true,amount:0}}
      className="text-center text-white mb-3 text-xl text-shadow-[1px_1px_10px_white]">
        Soft Skills
      </motion.h1>
      <div className="flex flex-col items-center justify-center w-full">
        <Card />
      </div>
    </motion.div>
  );
};

export default SoftSkills;
