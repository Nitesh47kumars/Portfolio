import React from 'react'
import HeroContent from './HeroContent'
import HeroImg from './HeroImg'

const HeroSection = () => {
  return (
    <div className='w-full mt-40 max-md:mt-30 flex justify-center items-center overflow-hidden py-5'>
      <div className='w-[80%] h-auto md:h-[20rem] flex justify-between items-center md:flex-row max-md:flex-col max-sm:gap-10 max-md:gap-6'>
        <HeroContent/>
        <HeroImg/>
      </div>
    </div>
  )
}

export default HeroSection
