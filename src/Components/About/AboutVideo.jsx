import React, { useState } from 'react';
import Skeleton from '../../UI/Skeleton';

const AboutVideo = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <div className='overflow-hidden lg:w-[40%] relative -z-1'>
      {/* Show skeleton while video is loading */}
      {!isVideoLoaded && <Skeleton />}

      {/* Video container - always rendered */}
      <div className='w-full lg:h-120 max-lg:h-140 max-md:h-100 max-sm:h-100 object-cover overflow-hidden max-lg:translate-y-[-1rem]'>
        <video
          src='/Myself.mp4'
          poster='Logo.jpg'
          loop
          muted
          autoPlay
          playsInline
          onCanPlay={() => setIsVideoLoaded(true)}
          className={`h-full w-full object-cover rounded-2xl transition-opacity duration-500 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Overlay gradient */}
      <div className='absolute top-0 right-0 h-full w-full max-lg:bg-gradient-to-b lg:bg-gradient-to-r from-black to-transparent' />
    </div>
  );
};

export default AboutVideo;
