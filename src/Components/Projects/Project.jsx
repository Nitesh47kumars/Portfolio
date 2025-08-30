import React from 'react'
import ProjectData from './ProjectData.json'

const Project = () => {
  return (
    <div className='w-full place-items-center'>
      <div className='w-[80%] flex justify-around gap-10'>
        <div className='bg-gradient-to-r from-pink-500 to-orange-500 w-full'>
          <img/>
        </div>
        <div className='w-full'>
          {ProjectData.map((curr,idx)=>{
            const {title,description,features} = curr;
            return <li key={idx}>
              <h1>{title}</h1>
              <p>{description}</p>
            </li>
          })}
        </div>
      </div>
    </div>
  )
}

export default Project
