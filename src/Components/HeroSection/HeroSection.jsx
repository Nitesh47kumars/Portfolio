import React from 'react'
import HeroContent from './HeroContent'
import HeroImg from './HeroImg'

const HeroSection = () => {
  return (
    <div id='home' className='w-full pt-50 max-md:pt-40 flex justify-center items-center pb-5 overflow-hidden'>
      <div className='w-[80%] h-auto md:h-[20rem] flex justify-between items-center md:flex-row max-md:flex-col max-sm:gap-10 max-md:gap-6'>
        <HeroContent/>
        <HeroImg/>
      </div>
    </div>
  )
}

export default HeroSection
