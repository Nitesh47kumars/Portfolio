import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import BottomContent from './Components/Footer/BottomContent';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <BottomContent />
    </>
  );
};

export default Layout;
