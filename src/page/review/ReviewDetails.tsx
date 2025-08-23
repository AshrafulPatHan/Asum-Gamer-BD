
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/navigation/Footer";
import { toast } from "react-hot-toast";
import { BiLike } from "react-icons/bi";
import { FaEye, FaRegCommentAlt } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { useAuth } from "../../providers/AuthProvider";
import Cookies from "js-cookie";


const ReviewDetails = () => {
    const { state: locationData } = useLocation();
    const [gameData, setGameData] = useState(locationData || { comments: [] });
    const { user } = useAuth();
    
    const PublicApi = import.meta.env.VITE_PUBLIC_API;

// comment the review 
const handleAddComment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const Comment = (form.elements.namedItem("Comment") as HTMLInputElement)?.value;

    if (!Comment?.trim()) {
        toast.error("Comment cannot be empty!");
        return;
    }

    if (!user) {
        toast.error("You must be logged in to comment.");
        return;
    }

    const commentData = {
        Comment,
        username: user.name || "Anonymous",
        userEmail: user.email || "No Email Provided",
        userPhotoURL: user.photoURL || "https://i.ibb.co.com/k2qwRyG/ob-1711784940.jpg",
        _id: gameData._id, // review/game id
    };

    const token = Cookies.get("token"); 

    try {
        const res = await fetch(`${PublicApi}/comment`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(commentData),
        });

        const data = await res.json();

        if (res.ok) {
            toast.success("Comment added successfully!");

            // Update local state immediately
            setGameData((prev: any) => ({
                ...prev,
                comments: [...(prev.comments || []), { ...commentData, date: new Date() }],
            }));

            form.reset();
        } else {
            toast.error(data.message || "Failed to add comment.");
        }
    } catch (error) {
        console.error("Error adding comment:", error);
        toast.error("Something went wrong.");
    }
};

// like the review
const handleLike = async (gameData:any) => {
    
    const token = Cookies.get("token"); 

    const LikeRev = {
        ReviewId:gameData._id,
        userEmail: user?.email
    }
    console.log(LikeRev);
    

    try {
        const res = await fetch(`${PublicApi}/lick`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(LikeRev),
        });

        const data = await res.json();

        if (res.ok) {
            toast.success("successfully like the review!");
        } else {
            toast.error(data.message || "Failed to like the review.");
        }
    } catch (error) {
        console.error("Error adding comment:", error);
        toast.error("Something went wrong.");
    }
}


    if (!locationData) {
        return (
            <div className="flex flex-col items-center mt-10">
                <h2 className="text-2xl font-bold">Details not available!</h2>
                <button
                    className="px-5 py-2 mt-4 rounded-lg bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition-all duration-300"
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
                    <div className="relative text-white">
                        <img
                            src={gameData.Image}
                            alt={gameData.name}
                            width={770}
                            height={475}
                            className="w-[90vw] h-[40vh] md:w-[80vw] xl:w-[70vw] sm:h-[70vh] rounded-lg object-cover"
                        />
                        <div className="bg-yellow-600 px-2 py-1 rounded-sm ml-3 mb-2 absolute top-[70%] sm:top-[82%]">
                            <button>{gameData.name}</button>
                        </div>

                        <div className="flex flex-col">
                            <div className="text-black flex flex-col lg:flex-row items-start lg:items-center justify-between">
                                <div className="w-[300px] sm:w-[500px]">
                                    <h3 className="text-[16px] sm:text-[30px] leading-3 mt-3 sm:leading-8 font-extrabold text-black hover:text-green-900 cursor-pointer">
                                        {gameData.Title}
                                    </h3>
                                </div>
                                <div className="flex flex-row items-center gap-2">
                                    <div className="flex items-center gap-1">
                                        <h4 className="font-bold text-green-700">Rating :</h4>{" "}
                                        <p>{gameData.Rating}</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <h4 className="font-bold text-blue-500">Type :</h4>{" "}
                                        <p>{gameData.type}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-row items-center text-black justify-end gap-2 mt-2 lg:gap-4">
                                <p>{new Date(gameData.date).toLocaleString()}</p>
                                <button>
                                    <FaEye className="text-[16px] sm:text-[27px]" />
                                </button>
                                <button>
                                    <FaRegCommentAlt className="text-[16px] sm:text-[24px]" />
                                </button>
                                <button>
                                    <BiLike className="text-[16px] sm:text-[27px]" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5">
                        {/* ----------- comment */}
                        <div className="flex flex-col items-center">
                            <div className="w-[88vw] lg:w-[48vw] mb-6">
                                <h3 className="font-bold text-xl">
                                    Description <span className="text-green-600 text-2xl">:</span>
                                </h3>
                                {gameData.Description}
                            </div>

                            {/* comment on review */}
                            <div className="w-[97vw] lg:w-[50vw] rounded-xl">
                                <form
                                    onSubmit={handleAddComment}
                                    className="bg-gray-600 bg-opacity-60 rounded-t-xl h-20 flex flex-row items-center justify-center gap-2 px-3"
                                >
                                    <input
                                        type="text"
                                        name="Comment"
                                        placeholder="Write comment"
                                        className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-black focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    />
                                    <button type="submit" className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition-all duration-300">
                                        Submit
                                    </button>
                                </form>

                                <div className="bg-gray-300 bg-opacity-50 rounded-b-xl p-3">
                                    {gameData.comments?.map((comment: any, index: number) => (
                                        <div key={index} className="mb-4">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={comment.userPhotoURL}
                                                    alt="User Avatar"
                                                    className="h-12 w-12 rounded-full object-cover"
                                                />
                                                <div>
                                                    <div className="font-bold">{comment.username}</div>
                                                    <div className="text-sm opacity-50">
                                                        {new Date(comment.date).toLocaleString()}
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="ml-16 mt-1 text-gray-700 text-base">
                                                {comment.Comment}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ------------ side card ----  */}
                        <div className="flex flex-col gap-5 xl:gap-10">
                            <div className="w-[98vw] sm:w-[475px] border border-gray-200 shadow-xl py-4 pl-4 rounded-lg">
                                <h4 className="text-[26px] font-bold">
                                    About Game<span className="text-green-500">/</span>
                                </h4>
                                <hr className="border-gray-300 w-full mb-7" />

                                <div className="flex flex-col items-center">
                                    <div className="flex flex-col items-start gap-1 mb-2 sm:gap-4">
                                        <img
                                            src={gameData.Image}
                                            alt={gameData.name}
                                            className="h-[260px] w-[300px] sm:w-[350px] rounded-lg object-cover"
                                        />
                                        <div className="flex flex-col gap-1 w-[330px]">
                                            <h3 className="text-[16px] leading-5 font-bold">
                                                {gameData.name}
                                            </h3>
                                            <button
                                                onClick={() => handleLike(gameData)}
                                                className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition-all duration-300"
                                            >
                                                Lick the review
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <hr className="border-gray-300 w-full mb-2" />
                                <Link
                                    to="/reviews"
                                    className="font-bold hover:text-green-600 flex items-center gap-2"
                                >
                                    View more top games <GoArrowRight />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ReviewDetails;