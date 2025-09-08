import React, { useState } from 'react';
import MagneticButton from './MagneticButton';
import ContactDrawer from './ContactDrawer/ContactDrawer';
import { motion } from 'framer-motion';
import { animation } from '../../Motions/Animation';

const Contact = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <section id="contact" className="relative h-[85vh] w-screen overflow-hidden">
        {/* Background image */}
        <img
          src="./Contact.jpeg"
          alt="Contact background"
          className="absolute inset-0 w-full h-full object-cover z-[-2]"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-[-1]" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
          <header>
            <motion.h2
              variants={animation('right', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide"
            >
              YOUR VISION, OUR <span className="font-[900]">MISSION</span>
            </motion.h2>
            <motion.h3
              variants={animation('left', 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              className="mt-4 text-lg sm:text-3xl md:text-4xl lg:text-5xl tracking-wide"
            >
              LET&apos;S BRING IT TO <span className="font-[900]">LIFE!</span>
            </motion.h3>
          </header>

          {/* Trigger Drawer */}
          <div className="my-7" onClick={() => setIsDrawerOpen(true)}>
            <MagneticButton />
          </div>

          <p className="text-md mb-2 sm:text-xl">
            I'm available for <span className="font-semibold">full-time roles</span> &{' '}
            <span className="font-semibold">freelance projects</span>.
          </p>
          <p className="text-[12px] sm:text-sm text-gray-300">
            Let&apos;s connect and create something great together.
          </p>
        </div>
      </section>

      {/* Drawer */}
      {isDrawerOpen && <ContactDrawer onClose={() => setIsDrawerOpen(false)} />}
    </>
  );
};

export default Contact;
