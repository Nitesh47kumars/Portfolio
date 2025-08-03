import React from 'react'

const HeroOverlay = () => {
  return (
    <div className='h-full w-screen overflow-hidden'>
      <div className='absolute h-100 w-20 top-0 right-0 max-md:top-20  bg-[#000c92] rounded-l-full blur-[7rem] -z-2'></div>
      <div className='absolute h-100 w-20 top-0 left-0 bg-[#94620b] rounded-r-full blur-[7rem] -z-2'></div>
    </div>
  )
}

export default HeroOverlay
