import About from './Components/About/About'
import HeroOverlay from './Components/HeroSection/HeroOverlay'
import HeroSection from './Components/HeroSection/HeroSection'
import LandingBase from './Components/LandingBase.jsx/LandingBase'
import Navbar from './Components/Navbar/Navbar'
import Skills from './Components/Skills/Skills'
import useLenis from './Motions/UseLenis';
import Banner from './UI/Banner'
import BottomContent from './Components/Footer/BottomContent'
import Project from './Components/Projects/Project'
import Contact from './Components/Contact/Contact'

function App() {
  useLenis();
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <HeroOverlay/>
      <LandingBase/>
      <About/>
      <Banner/>
      <Skills/>
      <Project/>
      <Contact/>
      <BottomContent/>
    </>
  )
}

export default App
