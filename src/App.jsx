import About from './Components/About/About'
import HeroOverlay from './Components/HeroSection/HeroOverlay'
import HeroSection from './Components/HeroSection/HeroSection'
import LandingBase from './Components/LandingBase.jsx/LandingBase'
import Navbar from './Components/Navbar/Navbar'
import Skills from './Components/Skills/Skills'
function App() {

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <HeroOverlay/>
      <LandingBase/>
      <About/>
      <Skills/>
    </>
  )
}

export default App
