import React from 'react'

const HeroOverlay = () => {
  return (
    <div>
      <div className='absolute h-40 w-40 top-0 right-0 bg-[#FF0000] rounded-full blur-[5rem] -z-10 animate-pulse'></div>
      <div className='absolute h-40 w-40 top-0 right-[14rem] bg-[#ff9d00] rounded-full blur-[5rem] -z-10 animate-pulse'></div>
      <div className='absolute h-60 w-60 top-60 left-[5rem] bg-[#ff00008d] rounded-full blur-[5rem] -z-10'></div>
      <div className='absolute h-80 w-80 top-120 left-[-6rem] bg-[#ff9d0088] rounded-full blur-[5rem] -z-10'></div>
    </div>
  )
}

export default HeroOverlay
