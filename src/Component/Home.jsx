import React from 'react';
import { toast } from 'react-toastify';
import Navbar from './Navbar';
import Footer from './Footer';
import BanerSlider from './BanerSlider';
import HRated from './HRated';
import { Link, useLoaderData } from 'react-router-dom';
import Play from './Play';
import New from './New';
import DonLink from './DonLink';
import Hero from './Hero';

const Home = () => {




    return (
        <div>
            <div>
                <Navbar />
                <BanerSlider/>
                <HRated/>
                <Hero/>
                <New/>
                <DonLink/>
                <Footer/>
            </div>
        </div>
    );
};

export default Home;