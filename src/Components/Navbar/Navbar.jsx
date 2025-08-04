import React, { useState } from 'react'
import NavbarLogo from'./NavbarLogo'
import NavbarList from './NavbarList'
import NavbarBtn from './NavbarBtn'
import { GiHamburgerMenu } from "react-icons/gi";
import {motion} from "motion/react"
import {animation} from "../../FramerMotion/Animation"

const Navbar = () => {
  const [mobMenu,setMobMenu] = useState(false);

  const onToggle = () =>{
    setMobMenu(!mobMenu);
  }

  return (
    <motion.nav
      variants={animation("down",0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{once:true}}
      className='flex justify-center w-full mt-5 max-md:justify-around'>
      <div className='w-[80%] flex justify-between items-center border-2 rounded-full py-2 px-[9px] ps-4'>
        <NavbarLogo/>
        <div className={`${mobMenu? "block" : "hidden"} md:block`}>
          <NavbarList/>
        </div>
        <NavbarBtn/>
      </div>
      <div>
        <button
        onClick={onToggle}
         className='md:hidden border-2 flex justify-center items-center w-15 rounded-full h-full hover:scale-105 transition-all duration-300'
        >
          <GiHamburgerMenu/>
        </button>
      </div>
    </motion.nav>
  )
}

export default Navbar
