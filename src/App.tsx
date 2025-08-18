import './App.css'
import About from './components/home/About'
import BanerSlider from './components/home/BanerSlider'
import DonLink from './components/home/DonLink'
import HighestRated from './components/home/HighestRated'
import Latest from './components/home/Latest'
import LatestBlog from './components/home/LatestBlog'
import Taller from './components/home/Taller'
import Footer from './components/navigation/Footer'
import Navbar from './components/navigation/Navbar'

function App() {

  return (
  <div className=' bg-white dark:bg-black text-black dark:text-white '>
    <Navbar/>
    <BanerSlider/>
    <DonLink/>
    <About/>
    <HighestRated/>
    <Latest/>
    <Taller/>
    <LatestBlog/>
    <Footer/>
  </div>
  )
}

export default App
