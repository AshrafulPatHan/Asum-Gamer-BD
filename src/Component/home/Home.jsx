import React from 'react';
import { toast } from 'react-toastify';
import Navbar from '../navigation/Navbar';
import Footer from '../navigation/Footer';
import BanerSlider from './BanerSlider';
import HRated from './HRated';
import { Link, useLoaderData } from 'react-router-dom';
import DonLink from './DonLink';

const Home = () => {


    return (
        <div>
            <div>
                <Navbar />
                <BanerSlider/>
                <HRated/>
                <DonLink/>
                <Footer/>
            </div>
        </div>
    );
};

export default Home;