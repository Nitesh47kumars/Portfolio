import React from 'react'

const HeroOverlay = () => {
  return (
    <div className='h-full w-full overflow-hidden'>
      <div className='absolute max-md:h-100 md:h-140 blur-[7rem] m-0 p-0 w-20 top-0 right-0 bg-[#000c92] rounded-l-full  -z-2'></div>
      <div className='absolute max-md:h-100 md:h-140 blur-[7rem] m-0 p-0 w-20 top-0 left-0 bg-[#94620b] rounded-r-full  -z-2'></div>
    </div>
  )
}

export default HeroOverlay
