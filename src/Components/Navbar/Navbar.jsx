import React, { useEffect, useRef, useState } from 'react'
import NavbarLogo from'./NavbarLogo'
import NavbarList from './NavbarList'
import NavbarBtn from './NavbarBtn'
import { GiHamburgerMenu } from "react-icons/gi";
import {motion} from "motion/react"
import {animation} from "../../Motions/Animation"

const Navbar = () => {
  const [mobMenu,setMobMenu] = useState(false);

  const menuRef = useRef();
  const buttonRef = useRef();

  const onToggle = () =>{
    setMobMenu(!mobMenu);
  }

  useEffect(()=>{
    if(!mobMenu) return ;

    const HandleScroll = () =>{
      setMobMenu(false);
    }
  
    const HandleOutClick = (e) =>{
      const isOutsideMenu = menuRef.current && !menuRef.current.contains(e.target);
      const isOutsideButton = buttonRef.current && !buttonRef.current.contains(e.target);

      if (isOutsideMenu && isOutsideButton) {
        setMobMenu(false);
      }
    }
  
    window.addEventListener("scroll",HandleScroll);
    document.addEventListener("click",HandleOutClick);

    return ()=>{
      window.removeEventListener("scroll",HandleScroll);
      document.removeEventListener("click",HandleOutClick);
    }
  },[mobMenu])

  return (
    <motion.nav
      variants={animation("down",0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{once:true}}
      className='flex justify-center w-full max-md:justify-around
      fixed top-0 z-2 py-5 backdrop-blur-[2px]'>
      <div className='w-[80%] flex justify-between items-center border-2 rounded-full py-2 px-[9px] ps-4'>
        <NavbarLogo/>
        <div
        ref={menuRef}
        className={`${mobMenu? "block" : "hidden"} md:block`}>
          <NavbarList setMobMenu={setMobMenu}/>
        </div>
        <NavbarBtn/>
      </div>
      <div>
        <button
        ref={buttonRef}
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
