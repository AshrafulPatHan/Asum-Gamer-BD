import React from 'react';
import { toast } from 'react-toastify';
import Navbar from './Navbar';
import Footer from './Footer';
import BanerSlider from './BanerSlider';
import HRated from './HRated';
import { Link, useLoaderData } from 'react-router-dom';
import Play from './Play';
import New from './New';

const Home = () => {




    return (
        <div>
            <div>
                <Navbar />
                <BanerSlider/>
                <HRated/>
                <div className='flex flex-col items-center my-7'>
                    <h3 className='text-4xl font-bold'>Play station</h3>
                    <Link className='btn mt-4' to='./Play'>Click to play game</Link>
                </div>
                <New/>
                <Footer/>
            </div>
        </div>
    );
};

export default Home;