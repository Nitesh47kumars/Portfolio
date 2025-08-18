import React from "react";
import { motion } from "motion/react";
import { animation } from "../../Motions/Animation";
import HobbyCard from "../../UI/HobbyCard";

const Hobbies = () => {
  return (
    <motion.div
      variants={animation("left", 0.2)}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className="row-span-2 rounded bg-black text-white p-5
      shadow-[inset_-6px_-6px_60px_rgba(225,225,225,0.2)] hover:shadow-[inset_0_0px_80px_rgba(255,255,255,0.2)]"
    >
      <h1 className="text-center text-white text-xl text-shadow-[1px_1px_10px_white]">
        Hobbies...
      </h1>
      <div>
        <HobbyCard/>
      </div>
    </motion.div>
  );
};

export default Hobbies;
