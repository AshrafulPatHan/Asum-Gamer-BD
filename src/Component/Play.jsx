import React from 'react';
import Game from './home/Game';
import Navbar from './navigation/Navbar';
import Footer from './navigation/Footer';

const Play = () => {
    return (
        <div>
            <Navbar/>
            <div>
                <h3 className='text-6xl font-bold text-center my-7 ' >Play game</h3>
                <div className='flex flex-col items-center mb-5'>
                    <Game/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Play;