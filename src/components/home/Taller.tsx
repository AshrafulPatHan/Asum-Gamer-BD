import { FaRegCommentAlt } from "react-icons/fa";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { BiLike } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";



type Video = {
    id: string;
    gameName: string;
    titel: string;
    image: string;
    date: string;
    lick: number;
};


const Taller = () => {
  const [video, setVideo] = useState<Video[]>([]);
  const navigate = useNavigate();

  const handleVideo = (game:Video) => {
    navigate(`/video/${game.id}`, { state: game });
  };

  useEffect(() => {
    fetch("https://chill-gamer-server-jzl0.onrender.com/video")
      .then((res) => res.json())
      .then((data) => setVideo(data))
      .catch((err) => console.error(err));
  }, []);

  if (video.length === 0) {
    return (
      <div className="flex items-center justify-center h-40">
        <span className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-green-500"></span>
      </div>
    );
  }

  if (video.length === 0) return <p>No videos available</p>;
  
    const [first, ...rest]  = video;

    console.log(first.gameName); // safe



  return (
    <div className="flex flex-col items-center text-white bg-[#1c192c] py-20 overflow-x-hidden">
      <h4 className="text-white text-start text-4xl font-bold mb-12">
        Game Video
      </h4>

      <div className="flex flex-col xl:flex-row items-start gap-8 mx-1 sm:mx-0">
        {/* Main video */}
        <div className="relative">
          <img
            src={first.image}
            alt={first.gameName}
            width={600}
            height={560}
            className="h-[400px] sm:h-[565px] lg:w-[600px] w-[90vw] rounded-lg object-cover"
          />
          <button
            onClick={() => handleVideo(first)}
            className="absolute top-3 left-3 text-lg bg-gray-800 p-3 rounded-full text-white"
          >
            <TbPlayerPlayFilled />
          </button>

          <div className="absolute top-[250px] sm:top-[400px] ml-3">
            <button className="bg-yellow-600 px-2 py-[0.5] rounded-sm mb-2">
              {first.gameName}
            </button>
            <div className="w-[300px] sm:w-[500px]">
              <h3 className="text-[16px] sm:text-[30px] leading-3 sm:leading-8 font-extrabold hover:text-green-300 cursor-pointer">
                {first.titel}
              </h3>
            </div>
            <div className="flex flex-row items-center gap-2 mt-2 lg:gap-4">
              <p>{new Date(first.date).toLocaleString()}</p>
              <button className="flex">
                <FaRegCommentAlt />
              </button>
              <button className="flex">
                <BiLike className="text-xl" />
                <sup>{first.lick}</sup>
              </button>
            </div>
          </div>
        </div>

        {/* Secondary videos */}
        <div className="flex flex-col items-start gap-6">
          {rest.map((game, idx) => (
            <div key={idx} className="flex flex-row items-end gap-4">
              <div className="relative">
                <img
                  src={game.image}
                  alt={game.gameName}
                  width={226}
                  height={162}
                  className="h-[100px] sm:h-[162px] w-[160px] sm:w-[226px] rounded-lg object-cover"
                />
                <button
                  onClick={() => handleVideo(game)}
                  className="absolute top-8 left-16 sm:top-16 sm:left-24 text-sm sm:text-lg bg-gray-800 p-1 sm:p-3 rounded-full text-white"
                >
                  <TbPlayerPlayFilled />
                </button>
              </div>
              <div className="flex flex-col items-start gap-1 w-[300px] sm:w-[370px] mb-2">
                <div className="bg-yellow-600 px-2 py-[0.5] rounded-sm">
                  <button>{game.gameName}</button>
                </div>
                <h3 className="text-[16px] sm:text-[20px] leading-3 mt-2 sm:mt-0 sm:leading-8 font-bold">
                  {game.titel}
                </h3>
                <div className="flex flex-row items-center gap-2 mt-2 lg:gap-4">
                  <p>{new Date(game.date).toLocaleString()}</p>
                  <button className="flex">
                    <FaRegCommentAlt />
                  </button>
                  <button className="flex">
                    <BiLike className="text-xl" />
                    <sup>{game.lick}</sup>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Taller;
