import { BiLike } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router";

const SideCard = () => {
  return (
    <div className="flex flex-col gap-5 xl:gap-10 mt-20">
      <div className="w-[98vw] sm:w-[475px] border border-[#0c0c0c11] dark:border-[#4b4a4a] bg-white dark:bg-[#1d1c1c] 
        shadow-md hover:shadow-xl py-4 pl-4 rounded-lg transition-shadow duration-300">
        {/* Header */}
        <h4 className="text-2xl sm:text-[26px] font-bold mb-2">
          Popular Articles <span className="text-green-500">\</span>
        </h4>
        <hr className="border-[#00000033] dark:border-[#bdb8b8] w-full mb-7" />

        {/* Cards Container */}
        <div className="flex flex-col items-center">
          {/* Card 1 */}
          <div className="flex flex-col items-start gap-1 sm:gap-4 w-[330px]">
            <div className="relative w-full">
              <img 
                src="https://i.ibb.co.com/S2khv9n/1709193013-943.webp"
                alt="game"
                className="rounded-lg object-cover w-full h-[260px] sm:w-[350px]"
              />
              <div className="absolute top-[70px] sm:top-[120px] left-0 bg-yellow-600 px-5 py-0.5 rounded-sm">
                <button>Games</button>
              </div>
            </div>
            <h3 className="text-[16px] sm:text-[16px] leading-4 sm:leading-5 font-bold mt-2 sm:mt-0">
              The gun fighting game the game chang game development
            </h3>
            <div className="flex items-center gap-2 mt-2 lg:gap-4 text-sm">
              <p>1.1.2025</p>
              <button><FaRegCommentAlt /></button>
              <button className="flex items-center"><BiLike className="text-xl" /></button>
            </div>
          </div>

          <hr className="border-[#00000033] dark:border-[#bdb8b8] w-full my-7" />

          {/* Card 2 */}
          <div className="flex flex-col items-start gap-1 w-[330px]">
            <h3 className="text-[16px] sm:text-[16px] leading-4 sm:leading-5 font-bold mt-2 sm:mt-0">
              The gun fighting game the game chang game development
            </h3>
            <div className="flex items-center gap-2 mt-2 lg:gap-4 text-sm">
              <p>1.1.2025</p>
              <button><FaRegCommentAlt /></button>
              <button className="flex items-center"><BiLike className="text-xl" /></button>
            </div>
          </div>

          <hr className="border-[#00000033] dark:border-[#bdb8b8] w-full my-7" />

          {/* Card 3 */}
          <div className="flex flex-col items-start gap-1 w-[330px]">
            <h3 className="text-[16px] sm:text-[16px] leading-4 sm:leading-5 font-bold mt-2 sm:mt-0">
              The gun fighting game the game chang game development
            </h3>
            <div className="flex items-center gap-2 mt-2 lg:gap-4 text-sm">
              <p>1.1.2025</p>
              <button><FaRegCommentAlt /></button>
              <button className="flex items-center"><BiLike className="text-xl" /></button>
            </div>
          </div>
        </div>

        <hr className="border-[#00000033] dark:border-[#bdb8b8] w-full my-2" />

        {/* View More Link */}
        <Link 
          to="/reviews"
          className="font-bold hover:text-green-600 flex items-center gap-2 mt-2"
        >
          view more top games <GoArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default SideCard;
