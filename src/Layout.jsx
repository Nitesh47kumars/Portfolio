import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import BottomContent from './Components/Footer/BottomContent';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './Motions/ScrollToTop';

const Layout = () => {
  return (
    <>
      <ScrollToTop/>
      <Navbar />
      <Outlet />
      <BottomContent />
    </>
  );
};

export default Layout;
