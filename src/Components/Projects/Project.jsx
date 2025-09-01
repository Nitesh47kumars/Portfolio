import React from "react";
import ProjectData from "./ProjectData.json";
import './Project.css'
import { FaArrowRight } from "react-icons/fa";

const Project = () => {
  return (
    <div className=" w-full max-md:my-40 md:my-30 place-items-center">
      <div className="w-[90%] xl:w-[80%] flex flex-col gap-20 md:gap-10 items-center">
      <h2
        className="relative text-4xl tracking-tight sm:text-5xl md:mb-20 md:text-6xl text-balance text-center"
        style={{
          textShadow:
            "rgba(255, 255, 255, 0.05) 0px 4px 8px, rgba(255, 255, 255, 0.25) 0px 8px 30px",
        }}
      >
        <p className="mb-3 text-xs font-normal tracking-widest text-black/80 dark:text-white/70 uppercase md:text-sm">
          FEATURED CASE STUDIES
        </p>
        <p className="font-bold">
          <span>Curated</span>{" "}
          <span className="text-colorfull tracking-wide">
            Work
          </span>
        </p>
      </h2>

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
            technologies
          } = project;

          return (
            <div
              key={idx}
              className="w-full flex justify-around items-center gap-10 max-md:flex-col"
            >
              {/* Left: Image and header */}
              <a href="#" className="md:w-[60%] border border-white/50 rounded-3xl">
                <div
                style={{background:background}}
                  className={`min-h-[170px] lg:min-h-[500px] w-full border-8 border-[#292525] rounded-3xl
                  flex flex-col lg:justify-between justify-end max-sm:justify-center items-center group overflow-hidden`}
                >
                  <div className={`max-lg:hidden flex items-start justify-center gap-5 ${color} px-5 mt-7`}>
                    <h1 className={`text-2xl font-semibold px-4 ${color} text-shadow-sm`}>
                      {header}
                    </h1>
                    <span className="text-2xl pt-2"><FaArrowRight /></span>
                  </div>
                  <img
                    alt={title}
                    loading="lazy"
                    src={image}
                    className="h-full max-sm:min-h-[125px] md:h-[12rem] lg:h-[15rem] xl:min-h-[17rem] w-[95%] lg:w-[88%] max-lg:max-w-[90%] object-cover lg:group-hover:translsate-y-10 translate-y-6 -rotate-3 rounded-t-lg border-[1.5px] border-white/20 transition-all duration-300 will-change-transform 
                    lg:block lg:rotate-0 lg:group-hover:scale-[1.08] lg:group-hover:-rotate-3 shadow-[0_0_25px_#000]"
                  />
                </div>
              </a>

              {/* Right: Text, features, tech */}
              <div className="md:w-[40%]">
                <li className="list-none">
                  <h1 className="text-3xl max-sm:text-2xl font-bold tracking-wider leading-4">{title}</h1>
                  <p className="text-white/70 text-[clamp(0.8rem,1vw,0.5rem)] my-4">{description}</p>

                  {/* Features */}
                  <div className="flex flex-col gap-3 lg:my-6">
                    {features.map((feature, i) => (
                      <div
                        key={i}
                        className="max-lg:hidden flex items-center justify-center"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mt-1 mr-2 size-5 shrink-0 fill-teal-600 text-teal-600 dark:text-teal-400 bg-teal-600/20 lg:bg-white-1 dark:lg:bg-black"
                        >
                          <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path>
                        </svg>
                        <p className="text-[16px]">{feature}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="w-full sm:w-[80%] md:w-[70%] flex flex-wrap gap-3 items-start justify-start">
                    {technologies.map((tech, i) => (
                      <div
                        key={i}
                        className="h-8 px-3 rounded-xl text-nowrap bg-neutral-900 text-xs sm:text-sm border flex items-center justify-center"
                        >
                        {tech}
                      </div>
                    ))}
                  </div>
                </li>
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
