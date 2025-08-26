import React from "react";
import { motion } from "framer-motion";

const BlackHole = () => {

  return (
    <div className="relative flex justify-center items-center h-[360px] bg-black overflow-hidden">
    <video
      autoPlay
      loop
      muted
      playsInline // for mobile autoplay support
      className="absolute top-1/2 left-1/2 -translate-1/2 h-100 object-cover rounded-lg shadow-lg rotate-12"
      src="https://media.istockphoto.com/id/1700344766/video/black-hole-clouds-high-quality-render.mp4?s=mp4-640x640-is&k=20&c=AlcovjH-CHY2fu687v4bhz-hdCpyL2QADgqoOOtk9rs="
    />
  </div>
  
  );
};

export default BlackHole;
