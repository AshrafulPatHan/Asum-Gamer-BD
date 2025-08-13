import { BiLike } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";



const SideCard = () => {
    return (
        <div className="flex flex-col gap-5 xl:gap-10 mt-[80px] ">
            <div className="  w-[98vw] sm:w-[475px] border-[0.5px] hover:shadow-xl 
                py-4 pl-4 rounded-lg border-[#0c0c0c11] dark:border-[#4b4a4a] bg-white dark:bg-[#1d1c1c] 
                shadow-[#161616] ">
                <h4 className="text-[26px] font-bold "
                >Popular Articles <span className="text-green-500">\</span></h4>
                <hr className="border-[#00000033] w-full mb-7 " />
                <div className="flex flex-col items-center">
                    {/* card 3 */}
                    <div className="flex flex-col  items-start gap-1 sm:gap-4  ">
                        <div className=" relative ">
                        <img src="https://i.ibb.co.com/S2khv9n/1709193013-943.webp" alt="call of duty" 
                        width={226} height={162}
                        className="h-[260px] w-[300px] sm:w-[350px] rounded-lg object-cover "
                        />
                        <div className="bg-yellow-600 px-5 py-[0.5]  rounded-sm absolute top-[70px] sm:top-[120px] ">
                            <button>
                                Games
                            </button>
                        </div>
                        </div>
                        <div className="flex flex-col items-start gap-1 w-[330px] ">
                        <h3 className="text-[16px] leading-4 mt-2 sm:mt-0 sm:leading-5 font-bold   ">
                            The gun fighting game the game chang game development</h3>
                        <div className="flex flex-row items-center gap-2 mt-2 lg:gap-4">
                            <p>1.1.2025</p>
                            <button><FaRegCommentAlt /></button>
                            <button><BiLike className="text-xl" /></button>
                        </div>
                        </div>
                    </div>
                    <hr className="border-[#00000033] dark:border-[#bdb8b8]  w-full mb-7 " />
                    <div className="flex flex-col items-start gap-1 w-[330px] ">
                        <h3 className="text-[16px] leading-4 mt-2 sm:mt-0 sm:leading-5 font-bold   ">
                        The gun fighting game the game chang game development</h3>
                        <div className="flex flex-row items-center gap-2 mt-2 lg:gap-4">
                        <p>1.1.2025</p>
                        <button><FaRegCommentAlt /></button>
                        <button><BiLike className="text-xl" /></button>
                        </div>
                    </div>
                    <hr className="border-[#00000033] dark:border-[#bdb8b8] w-full mb-7 " />
                    <div className="flex flex-col items-start gap-1 w-[330px] ">
                        <h3 className="text-[16px] leading-4 mt-2 sm:mt-0 sm:leading-5 font-bold   ">
                        The gun fighting game the game chang game development</h3>
                        <div className="flex flex-row items-center gap-2 mt-2 lg:gap-4">
                        <p>1.1.2025</p>
                        <button><FaRegCommentAlt /></button>
                        <button><BiLike className="text-xl" /></button>
                        </div>
                    </div>
                </div>
                <hr className="border-[#00000033] dark:border-[#bdb8b8]  w-full mb-[10px] "/>
                <Link to='/reviews'
                className="font-bold hover:text-green-600 flex items-center gap-2"
                    >view more top games <GoArrowRight /> 
                </Link>
            </div>
        </div>
    );
};

export default SideCard;