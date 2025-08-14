import React from 'react';
import {motion} from 'motion/react'
import {animation} from '../../Motions/Animation'

const Frontend = () => {
  const lang = [
    {
      name: "HTML",
      icon: "/HTML5_Badge.svg.png"
    },
    {
      name: "CSS",
      icon: "/CSS3_logo.svg.png"
    },
    {
      name: "JavaScript",
      icon: "/Unofficial_JavaScript_logo_2.svg.png"
    },
    {
      name: "React",
      icon: "/React-icon.svg.png"
    },
    {
      name: "TailwindCSS",
      icon: "/tailwind-icon-md.png"
    },
  ]
  return (
    <motion.div
      variants={animation("up",0.2)}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{once:false, amount:0}}
      className='col-span-2 p-5 h-[200px] rounded bg-black group transition-shadow duration-500
        shadow-[inset_0px_0px_80px_rgba(225,225,225,0.15)] hover:shadow-[inset_0_-35px_7rem_rgba(255,255,255,0.2)]'>
        
        <motion.h1
        variants={animation("scale",0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{once:false,amount:0}}
        className='text-center text-white text-xl'>Frontend Skills</motion.h1>

        <ul className='flex justify-between items-center p-5'>
          {lang.map((curr,idx)=>{
            let containerSize = "";
            let delayClass = "";
            
            switch(idx){
              case 0:
              case 4:
                containerSize = "h-20 w-20";
                delayClass = "delay-[200ms]";
                break;
              case 1:
              case 3:
                containerSize = "h-22 w-22";
                delayClass = "delay-[100ms]";
                break;
              case 2:
                containerSize = "h-24 w-24";
                delayClass = "delay-[0ms]";
                break;
              default:
                containerSize = "h-20 w-20";
                delayClass = "delay-[0ms]";
                break;
            }
            return <li
              key={idx}
              className='flex flex-col items-center'
              >
                <div className={`${containerSize} ${delayClass} rounded-[20px] border-2 border-[#A5AEB81F] p-2 transition-all duration-500 md:group-hover:-translate-y-2 md:group-hover:border-indigo-400
                hover:border-blue-600`}>
                    <div className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] dark:border-[#5A5F661F]/10 dark:bg-[#1A1B1E]"
                      style={{'box-shadow':'rgba(165, 174, 184, 0.32) 0px 2px 1.5px 0px inset'}}>
                      <img className="h-[40px] w-[45px] object-cover" src={curr.icon} alt="img"/>
                    </div>
                  </div>
                  <h1 className={`text-white ${delayClass} opacity-0 -translate-y-1 group-hover:opacity-100 transition-all duration-500`}>{curr.name}</h1>
            </li>
          })}
        </ul>
    </motion.div>
  );
};

export default Frontend;
