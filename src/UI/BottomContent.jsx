import React from 'react'
import BlackHole from './BlackHole'
import Footer from '../Components/Footer/Footer'

const BottomContent = () => {
  return (
    <div className='relative h-[600px] flex justify-center items-center'>

      <div className='absolute left-0 top-0 w-full h-full'
      style={{ backgroundImage: 'linear-gradient(to top, transparent 75%, black 99%)' }}
      />

      <video
      className='absolute left-0 top-0 w-full object-cover h-full z-[-2] rotate-180'
      style={{mixBlendMode:""}}
      loop
      autoPlay
      muted
      src='/Videos/Bottom.mp4'
      />

      {/* <BlackHole/> */}
      <Footer/>
    </div>
  )
}

export default BottomContent
