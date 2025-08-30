import React from 'react';

const marqueeItems = [
  'Video Editing Passionate',
  'Gaming Enthusiast',
  'Create Stunning Content',
  'Level Up Your Skills',
  'Explore New Realms',
  'Editing Magic',
  'Gamers Never Stop',
  'Master Every Frame',
  'Game On, Create On',
  'Action Packed Creations',
];

const Banner = () => {
  const MarqueeContent = () => (
    <>
      {marqueeItems.map((text, index) => (
        <div
          key={index}
          className="inline-flex items-center gap-2 sm:gap-4 px-4"
        >
          <span className="text-sm font-semibold tracking-widest text-gray-50 uppercase sm:text-base md:text-lg lg:text-xl">
            {text}
          </span>
          <img
            src="/Star.webp"
            alt="star"
            className="w-5 sm:w-6 md:w-7 lg:w-8"
          />
        </div>
      ))}
    </>
  );

  return (
    <div>
      <section className="w-full my-20 py-20 relative overflow-hidden z-[-1]">
        <div className="w-full absolute h-15 inset-0 z-0 translate-y-18 rotate-6 bg-gradient-to-r from-[#003366] to-[#00509E] py-4 opacity-60 sm:h-13 sm:translate-y-19 sm:rotate-6 md:rotate-4 lg:translate-y-18 lg:rotate-3.5 lg:py-8 scale-x-102"></div>

        <div className="relative h-11 flex -rotate-2 items-center justify-center overflow-hidden bg-gradient-to-r from-[#002D58] to-[#004F80] py-1.5 lg:py-7 group scale-x-102 sm:h-12 sm:-rotate-2">
          <div className="flex whitespace-nowrap gap-8 animate-marquee group-hover:paused">
            <MarqueeContent />
            <MarqueeContent />
          </div>
        </div>

        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }

            .animate-marquee {
              animation: marquee 25s linear infinite;
              will-change: transform;
            }

            .group-hover\\:paused:hover {
              animation-play-state: paused;
            }

            @media (max-width: 768px) {
              .animate-marquee {
                animation-duration: 40s;
              }
            }

            @media (min-width: 1024px) {
              .animate-marquee {
                animation-duration: 20s;
              }
            }
          `}
        </style>
      </section>
    </div>
  );
};

export default Banner;
