import React from 'react'
import Motion from './Motion'
import Tools from './Tools'
import Hobbies from './Hobbies'
import Email from './Email'
import Frontend from './Frontend'

const Skills = () => {
  return (
    <div id='skills' className=' text-black w-full flex justify-center items-center'>
        <div className='w-[80%] grid grid-cols-3 gap-5 my-20'>
            <Frontend/>
            <Motion/>
            <Tools/>
            <Email/>
            <Hobbies/>
        </div>
    </div>
  )
}

export default Skills
