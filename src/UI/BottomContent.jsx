import React from 'react'
import BlackHole from './BlackHole'
import Footer from '../Components/Footer/Footer'

const BottomContent = () => {
  return (
    <div className='max-md:h-[1180px] md:h-[650px]'>
      <div className='absolute left-0 w-full h-full  bg-gradient-to-b from-black/90 to-black/60'/>
      <video
      className='absolute left-0 w-full object-cover h-full z-[-2]'
      style={{mixBlendMode:""}}
      loop
      autoPlay
      muted
      src='https://cdn.pixabay.com/video/2024/06/07/215694_large.mp4'
      />
      <BlackHole/>
      <Footer/>
    </div>
  )
}

export default BottomContent
