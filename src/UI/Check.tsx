"use client";

import { motion, useAnimation, type Variants } from "framer-motion";
import React, { useEffect } from "react";

interface CheckProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
  controls?: any; // you can make this AnimationControls if you want strict typing
}

const checkVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
  animate: {
    pathLength: [1, 0.8, 1],
    opacity: [1, 0.8, 1],
    rotateY: [0, 180, 360],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const Check = ({
  width = 24,
  height = 24,
  strokeWidth = 2,
  stroke = "#ffffff",
  controls,
  ...props
}: CheckProps) => {
  // If controls are not provided, create our own
  const internalControls = useAnimation();

  // Use external controls if provided, otherwise internal
  const animationControls = controls ?? internalControls;

  // For demo, let's animate on mount:
  useEffect(() => {
    animationControls.start("animate");
  }, [animationControls]);

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M20 6 9 17l-5-5"
          variants={checkVariants}
          initial="normal"
          animate={animationControls}
          style={{ transformOrigin: "center" }}
        />
      </svg>
    </div>
  );
};

export { Check };
