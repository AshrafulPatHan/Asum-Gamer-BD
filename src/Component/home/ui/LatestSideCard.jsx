import { BiLike } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { GoArrowRight } from "react-icons/go";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const LatestSideCard = () => {
    const [game,setGame] = useState([]);

    useEffect(()=>{
       fetch('https://chill-gamer-server-jzl0.onrender.com/higher-rate-review')
       .then(res => res.json())
       .then(data => setGame(data))
       .catch(err => console.error(err));
    }, []);

    if (game.length === 0) {
       return <div className="flex items-center justify-center"><span className="loading loading-ring loading-xl w-10 h-10 "></span></div>;
    }

    return (
        <div className="flex flex-col items-start w-[97vw] sm:w-[475px] border-[0.5px] shadow-xl 
            py-4 pl-4 rounded-lg border-[#0c0c0c11] mt-10 xl:mt-[115px] bg-white dark:bg-[#1d1c1c] ">
            <h4 className="text-[26px] font-bold ">
                Top 5 Best Games <span className="text-green-500">\</span>
            </h4>
            <hr className="border-[#00000033] dark:border-[#bdb8b8] w-full mb-7 " />
            {game.map((game, idx)=>(
                <div key={idx}>
                    {/* side card 1 */}
                    <div className="flex flex-row h-[120px]  gap-1 mb-2 ">
                        <div className=" relative ">
                            <img src={game.Image} alt="microsoft flit smelter" 
                            className=" w-[97px] lg:w-[220px] h-[120px] rounded-lg object-cover"
                            />
                        </div>
                        <div className="w-[200px] ">
                            <h3 className="text-[15px] leading-4 font-bold   ">
                                {game.name}
                            </h3>
                            <p className="">{game.Year}</p>
                            <p className="mb-2">{game.Title}</p>
                        </div>
                    </div>
                </div>
            ))}
            <hr className="border-[#00000033] dark:border-[#bdb8b8]  w-full mb-[10px] "/>
            <Link to='/reviews'
            className="font-bold hover:text-green-600 flex items-center gap-2"
                >view more top games <GoArrowRight /> 
            </Link>
        </div>
    );
};

export default LatestSideCard;