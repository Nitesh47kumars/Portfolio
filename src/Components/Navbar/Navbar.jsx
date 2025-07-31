import React from 'react'
import NavbarLogo from'./NavbarLogo'
import NavbarList from './NavbarList'
import NavbarBtn from './NavbarBtn'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className='flex justify-center w-full mt-5 max-md:justify-around'>
      <div className='w-[80%] flex justify-between items-center border-2 rounded-full py-2 px-[9px] ps-4'>
        <NavbarLogo/>
        <NavbarList/>
        <NavbarBtn/>
      </div>
      <div className='md:hidden border-2 flex justify-center items-center w-15 rounded-full'>
        <GiHamburgerMenu/>
      </div>
    </nav>
  )
}

export default Navbar
