/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { BiLike } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import SideCard from "./ui/SideCard";

const HighestRated = () => {
  const [game, setGame] = useState<any[]>([]);

  const PublicApi = import.meta.env.VITE_PUBLIC_API;

  useEffect(() => {
    fetch(`${PublicApi}/higher-rate-review`)
      .then((res) => res.json())
      .then((data) => setGame(data))
      .catch((err) => console.error(err));
  }, [PublicApi]);

  if (game.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-green-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  const [first, ...rest] = game;

  return (
    <div className="flex flex-col mb-24 overflow-x-hidden">
      <div className="flex flex-col xl:flex-row items-start justify-center gap-5 xl:gap-7">
        {/* Main Slide */}
        <div className="flex flex-col items-center sm:items-start gap-8">
          <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-bold mb-5 text-black dark:text-white text-start">
            Highest Rated Game<samp className="text-green-500">\</samp>
          </h3>

          <div className="relative text-white w-[90vw] lg:w-[770px]">
            <img
              src={first.Image}
              alt={first.Title}
              className="rounded-lg object-cover w-full h-[400px] sm:h-[475px]"
            />
            <div className="absolute top-[250px] sm:top-[320px] left-3">
              <button className="bg-yellow-600 px-2 py-0.5 rounded-sm mb-2">
                {first.name}
              </button>
              <div className="w-[300px] sm:w-[500px]">
                <h3 className="text-[16px] sm:text-[30px] font-extrabold leading-4 sm:leading-8 text-white hover:text-green-300 cursor-pointer">
                  {first.Title}
                </h3>
              </div>
              <div className="flex flex-row items-center gap-2 mt-2 lg:gap-4 text-sm sm:text-base">
                <p>{new Date(first.date).toLocaleString()}</p>
                <button>
                  <FaRegCommentAlt />
                </button>
                <button className="flex items-center gap-1">
                  <BiLike className="text-xl" />
                  <sup>{first.Lick}</sup>
                </button>
              </div>
            </div>
          </div>

          {/* Rest of the cards */}
          <div className="flex flex-col md:flex-row gap-4 xl:gap-7 flex-wrap">
            {rest.map((game, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row md:flex-col items-start gap-1 sm:gap-4"
              >
                <div className="relative">
                  <img
                    src={game.Image}
                    alt={game.Title}
                    className="rounded-lg object-cover w-[236px] h-[160px]"
                  />
                  <button className="bg-yellow-600 px-5 py-0.5 rounded-sm absolute top-[70px] sm:top-[120px]">
                    {game.name}
                  </button>
                </div>
                <div className="flex flex-col items-start gap-1 w-[230px] mt-2 sm:mt-0">
                  <h3 className="text-[16px] font-bold leading-4 sm:leading-5">
                    {game.Title}
                  </h3>
                  <div className="flex flex-row items-center gap-2 mt-2 lg:gap-4 text-sm sm:text-base">
                    <p>{game.Year}</p>
                    <button>
                      <FaRegCommentAlt />
                    </button>
                    <button className="flex items-center gap-1">
                      <BiLike className="text-xl" />
                      <sup>{game.Lick}</sup>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SideCard */}
        <SideCard />
      </div>
    </div>
  );
};

export default HighestRated;
