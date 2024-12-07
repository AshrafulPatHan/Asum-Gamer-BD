import React from 'react';
import { toast } from 'react-toastify';
import Navbar from './Navbar';
import Footer from './Footer';
import BanerSlider from './BanerSlider';
import HRated from './HRated';

const Home = () => {
    return (
        <div>
            <div>
                <Navbar />
                <BanerSlider/>
                <HRated/>
                <Footer/>
            </div>
        </div>
    );
};

export default Home;