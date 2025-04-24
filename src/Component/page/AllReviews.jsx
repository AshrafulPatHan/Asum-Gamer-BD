import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../navigation/Navbar';
import Footer from '../navigation/Footer';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../AuthProvider/AuthProvider";


const AllReviews = () => {
    const [all, setAll] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);


// go detils page
    const navigate = useNavigate();
        const handleExploreDetails = (All) => {
            navigate(`/review/${All.id}`, { state: All }); 
        };
    
// fetch data
    useEffect(() => {
        fetch("https://chill-gamer-server-jzl0.onrender.com/all-review")
        .then((res) => res.json())
        .then((data) => {
            setAll(data);
            setLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            setLoading(false);
        });
    }, []);


    if (loading) {
        return <div className="flex flex-col items-center my-36">
        <span className="loading loading-ring loading-lg"></span>
        </div>;
    }



    return (
        <div>
            <Navbar/>
            <div className='flex flex-col items-center'>
            <h2 className='text-4xl mb-10 mt-16 font-bold'>See All Reviews</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mb-24'>
                    {
                        all.map(All => (
                            <div key={All.id}>
                                <div className="max-w-[350px] space-y-4 rounded-lg bg-[#252525] dark:bg-[#ebe8e8] p-6 text-white dark:text-black
                                md:w-[350px] shadow-xl ">
                                    <img width={400} height={400} className="h-[275px] w-[350px] rounded-lg object-cover" 
                                    src={All.Image} alt="card navigate ui" />
                                    <div className="grid gap-2">
                                        <div className='flex justify-between'>
                                            <h1 className="text-xl font-semibold ">{All.name}</h1> 
                                            <p className="text-lg font-semibold">
                                                Rating: {All.Rating} ⭐
                                            </p>
                                        </div>
                                        <p className=" text-blue-500 text-lg ">{All.Title}</p>
                                    </div>
                                    <div className="flex justify-end gap-4">
                                        <button 
                                        onClick={() => handleExploreDetails(All)}
                                        className="btn btn-active btn-accent">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    {/* <ClintReview/> */}
                </div>
            </div>
            
            <Footer/>
        </div>
    );
};

export default AllReviews;