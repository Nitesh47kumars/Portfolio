import About from './Components/About/About'
import HeroOverlay from './Components/HeroSection/HeroOverlay'
import HeroSection from './Components/HeroSection/HeroSection'
import LandingBase from './Components/LandingBase.jsx/LandingBase'
import Navbar from './Components/Navbar/Navbar'
function App() {

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <HeroOverlay/>
      <LandingBase/>
      <About/>
    </>
  )
}

export default App
