import React from 'react'
import HeroContent from './HeroContent'
import HeroImg from './HeroImg'
import HeroOverlay from './HeroOverlay'

const HeroSection = () => {
  return (
    <>
      <div className='w-full mt-15 flex justify-center'>
        <div className='w-[80%] h-auto flex justify-between items-center md:flex-row max-md:flex-col max-md:gap-5'>
          <HeroContent/>
          <HeroImg/>
        </div>
      </div>
      <HeroOverlay/>
    </>
  )
}

export default HeroSection
