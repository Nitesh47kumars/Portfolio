import About from './Components/About/About'
import ContactSection from './Components/Contact/ContactSection'
import HeroOverlay from './Components/HeroSection/HeroOverlay'
import HeroSection from './Components/HeroSection/HeroSection'
import LandingBase from './Components/LandingBase.jsx/LandingBase'
import Navbar from './Components/Navbar/Navbar'
import Skills from './Components/Skills/Skills'
import useLenis from './Motions/UseLenis';

function App() {
  useLenis();
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <HeroOverlay/>
      <LandingBase/>
      <About/>
      <Skills/>
      <ContactSection/>
    </>
  )
}

export default App
