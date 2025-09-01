import React from "react";
import ProjectHeading from "./ProjectHeading";
import ProjectCard from "./ProjectCard";
import ProjectData from "./ProjectData.json";
import './Project.css';

const Project = () => {
  return (
    <div className="w-full max-md:my-40 md:my-30 place-items-center">
      <div className="w-[90%] xl:w-[80%] flex flex-col gap-20 md:gap-10 items-center">
        <ProjectHeading />
        <div className="flex flex-col gap-20 lg:gap-30">
          {ProjectData.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
