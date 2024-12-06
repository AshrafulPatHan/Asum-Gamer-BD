import React from 'react';
import { toast } from 'react-toastify';
import Navbar from './Navbar';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <div>
                <Navbar />
                <Footer/>
            </div>
        </div>
    );
};

export default Home;