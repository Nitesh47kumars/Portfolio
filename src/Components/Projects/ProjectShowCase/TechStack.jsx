// components/TechStack.jsx

import { motion } from 'framer-motion';

/**
 * @param {{ tech: { title: string; description: string }[] }} props
 */
export default function TechStack({ tech }) {
  return (
    <section className="py-10 px-4 max-w-3xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-2xl font-semibold mb-6 flex items-center gap-2"
      >
        🧪 Tech Stack
      </motion.h2>

      <ul className="space-y-5">
        {tech.map((item, index) => (
          <motion.li
            key={item.title}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="border-l-4 border-blue-500 pl-4"
          >
            <h3 className="text-lg font-medium">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {item.description}
            </p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
