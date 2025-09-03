import React from 'react';
import { motion } from 'framer-motion';

const LandingCurve = () => {
  return (
    <div
      className="absolute bottom-0 left-1/2 z-0 h-[500px] w-[1200px] -translate-x-1/2 transform overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 30%, black 70%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 30%, black 70%, transparent)',
      }}
    >
      <motion.div
        className="absolute blur-[80px] bottom-[30px] left-1/2 h-[290px] w-[1100px] -translate-x-1/2 transform overflow-hidden bg-[radial-gradient(50%_50%_at_50%_50%,#5506ba_0%,rgba(10,10,10,0)_100%)]"
        animate={{ x: [-150, 150, -150] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: 'center' }}
      />

      <div
        className="absolute right-[-432px] bottom-[-753px] left-[-454px] h-[955px] rounded-[100%] bg-gradient-to-b from-white to-transparent"
      />

      <div
        className="absolute right-[-510px] bottom-[-759px] left-[-532px] aspect-[2.346820809248555/1] h-[956px] rounded-[100%] bg-black shadow-[inset_0_2px_20px_#fff,0_-10px_50px_1px_#ffffff7d]"
        style={{
          boxShadow:
            'inset 0px 2px 20.406px #ffffff, 0px -10px 50.406px 1px rgba(255, 255, 255, 0.498)',
        }}
      />
    </div>
  );
};

export default LandingCurve;
