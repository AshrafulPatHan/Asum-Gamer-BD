import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ClintReview = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

// go detils page
const navigate = useNavigate();
const handleExploreDetails = (All) => {
    navigate(`/review/${All.id}`, { state: All }); 
};


    useEffect(() => {
        fetch("https://chill-gamer-server-jzl0.onrender.com/datas")
          .then((res) => res.json())
          .then((data) => {
            setData(data);
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
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-7'>
                    {
                        data.map(All => (
                            <div key={All.id}>
                                <div className="card bg-base-100 my-4 w-[300px] md:w-96 shadow-xl">
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
        </div>
    );
};

export default ClintReview;