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
        <div className="flex flex-col items-center justify-center mb-5 relative ">
            <div className='w-[90%] relative ' >
                <Slider {...settings}>
                    <div >
                        <div className="card  image-full w-[80vw]  ">
                            <figure>
                                <img
                                src="https://i.ibb.co.com/PFr1bSG/Copilot-studio-Obalka.jpg"
                                alt="photo"
                                className="w-[80vw] h-[250px] md:h-[300px] rounded-xl object-cover "
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Copilot</h2>
                                <p>Copilot is free AI chat bot and toll</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card  image-full w-[80vw]  ">
                            <figure>
                                <img
                                src="https://i.ibb.co.com/PFr1bSG/Copilot-studio-Obalka.jpg"
                                alt="photo"
                                className="w-[80vw] h-[250px] md:h-[300px] rounded-xl object-cover "
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Copilot</h2>
                                <p>Copilot is free AI chat bot and toll</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card  image-full w-[80vw]  ">
                            <figure>
                                <img
                                src="https://i.ibb.co.com/PFr1bSG/Copilot-studio-Obalka.jpg"
                                alt="photo"
                                className="w-[80vw] h-[250px] md:h-[300px] rounded-xl object-cover "
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Copilot</h2>
                                <p>Copilot is free AI chat bot and toll</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card  image-full w-[80vw]  ">
                            <figure>
                                <img
                                src="https://i.ibb.co.com/PFr1bSG/Copilot-studio-Obalka.jpg"
                                alt="photo"
                                className="w-[80vw] h-[250px] md:h-[300px] rounded-xl object-cover "
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Copilot</h2>
                                <p>Copilot is free AI chat bot and toll</p>
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
