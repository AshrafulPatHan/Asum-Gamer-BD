import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'


const HRated = () => {
    const [hRate, setHRate] = useState([]);
    const [loading, setLoading] = useState(true);

// go detils page
    const navigate = useNavigate();
        const handleExploreDetails = (HRate) => {
          navigate(`/review/${HRate.id}`, { state: HRate }); 
    };
    
// fetch data
    useEffect(() => {
        fetch("https://chill-gamer-server-jzl0.onrender.com/limited-data")
        .then((res) => res.json())
        .then((data) => {
            setHRate(data);
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
        </div>;;
    }

    return (
        <div className='flex flex-col items-center'>
            <h2 className='text-4xl font-bold'>Highest Rated Game</h2>
            <Typewriter words={['Discover', 'Rate', 'Enjoy!']} loop={5} cursor cursorStyle='_' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mt-7'>
                {
                    hRate.map(HRate => (
                        <div key={HRate._id}>
                            <div className="card bg-base-100 my-4 w-[300px] md:w-96 xl:w-80 shadow-xl">
                                <figure>
                                    <img
                                        className='h-[260px]'
                                        src={HRate.Image}
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{HRate.name}</h2>
                                    <p>{HRate.Hading}</p>
                                    <p>Rating {HRate.Rating}⭐</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary"
                                        onClick={() => handleExploreDetails(HRate)}>Explore Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default HRated;
