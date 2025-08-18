import { BiLike } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import LatestSideCard from "./ui/LatestSideCard";

const Latest = () => {
  const [game, setGame] = useState([]);

  useEffect(() => {
    fetch("https://chill-gamer-server-jzl0.onrender.com/latest-review")
      .then((res) => res.json())
      .then((data) => setGame(data))
      .catch((err) => console.error(err));
  }, []);

  if (game.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <span className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-green-500"></span>
      </div>
    );
  }

  const [first, ...rest] = game;

  return (
    <div className="flex flex-col items-center mb-24 overflow-x-hidden">
      <div className="flex flex-col xl:flex-row items-start xl:gap-7">
        {/* Main Latest Review */}
        <div className="flex flex-col items-center sm:items-start gap-8">
          <h3 className="text-[40px] text-black dark:text-white font-bold mb-5">
            Latest Reviews <samp className="text-green-500">\</samp>
          </h3>

          <div className="relative text-white">
            <img
              src={first.Image}
              width={770}
              height={475}
              className="h-[400px] sm:h-[475px] w-[90vw] lg:w-[770px] rounded-lg object-cover"
            />
            <div className="absolute top-[250px] sm:top-[320px] ml-3">
              <button className="bg-yellow-600 px-2 py-0.5 rounded-sm mb-2">
                {first.name}
              </button>
              <div className="w-[300px] sm:w-[500px]">
                <h3 className="text-[16px] sm:text-[30px] leading-3 sm:leading-8 font-extrabold text-white hover:text-green-300 cursor-pointer">
                  {first.Title}
                </h3>
              </div>
              <div className="flex items-center gap-2 mt-2 lg:gap-4 text-sm">
                <p>{new Date(first.date).toLocaleString()}</p>
                <button className="flex">
                  <FaRegCommentAlt />
                </button>
                <button className="flex items-center">
                  <BiLike className="text-xl" />
                  <sup>{first.Lick}</sup>
                </button>
              </div>
            </div>
          </div>

          {/* Rest of the latest reviews */}
          <div className="flex flex-col md:flex-row gap-4 xl:gap-7">
            {rest.map((game, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row md:flex-col items-start gap-1 sm:gap-4"
              >
                <div className="relative">
                  <img
                    src={game.Image}
                    alt={game.Title}
                    width={226}
                    height={162}
                    className="h-[160px] w-[236px] rounded-lg object-cover"
                  />
                  <button className="bg-yellow-600 px-5 py-0.5 rounded-sm absolute top-[70px] sm:top-[120px]">
                    {game.name}
                  </button>
                </div>
                <div className="flex flex-col items-start gap-1 w-[230px]">
                  <h3 className="text-[16px] leading-4 mt-2 sm:mt-0 sm:leading-5 font-bold">
                    {game.Title}
                  </h3>
                  <div className="flex items-center gap-2 mt-2 lg:gap-4 text-sm">
                    <p>{game.Year}</p>
                    <button>
                      <FaRegCommentAlt />
                    </button>
                    <button className="flex items-center">
                      <BiLike className="text-xl" />
                      <sup>{game.Lick}</sup>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Side Card */}
        <LatestSideCard />
      </div>
    </div>
  );
};

export default Latest;
