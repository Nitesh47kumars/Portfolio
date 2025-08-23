import React from 'react'
import {motion} from 'motion/react'
import {animation} from '../../Motions/Animation'
const HeroImg = () => {
  return (
    <motion.div
      variants={animation("left",0.2)}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{once:true,amount:0}}
      className='flex justify-center items-center relative'>
        <div className='rounded-full overflow-hidden flex justify-center items-center bg-red-300 md:w-60 md:h-60 lg:w-80 lg:h-80 max-md:w-70 max-md:h-70 max-sm:h-60 max-sm:w-60'>
            <img className='h-full w-full object-cover' src='/Pic.jpg' alt='Photo'/>
        </div>

        <div className='absolute inset-0 rounded-full z-15 shadow-[inset_0_0_40px_rgba(0,0,0,1)]'/>

        <div className='absolute p-40 max-sm:p-36 md:p-50 flex justify-center items-center overflow-hidden -z-1'>
          <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-1 md:w-62 md:h-62 lg:w-82 lg:h-82  max-md:w-72 max-md:h-72 max-sm:h-62 max-sm:w-62 bg-gradient-to-r from-[#E8AA14] to-blue-600 rounded-full blur-sm animate-[spin_10s_linear_infinite]'></div>
        </div>
    </motion.div>
  )
}

export default HeroImg
