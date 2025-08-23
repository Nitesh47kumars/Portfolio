import React from 'react'
import {motion} from "motion/react"
import { animation } from '../../Motions/Animation';

const AboutContent = () => {
  return (
    <div
    className='flex flex-col max-lg:w-full lg:w-[60%] max-md:w-full md:tracking-widest
        max-lg:items-center'>
        <motion.h1
        variants={animation("right",0.1)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once:true,amount:0}}
        className='max-lg:text-center max-sm:text-sm'>About Me!</motion.h1>

            <br/>

        <motion.h1
        variants={animation("right",0)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once:true,amount:0}}
            className='text-5xl font-bold lg:text-[clamp(40px,4vw,48px)] max-lg:text-center
            max-sm:text-[clamp(22px,4vw,35px)] max-lg:text-[clamp(35px,2vw,40px)] whitespace-nowrap'
            style={{
                textShadow:
                    '0px 4px 8px rgba(255, 255, 255, 0.1), 0px 8px 30px rgba(255, 255, 255, 0.5)',
            }}>
                    
            I'm Nitesh Kumar, A 
            <br/>
            Creative <span className='bg-clip-text text-transparent tracking-tight bg-gradient-to-r from-[#ff8000] via-[#f0c] to-[#04f]'>Dev & Video-Editor</span>
        </motion.h1>

            <br/>

        <div className='flex flex-col max-sm:gap-3 gap-5 max-lg:text-center md:leading-6
            max-sm:w-[80vw] max-sm:text-[clamp(10px,2vw,15px)] lg:text-[clamp(10px,2vw,14px)]'>
            <motion.p
                variants={animation("right",0.2)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{once:true,amount:0}}
                >
                Hi! I’m Nitesh Kumar, a 19-year-old passionate web developer and video editor. Currently, I’m a second-year BCA student, diving deep into the world of coding and design. I have hands-on experience with HTML, CSS, JavaScript, React, and Tailwind CSS, and I love creating clean, responsive, and user-friendly websites.
            </motion.p>
            <motion.p
                variants={animation("right",0.3)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{once:true,amount:0}}
                >
                Alongside web development, I also enjoy video editing, which helps me bring creativity and storytelling into my projects. This portfolio is my first step to showcase my skills, projects, and journey as I grow in the tech world.
            </motion.p>
            <motion.p
                variants={animation("right",0.4)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{once:true,amount:0}}
                >
                I’m excited to connect, learn, and create meaningful digital experiences. Let’s build something amazing together!
            </motion.p>
        </div>
    </div>
  )
}

export default AboutContent
