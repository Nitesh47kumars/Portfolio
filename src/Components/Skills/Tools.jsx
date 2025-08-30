import React from "react";
import { motion } from "motion/react";
import { animation } from "../../Motions/Animation";

const icons = [
  { name: "Figma", icon: "/ToolsIcon/8096528.png" },
  { name: "Git", icon: "/ToolsIcon/Git_icon.svg.png" },
  { name: "Framer-Motion", icon: "/ToolsIcon/framer-motion.svg" },
  { name: "Github", icon: "/ToolsIcon/github.svg" },
  { name: "Lenis-JS", icon: "/ToolsIcon/lenis-new-smooth-scroll-library.png" },
];

const Tools = () => {
  const motionProps = {
    initial: "hidden",
    whileInView: "show",
    viewport: { once: true, amount: 0 },
  };

  return (
    <motion.div
      variants={animation("down", 0.2)}
      {...motionProps}
      style={{ background: "linear-gradient(145deg,#444,#000 60%)" }}
      className="relative md:col-span-6 lg:col-span-4 p-5 md:h-[200px] max-sm:h-[265px] rounded bg-black group transition-shadow duration-500 shadow-[inset_0_0_40px_rgba(180,180,180,0.1)]"
    >
      <motion.h1
        variants={animation("scale", 0.2)}
        {...motionProps}
        className="text-center text-white text-xl text-shadow-[1px_1px_10px_white]"
      >
        Tools
      </motion.h1>

      <ul className="flex justify-between items-center h-full sm:p-5 max-sm:py-4 max-sm:pb-5 max-sm:grid max-sm:grid-cols-3">
        {icons.map(({ name, icon }, idx) => {
          // Determine icon size and delay based on index
          const sizeClass = idx === 2 ? "h-24 w-24" : idx === 1 || idx === 3 ? "h-22 w-22" : "h-20 w-20";
          const delayClass = idx === 2 ? "delay-[0ms]" : idx === 1 || idx === 3 ? "delay-[100ms]" : "delay-[200ms]";

          return (
            <motion.li
              key={name}
              variants={animation("scale", 0.2)}
              {...motionProps}
              className="flex flex-col items-center"
            >
              <div
                className={`${sizeClass} max-md:h-15 max-md:w-15 ${delayClass} rounded-[15px] max-md:rounded-[10px] border-2 border-[#A5AEB81F] p-2 max-md:p-1 transition-all duration-500 md:group-hover:-translate-y-2 md:group-hover:border-indigo-400 hover:border-blue-600`}
              >
                <div
                  className="grid h-full place-items-center rounded-[10px] max-md:rounded-[8px] border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] dark:border-[#5A5F661F]/10 dark:bg-[#1A1B1E]"
                  style={{
                    boxShadow: "rgba(165, 174, 184, 0.32) 0px 2px 1.5px 0px inset",
                  }}
                >
                  <img
                    className="h-[60%] w-[68%] object-cover"
                    src={icon}
                    alt={`${name} icon`}
                  />
                </div>
              </div>
              <h1
                className={`text-white ${delayClass} md:opacity-0 -translate-y-1 group-hover:opacity-100 max-md:text-[12px] max-md:translate-y-1.5 transition-all duration-500`}
              >
                {name}
              </h1>
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default Tools;
