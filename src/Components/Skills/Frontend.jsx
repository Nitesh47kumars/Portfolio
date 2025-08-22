import React from 'react';
import { motion } from 'motion/react';
import { animation } from '../../Motions/Animation';

const lang = [
  { name: "HTML", icon: "/Frontend/HTML5_Badge.svg.png" },
  { name: "CSS", icon: "/Frontend/CSS3_logo.svg.png" },
  { name: "JavaScript", icon: "/Frontend/Unofficial_JavaScript_logo_2.svg.png" },
  { name: "React", icon: "/Frontend/React-icon.svg.png" },
  { name: "TailwindCSS", icon: "/Frontend/tailwind-icon-md.png"},
];

const getItemStyle = (index) => {
  const sizes = ["h-20 w-20", "h-22 w-22", "h-24 w-24"];
  const delays = ["delay-[200ms]", "delay-[100ms]", "delay-[0ms]"];

  if (index === 2) return { size: sizes[2], delay: delays[2] }; // Middle
  if (index === 1 || index === 3) return { size: sizes[1], delay: delays[1] }; // Adjacent
  return { size: sizes[0], delay: delays[0] }; // Outer
};

const Frontend = () => {
  return (
    <motion.div
      variants={animation("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      style={{background:"linear-gradient(145deg,#444,#000 60%)"}}

      className="col-span-2 p-5 h-[200px] rounded bg-black group transition-shadow duration-500
        shadow-[inset_0_0_40px_rgba(180,180,180,0.1)]"
    >
      <motion.h1
        variants={animation("scale", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-center text-white text-xl text-shadow-[1px_1px_10px_white]"
      >
        Frontend Skills
      </motion.h1>

      <ul className="flex justify-between items-center p-5">
        {lang.map((curr, idx) => {
          const { size, delay } = getItemStyle(idx);

          return (
            <motion.li
              key={idx}
              variants={animation("scale", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              className="flex flex-col items-center"
            >
              <div
                className={`${size} ${delay} rounded-[20px] border-2 border-[#A5AEB81F] p-2
                  transition-all duration-500 md:group-hover:-translate-y-2
                  md:group-hover:border-indigo-400 hover:border-blue-600`}
              >
                <div
                  className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10
                    bg-[#EDEEF0] dark:border-[#5A5F661F]/10 dark:bg-[#1A1B1E]"
                  style={{
                    boxShadow:
                      "rgba(165, 174, 184, 0.32) 0px 2px 1.5px 0px inset",
                  }}
                >
                  <img
                    className="h-[40px] w-[45px] object-cover"
                    src={curr.icon}
                    alt={`${curr.name} icon`}
                  />
                </div>
              </div>

              <h1
                className={`text-white ${delay} opacity-0 -translate-y-1
                  group-hover:opacity-100 transition-all duration-500`}
              >
                {curr.name}
              </h1>
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default Frontend;
