import React from "react";
import ProjectImage from "./ProjectImage";
import ProjectDetails from "./ProjectDetails";
import {motion} from 'motion/react'
import {animation} from '../../Motions/Animation'

const ProjectCard = (props) => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-around items-center gap-10">
      <motion.a
        variants={animation("right",0.2)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once:true,amount:0}}
        href={props.Link} className="md:w-[60%] border border-white/50 rounded-3xl"
      >
        <ProjectImage image={props.image} header={props.header} color={props.color} background={props.background} title={props.title} />
      </motion.a>
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
