import { BiLike } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { GoArrowRight } from "react-icons/go";


const Latest = () => {
   return (
      <div className="flex flex-col items-center mb-24">
         <div className="flex flex-col xl:flex-row items-start xl:gap-7">
            <div className="flex flex-col items-center sm:items-start gap-8">
               <h3 className="text-[40px] text-black font-bold mb-5 "
               >Latest Reviews <samp className="text-green-500">\</samp> </h3>
               <div className=" relative text-white ">
                  <img src="https://i.ibb.co.com/L0Zqk7c/2x1-NSwitch-Minecraft-image1600w.jpg" alt="minecraft"
                  width={770} height={475}
                  className="h-[400px] sm:h-[475px] w-[90vw] lg:w-[770px]  rounded-lg object-cover"
                  />
                  <div className=" absolute top-[250px] sm:top-[320px] ml-3 ">
                     <div className="bg-yellow-600 px-2 py-[0.5] rounded-sm w-20 mb-2 ">
                        <button>
                           Games
                        </button>
                     </div>
                     <div className=" w-[300px]  sm:w-[500px] ">
                        <h3 className=" text-[16px] sm:text-[30px] leading-3 sm:leading-8 font-extrabold 
                        text-white  hover:text-green-300 cursor-pointer    "
                        >Minecraft latest version live 1.21 the legend of block game</h3>
                     </div>
                     <div className="flex flex-row items-center gap-2 mt-2 lg:gap-4">
                        <p>1.1.2025</p>
                        <button><FaRegCommentAlt /></button>
                        <button><BiLike className="text-xl" /></button>
                     </div>
                  </div>
               </div>
               <div className="flex flex-col md:flex-row gap-4 xl:gap-7 ">
                  {/* card 1 */}
                  <div className="flex flex-col sm:flex-row md:flex-col items-start gap-1 sm:gap-4  ">
                     <div className=" relative ">
                        <img src="https://i.ibb.co.com/S2khv9n/1709193013-943.webp" alt="call of duty" 
                        width={226} height={162}
                        className="h-[160px] w-[236px] rounded-lg object-cover "
                        />
                        <div className="bg-yellow-600 px-5 py-[0.5]  rounded-sm absolute top-[70px] sm:top-[120px] ">
                           <button>
                              Games
                           </button>
                        </div>
                     </div>
                     <div className="flex flex-col items-start gap-1 w-[230px] ">
                        <h3 className="text-[16px] leading-4 mt-2 sm:mt-0 sm:leading-5 font-bold   ">
                           The gun fighting game the game chang game development</h3>
                        <div className="flex flex-row items-center gap-2 mt-2 lg:gap-4">
                           <p>1.1.2025</p>
                           <button><FaRegCommentAlt /></button>
                           <button><BiLike className="text-xl" /></button>
                        </div>
                     </div>
                  </div>
                  {/* card 2 */}
                  <div className="flex flex-col sm:flex-row md:flex-col items-start gap-1 sm:gap-4  ">
                     <div className=" relative ">
                        <img src="https://i.ibb.co.com/S2khv9n/1709193013-943.webp" alt="call of duty" 
                        width={226} height={162}
                        className="h-[160px] w-[236px] rounded-lg object-cover "
                        />
                        <div className="bg-yellow-600 px-5 py-[0.5]  rounded-sm absolute top-[70px] sm:top-[120px] ">
                           <button>
                              Games
                           </button>
                        </div>
                     </div>
                     <div className="flex flex-col items-start gap-1 w-[230px] ">
                        <h3 className="text-[16px] leading-4 mt-2 sm:mt-0 sm:leading-5 font-bold   ">
                           The gun fighting game the game chang game development</h3>
                        <div className="flex flex-row items-center gap-2 mt-2 lg:gap-4">
                           <p>1.1.2025</p>
                           <button><FaRegCommentAlt /></button>
                           <button><BiLike className="text-xl" /></button>
                        </div>
                     </div>
                  </div>
                  {/* card 3 */}
                  <div className="flex flex-col sm:flex-row md:flex-col items-start gap-1 sm:gap-4  ">
                     <div className=" relative ">
                        <img src="https://i.ibb.co.com/S2khv9n/1709193013-943.webp" alt="call of duty" 
                        width={226} height={162}
                        className="h-[160px] w-[236px] rounded-lg object-cover "
                        />
                        <div className="bg-yellow-600 px-5 py-[0.5]  rounded-sm absolute top-[70px] sm:top-[120px] ">
                           <button>
                              Games
                           </button>
                        </div>
                     </div>
                     <div className="flex flex-col items-start gap-1 w-[230px] ">
                        <h3 className="text-[16px] leading-4 mt-2 sm:mt-0 sm:leading-5 font-bold   ">
                           The gun fighting game the game chang game development</h3>
                        <div className="flex flex-row items-center gap-2 mt-2 lg:gap-4">
                           <p>1.1.2025</p>
                           <button><FaRegCommentAlt /></button>
                           <button><BiLike className="text-xl" /></button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* ------------ side card -  */}
            <div className="flex flex-col items-start w-[300px] sm:w-[475px] border-[0.5px] shadow-xl 
            py-4 pl-4 rounded-lg border-[#0c0c0c11] mt-10 xl:mt-[115px] ">
               <h4 className="text-[26px] font-bold "
               >Top 5 Best Games <span className="text-green-500">\</span></h4>
               <hr className="border-[#00000033] w-full mb-7 " />
               <div>
                  {/* side card 1 */}
                  <div className="flex flex-row items-end gap-1 mb-2 ">
                     <div className=" relative ">
                        <img src="https://i.ibb.co.com/6NZyr8T/capsule-616x353.jpg" alt="microsoft flit smelter" 
                        className="h-[80px] w-[80px] lg:w-[120px] lg:h-[120px] rounded-lg object-cover"
                        />
                     </div>
                     <div className="flex flex-col items-start gap-1 w-[200px] ">
                        <h3 className="text-[15px] leading-4 mt-2 sm:mt-0 font-bold   ">
                        microsoft flit smelter</h3>
                        <div className="flex flex-row items-center ">
                           <p>1.1.2025</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div>
                  {/* side card 1 */}
                  <div className="flex flex-row items-end gap-1 mb-2 ">
                     <div className=" relative ">
                        <img src="https://i.ibb.co.com/6NZyr8T/capsule-616x353.jpg" alt="microsoft flit smelter" 
                        className="h-[80px] w-[80px] lg:w-[120px] lg:h-[120px] rounded-lg object-cover"
                        />
                     </div>
                     <div className="flex flex-col items-start gap-1 w-[200px] ">
                        <h3 className="text-[15px] leading-4 mt-2 sm:mt-0 font-bold   ">
                        microsoft flit smelter</h3>
                        <div className="flex flex-row items-center ">
                           <p>1.1.2025</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div>
                  {/* side card 1 */}
                  <div className="flex flex-row items-end gap-1 mb-2 ">
                     <div className=" relative ">
                        <img src="https://i.ibb.co.com/6NZyr8T/capsule-616x353.jpg" alt="microsoft flit smelter" 
                        className="h-[80px] w-[80px] lg:w-[120px] lg:h-[120px] rounded-lg object-cover"
                        />
                     </div>
                     <div className="flex flex-col items-start gap-1 w-[200px] ">
                        <h3 className="text-[15px] leading-4 mt-2 sm:mt-0 font-bold   ">
                        microsoft flit smelter</h3>
                        <div className="flex flex-row items-center ">
                           <p>1.1.2025</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div>
                  {/* side card 1 */}
                  <div className="flex flex-row items-end gap-1 mb-2 ">
                     <div className=" relative ">
                        <img src="https://i.ibb.co.com/6NZyr8T/capsule-616x353.jpg" alt="microsoft flit smelter" 
                        className="h-[80px] w-[80px] lg:w-[120px] lg:h-[120px] rounded-lg object-cover"
                        />
                     </div>
                     <div className="flex flex-col items-start gap-1 w-[200px] ">
                        <h3 className="text-[15px] leading-4 mt-2 sm:mt-0 font-bold   ">
                        microsoft flit smelter</h3>
                        <div className="flex flex-row items-center ">
                           <p>1.1.2025</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div>
                  {/* side card 1 */}
                  <div className="flex flex-row items-end gap-1 mb-2 ">
                     <div className=" relative ">
                        <img src="https://i.ibb.co.com/6NZyr8T/capsule-616x353.jpg" alt="microsoft flit smelter" 
                        className="h-[80px] w-[80px] lg:w-[120px] lg:h-[120px] rounded-lg object-cover"
                        />
                     </div>
                     <div className="flex flex-col items-start gap-1 w-[200px] ">
                        <h3 className="text-[15px] leading-4 mt-2 sm:mt-0 font-bold   ">
                        microsoft flit smelter</h3>
                        <div className="flex flex-row items-center ">
                           <p>1.1.2025</p>
                        </div>
                     </div>
                  </div>
               </div>
               <hr className="border-[#00000033] w-full mb-[10px] "/>
               <button
               className="font-bold hover:text-green-600 flex items-center gap-2"
               >view more top games <GoArrowRight /> </button>
            </div>
         </div>
      </div>
   );
};

export default Latest;