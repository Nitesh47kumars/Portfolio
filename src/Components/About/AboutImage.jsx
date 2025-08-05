import React from 'react'

const AboutImage = () => {
  return (
    <div className='overflow-hidden lg:w-[40%] relative'>
      <div className='lg:w-[100%] lg:h-100 object-cover overflow-hidden'>
        <img src='/Picture.jpg' alt=''/>
      </div>
      <div className='absolute top-0 right-0 bg-gradient-to-r from-black to-transparent'/>
    </div>
  )
}

export default AboutImage
