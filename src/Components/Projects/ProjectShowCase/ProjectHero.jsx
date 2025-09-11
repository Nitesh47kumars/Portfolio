import React from 'react';
import { motion } from 'framer-motion';
import GoBack from '../../../UI/Buttons/GoBack'
import { FiGithub } from "react-icons/fi";
import TechStackList from './TechStackList';

const ProjectHero = ({ project}) => {
  return (
    <>
      <div className="relative flex flex-col gap-6">
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
        >
          {/* Project Title */}
          <h1 className="font-serif text-3xl md:text-4xl font-extrabold text-white">
            {project.title}
          </h1>

          {/* Action Buttons */}
          {(project.github || project.Link) && (
            <div className="flex items-center gap-4">
              {/* GitHub Link */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View source on GitHub"
                  className="text-white text-2xl hover:text-gray-300 transition-colors"
                >
                  <FiGithub />
                </a>
              )}

              {/* Live Link */}
              {project.Link && (
                <a
                  href={project.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View live project"
                  className="px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-md hover:from-purple-600 hover:to-indigo-600 transition-colors"
                >
                  View Live
                </a>
              )}
            </div>
          )}
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl font-sans text-white/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {project.header}
        </motion.p>
        
        <TechStackList techs={project.technologies} />

        <div className='h-full w-full xl:h-[500px] xl:w-[800px] border border-white/30 rounded-2xl'>
          <img
             className='h-full w-full border-8 object-cover border-[#21212193] rounded-2xl'
           src={project.image} alt='' />
        </div>

      </div>
    </>
  );
};

export default ProjectHero;
