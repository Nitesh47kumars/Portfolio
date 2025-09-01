import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ProjectImage = ({ image, header, color, background, title }) => {
  return (
    <div
      style={{ background }}
      className={`min-h-[170px] md:min-h-[220px] lg:min-h-[400px] xl:min-h-[430px] w-full border-8 border-[#292525] rounded-3xl flex flex-col justify-end lg:justify-between max-sm:justify-center items-center group overflow-hidden`}
    >
      <div className={`hidden lg:flex items-start justify-center gap-5 ${color} px-5 mt-7`}>
        <h1 className={`text-2xl font-semibold px-4 ${color} text-shadow-sm`}>
          {header}
        </h1>
        <span className="text-2xl pt-2">
          <FaArrowRight />
        </span>
      </div>

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
  );
};

export default ProjectImage;
