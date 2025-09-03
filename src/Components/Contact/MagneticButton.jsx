import React, { useEffect, useRef } from 'react';

const MagneticButton = () => {
  const buttonRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const wrapper = wrapperRef.current;
  
    const handleMouseMove = (e) => {
      const isOverButton = button.contains(e.target);
      if (!isOverButton) return;
  
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
  
      button.style.transform = `translate(${x * 0.8}px, ${y * 0.8}px)`;
    };
  
    const resetPosition = () => {
      button.style.transform = `translate(0px, 0px)`;
    };
  
    wrapper.addEventListener('mousemove', handleMouseMove);
    wrapper.addEventListener('mouseleave', resetPosition);
  
    return () => {
      wrapper.removeEventListener('mousemove', handleMouseMove);
      wrapper.removeEventListener('mouseleave', resetPosition);
    };
  }, []);
  

  return (
    <div
      ref={wrapperRef}
      className="relative inline-block bg-red-500 px-40 py-10"
    >
      <button
        ref={buttonRef}
        className="
          will-change-transform transition-all duration-20 ease-out
          group relative overflow-hidden rounded-full border border-gray-500 
          bg-black/20 py-2 px-6 text-base font-medium text-black
          hover:text-white hover:bg-transparent
          backdrop-blur-sm
          dark:border-gray-300 dark:bg-white/20 dark:text-white dark:hover:text-black
        "
      >
        {/* Animated background overlay */}
        <span
          className="absolute inset-0 bg-black rounded-full scale-0 opacity-0
          transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:opacity-50
          dark:bg-white"
        ></span>

        <span className="relative z-10">Get In Touch</span>
      </button>
    </div>
  );
};

export default MagneticButton;
