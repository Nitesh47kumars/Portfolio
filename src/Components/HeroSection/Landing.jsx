import React from 'react';

const Landing = () => {
  return (
    <div className='relative z-[-11] w-full '>
      <video
        className="h-150 w-full object-cover"
        src="./Videos/0903.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div
      style={{
        background: `linear-gradient(to top, rgba(0, 0, 0, 1) , rgba(0, 0, 0, 0.5) 25%, rgba(0, 0, 0, 1) 95%)`,
      }}
      className='absolute top-0 left-0 h-full w-full '/>
    </div>
  );
};

export default Landing;
