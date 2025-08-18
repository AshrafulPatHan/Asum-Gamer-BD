import './App.css'
import About from './components/home/About'
import BanerSlider from './components/home/BanerSlider'
import DonLink from './components/home/DonLink'
import HighestRated from './components/home/HighestRated'
import Latest from './components/home/Latest'
import LatestNews from './components/home/News'
import Taller from './components/home/Taller'
import Footer from './components/navigation/Footer'
import Navbar from './components/navigation/Navbar'

function App() {

  return (
  <div>
    <Navbar/>
    <BanerSlider/>
    <DonLink/>
    <About/>
    <HighestRated/>
    <Latest/>
    <Taller/>
    <LatestNews/>
    <Footer/>
  </div>
  )
}

export default App
