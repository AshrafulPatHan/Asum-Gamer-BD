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
    // const [cardData, setCardData] = useState(locationData || {});
    const [cardData, setCardData] = useState(locationData || { comments: [] });
    const { user } = useContext(AuthContext);

    // ---- Add Comment ----
    const handleAddComment = (event) => {
        event.preventDefault();
        const form = event.target;
				
        const Comment = form.Comment.value;
        const username = user?.displayName || "Anonymous";
        const userEmail = user?.email || "No Email Provided";
        const userPhotoURL = user?.photoURL || "No photoURL Provided";
        const documentId = cardData?._id; // Target specific document by its ID

        if (!Comment) {
            toast.error("All fields are required");
            return;
        }
		
        const detailData = {
            Comment,
            username,
            userEmail,
            userPhotoURL,
            date: new Date(),
            _id: documentId,
        };
        console.log("Submitted comment data:", detailData);
        fetch("https://chill-gamer-server-jzl0.onrender.com/comment", {

            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(detailData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Response from server:", data);
                toast.success("Comment added successfully!");
                setCardData((prevState) => ({
                    ...prevState,
                    comments: [...(prevState.comments || []), detailData],
                }));
                form.reset();
            })
            .catch((error) => {
                console.error("Fetch error:", error);
                toast.error("Error adding comment");
            });
    };

    // -----------------------
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
            <div className="flex flex-col items-center mb-24">
                <div className="flex flex-col items-center mt-7 gap-5 xl:gap-7">
                    {/* <h2 className=" text-[16px] sm:text-[30px] leading-3 mt-3 sm:leading-8 font-extrabold ">{cardData.name}</h2> */}
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
                            <div className=" text-black flex flex-col lg:flex-row items-start lg:items-center justify-normal lg:justify-between  ">
                                <div className=" w-[300px]  sm:w-[500px] ">
                                    <h3 className=" text-[16px] sm:text-[30px] leading-3 mt-3 sm:leading-8 font-extrabold 
                                    text-black  hover:text-green-900 cursor-pointer    "
                                    >{cardData.Title}</h3>
                                </div>
                                <div className="flex flex-row items-center gap-2">
                                    <div className="flex items-center gap-1">
                                        <h4 className="font-bold text-green-700 ">Rating :</h4> <p>{cardData.Rating}</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <h4 className="font-bold text-blue-500">Type :</h4> <p>{cardData.type}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex flex-row items-center text-black  justify-end gap-2 mt-2 lg:gap-4">
                                <p>{new Date(cardData.date).toLocaleString()}</p>
                                <button><FaEye className="text-[16px] sm:text-[27px]"/></button>
                                <button><FaRegCommentAlt className="text-[16px] sm:text-[24px] "/></button>
                                <button><BiLike className=" text-[16px] sm:text-[27px] " /></button>
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
                            <div className="w-[97vw] lg:w-[50vw]  rounded-xl">
                                 <form onSubmit={handleAddComment}
                                 className=" bg-[#7a7373ab] rounded-t-xl h-20 flex flex-row items-center justify-center gap-2 ">
                                    <input type="text" placeholder="write comment" name="Comment" className="input input-neutral" />
                                    <button className="btn btn-primary">Primary</button>
                                </form>
                                 <div className=" bg-[#c4c1c18e] rounded-b-xl p-3 ">
                                 {cardData.comments?.map((comment, index) => (
                                        <div key={index} className="mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={comment.userPhotoURL}
                                                            alt="User Avatar"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{comment.username}</div>
                                                    <div className="text-sm opacity-50">
                                                        {new Date(comment.date).toLocaleString()}
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="ml-16">
                                                <span className=" text-lg badge-sm">
                                                    {comment.Comment}
                                                </span>
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* ------------ side card ----  */}
                        <div className="flex flex-col gap-5 xl:gap-10 ">
                            <div className="  w-[98vw] sm:w-[475px] border-[0.5px] shadow-xl 
                                py-4 pl-4 rounded-lg border-[#0c0c0c11] ">
                                <h4 className="text-[26px] font-bold "
                                >About Game<span className="text-green-500">\</span></h4>
                                <hr className="border-[#00000033] w-full mb-7 " />
                                <div className="flex flex-col items-center">
                                    {/* card 3 */}
                                    <div className="flex flex-col  items-start gap-1 mb-2 sm:gap-4  ">
                                        <div className=" relative ">
                                        <img src={cardData.Image} alt={cardData.name}
                                        width={226} height={162}
                                        className="h-[260px] w-[300px] sm:w-[350px] rounded-lg object-cover "
                                        />
                                        </div>
                                        <div className="flex flex-col gap-1 w-[330px] ">
                                        <h3 className="text-[16px] leading-4 mt-2 sm:mt-0 sm:leading-5 font-bold   ">
                                            {cardData.name}
                                            </h3>
                                            <button onClick={()=> handleWatchList(cardData)}
                                            className="btn btn-primary ">add watchlist</button>
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
                                <Link to='/reviews'
                                className="font-bold hover:text-green-600 flex items-center gap-2"
                                >view more top games <GoArrowRight /> </Link>
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
