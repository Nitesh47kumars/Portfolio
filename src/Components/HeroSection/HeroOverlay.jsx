import React from 'react'

const HeroOverlay = () => {
  return (
    <div className='h-full w-full overflow-hidden'>

      <div className='absolute max-md:-top-30 md:-top-15 left-0 -z-50 blur-[5rem] bg-[radial-gradient(ellipse_at_bottom,#1a0033,#000000_70%)] h-full w-full'/>
    </div>
  )
}

export default HeroOverlay
