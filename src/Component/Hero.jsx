import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
<div className=''>
        <div className='flex flex-col items-center mt-3 mb-3'>
            <div
            className="hero min-h-screen w-[70%]  "
            style={{
                backgroundImage: "url(https://www.91-cdn.com/hub/wp-content/uploads/2022/02/PC3.jpg)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Play station</h1>
                        <Link className='btn mt-4' to='./Play'>Click to play game</Link>
                    </div>
                </div>
            </div>
        </div>
</div>
    );
};

export default Hero;