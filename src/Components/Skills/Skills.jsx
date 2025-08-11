import React from 'react'
import Frondend from './Frondend'
import Motion from './Motion'
import Tools from './Tools'
import Hobbies from './Hobbies'
import Email from './Email'

const Skills = () => {
  return (
    <div className=' text-black w-full mt-20 flex justify-center items-center'>
        <div className='w-[80%] grid grid-cols-3 gap-4'>
            <Frondend/>
            <Motion/>
            <Tools/>
            <Email/>
            <Hobbies/>
        </div>
    </div>
  )
}

export default Skills
