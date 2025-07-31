import React from 'react'
import NavbarLogo from'./NavbarLogo'
import NavbarList from './NavbarList'
import NavbarBtn from './NavbarBtn'
const Navbar = () => {
  return (
    <nav className='flex justify-center w-full mt-5'>
      <div className=' w-[80%] flex justify-between items-center border-2 rounded-full p-5'>
        <NavbarLogo/>
        <NavbarList/>
        <NavbarBtn/>
      </div>
    </nav>
  )
}

export default Navbar
