import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../../navigation/Navbar";
import Footer from "../../navigation/Footer";
import { toast } from "react-toastify";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { BiLike } from "react-icons/bi";
import { FaEye, FaFacebook, FaGithub, FaLinkedin, FaRegComment, FaRegCommentAlt } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";


const Details = () => {
    const { state: locationData } = useLocation(); 
    const [cardData, setCardData] = useState(locationData || {});
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (locationData) {
            setCardData(locationData);
        }
    }, [locationData]);
    // Add WatchList
    const handleWatchList = () => {
        fetch('https://chill-gamer-server-jzl0.onrender.com/watchLists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cardData),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            toast.success("Watchlist added successfully!");
        })
        .catch((error) => {
            console.error('Error:', error);
            toast.error("Error adding to watchlist");
        });
    };

    if (!locationData) {
        return (
            <div className="flex flex-col items-center mt-10">
                <h2 className="text-2xl font-bold">Details not available!</h2>
                <button
                    className="btn btn-primary mt-4"
                    onClick={() => window.history.back()}
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center mt-8 mb-24">
                <div className="flex flex-col items-center gap-5 xl:gap-7">
                    <div className=" relative text-white ">
                        <img src={cardData.Image} alt={cardData.name}
                        width={770} height={475}
                        className=" w-[90vw] h-[40vh] md:[80vw] xl:w-[70vw] sm:h-[70vh]   rounded-lg object-cover"
                        />
                        <div className="bg-yellow-600 px-2 py-[0.5] rounded-sm ml-3 mb-2 absolute  top-[70%] sm:top-[82%] ">
                            <button>
                                {cardData.name}
                            </button>
                        </div>
                        <div className="flex flex-col   ">
                            <div className=" w-[300px]  sm:w-[500px] ">
                                <h3 className=" text-[16px] sm:text-[30px] leading-3 mt-3 sm:leading-8 font-extrabold 
                                text-black  hover:text-green-900 cursor-pointer    "
                                >{cardData.Title}</h3>
                            </div>
                            <div className="flex flex-row items-center justify-end gap-2 mt-2 lg:gap-4">
                                <p>1.1.2025</p>
                                <button><FaEye /></button>
                                <button><FaRegCommentAlt /></button>
                                <button><BiLike className="text-xl" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5">
                        {/* ----------- comment */}
                        <div className="flex flex-col items-center">
                            <div className=" w-[88vw] lg:w-[48vw] mb-6  ">
                                <h3 className="font-bold text-xl">
                                    Description <span className="text-green-600 text-2xl">:</span> 
                                </h3>
                                {cardData.Description}
                            </div>
                            <div className=" w-[90vw] lg:w-[50vw]  ">
                                <div className="mockup-window border border-base-300 w-full">
                                    <div className="grid place-content-center border-t border-base-300 h-80">Hello!</div>
                                </div>
                            </div>
                        </div>
                        {/* ------------ side card ----  */}
                        <div className="flex flex-col gap-5 xl:gap-10 ">
                            <div className="  w-[98vw] sm:w-[475px] border-[0.5px] shadow-xl 
                                py-4 pl-4 rounded-lg border-[#0c0c0c11] ">
                                <h4 className="text-[26px] font-bold "
                                >Popular Articles <span className="text-green-500">\</span></h4>
                                <hr className="border-[#00000033] w-full mb-7 " />
                                <div className="flex flex-col items-center">
                                    {/* card 3 */}
                                    <div className="flex flex-col  items-start gap-1 sm:gap-4  ">
                                        <div className=" relative ">
                                        <img src="https://i.ibb.co.com/S2khv9n/1709193013-943.webp" alt="call of duty" 
                                        width={226} height={162}
                                        className="h-[260px] w-[300px] sm:w-[350px] rounded-lg object-cover "
                                        />
                                        <div className="bg-yellow-600 px-5 py-[0.5]  rounded-sm absolute top-[70px] sm:top-[120px] ">
                                            <button>
                                                Games
                                            </button>
                                        </div>
                                        </div>
                                        <div className="flex flex-col items-start gap-1 w-[330px] ">
                                        <h3 className="text-[16px] leading-4 mt-2 sm:mt-0 sm:leading-5 font-bold   ">
                                            The gun fighting game the game chang game development</h3>
                                        <div className="flex flex-row items-center gap-2 mt-2 lg:gap-4">
                                            <p>1.1.2025</p>
                                            <button><FaRegCommentAlt /></button>
                                            <button><BiLike className="text-xl" /></button>
                                        </div>
                                        </div>
                                    </div>
                                    <hr className="border-[#00000033] w-full mb-7 " />
                                    <div className="flex flex-col items-start gap-1 w-[330px] ">
                                        <h3 className="text-[16px] leading-4 mt-2 sm:mt-0 sm:leading-5 font-bold   ">
                                        The gun fighting game the game chang game development</h3>
                                        <div className="flex flex-row items-center gap-2 mt-2 lg:gap-4">
                                        <p>1.1.2025</p>
                                        <button><FaRegCommentAlt /></button>
                                        <button><BiLike className="text-xl" /></button>
                                        </div>
                                    </div>
                                    <hr className="border-[#00000033] w-full mb-7 " />
                                    <div className="flex flex-col items-start gap-1 w-[330px] ">
                                        <h3 className="text-[16px] leading-4 mt-2 sm:mt-0 sm:leading-5 font-bold   ">
                                        The gun fighting game the game chang game development</h3>
                                        <div className="flex flex-row items-center gap-2 mt-2 lg:gap-4">
                                        <p>1.1.2025</p>
                                        <button><FaRegCommentAlt /></button>
                                        <button><BiLike className="text-xl" /></button>
                                        </div>
                                    </div>
                                </div>
                                <hr className="border-[#00000033] w-full mb-[10px] "/>
                                <button
                                className="font-bold hover:text-green-600 flex items-center gap-2"
                                >view more top games <GoArrowRight /> </button>
                            </div>
                            {/* comment section */}
                            <div className="flex flex-col items-center gap-11">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center justify-center rounded-md text-white text-lg w-[50px] h-[50px]
                                    sm:w-[150px] sm:h-[40px]  bg-[#1c1a8a] ">
                                        <FaFacebook />
                                    </div>
                                    <div className="flex items-center justify-center rounded-md text-white text-lg w-[50px] h-[50px]
                                    sm:w-[150px] sm:h-[40px]  bg-[#1c1a8a]   ">
                                        <FaLinkedin />
                                    </div>
                                    <div className="flex items-center justify-center rounded-md text-white text-lg w-[50px] h-[50px]
                                    sm:w-[150px] sm:h-[40px]  bg-[#1c1a8a]   ">
                                        <FaGithub />
                                    </div>
                                </div>
                                <div className=" relative">
                                    <div>
                                        <img src="https://images.photowall.com/products/74785/black-dragon-at-beach.jpg?h=699&q=85" alt="Dragon"
                                        className=" w-[96vw] sm:w-[370px] h-[296px] object-cover rounded-lg " />
                                    </div>
                                    <div className="flex flex-col items-center gap-2 bg-black/30  w-[96vw] sm:w-[370px] h-[296px]  rounded-lg
                                    absolute top-0 text-white ">
                                        <h3 className="font-bold text-xl">Give Feedback</h3>
                                        <div className="flex items-center gap-1 text-lg">
                                        <FaRegComment className="text-2xl"/>
                                        write your comment without Login
                                        </div>
                                        <div className=" flex flex-col items-start gap-5 mt-3">
                                        <div className="relative w-max">
                                            <input className="peer border-b border-gray-500 focus:border-[#1B8EF8] bg-transparent py-2 text-[#1B8EF8] focus:outline-none" type="text" id='navigate_ui_input_44'/>
                                            <label className="absolute -top-2 left-0 bg-transparent text-xs text-white duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400" htmlFor="navigate_ui_input_44">
                                            Name or Fake Name
                                            </label>
                                        </div>
                                        <div className="relative w-max">
                                            <input className="peer border-b border-gray-500 focus:border-[#1B8EF8] bg-transparent py-2 text-[#1B8EF8] focus:outline-none" type="text" id='navigate_ui_input_44'/>
                                            <label className="absolute -top-2 left-0 bg-transparent text-xs text-white duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400" htmlFor="navigate_ui_input_44">
                                            Comment
                                            </label>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Details;
