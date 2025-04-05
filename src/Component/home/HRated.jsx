import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


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
        <div className='flex flex-col items-center mb-24'>
            <h2 className='text-4xl mb-8 font-bold'>Highest Rated Game</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 '>
                {
                    hRate.map(HRate => (
                        <div key={HRate._id}>
                            <div className="max-w-[350px] space-y-4 rounded-lg bg-[#252525] dark:bg-slate-200 p-6 text-white dark:text-black
                            md:w-[350px] shadow-xl ">
                                <img width={400} height={400} className="h-[275px] w-[350px] rounded-lg object-cover" 
                                src={HRate.Image} alt="card navigate ui" />
                                <div className="grid gap-2">
                                    <div className='flex justify-between'>
                                        <h1 className="text-xl font-semibold ">{HRate.name}</h1> 
                                        <p className="text-lg font-semibold">
                                            Rating: {HRate.Rating} ⭐
                                        </p>
                                    </div>
                                    <p className=" text-blue-500 text-lg ">{HRate.Hading}</p>
                                </div>
                                <div className="flex justify-end gap-4">
                                    <button 
                                    onClick={() => handleExploreDetails(HRate)}
                                    className="btn btn-active btn-accent">
                                        View Details
                                    </button>
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
