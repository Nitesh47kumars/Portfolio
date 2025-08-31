import React from "react";

const AboutSection = () => (
  <section className="space-y-3 group max-sm:mt-2">
    <h3 className="font-bold text-lg font-serif relative inline-block">
      Nitesh Kumar
      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white transition-all duration-500 ease-out group-hover:w-full"></span>
    </h3>
    <p className="text-gray-400 text-sm pr-12 sm:pr-0 transition-all duration-300 ease-out group-hover:text-gray-300">
      Brewing{" "}
      <strong className="text-white opacity-35 transition-opacity duration-500 ease-out group-hover:opacity-100">
        beautiful interfaces
      </strong>{" "}
      with code, creativity, and a strong cup of chai.
      <br />
      <br />
      Whether it's{" "}
      <strong className="text-white opacity-35 transition-opacity duration-500 ease-out group-hover:opacity-100">
        crafting UIs
      </strong>{" "}
      or{" "}
      <strong className="text-white opacity-35 transition-opacity duration-500 ease-out group-hover:opacity-100">
        editing videos
      </strong>
      , I love turning ideas into digital experiences.
      <br />
      <br />
      <span className="font-semibold text-gray-300">Glad you stopped by!</span>
    </p>
  </section>
);

export default AboutSection;
