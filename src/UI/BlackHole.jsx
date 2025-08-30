import React from "react";
import { motion } from "framer-motion";

const BlackHole = () => {

  return (
    <div className="relative flex justify-center items-center h-[360px] overflow-hidden">
      <div className="relative w-[380px] bg-red-400 h-[380px] rounded-lg shadow-[inset_0_0_10px_white] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover -z-2 bg-transparent"
          src="https://cdn.pixabay.com/video/2016/11/15/6439-191741465_large.mp4"
        />
      </div>
    </div>

  
  );
};

export default BlackHole;
