import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';

const NavbarList = ({ setMobMenu }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { link: 'Home', section: 'home' },
    { link: 'About Me', section: 'about' },
    { link: 'Skills', section: 'skills' },
    { link: 'Projects', section: 'projects' },
    { link: 'Contact Me', section: 'contact' },
  ];

  const handleClick = (section) => {
    setMobMenu(false); // Close mobile menu if open

    if (location.pathname === '/') {
      // Already on homepage — scroll directly
      scroller.scrollTo(section, {
        smooth: true,
        duration: 600,
        offset: -100,
      });
    } else {
      // Navigate to homepage and scroll after render
      navigate('/', { state: { scrollTo: section } });
    }
  };

  return (
    <ul className="flex flex-col gap-6 text-center font-bold text-white md:flex-row md:gap-6 lg:gap-10">
      {links.map((curr, idx) => (
        <li key={idx} className="group text-nowrap">
          <button
            onClick={() => handleClick(curr.section)}
            className="cursor-pointer group-hover:text-green-400 transition-all duration-500"
          >
            {curr.link}
          </button>
          <div className="h-[1px] mx-auto bg-green-400 w-0 group-hover:w-full transition-all duration-500" />
        </li>
      ))}
    </ul>
  );
};

export default NavbarList;
