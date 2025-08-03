import React from 'react'
import {Link} from 'react-scroll'

const NavbarList = () => {
    const links = [
        {link: "Home",section:"home"},
        {link: "About Me",section:"about"},
        {link: "Skills",section:"skills"},
        {link: "Contact Me",section:"contact"},
    ]
  return (
    <div>
        <ul className='flex gap-10 max-md:gap-6 z-10 font-bold md:flex-row max-md:flex-col max-md:absolute max-md:top-[85px] max-md:py-4 max-md:left-0 max-md:w-full max-md:text-center max-md:backdrop-blur-lg'>
            {links.map((curr,idx)=>{
                return <li key={idx} className='group'>
                    <Link to={curr.section} className='cursor-pointer group-hover:text-green-400 transition-all duration-500'>{curr.link}</Link>
                    <div className='h-[1px] mx-auto bg-green-400 w-0 group-hover:w-full transition-all duration-500'/>
                </li>
            })}
        </ul>
    </div>
  )
}

export default NavbarList
