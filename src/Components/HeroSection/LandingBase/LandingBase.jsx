import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { generateStars } from "./GenerateStars";
import LandingCurve from "./LandingCurve";

const LandingBase = () => {
  const stars = useMemo(() => generateStars(150), []);

  return (
    <div className="absolute w-full min-h-[110%] top-0 left-0 -z-10 overflow-hidden bg-transparent">
      <div className="absolute inset-0 -z-1">
        {stars.map(({ top, left, size, opacity, zIndex }, i) => {
          const floatX = Math.random() * 40 - 20;
          const floatY = Math.random() * 60 - 30;
          const duration = 3 + Math.random() * 2;

          return (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                top: `${top}%`,
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                opacity: opacity / 100,
                zIndex,
              }}
              animate={{
                opacity: [0.4, 1, 0.4],
                x: [0, floatX, 0],
                y: [0, floatY, 0],
              }}
              transition={{
                duration,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      <LandingCurve />
    </div>
  );
};

export default LandingBase;
