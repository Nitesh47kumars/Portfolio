import React, { useEffect, useRef } from 'react';

const MagneticButton = () => {
  const buttonRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const wrapper = wrapperRef.current;

    const handleMouseMove = (e) => {
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      button.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
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
    <div ref={wrapperRef} className="relative group">
      <button
        ref={buttonRef}
        className="cursor-pointer inline-flex items-center justify-between overflow-hidden rounded-full border border-white/10 bg-white/10 py-[3px] pr-[3px] pl-2 text-base font-medium text-white opacity-85 backdrop-blur-xs transition-all duration-400 ease-out hover:bg-transparent will-change-transform group-hover:scale-125"
      >
        <span className="z-10 px-3 transition-colors duration-300 group-hover:text-black">
          Get In Touch
        </span>

        <span className="absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100" />

        <span className="z-10 flex items-center justify-center overflow-hidden rounded-full bg-white p-2 transition-colors duration-300 group-hover:bg-transparent md:p-2.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-black transition-all duration-300 group-hover:translate-x-5 group-hover:opacity-0"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute -translate-x-5 text-black opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default MagneticButton;
