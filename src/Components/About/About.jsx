import React from 'react'
import AboutContent from './AboutContent'
import AboutImage from './AboutImage'

const About = () => {
  return (
    <div
    id='about'
    className='relative max-md:mt-70 md:mt-110 md:pb-30 w-full flex justify-center items-center'>
        <div className='w-[80%] flex max-sm:gap-5 lg:flex-row max-lg:flex-col lg:justify-between items-center'>
            <AboutContent/>
            <AboutImage/>
        </div>
    </div>
  )
}

export default About
