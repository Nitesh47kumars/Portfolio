import React, { useState, useEffect } from 'react';

const HobbyCard = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width for mobile interaction
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const hobbiesData = [
    {
      playingGame: {
        description:
          "Passionate about video games, enjoying the challenge, creativity, and strategic thinking they inspire.",
        items: [
          { name: "GTA 5", image: "/Hobbies_Icon/GTA_5.jpg" },
          { name: "God of War", image: "/Hobbies_Icon/Kratos.jpg" },
          { name: "Pubg", image: "/Hobbies_Icon/Pubg.jpg" },
        ],
      },
    },
    {
      videoEditing: {
        description:
          "Enjoys video editing as a creative outlet to tell stories and bring ideas to life through visuals.",
        items: [
          { name: "Capcut", image: "/Hobbies_Icon/Capcut.jpg" },
          { name: "Premium pro", image: "/Hobbies_Icon/Editing.jpg" },
        ],
      },
    },
    {
      listeningToMusic: {
        description:
          "Enjoys listening to music as a way to relax and stay inspired.",
        items: [
          {
            name: "Spotify",
            image: "/Hobbies_Icon/Spotify.4ae62b85-3d44-495f-a354-de1b0c447387",
          },
          {
            name: "YouTube",
            image: "/Hobbies_Icon/Youtube.jpg",
          },
        ],
      },
    },
  ];

  return (
    <div className="flex gap-6 flex-wrap justify-center overflow-hidden">
      {hobbiesData.map((hobbyObj, idx) => {
        const hobbyKey = Object.keys(hobbyObj)[0];
        const hobby = hobbyObj[hobbyKey];
        const isActive = activeIndex === idx;

        return (
          <div
            key={idx}
            onClick={() => isMobile && setActiveIndex(isActive ? null : idx)}
            className={`flex relative w-[95%] h-[90px] rounded overflow-hidden bg-gradient-to-br from-yellow-500 via-pink-500 to-pink-700 transition-all duration-500 ${
              isMobile ? 'cursor-pointer' : 'group hover:shadow-lg'
            }`}
          >
            {/* Images */}
            {hobby.items.map((img, i) => (
              <div
                key={i}
                className="w-full h-full flex justify-center items-center z-0"
              >
                <img
                  src={img.image}
                  alt={img.name}
                  style={{ zIndex: 5 - i }}
                  className={`h-full w-full object-cover transform rotate-[6deg] scale-130 transition-all duration-500 ${
                    isMobile
                      ? isActive
                        ? '-translate-y-[116%] rotate-0'
                        : ''
                      : 'group-hover:-translate-y-[116%] group-hover:rotate-0'
                  }`}
                />
              </div>
            ))}

            {/* Description Overlay */}
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 w-full h-full backdrop-blur-md flex flex-col justify-center items-center px-2 transition-all duration-500
                ${
                  isMobile
                    ? isActive
                      ? 'top-[0%] opacity-100'
                      : 'top-[120%] opacity-0'
                    : 'top-[120%] opacity-0 group-hover:top-[0%] group-hover:opacity-100'
                }
              `}
            >
              <h1 className="text-white text-center font-bold text-[clamp(1rem,1vw,1.2rem)] capitalize drop-shadow-[0px_0px_8px_black]">
                {hobbyKey.replace(/([A-Z])/g, " $1")}
              </h1>
              <p className="text-[clamp(0.8rem,1vw,1rem)] leading-4 text-white/80 text-center drop-shadow-[0px_0px_8px_black]">
                {hobby.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HobbyCard;
