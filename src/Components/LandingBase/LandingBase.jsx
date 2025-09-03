import React, { useMemo } from "react";
import {motion} from "motion/react"
import {animation} from "../../Motions/Animation"
import {generateStars} from "./GenerateStars"

const LandingBase = () => {
  const stars = useMemo(()=>generateStars(150),[]);
  return (
    <div className="absolute w-full min-h-[120%] top-0 left-0 -z-10 overflow-hidden"
    >
      
      {/* ✨ Star Field */}
      <div className="absolute inset-0 -z-1">
        {stars.map(([top, left, size, opacity], i) => (
          <motion.div
            variants={animation("up",0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{once:true}}
            animate={{
              opacity: [0.4, 1, 0.4],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              opacity: opacity / 100,
            }}
          />
        ))}
      </div>

      {/* 🌗 Glowing Curved Horizon */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[250px] rounded-full bg-transparent">

        {/* 🌟 Bright Arc Line */}
        <div className="relative w-full flex justify-center">
          <div className="absolute top-8 max-md:top-11 left-1/2 -translate-x-1/2 w-[90%] sm:w-[80%] h-[4px] bg-gradient-to-r from-transparent via-white to-transparent rounded-full" />
        </div>

        {/* 🌫️ Soft Glow Beneath Arc */}
        <div className="absolute top-1 left-[50%] translate-x-[-50%] w-[110%] h-[50%] bg-gradient-to-b from-white/40 to-transparent rounded-t-full blur-[5rem]" />
      </div>

      {/* 🕶️ Black Fade Overlay */}
      <div className="absolute bottom-0 w-full h-[50%] bg-gradient-to-t from-black via-transparent to-transparent z-20" />
    </div>
  );
};

export default LandingBase;
