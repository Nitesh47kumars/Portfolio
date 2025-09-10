import React from 'react';
import { motion } from 'framer-motion';
import GoBack from '../../../UI/Buttons/GoBack'

const ProjectHero = ({ project}) => {
  return (
    <>
      <div className="relative flex flex-col ">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <h1 className="font-serif text-3xl md:text-4xl font-extrabold text-center md:text-left text-white">
            {project.title}
          </h1>

          
          {/* View Live Button */}
          {project.Link && (
            <a
              href={project.Link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-lg hover:from-purple-600 hover:to-indigo-600 transition"
            >
              View Live
            </a>
          )}
        </motion.div>

        <div className='h-full w-full  border border-white/30 rounded-2xl'>
          <img
             className='h-full w-full border-8 border-[#21212193] rounded-2xl'
           src={project.image} alt='' />
        </div>

        {/* Description */}
        <motion.p
          className="text-center text-lg md:text-xl max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {project.header}
        </motion.p>
      </div>

    </>
  );
};

export default ProjectHero;
