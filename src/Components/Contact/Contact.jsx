import React from 'react';
import MagneticButton from './MagneticButton'
const Contact = () => {
  return (
    <div id="contact" className="relative h-screen w-screen overflow-hidden">
      <img
        className="w-full h-full object-cover absolute z-[-1]"
        src="./Contact.jpeg"
        alt="Contact background"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black z-0" />

      <div className="relative flex flex-col items-center justify-center h-full text-white px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Name</h1>
        <MagneticButton/>
        <p className="text-lg mb-2">
          I'm available for full-time roles & freelance projects.
        </p>
        <p className="text-sm text-gray-300">Let's connect and create something great together.</p>
      </div>
    </div>
  );
};

export default Contact;
