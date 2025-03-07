import React, { useContext, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "./AuthProvider/AuthProvider";
import ClintReview from './ClintReview';

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
        fetch("https://chill-gamer-server-jade.vercel.app/alldata")
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
            <h2 className='text-4xl font-bold'>See All Reviews</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mt-7'>
                    {
                        all.map(All => (
                            <div key={All.id}>
                                <div className="card bg-base-100 my-4 w-[300px] md:w-96  shadow-xl">
                                    <figure>
                                        <img
                                            className='h-[260px]'
                                            src={All.Image}
                                            alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{All.name}</h2>
                                        <p className='font-bold'>{All.Hading}</p>
                                        <p>{All.Description}</p>
                                        <p>Rating {All.Rating}⭐</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary"
                                            onClick={() => handleExploreDetails(All)}>Explore Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <ClintReview/>
            </div>
            <Footer/>
        </div>
    );
};

export default AllReviews;