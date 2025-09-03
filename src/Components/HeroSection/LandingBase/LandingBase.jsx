import React, { useMemo } from "react";
import {motion} from "motion/react"
import {animation} from "../../../Motions/Animation"
import {generateStars} from "./GenerateStars"
import LandingCurve from "./LandingCurve";

const LandingBase = () => {
  const stars = useMemo(()=>generateStars(150),[]);
  return (
    <div className="absolute w-full min-h-[110%] top-0 left-0 -z-10 overflow-hidden">
      
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

      <LandingCurve/>

    </div>
  );
};

export default LandingBase;
