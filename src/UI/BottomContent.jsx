import React from 'react'
import BlackHole from './BlackHole'
import Footer from '../Components/Footer/Footer'

const BottomContent = () => {
  return (
    <div className='max-md:h-[1180px] md:h-[650px]'>
      <video
      className='w-full h-full z-[-2]'
      loop
      autoPlay
      src='https://cdn.pixabay.com/video/2021/03/06/67139-521253317_large.mp4'
      />
      <BlackHole/>
      <Footer/>
    </div>
  )
}

export default BottomContent
