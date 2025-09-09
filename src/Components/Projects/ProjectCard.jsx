import React from "react";
import ProjectImage from "./ProjectImage";
import ProjectDetails from "./ProjectDetails";
import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-around items-center gap-10">
      <Link
        to={`/projects/${props.title.toLowerCase().replace(/\s+/g, '-')}`}
        className="md:w-[60%] border border-white/50 rounded-3xl"
      >
        <ProjectImage
          image={props.image}
          header={props.header}
          color={props.color}
          background={props.background}
          title={props.title}
        />
      </Link>
      <div className="md:w-[40%]">
        <ProjectDetails
          title={props.title}
          description={props.description}
          features={props.features}
          technologies={props.technologies}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
