import React from 'react'
import { TbCircleDashed } from "react-icons/tb";const HeroImg = () => {
  return (
    <div className='flex justify-center items-center relative'>
        <div className='rounded-full overflow-hidden flex justify-center bg-red-300 w-70 h-70'>
            <img className='h-full w-full' src='/Pic.jpg' alt=''/>
        </div>
        <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-10 w-72 h-72 bg-gradient-to-r from-red-600 to-blue-600 rounded-full blur-sm'></div>
    </div>
  )
}

export default HeroImg
