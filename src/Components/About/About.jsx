import React from 'react'
import AboutContent from './AboutContent'
import AboutImage from './AboutVideo'

const About = () => {
  return (
    <div
    id='about'
    className='relative max-md:mt-70 md:mt-100 w-full flex justify-center items-center'>
        <div className='md:w-[80%] max-md:w-[90%] flex max-md:gap-5 lg:flex-row max-lg:flex-col lg:justify-between items-center'>
            <AboutContent/>
            <AboutImage/>
        </div>
    </div>
  )
}

export default About
