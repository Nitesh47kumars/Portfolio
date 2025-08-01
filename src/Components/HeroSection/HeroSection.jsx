import React from 'react'
import HeroContent from './HeroContent'
import HeroImg from './HeroImg'

const HeroSection = () => {
  return (
    <div className='w-full p-5'>
      <div className='flex justify-around'>
        <HeroContent/>
        <HeroImg/>
      </div>
    </div>
  )
}

export default HeroSection
