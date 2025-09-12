import React, { useState, useRef, useEffect } from 'react';

const ChevronIcon = ({ isOpen }) => (
  <svg
    className={`w-5 h-5 text-[#fafafa] transform transition-transform duration-300 ${
      isOpen ? 'rotate-90' : 'rotate-0'
    }`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const AccordionItem = ({ title, description, isOpen, onClick, isLast }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  return (
    <div
      className={`overflow-hidden  transition-colors duration-300 ${!isLast ? 'border-b border-white/20' : ''}`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center space-x-3 py-3 px-4 focus:outline-none max-sm:px-2"
      >
        <span className="font-semibold text-[#fafafa] flex-1 text-left max-sm:text-sm">
          {title}
        </span>
        <ChevronIcon isOpen={isOpen} />
      </button>

      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="transition-all duration-500 ease-in-out overflow-hidden px-4 max-sm:px-2"
      >
        <div className="pb-4 text-sm text-[#fafafa]/80 leading-relaxed max-sm:text-[12px] ">
          {description}
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ features }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <div id='features' >
        <h1 className='text-3xl font-bold py-6 font-serif
          max-md:text-2xl max-md:text-center'>
            Key Features
        </h1>
        <div className="bg-white/10 font-serif backdrop-blur-md rounded-lg overflow-hidden border border-white/10 shadow-md">
          {features.map((feature, index) => (
            <AccordionItem
            key={index}
            title={feature.title}
            description={feature.description}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
            isLast={index === features.length - 1}
            />
          ))}
        </div>
      </div>
    </>
  );
};


export default Accordion;
