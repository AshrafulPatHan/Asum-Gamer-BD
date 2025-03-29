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
                            {/* navigat ui */}
                            <div className="w-full max-w-[340px] space-y-3 rounded-xl bg-white p-4 shadow-lg dark:bg-[#18181B]">
                                <div className="relative flex h-48 w-full justify-center lg:h-[260px]">
                                    <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                                        {/* love  */}
                                        <div className="flex items-center">
                                            <svg width={30} className="cursor-pointer fill-transparent stroke-white stroke-2 hover:fill-red-500 hover:stroke-red-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path></svg>
                                        </div>
                                    </div>
                                    <img width={400} height={400} className="rounded-lg bg-black/40 object-cover" src={HRate.Image} alt="card navigate ui" />
                                </div>
                                <div className="space-y-2 font-semibold">
                                    <h6 className="text-sm md:text-base lg:text-lg">{HRate.name}</h6>
                                    <p className="text-xs font-semibold text-gray-400 md:text-sm">{HRate.Hading}</p>
                                    <p>Rating {HRate.Rating} ⭐</p>
                                </div>
                                <div className="flex flex-wrap items-center justify-between gap-6 text-sm md:text-base">
                                    <button 
                                    onClick={() => handleExploreDetails(HRate)}
                                    className="rounded-lg bg-[#49B2FF] px-4 py-2 font-semibold text-white duration-300 hover:scale-105 hover:bg-sky-600">View Details</button>
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
