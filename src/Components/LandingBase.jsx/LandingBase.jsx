import React from "react";

const LandingBase = () => {
  return (
    <div className="absolute w-full min-h-[120%] top-0 left-0 -z-10 overflow-hidden"
    style={{
      'background': 'linear-gradient(to bottom,#0d0d0d 30%,#1a0033,#000000'
    }}
    >
      
      {/* ✨ Star Field */}
      <div className="absolute inset-0 z-0">
        {[
          // Upper Stars
          [20, 45, 1, 70], [34, 53, 1, 70], [48, 61, 1, 20], [55, 30, 1, 70], [61, 60, 1, 60],
          [13, 5, 1, 60], [21, 17, 1, 80], [13, 56, 1, 40], [15, 73, 1, 70], [18, 31, 1, 100],
          // Middle Stars
          [30, 25, 1, 50], [40, 70, 1, 65], [5, 98, 1, 100], [68, 84, 1, 70], [61, 97, 2, 100],
          [50, 15, 1, 80], [65, 45, 1, 60], [60, 75, 1, 50], [20, 95, 1, 80], [53, 50, 1, 50],
          // Lower Stas
          [65, 5, 1, 40], [70, 30, 1, 55], [50, 90, 1, 70], [36, 97, 1, 90],
          [43, 44, 1, 45], [60, 20, 1, 65], [32, 64, 1, 100], [37, 3, 1, 80],
        ].map(([top, left, size, opacity], i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full z-20 animate-pulse"
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
        <div className="absolute top-5 max-md:top-13 left-1/2 -translate-x-1/2 sm:w-[80%] max-sm:w-full h-[4px] bg-gradient-to-r from-transparent via-white to-transparent rounded-t-full shadow-[0_0_50px_white]" />

        {/* 🌫️ Soft Glow Beneath Arc */}
        <div className="absolute top-1 left-0 w-full h-full bg-gradient-to-b from-white/40 to-transparent rounded-full blur-[5rem]" />
      </div>

      {/* 🕶️ Black Fade Overlay */}
      <div className="absolute bottom-0 w-full h-[50%] bg-gradient-to-t from-black via-transparent to-transparent z-20" />
    </div>
  );
};

export default LandingBase;
