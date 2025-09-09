import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { scroller, Element } from 'react-scroll';

import HeroSection from './Components/HeroSection/HeroSection';
import About from './Components/About/About';
import Banner from './UI/Banner';
import Skills from './Components/Skills/Skills';
import Project from './Components/Projects/Project';
import Contact from './Components/Contact/Contact';

import useLenis from './Motions/UseLenis';

const Home = () => {
  useLenis();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const section = location.state?.scrollTo;

    if (section) {
      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 600,
          offset: -100,
        });

        navigate(location.pathname, { replace: true, state: {} });
      }, 100);
    }
  }, [location.state, navigate, location.pathname]);

  return (
    <>
      <Element name="home">
        <HeroSection />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Banner />

      <Element name="skills">
        <Skills />
      </Element>

      <Element name="projects">
        <Project />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>
    </>
  );
};

export default Home;
