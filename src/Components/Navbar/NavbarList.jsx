import React from 'react';
import { Link } from 'react-scroll';

const NavbarList = ({ setMobMenu }) => {
  const links = [
    { link: 'Home', section: 'home' },
    { link: 'About Me', section: 'about' },
    { link: 'Skills', section: 'skills' },
    { link: 'Projects', section: 'projects' },
    { link: 'Contact Me', section: 'contact' },
  ];

  return (
    <ul className="flex flex-col gap-6 text-center font-bold text-white md:flex-row md:gap-6 lg:gap-10">
      {links.map((curr, idx) => (
        <li key={idx} className="group text-nowrap">
          <Link
            to={curr.section}
            activeClass="active"
            spy={true}
            smooth={true}
            duration={600}
            offset={-100}
            onClick={() => setMobMenu(false)}
            className="cursor-pointer group-hover:text-green-400 transition-all duration-500"
          >
            {curr.link}
          </Link>
          <div className="h-[1px] mx-auto bg-green-400 w-0 group-hover:w-full transition-all duration-500" />
        </li>
      ))}
    </ul>
  );
};

export default NavbarList;
