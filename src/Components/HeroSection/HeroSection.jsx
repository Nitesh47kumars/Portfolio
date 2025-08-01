import React from 'react'
import HeroContent from './HeroContent'
import HeroImg from './HeroImg'

const HeroSection = () => {
  return (
    <div className='w-full mt-10 flex justify-center'>
      <div className='w-[80%] h-auto flex justify-between items-center md:flex-row max-md:flex-col'>
        <HeroContent/>
        <HeroImg/>
      </div>
    </div>
  )
}

export default HeroSection
