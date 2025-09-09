import React from 'react';
import { motion } from 'framer-motion';

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

export default TechStackList;
