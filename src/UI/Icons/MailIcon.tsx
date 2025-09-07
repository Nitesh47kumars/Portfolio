"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";
import React from "react";

interface MailIconProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
  isHovering?: boolean;
}

// Envelope bounce animation
const envelopeVariants: Variants = {
  normal: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

// Paper slide-out animation
const paperVariants: Variants = {
  normal: { y: 8, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

// Optional flap lift
const flapVariants: Variants = {
  normal: { rotateX: 0 },
  animate: {
    rotateX: -25,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const MailIcon = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  isHovering = false,
  ...props
}: MailIconProps) => {
  const envelopeControls = useAnimation();
  const flapControls = useAnimation();
  const paperControls = useAnimation();

  React.useEffect(() => {
    if (isHovering) {
      envelopeControls.start("animate");
      flapControls.start("animate");
      paperControls.start("animate");
    } else {
      envelopeControls.start("normal");
      flapControls.start("normal");
      paperControls.start("normal");
    }
  }, [isHovering]);

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
        {/* Paper sliding out */}
        <motion.rect
          x="6"
          y="0"
          width="12"
          height="8"
          rx="1"
          fill={stroke}
          stroke="none"
          variants={paperVariants}
          animate={paperControls}
          fillOpacity={0.8}
          initial="normal"
        />

        {/* Envelope base */}
        <motion.g
          variants={envelopeVariants}
          animate={envelopeControls}
          initial="normal"
        >
          <rect x="3" y="4" width="18" height="16" rx="2" />
        </motion.g>

        {/* Envelope flap */}
        <motion.path
          d="M3 6l9 6 9-6"
          variants={flapVariants}
          animate={flapControls}
          initial="normal"
          style={{
            transformOrigin: "center top",
          }}
        />
      </svg>
    </div>
  );
};

export { MailIcon };
