import React from 'react'
import {motion} from 'motion/react'
import {animation} from '../../Motions/Animation'

const Tools = () => {
  const icons = [
    {name:'Figma',icon:'/ToolsIcon/Figma-logo.svg.png'},
    {name:'Figma',icon:'/ToolsIcon/framer-motion.svg'},
    {name:'Figma',icon:'/ToolsIcon/Git_icon.svg.png'},
    {name:'Figma',icon:'/ToolsIcon/lenis-new-smooth-scroll-library.png'},
    {name:'Figma',icon:'/ToolsIcon/Octicons-mark-github.svg.png'},
    
  ]

  const getItemStyle = (index) => {
    const sizes = ["h-20 w-20", "h-22 w-22", "h-24 w-24"];
    const delays = ["delay-[200ms]", "delay-[100ms]", "delay-[0ms]"];
  
    if (index === 2) return { size: sizes[2], delay: delays[2] }; // Middle
    if (index === 1 || index === 3) return { size: sizes[1], delay: delays[1] }; // Adjacent
    return { size: sizes[0], delay: delays[0] }; // Outer
  };

  return (
    <motion.div
      variants={animation("down",0.2)}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{once:false, amount:0}}
      className='h-[200px] col-span-2 rounded py-5 group duration-500
      shadow-[inset_6px_-6px_60px_rgba(225,225,225,0.2)] hover:shadow-[inset_0_0px_80px_rgba(255,255,255,0.2)]'>
      <motion.h1
        variants={animation("scale", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-center text-white text-xl"
      >
        Tools
      </motion.h1>

      <ul className='flex flex-1 h-full justify-around items-center'>
        {icons.map((curr,idx)=>{
          const {size,delay} = getItemStyle(idx)
          return <li
          key={idx}
          >
            <div
                className={`${size} ${delay} rounded-[20px] border-2 border-[#A5AEB81F] p-2
                  transition-all duration-500 md:group-hover:-translate-y-2
                  md:group-hover:border-indigo-400 hover:border-blue-600`}
              >
                <div
                  className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10
                    bg-[#EDEEF0] dark:border-[#5A5F661F]/10 dark:bg-[#1A1B1E]"
                  style={{
                    boxShadow:
                      "rgba(165, 174, 184, 0.32) 0px 2px 1.5px 0px inset",
                  }}
                >
                  <img
                    className="h-[40px] w-[45px] object-cover"
                    src={curr.icon}
                    alt={`${curr.name} icon`}
                  />
                </div>
              </div>
          </li>
        })}
      </ul>
    </motion.div>
  )
}

export default Tools
