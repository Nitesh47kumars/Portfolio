import React from "react";

const LandingBase = () => {
  return (
    <div className="absolute w-full min-h-[120%] top-0 left-0 -z-10 bg-gradient-to-b from-[#0d0d0d] via-[#1a0033] to-black overflow-hidden">
      
      {/* ✨ Star Field */}
      <div className="absolute inset-0 z-0">
        {[
          [20, 45, 2, 70], [30, 50, 2, 70], [55, 60, 2, 80], [55, 30, 2, 70],
          [15, 10, 2, 60], [20, 15, 1, 80], [15, 60, 1, 40], [15, 75, 2, 70],
          [30, 25, 1, 50], [40, 70, 2, 65], [5, 98, 1, 100], [70, 85, 2, 70],
          [50, 15, 2, 80], [65, 45, 1, 60], [60, 75, 2, 50], [20, 95, 1, 80],
          [65, 5, 1, 40], [70, 30, 1, 55], [50, 90, 2, 70],
          [50, 50, 1, 45], [60, 20, 1, 65], [30, 60, 1, 50],
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 sm:w-[80%] max-sm:w-full h-[4px] bg-gradient-to-r from-transparent via-white to-transparent rounded-t-full shadow-[0_0_50px_white]" />

        {/* 🌫️ Soft Glow Beneath Arc */}
        <div className="absolute top-1 left-0 w-full h-full bg-gradient-to-b from-white/40 to-transparent rounded-full blur-[5rem]" />
      </div>

      {/* 🕶️ Black Fade Overlay */}
      <div className="absolute bottom-0 w-full h-[50%] bg-gradient-to-t from-black via-transparent to-transparent z-20" />
    </div>
  );
};

export default LandingBase;
