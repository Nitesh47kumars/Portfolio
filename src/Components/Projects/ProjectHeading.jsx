import React from "react";

const ProjectHeading = () => {
  return (
    <div
      className="relative text-center text-4xl sm:text-5xl md:text-6xl tracking-tight text-balance md:mb-20"
      style={{
        textShadow:
          "rgba(255, 255, 255, 0.05) 0px 4px 8px, rgba(255, 255, 255, 0.4) 0px 8px 30px",
      }}
    >
      <p className="mb-3 text-xs md:text-sm uppercase tracking-widest font-normal text-black/80 dark:text-white/70">
        FEATURED CASE STUDIES
      </p>
      <p className="font-bold">
        <span>Curated </span>
        <span className="text-colorfull tracking-wide">Work</span>
      </p>
    </div>
  );
};

export default ProjectHeading;
