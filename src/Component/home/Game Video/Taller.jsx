import { FaRegCommentAlt } from "react-icons/fa";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { BiLike } from "react-icons/bi";

const Taller = () => {
   return (
      <div className="flex flex-col items-center text-white bg-[#1c192c] py-20 ">
         <h4 
         className="text-white text-start text-4xl font-bold mb-12  "
         >Game Video</h4>
         <div className="flex flex-col xl:flex-row items-start gap-8 mx-1 sm:mx-0  ">
            {/* minecraft video */}
            <div className=" relative ">
               <img src="https://i.ibb.co.com/L0Zqk7c/2x1-NSwitch-Minecraft-image1600w.jpg" alt="minecraft"
               width={600} height={560}
               className="h-[400px] sm:h-[565px] lg:w-[600px] w-[90vw] rounded-lg object-cover"
               />
               <button 
                  className=" absolute top-3 left-3 text-lg bg-gray-800 p-3 rounded-full text-white"
                  ><TbPlayerPlayFilled className="" />
               </button>
               <div className=" absolute top-[250px] sm:top-[400px] ml-3 ">
                  <div className="bg-yellow-600 px-2 py-[0.5] rounded-sm w-20 mb-2 ">
                     <button>
                        Games
                     </button>
                  </div>
                  <div className=" w-[300px]  sm:w-[500px] ">
                     <h3 className=" text-[16px] sm:text-[30px] leading-3 sm:leading-8 font-bold    "
                     >Minecraft latest version live 1.21 the legend of block game</h3>
                  </div>
                  <div className="flex flex-row items-center gap-2 mt-2 lg:gap-4">
                     <p>1.1.2025</p>
                     <button><FaRegCommentAlt /></button>
                     <button><BiLike className="text-xl" /></button>
                  </div>
               </div>
            </div>
            {/* Three video */}
            <div className=" flex flex-col items-start gap-6">
               {/* video 1 */}
               <div className="flex flex-row items-end gap-4  ">
                  <div className=" relative ">
                     <img src="https://i.ibb.co.com/S2khv9n/1709193013-943.webp" alt="call of duty" 
                     width={226} height={162}
                     className=" h-[100px] sm:h-[162px] w-[160px] sm:w-[226px] rounded-lg object-cover "
                     />
                     <button 
                     className=" absolute top-8 left-16 sm:top-16 sm:left-24 text-sm sm:text-lg bg-gray-800 p-1 sm:p-3 rounded-full text-white"
                     ><TbPlayerPlayFilled className="" /></button>
                  </div>
                  <div className="flex flex-col items-start gap-1 w-[300px] sm:w-[370px] mb-2 ">
                     <div className="bg-yellow-600 px-2 py-[0.5] rounded-sm ">
                        <button>
                           Games
                        </button>
                     </div>
                     <h3 className="text-[16px] sm:text-[20px] leading-3 mt-2 sm:mt-0 sm:leading-8 font-bold   ">
                        The gun fighting game the game chang game development</h3>
                     <div className="flex flex-row items-center gap-2 mt-2 lg:gap-4">
                        <p>1.1.2025</p>
                        <button><FaRegCommentAlt /></button>
                        <button><BiLike className="text-xl" /></button>
                     </div>
                  </div>
               </div>
               {/* video 2 */}
               <div className="flex flex-row items-end gap-4  ">
                  <div className=" relative ">
                     <img src="https://i.ibb.co.com/6NZyr8T/capsule-616x353.jpg" alt="microsoft flit smelter" 
                     width={226} height={162}
                     className="h-[100px] sm:h-[162px] w-[160px] sm:w-[226px] rounded-lg object-cover"
                     />
                     <button 
                     className="  absolute top-8 left-16 sm:top-16 sm:left-24 text-sm sm:text-lg bg-gray-800 p-1 sm:p-3 rounded-full text-white"
                     ><TbPlayerPlayFilled className="" /></button>
                  </div>
                  <div className="flex flex-col items-start gap-1 w-[300px] sm:w-[370px] mb-2 ">
                     <div className="bg-yellow-600 px-2 py-[0.5] rounded-sm ">
                        <button>
                           Games
                        </button>
                     </div>
                     <h3 className="text-[16px] sm:text-[20px] leading-3 mt-2 sm:mt-0 sm:leading-8 font-bold   ">
                        Fling anywhere you want and have a tour of world</h3>
                     <div className="flex flex-row items-center gap-2 mt-2 lg:gap-4">
                        <p>1.1.2025</p>
                        <button><FaRegCommentAlt /></button>
                        <button><BiLike className="text-xl" /></button>
                     </div>
                  </div>
               </div>
               {/* video 3 */}
               <div className="flex flex-row items-end gap-4  ">
                  <div className=" relative ">
                     <img src="https://i.ibb.co.com/Brp7g6F/resident-evil-8-village.jpg" alt="resting evil" 
                     width={226} height={162}
                     className="h-[100px] sm:h-[162px] w-[160px] sm:w-[226px] rounded-lg object-cover "
                     />
                     <button 
                     className=" absolute top-8 left-16 sm:top-16 sm:left-24 text-sm sm:text-lg bg-gray-800 p-1 sm:p-3 rounded-full text-white"
                     ><TbPlayerPlayFilled className="" /></button>
                  </div>
                  <div className="flex flex-col items-start gap-1 w-[300px] sm:w-[370px] mb-2 ">
                     <div className="bg-yellow-600 px-2 py-[0.5] rounded-sm ">
                        <button>
                           Games
                        </button>
                     </div>
                     <h3 className="text-[16px] sm:text-[20px] mt-2 sm:mt-0 leading-3 sm:leading-8 font-bold  ">
                        A gun fighting horror game you need strong heart for play this game</h3>
                     <div className="flex flex-row items-center gap-2 mt-2 lg:gap-4">
                        <p>1.1.2025</p>
                        <button><FaRegCommentAlt /></button>
                        <button><BiLike className="text-xl" /></button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Taller;