import React from "react";
import ProjectData from "./ProjectData.json";
import './Project.css';
import { FaArrowRight } from "react-icons/fa";

const Project = () => {
  return (
    <div className="w-full max-md:my-40 md:my-30 place-items-center">
      <div className="w-[90%] xl:w-[80%] flex flex-col gap-20 md:gap-10 items-center">

        {/* Heading */}
        <h2
          className="relative text-center text-4xl sm:text-5xl md:text-6xl tracking-tight text-balance md:mb-20"
          style={{
            textShadow:
              "rgba(255, 255, 255, 0.05) 0px 4px 8px, rgba(255, 255, 255, 0.25) 0px 8px 30px",
          }}
        >
          <p className="mb-3 text-xs md:text-sm uppercase tracking-widest font-normal text-black/80 dark:text-white/70">
            FEATURED CASE STUDIES
          </p>
          <p className="font-bold">
            <span>Curated </span>
            <span className="text-colorfull tracking-wide">Work</span>
          </p>
        </h2>

        {/* Projects */}
        <div className="flex flex-col gap-20 lg:gap-30">
          {ProjectData.map((project, idx) => {
            const {
              title,
              image,
              header,
              color,
              background,
              description,
              features,
              technologies,
            } = project;

            return (
              <div
                key={idx}
                className="w-full flex flex-col md:flex-row justify-around items-center gap-10"
              >
                {/* Project Preview */}
                <a href="#" className="md:w-[60%] border border-white/50 rounded-3xl">
                  <div
                    style={{ background }}
                    className={`min-h-[170px] md:min-h-[220px] lg:min-h-[400px] xl:min-h-[430px] w-full border-8 border-[#292525] rounded-3xl flex flex-col justify-end lg:justify-between max-sm:justify-center items-center group overflow-hidden`}
                  >
                    {/* Header (only on large screens) */}
                    <div className={`hidden lg:flex items-start justify-center gap-5 ${color} px-5 mt-7`}>
                      <h1 className={`text-2xl font-semibold px-4 ${color} text-shadow-sm`}>
                        {header}
                      </h1>
                      <span className="text-2xl pt-2">
                        <FaArrowRight />
                      </span>
                    </div>

                    {/* Image */}
                    <img
                      alt={title}
                      loading="lazy"
                      src={image}
                      className="h-full w-[95%] lg:w-[88%] max-lg:max-w-[90%] object-cover rounded-t-lg border-[1.5px] border-white/20 shadow-[0_0_25px_#000] transition-all duration-300 will-change-transform
                        max-sm:min-h-[125px]
                        md:h-[12rem] lg:h-[15rem] xl:min-h-[17rem]
                        translate-y-6 -rotate-3
                        lg:translate-y-0 lg:rotate-0 lg:group-hover:scale-[1.08] lg:group-hover:-rotate-3"
                    />
                  </div>
                </a>

                {/* Project Details */}
                <div className="md:w-[40%]">
                  <div className="list-none">
                    <h1 className="text-3xl max-sm:text-2xl font-bold tracking-wider leading-4">
                      {title}
                    </h1>
                    <p className="text-white/70 max-lg:text-[clamp(10px,2vw,13px)] my-4">
                      {description}
                    </p>

                    {/* Features */}
                    <div className="hidden lg:flex flex-col gap-3 my-6">
                      {features.map((feature, i) => (
                        <div key={i} className="flex items-center">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="mr-2 size-5 fill-teal-600 bg-teal-600/20 dark:text-teal-400 dark:lg:bg-black"
                          >
                            <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" />
                          </svg>
                          <p className="text-[14px]">{feature}</p>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="w-full sm:w-[80%] md:w-[70%] flex flex-wrap gap-3 items-start">
                      {technologies.map((tech, i) => (
                        <div
                          key={i}
                          className="h-7 px-2 rounded-xl bg-neutral-900 border text-[10px] sm:text-xs flex items-center justify-center"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Project;
