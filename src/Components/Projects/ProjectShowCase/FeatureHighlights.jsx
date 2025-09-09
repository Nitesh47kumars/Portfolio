import React from 'react';
import { motion } from 'framer-motion';

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

export default FeatureHighlights;
