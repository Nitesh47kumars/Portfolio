import React from 'react'

const HeroOverlay = () => {
  return (
    <div className='h-full w-full overflow-hidden'>
      <div className='absolute max-md:-top-30 md:-top-15 left-0 -z-10 blur-[15rem] bg-[radial-gradient(circle_at_center,#1a0033,#000000_100%)] h-full w-full'/>
    </div>
  )
}

export default HeroOverlay
