import React from 'react'
import AboutContent from './AboutContent'
import AboutImage from './AboutImage'

const About = () => {
  return (
    <div
    className='relative max-md:mt-80 md:mt-120 pb-15 w-full flex justify-center items-center'>
        <div className='w-[80%] flex lg:flex-row max-lg:flex-col lg:justify-between items-center'>
            <AboutContent/>
            <AboutImage/>
        </div>
    </div>
  )
}

export default About
