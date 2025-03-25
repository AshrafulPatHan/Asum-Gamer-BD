import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BanerSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1724, 
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div className="flex flex-col items-center justify-center my-5 px-4">
            <div className='w-[80%]  ' >
                <Slider {...settings}>
                    <div className="p-3">
                        <div className='flex flex-col items-start bg-sky-300  p-2 sm:p-4 rounded-2xl '>
                            <img src="https://i.ibb.co.com/L0Zqk7c/2x1-NSwitch-Minecraft-image1600w.jpg" alt="minecraft"
                            className="w-full h-[250px] md:h-[300px] rounded-xl object-cover " />
                            <h2 className='text-2xl font-bold'>Minecraft</h2>
                            <p className='text-base font-bold'>Creativity has no limite</p>
                            <p>Rating</p>
                        </div>
                    </div>
                    <div className="p-3">
                        <div className='flex flex-col items-start bg-sky-300  p-2 sm:p-4 rounded-2xl '>
                            <img
                                src="https://i.ibb.co.com/6NZyr8T/capsule-616x353.jpg"
                                className="w-full h-[250px] md:h-[300px] rounded-xl object-cover "
                                />
                                <h2 className='text-2xl font-bold'>Microsoft Flite Semolater</h2>
                                <p className='text-base font-bold'>flay and go any ware</p>
                                <p>Rating</p>
                        </div>
                    </div>
                    <div className="p-3">
                        <div className='flex flex-col items-start bg-sky-300  p-2 sm:p-4 rounded-2xl '>
                            <img
                            src="https://i.ibb.co.com/4p1NnBY/gsmarena-001.jpg"
                            className="w-full h-[250px] md:h-[300px] rounded-xl object-cover "
                            />
                            <h2 className='text-2xl font-bold'>Asphalt</h2>
                            <p className='text-base font-bold'>go Race for wine</p>
                            <p>Rating</p>
                        </div>
                    </div>
                    <div className="p-3">
                        <div className='flex flex-col items-start bg-sky-300  p-2 sm:p-4 rounded-2xl '>
                            <img
                            src="https://i.ibb.co.com/1816Csg/23-1024x576.webp"
                            className="w-full h-[250px] md:h-[300px] rounded-xl object-cover "
                            />
                            <h2 className='text-2xl font-bold'>GTA-5</h2>
                            <p className='text-base font-bold'>Do anything you can image</p>
                            <p>Rating</p>
                        </div>
                    </div>
                </Slider>
            </div>
            <Link
                to="/reviews"
                className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-4 rounded-lg font-medium shadow-md"
            >
                All Reviews
            </Link>
        </div>
    );
};

export default BanerSlider;
