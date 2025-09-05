import React from 'react';
import { motion } from 'motion/react';
import { animation } from '../../Motions/Animation';

const AboutContent = () => {
  return (
    <div className="flex flex-col w-full lg:w-[60%] items-center lg:items-start">
      <motion.h1
        variants={animation('right', 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className="text-sm text-center lg:text-left"
      >
        About Me!
      </motion.h1>

      <br />

      <motion.h1
        variants={animation('right', 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className="font-bold text-[30px] lg:text-[45px] text-center lg:text-left leading-9 sm:leading-[3rem]"
        style={{
          textShadow:
            '0px 4px 8px rgba(255, 255, 255, 0.1), 0px 8px 30px rgba(255, 255, 255, 0.5)',
        }}
      >
        I'm Nitesh Kumar, A
        <br />
        <span className="font-thin font-serif">
          Creative{' '}
          <span className="bg-clip-text text-transparent italic tracking-tight animate-gradient-x font-instrument-serif bg-gradient-to-r from-[#ff8000] via-[#f0c] to-[#04f]">
            Frontend Developer
          </span>
        </span>
      </motion.h1>

      <br />

      <div className="flex flex-col gap-5 text-base lg:text-lg font-light tracking-wider text-neutral-300 text-center lg:text-left w-[80vw] lg:w-full max-w-3xl">
        <motion.p
          variants={animation('right', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }}
        >
          Hi! I’m Nitesh Kumar, a 19-year-old passionate web developer and video editor. Currently, I’m a second-year BCA student, diving deep into the world of coding and design. I have hands-on experience with HTML, CSS, JavaScript, React, and Tailwind CSS, and I love creating clean, responsive, and user-friendly websites.
        </motion.p>

        <motion.p
          variants={animation('right', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }}
        >
          Alongside web development, I also enjoy video editing, which helps me bring creativity and storytelling into my projects. This portfolio is my first step to showcase my skills, projects, and journey as I grow in the tech world.
        </motion.p>

        <motion.p
          variants={animation('right', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }}
        >
          I’m excited to connect, learn, and create meaningful digital experiences. Let’s build something amazing together!
        </motion.p>
      </div>
    </div>
  );
};

export default AboutContent;
