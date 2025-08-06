import React from 'react'

const AboutImage = () => {
  return (
    <div className='overflow-hidden lg:w-[40%] relative'>
      <div className='lg:w-[100%] lg:h-100 max-lg:h-150 object-cover overflow-hidden
      max-lg:translate-y-[-10rem] '>
        <video src='/video.mp4'
          loop
          muted
          autoPlay
          playsInline
          className='h-full w-full object-cover rounded-2xl'/>
      </div>
      <div className='absolute top-0 right-0 h-full w-full max-lg:bg-gradient-to-b lg:bg-gradient-to-r from-black to-transparent'/>
    </div>
  )
}

export default AboutImage
