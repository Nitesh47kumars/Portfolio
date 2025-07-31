import React from 'react'

const NavbarList = () => {

    const links = [
        {link: "Home",section:"home"},
        {link: "About Me",section:"about"},
        {link: "Skills",section:"skills"},
        {link: "Contact Me",section:"contact"},
    ]
  return (
    <div>
        <ul className='flex gap-5 font-semibold '>
            {links.map((curr,idx)=>{
                return <li key={idx} className='group'>
                    <a className='cursor-pointer hover:text-green-400 transition-all duration-500' href='#'>{curr.link}</a>
                    <div className='h-[1px] mx-auto bg-green-400 w-0 group-hover:w-full transition-all duration-500'/>
                </li>
            })}
        </ul>
    </div>
  )
}

export default NavbarList
