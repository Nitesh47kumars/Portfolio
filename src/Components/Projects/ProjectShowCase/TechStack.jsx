import { motion } from 'framer-motion';
import {animation} from '../../../Motions/Animation';

export default function TechStack({ tech }) {
  return (
    <section id='techstack' className="max-w-3xl px-2">
      <motion.h2
        variants={animation("down",0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="text-2xl sm:text-3xl font-semibold mb-8 max-sm:text-center"
      >
        🧪 Tech Stack
      </motion.h2>

      <ul className="space-y-4">
        {tech.map((item, index) => (
          <motion.li
            key={item.title}
            custom={index}
            variants={animation("right",(0.1 * index))}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="border-l-4 border-blue-500 pl-4"
          >
            <h3 className="text-base sm:text-lg font-semibold">
              {item.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              {item.description}
            </p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
