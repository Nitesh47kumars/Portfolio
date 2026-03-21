import React from 'react'
import BackendSkills from './BackendSkills'
import Hobbies from './Hobbies'
import Email from './Email'
import Frontend from './Frontend'
import SoftSkills from './SoftSkills'

const Skills = () => {
  return (
    <div id='skills' className=' text-black w-full flex justify-center items-center'>
        <div className='md:w-[80%] max-md:w-[90%] grid md:grid-cols-6 max-md:grid-cols-1 gap-5'>
            <Frontend/>
            <SoftSkills/>
            <Hobbies/>
            <Email/>
            <BackendSkills/>
        </div>
    </div>
  )
}

export default Skills
