import React from 'react'
import {motion} from 'motion/react'
import {animation} from '../../Motions/Animation'

const Motion = () => {
  return (
    <motion.div
      variants={animation("right",0.2)}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{once:false, amount:0}}
      className='row-span-2 h-full rounded
      shadow-[inset_-6px_6px_60px_rgba(225,225,225,0.2)] hover:shadow-[inset_0_0px_80px_rgba(255,255,255,0.2)]'>
        <h1>Motion...</h1>
    </motion.div>
  )
}

export default Motion
