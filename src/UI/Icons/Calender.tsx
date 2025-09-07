"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";
import React from "react";

interface CalenderProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
  isHovering?: boolean; // <-- receives hover state from parent
}

const frameVariants: Variants = {
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: [1, 0.8, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const numberVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.3,
    y: -10,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.3,
    y: 10,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

const Calender = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  isHovering = false,
  ...props
}: CalenderProps) => {
  const controls = useAnimation();
  const [currentNumber, setCurrentNumber] = React.useState(1);

  React.useEffect(() => {
    let interval: number;

    if (isHovering && currentNumber < 10) {
      controls.start("animate");
      interval = setInterval(() => {
        setCurrentNumber((prev) => (prev >= 10 ? 10 : prev + 1));
      }, 400);
    } else {
      controls.start("normal");
      setCurrentNumber(1);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovering, currentNumber, controls]);

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
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
        <motion.rect
          x="3"
          y="4"
          width="18"
          height="18"
          rx="2"
          variants={frameVariants}
          animate={controls}
          initial="normal"
        />
        <path d="M16 2v4" />
        <path d="M8 2v4" />
        <path d="M3 10h18" />
        <motion.text
          x="12"
          y="18"
          fontSize="8"
          textAnchor="middle"
          fill="currentColor"
          stroke="none"
          key={currentNumber}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={numberVariants}
        >
          {currentNumber}
        </motion.text>
      </svg>
    </div>
  );
};

export { Calender };
