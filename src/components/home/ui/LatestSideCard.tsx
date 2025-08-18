import { GoArrowRight } from "react-icons/go";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const LatestSideCard = () => {
  const [game, setGame] = useState([]);

  useEffect(() => {
    fetch("https://chill-gamer-server-jzl0.onrender.com/higher-rate-review")
      .then((res) => res.json())
      .then((data) => setGame(data))
      .catch((err) => console.error(err));
  }, []);

  if (game.length === 0) {
    return (
      <div className="flex items-center justify-center h-40">
        <span className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-green-500"></span>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col items-start w-[97vw] sm:w-[475px] border border-gray-200 shadow-xl
            py-4 pl-4 rounded-lg mt-10 xl:mt-[115px] bg-white dark:bg-[#1d1c1c]"
    >
      <h4 className="text-[26px] font-bold">
        Top 5 Best Games <span className="text-green-500">\</span>
      </h4>
      <hr className="border-gray-300 dark:border-gray-500 w-full mb-7" />

      {game.map((gameItem, idx) => (
        <div key={idx}>
          <div className="flex flex-row h-[120px] gap-3 mb-2">
            <div className="relative">
              <img
                src={gameItem.Image}
                alt={gameItem.name}
                className="w-[97px] lg:w-[220px] h-[120px] rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col w-[200px] justify-between">
              <h3 className="text-[15px] leading-4 font-bold">{gameItem.name}</h3>
              <p className="text-sm">{gameItem.Year}</p>
              <p className="text-sm mb-2">{gameItem.Title}</p>
            </div>
          </div>
        </div>
      ))}

      <hr className="border-gray-300 dark:border-gray-500 w-full mb-2" />
      <Link
        to="/reviews"
        className="font-bold hover:text-green-600 flex items-center gap-2 mt-2"
      >
        View more top games <GoArrowRight />
      </Link>
    </div>
  );
};

export default LatestSideCard;
