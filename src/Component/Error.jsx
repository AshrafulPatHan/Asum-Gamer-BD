import React from 'react';
import { Link } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const Error = () => {
    return (
        <div>
            <div className='flex flex-col items-center '>
                <div>
                    <h3 className='text-7xl font-bold text-center my-2 '>Error 404</h3>
                    <div className='flex flex-col md:flex-row items-center gap-2'>
                        <h3 className='text-4xl font-bold text-center my-2 '>Page is not found</h3>
                        <Link className='text-2xl font-bold text-sky-400  ' to='/'>Go Home</Link>
                    </div>
                    
                </div>
                <div className='flex flex-col items-center'>
                    <DotLottieReact
                    src="https://lottie.host/b3f5b940-a3be-4078-8412-48162873ba31/16DGjv4zMk.lottie"
                    loop
                    autoplay
                    className=' w-[322px] sm:w-[600px] md:w-[750px] xl:w-[1200px]  '
                    />
                </div>
                <div>
                    <p>@ All righr regarv for Chill Gamer</p>
                </div>
            </div>
        </div>
    );
};

export default Error;