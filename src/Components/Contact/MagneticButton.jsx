import React, { useEffect, useRef } from 'react';

const MagneticButton = () => {
  const buttonRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;

    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width ;
      const y = e.clientY - rect.top - rect.height;

      button.style.transform = `translate(${x * 0.2 }px, ${y * 0.2}px)`;
    };

    const resetPosition = () => {
      button.style.transform = `translate(0px, 0px)`;
    };

    const wrapper = button.parentElement;

    wrapper.addEventListener('mousemove', handleMouseMove);
    wrapper.addEventListener('mouseleave', resetPosition);

    return () => {
      wrapper.removeEventListener('mousemove', handleMouseMove);
      wrapper.removeEventListener('mouseleave', resetPosition);
    };
  }, []);

  return (
    <div className="relative inline-block p-5">
      <button
        ref={buttonRef}
        className="
          group relative overflow-hidden rounded-full border border-gray-500 
          bg-black/20 py-2 px-6 text-base font-medium text-black transition-colors duration-300
          hover:text-white hover:bg-transparent
          backdrop-blur-sm
          dark:border-gray-300 dark:bg-white/20 dark:text-white dark:hover:text-black
          will-change-transform
        "
      >
        {/* Animated background overlay */}
        <span
          ref={spanRef}
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
