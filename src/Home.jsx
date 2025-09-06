import React from 'react';

import HeroSection from './Components/HeroSection/HeroSection';
import About from './Components/About/About';
import Banner from './UI/Banner';
import Skills from './Components/Skills/Skills';
import Project from './Components/Projects/Project';
import Contact from './Components/Contact/Contact';

import useLenis from './Motions/UseLenis';

const Home = () => {
  useLenis(); // For smooth scrolling or whatever motion logic you have

  return (
    <>
      <HeroSection />
      <About />
      <Banner />
      <Skills />
      <Project />
      <Contact />
    </>
  );
};

export default Home;
