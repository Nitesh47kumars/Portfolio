import React from 'react'
import Footer from './Footer'

const BottomContent = () => {
  return (
    <div className='relative min-h-[600px] flex justify-center items-center max-md:mt-30'>

      <div className='absolute left-0 top-0 w-full h-full inset-0'
      style={{ backgroundImage: 'linear-gradient(to top, transparent 75%, black 99%)' }}
      />

      <video
      className='absolute left-0 top-0 h-full w-full object-cover z-[-2] rotate-180'
      style={{mixBlendMode:""}}
      loop
      autoPlay
      muted
      src='/Videos/Bottom.mp4'
      />
      <Footer/>
    </div>
  )
}

export default BottomContent
