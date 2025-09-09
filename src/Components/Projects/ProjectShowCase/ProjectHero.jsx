import React from 'react';
import { motion } from 'framer-motion';

const ProjectHero = ({ project, navigate }) => {
  return (
    <>
      {/* Background & Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${project.image})`, filter: 'brightness(0.4)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 py-16">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-6 text-center"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {project.title}
        </motion.h1>

        <motion.p
          className="text-center text-lg md:text-xl max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {project.header}
        </motion.p>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            Back to Projects
          </button>
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
        </div>
      </div>
    </>
  );
};

export default ProjectHero;
