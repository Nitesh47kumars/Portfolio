import About from './Components/About/About'
import HeroOverlay from './Components/HeroSection/HeroOverlay'
import HeroSection from './Components/HeroSection/HeroSection'
import LandingBase from './Components/LandingBase.jsx/LandingBase'
import Navbar from './Components/Navbar/Navbar'
import Skills from './Components/Skills/Skills'
import useLenis from './Motions/UseLenis';
import Banner from './UI/Banner'
import BottomContent from './UI/BottomContent'
import Project from './Components/Projects/Project'

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
      <BottomContent/>
    </>
  )
}

export default App
