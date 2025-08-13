import React from 'react'
import {motion} from 'motion/react'
import {animation} from '../../Motions/Animation'

const Email = () => {
  return (
    <motion.div
      variants={animation("left",0.2)}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{once:false, amount:0}}
      className='h-[300px] rounded-xl
      shadow-[inset_0_0_60px_rgba(225,225,225,0.2)] hover:shadow-[inset_0_0px_80px_rgba(255,255,255,0.2)]'>
      <h1>Email...</h1>
    </motion.div>
  )
}

export default Email
