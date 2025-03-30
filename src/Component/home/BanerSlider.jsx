import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css"; 


const BanerSlider = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1724, 
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 1,
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
        <div className="flex flex-col items-center justify-center mb-5 ">
            <div className='w-full ' >
                <Slider {...settings} className='flex flex-row items-center gap-0'>
                    <div>
                        <div
                        className="hero min-h-screen relative"
                        style={{
                            backgroundImage: "url(https://i.ibb.co.com/L0Zqk7c/2x1-NSwitch-Minecraft-image1600w.jpg)",
                        }}>
                        <div className="hero-overlay"></div>
                            <div className="hero-content text-neutral-content text-center">
                                <div className="max-w-md ">
                                    <h1 className=" text-5xl font-bold">Minecraft</h1>
                                    <p className="mb-5 text-lg">
                                    Creativity has no limit you can make anything you want
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: "url(https://i.ibb.co.com/6NZyr8T/capsule-616x353.jpg)",
                        }}>
                        <div className="hero-overlay"></div>
                            <div className="hero-content text-neutral-content text-center">
                                <div className="max-w-md">
                                    <h1 className=" text-5xl font-bold">Microsoft Flight Simulator</h1>
                                    <p className="mb-5 text-lg">
                                        Flay any ware you want ! sky is free and flay lick a bird
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='  '>
                        <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: "url(https://i.ibb.co.com/4p1NnBY/gsmarena-001.jpg)",
                        }}>
                        <div className="hero-overlay"></div>
                            <div className="hero-content text-neutral-content text-center">
                                <div className="max-w-md">
                                    <h1 className=" text-5xl font-bold">Asphalt 8</h1>
                                    <p className="mb-5 text-lg">
                                        Win the race and earn coin in virtually for nothing
                                    </p>
                                </div>
                            </div>
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
