import React, { useEffect, useState } from 'react';
import CardApi from '../card.json';
import { useNavigate } from "react-router-dom";

const HRated = () => {
    const [hRate, setHRate] = useState([]);

    useEffect(() => {
        const filteredData = CardApi.filter(item => parseInt(item.Rating) >= 7);
        setHRate(filteredData);
    }, []);


    const navigate = useNavigate();
    const handleExploreDetails = (HRate) => {
      navigate(`/review/${HRate.id}`, { state: HRate }); // Sending state
    };

    return (
        <div className='flex flex-col items-center'>
            <h2 className='text-4xl font-bold'>Highest Rated Game</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-7'>
                {
                    hRate.map(HRate => (
                        <div key={HRate.id}>
                            <div className="card bg-base-100 my-4 w-[300px] md:w-96 shadow-xl">
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
