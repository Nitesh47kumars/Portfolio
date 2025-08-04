import React from 'react'

const AboutContent = () => {
  return (
    <div className='flex flex-col max-lg:w-full lg:w-[60%] max-md:w-130 md:tracking-widest
        max-lg:items-center'>
        <h1 className='max-lg:text-center'>About Me!</h1>
            <br/>
        <div className='flex flex-col gap-5 max-lg:text-center md:leading-8
            max-sm:w-[90vw] max-sm:text-[clamp(10px,2vw,15px)]'>
            <p>
                Hi! I’m Nitesh Kumar, a 19-year-old passionate web developer and video editor. Currently, I’m a second-year BCA student, diving deep into the world of coding and design. I have hands-on experience with HTML, CSS, JavaScript, React, and Tailwind CSS, and I love creating clean, responsive, and user-friendly websites.
            </p>
            <p>
                Alongside web development, I also enjoy video editing, which helps me bring creativity and storytelling into my projects. This portfolio is my first step to showcase my skills, projects, and journey as I grow in the tech world.
            </p>
            <p>
                I’m excited to connect, learn, and create meaningful digital experiences. Let’s build something amazing together!
            </p>
        </div>
    </div>
  )
}

export default AboutContent
