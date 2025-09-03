import React from "react";
import ProjectHeading from "./ProjectHeading";
import ProjectCard from "./ProjectCard";
import ProjectData from "./ProjectData.json";
import './Project.css';

const Project = () => {
  return (
    <div id="projects" className="w-full max-lg:my-30 max-sm:mb-8 lg:my-50 place-items-center">
      <div className="w-[90%] xl:w-[80%] flex flex-col gap-15 md:gap-10 items-center">
        <ProjectHeading />
        <div className="flex flex-col gap-15 lg:gap-25">
          {ProjectData.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
