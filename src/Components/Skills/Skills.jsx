import React from 'react'
import Tools from './Tools'
import Hobbies from './Hobbies'
import Email from './Email'
import Frontend from './Frontend'
import SoftSkills from './SoftSkills'

const Skills = () => {
  return (
    <div id='skills' className=' text-black w-full flex justify-center items-center'>
        <div className='w-[80%] grid md:grid-cols-3 max-md:grid-cols-1 gap-5 my-20'>
            <Frontend/>
            <SoftSkills/>
            <Hobbies/>
            <Email/>
            <Tools/>
        </div>
    </div>
  )
}

export default Skills
