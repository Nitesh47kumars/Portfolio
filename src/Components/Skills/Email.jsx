import React from "react";
import { motion } from "motion/react";
import { animation } from "../../Motions/Animation";

const Email = () => {
  return (
    <motion.div
      variants={animation("scale", 0.2)}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className="h-[200px] rounded
      shadow-[inset_0_0_60px_rgba(225,225,225,0.2)] hover:shadow-[inset_0_0px_80px_rgba(255,255,255,0.2)] overflow-hidden"
    >
      {/* <div>
        <img
          className="h-full w-full"
          src="https://png.pngtree.com/png-clipart/20200401/original/pngtree-white-and-black-torn-paper-effect-png-image_5332084.jpg"
        />
      </div> */}
      <div className="h-full flex flex-col items-center justify-around">
        <h1 className="text-white w-[90%] text-[1.3rem]">
          Feel free to reach out for collaborations, freelance work, or just to
          say hello!
        </h1>
        <button
          type="button"
          className="items-center gap-2 py-3 text-base font-light text-black dark:text-white/75 outline-hidden transition-all duration-300 cursor-pointer hover:text-black/60 dark:hover:text-white/90 flex w-[80%] justify-center rounded-md bg-white/10 px-8 shadow-[inset_0_3px_10px_#ffffff3f]"
          >
          niteshshah@gmail.com
        </button>
      </div>
    </motion.div>
  );
};

export default Email;
