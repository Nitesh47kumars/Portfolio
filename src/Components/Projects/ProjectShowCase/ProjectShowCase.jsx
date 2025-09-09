// ProjectShowcase.jsx
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProjectData from '../ProjectData.json';

const ProjectShowcase = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const project = ProjectData.find(
    p => p.title.toLowerCase().replace(/\s+/g, '-') === slug
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!project) {
    return <div className="flex items-center justify-center h-screen text-red-500">Project not found</div>;
  }

  return (
    <div className="relative w-full min-h-screen mt-12 bg-black text-white overflow-hidden">
      {/* Background & Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${project.image})`, filter: 'brightness(0.4)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10"/>

      {/* Content Container */}
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

        {/* Call-to-Action Buttons */}
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

        <FeatureHighlights features={project.features} />
        <TechStackList techs={project.technologies} />
      </div>
    </div>
  );
};

const FeatureHighlights = ({ features }) => (
  <motion.div
    className="max-w-3xl mx-auto mb-12"
    initial="hidden"
    animate="show"
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: 0.15 } }
    }}
  >
    {features.map((feat, i) => (
      <motion.div
        key={i}
        className="mb-4 flex items-start gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <span className="inline-block w-2 h-2 bg-indigo-400 rounded-full mt-2" />
        <p>{feat}</p>
      </motion.div>
    ))}
  </motion.div>
);

const TechStackList = ({ techs }) => (
  <div className="flex flex-wrap justify-center gap-3">
    {techs.map((tech, i) => (
      <motion.span
        key={i}
        className="px-3 py-1 bg-white/20 rounded-full text-sm"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 + i * 0.1 }}
      >
        {tech}
      </motion.span>
    ))}
  </div>
);

export default ProjectShowcase;
