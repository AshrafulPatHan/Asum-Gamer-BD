import Navbar from '../navigation/Navbar';
import DonLink from './DonLink';
import BanerSlider from './BanerSlider';
import Footer from '../navigation/Footer';
import Taller from './Game Video/Taller';
import Latest from './Latest';
import HighestRated from './HighestRated';
import News from './News';


const Home = () => {


    return (
        <div >
            <Navbar />
            <BanerSlider/>
            <HighestRated/>
            <Latest/>
            <Taller/>
            <News/>
            <DonLink/>
            <Footer/>
        </div>
    );
};

export default Home;