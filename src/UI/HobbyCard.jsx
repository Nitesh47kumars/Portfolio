import React, { useState, useEffect, useMemo } from 'react';

const HobbyCard = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width on resize
  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth <= 768);
    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);
    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  const hobbiesData = useMemo(() => [
    {
      playingGame: {
        description:
          "Passionate about video games, enjoying the challenge, creativity, and strategic thinking they inspire.",
        image: "/Hobbies_Icon/Gaming.png",
      },
    },
    {
      videoEditing: {
        description:
          "Enjoys video editing as a creative outlet to tell stories and bring ideas to life through visuals.",
        image: "/Hobbies_Icon/Editing.png",
      },
    },
    {
      listeningToMusic: {
        description: "Enjoys listening to music as a way to relax and stay inspired.",
        image: "/Hobbies_Icon/Music.png",
      },
    },
  ], []);

  const formatTitle = (key) => key.replace(/([A-Z])/g, ' $1');

  return (
    <div className="flex flex-wrap justify-center gap-6 overflow-hidden">
      {hobbiesData.map((hobbyObj, idx) => {
        const key = Object.keys(hobbyObj)[0];
        const { description, image } = hobbyObj[key];
        const isActive = activeIndex === idx;

        const cardClass = `relative flex w-[95%] h-[90px] rounded overflow-hidden 
          bg-gradient-to-br from-yellow-500 via-pink-500 to-pink-700 transition-all duration-500 
          ${isMobile ? 'cursor-pointer' : 'group hover:shadow-lg'}`;

        const overlayClass = `absolute left-1/2 transform -translate-x-1/2 w-full h-full px-2 
          backdrop-blur-md flex flex-col justify-center items-center transition-all duration-500 
          ${
            isMobile
              ? isActive
                ? 'top-0 opacity-100'
                : 'top-[120%] opacity-0'
              : 'top-[120%] opacity-0 group-hover:top-0 group-hover:opacity-100'
          }`;

        return (
          <div
            key={idx}
            className={cardClass}
            onClick={() => isMobile && setActiveIndex(isActive ? null : idx)}
          >
            {/* Images */}
            <div className="w-full h-full flex justify-center items-center z-0">
              <img
                src={image}
                alt={key}
                className={`h-full w-full object-cover transform transition-all duration-500 ${
                  isMobile
                    ? isActive
                      ? '-translate-y-[135%] rotate-0'
                      : 'translate-y-[4%] scale-135'
                    : 'group-hover:-translate-y-[116%] group-hover:rotate-0'
                }`}
              />
            </div>

            {/* Description */}
            <div className={overlayClass}>
              <h1 className="text-white text-center font-bold text-[clamp(1rem,1vw,1.2rem)] capitalize drop-shadow-[0_0_8px_black]">
                {formatTitle(key)}
              </h1>
              <p className="text-[clamp(0.8rem,1vw,1rem)] leading-4 text-white/80 text-center drop-shadow-[0_0_8px_black]">
                {description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HobbyCard;
