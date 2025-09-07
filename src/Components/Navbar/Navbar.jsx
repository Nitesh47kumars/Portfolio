import React, { useEffect, useRef, useState } from 'react';
import NavbarLogo from './NavbarLogo';
import NavbarList from './NavbarList';
import NavbarBtn from './NavbarBtn';
import { GiHamburgerMenu } from 'react-icons/gi';
import { motion } from 'framer-motion';
import { animation } from '../../Motions/Animation';

const Navbar = () => {
  const [mobMenu, setMobMenu] = useState(false);

  const menuRef = useRef();
  const buttonRef = useRef();

  const onToggle = () => {
    setMobMenu(!mobMenu);
  };

  useEffect(() => {
    if (!mobMenu) return;

    const handleScroll = () => setMobMenu(false);

    const handleOutClick = (e) => {
      const isOutsideMenu = menuRef.current && !menuRef.current.contains(e.target);
      const isOutsideButton = buttonRef.current && !buttonRef.current.contains(e.target);
      if (isOutsideMenu && isOutsideButton) {
        setMobMenu(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleOutClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleOutClick);
    };
  }, [mobMenu]);

  return (
    <>
      <motion.nav
        variants={animation('down', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex justify-center w-full max-md:justify-around fixed top-0 py-5 backdrop-blur-[2px] z-[50]"
      >
        <div className="w-[80%] flex justify-between items-center border-2 rounded-full py-2 px-[9px] ps-4">
          <NavbarLogo />
          <div className="hidden md:block">
            <NavbarList setMobMenu={setMobMenu} />
          </div>
          <NavbarBtn />
        </div>
        <div>
          <button
            ref={buttonRef}
            onClick={onToggle}
            className="md:hidden border-2 flex justify-center items-center w-15 rounded-full h-full hover:scale-105 transition-all duration-300"
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      {mobMenu && (
        <div
          ref={menuRef}
          className="fixed inset-0 top-[80px] h-65 backdrop-blur-[4px] z-[40] flex flex-col items-center justify-start pt-6 space-y-6"
        >
          <NavbarList setMobMenu={setMobMenu} />
        </div>
      )}
    </>
  );
};

export default Navbar;
