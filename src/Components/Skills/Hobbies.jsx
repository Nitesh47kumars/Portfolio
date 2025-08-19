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
      style={{background:"linear-gradient(145deg,#333,#000 40%)"}}
      className="row-span-2 rounded bg-black text-white p-5
      shadow-[inset_0_0_50px_rgba(225,225,225,0.1)]"
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
