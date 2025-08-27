import About from './Components/About/About'
import ContactSection from './Components/Contact/ContactSection'
import HeroOverlay from './Components/HeroSection/HeroOverlay'
import HeroSection from './Components/HeroSection/HeroSection'
import LandingBase from './Components/LandingBase.jsx/LandingBase'
import Navbar from './Components/Navbar/Navbar'
import Skills from './Components/Skills/Skills'
import useLenis from './Motions/UseLenis';
import Banner from './UI/Banner'
import BlackHole from './UI/BlackHole'

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
      <Banner/>
      <BlackHole/>
      <ContactSection/>
    </>
  )
}

export default App
