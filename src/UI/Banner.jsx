import React from 'react';

const marqueeItems = [
  'Accessible',
  'Responsive',
  'Dynamic',
  'Scalable',
  'Search Optimized',
  'Interactive',
  'Secure',
  'Reliable',
  'Engaging',
];

const Banner = () => {
  // Single block to duplicate for seamless looping
  const MarqueeContent = () => (
    <>
      {marqueeItems.map((text, index) => (
        <div
          key={index}
          className="inline-flex items-center gap-2 lg:gap-4 px-4"
        >
          <span className="text-sm font-semibold tracking-[0.2em] text-gray-50 uppercase md:text-lg lg:text-xl">
            {text}
          </span>
          <img src="/star.svg" alt="star" className="w-5 lg:w-7" />
        </div>
      ))}
    </>
  );

  return (
    <div>
      <section className="my-20 py-20 relative overflow-hidden">
        {/* Decorative Background Bar */}
        <div className="absolute h-16 inset-0 z-0 translate-y-10 rotate-6 bg-gradient-to-r from-[#6799fe] to-[#0255fb] py-4 opacity-60 md:rotate-3 lg:translate-y-16 lg:py-8"></div>

        {/* Marquee Container */}
        <div className="relative z-10 -mx-1 flex -rotate-3 items-center justify-center overflow-hidden bg-gradient-to-r from-[#6799fe] to-[#0255fb] py-1.5 lg:py-3 group">
          <div className="flex whitespace-nowrap gap-8 animate-marquee group-hover:paused">
            <MarqueeContent />
            <MarqueeContent />
          </div>
        </div>

        {/* Animation Styles */}
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
