import React from "react";

const AboutSection = () => (
  <section className="space-y-4 group">
    <h3 className="font-bold text-lg font-serif relative inline-block">
      Nitesh Kumar .
      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white transition-all duration-500 ease-out group-hover:w-full"></span>
    </h3>
    <p className="text-gray-400 text-sm pr-12 sm:pr-0 transition-all duration-300 ease-out group-hover:text-gray-300">
      Crafting digital{" "}
      <strong className="text-white opacity-25 transition-opacity duration-500 ease-out group-hover:opacity-100">
        ecstasies
      </strong>{" "}
      with code, creativity (& a bit of caffeine of course!).
      <br />
      <br />
      Thanks for stopping by!
    </p>
  </section>
);

export default AboutSection;
