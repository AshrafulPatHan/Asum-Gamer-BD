import Navbar from '../navigation/Navbar';
import DonLink from './DonLink';
// import { toast } from 'react-toastify';
import BanerSlider from './BanerSlider';
import HRated from './HRated';
import Footer from '../navigation/Footer';
import Taller from './Game Video/Taller';
import Latest from './Latest';
import HighestRated from './HighestRated';
import News from './News';
// import { Link, useLoaderData } from 'react-router-dom';
// import Fullpage, { FullPageSections, FullpageSection } from "@ap.cx/react-fullpage";

const Home = () => {


    return (
        <div>
            <Navbar />
            <BanerSlider/>
            <HRated/>
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