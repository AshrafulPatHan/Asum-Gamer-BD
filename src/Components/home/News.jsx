import { BiLike } from "react-icons/bi";
import { FaFacebook, FaGithub, FaLinkedin, FaRegComment, FaRegCommentAlt } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { TbPlayerPlayFilled } from "react-icons/tb";

const News = () => {
   return (
      <div className="flex flex-col items-center mb-24 mt-24 overflow-x-hidden">
         <h4 className="text-xl sm:text-[40px] text-black dark:text-white font-bold mb-5 ">News</h4>
         <div className="flex flex-col xl:flex-row items-start gap-5 xl:gap-7">
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
                     className="h-[100px] w-[160px] sm:h-[162px]  sm:w-[226px] rounded-lg object-cover"
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
            {/* ------------ side card -  */}
            <div className="flex flex-col gap-5 xl:gap-10 ">
               <div className="  w-[98vw] sm:w-[475px] border-[0.5px] shadow-xl 
                  py-4 pl-4 rounded-lg border-[#0c0c0c11] dark:border-[#9b9898] bg-white dark:bg-[#0e0c0c] ">
                  <h4 className="text-[26px] font-bold "
                  >Popular Articles <span className="text-green-500">\</span></h4>
                  <hr className="border-[#00000033] dark:border-[#bdb8b8]  w-full mb-7 " />
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
                  </div>
                  <hr className="border-[#00000033] dark:border-[#bdb8b8]  w-full mb-[10px] "/>
                  <button
                  className="font-bold hover:text-green-600 flex items-center gap-2"
                  >view more top games <GoArrowRight /> </button>
               </div>
               {/* comment section */}
               <div className="flex flex-col items-center gap-11">
                  <div className="flex items-center gap-3">
                     <div className="flex items-center justify-center rounded-md text-white text-lg w-[50px] h-[50px]
                     sm:w-[150px] sm:h-[40px]  bg-[#1c1a8a] ">
                        <FaFacebook />
                     </div>
                     <div className="flex items-center justify-center rounded-md text-white text-lg w-[50px] h-[50px]
                     sm:w-[150px] sm:h-[40px]  bg-[#1c1a8a]   ">
                        <FaLinkedin />
                     </div>
                     <div className="flex items-center justify-center rounded-md text-white text-lg w-[50px] h-[50px]
                     sm:w-[150px] sm:h-[40px]  bg-[#1c1a8a]   ">
                        <FaGithub />
                     </div>
                  </div>
                  <div className=" relative">
                     <div>
                        <img src="https://images.photowall.com/products/74785/black-dragon-at-beach.jpg?h=699&q=85" alt="Dragon"
                        className=" w-[96vw] sm:w-[370px] h-[296px] object-cover rounded-lg " />
                     </div>
                     <div className="flex flex-col items-center gap-2 bg-black/30  w-[96vw] sm:w-[370px] h-[296px]  rounded-lg
                      absolute top-0 text-white ">
                        <h3 className="font-bold text-xl">Give Feedback</h3>
                        <div className="flex items-center gap-1 text-lg">
                        <FaRegComment className="text-2xl"/>
                           write your comment without Login
                        </div>
                        <div className=" flex flex-col items-start gap-5 mt-3">
                           <div className="relative w-max">
                              <input className="peer border-b border-gray-500 focus:border-[#1B8EF8] bg-transparent py-2 text-[#1B8EF8] focus:outline-none" type="text" id='navigate_ui_input_44'/>
                              <label className="absolute -top-2 left-0 bg-transparent text-xs text-white duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400" htmlFor="navigate_ui_input_44">
                              Name or Fake Name
                              </label>
                           </div>
                           <div className="relative w-max">
                              <input className="peer border-b border-gray-500 focus:border-[#1B8EF8] bg-transparent py-2 text-[#1B8EF8] focus:outline-none" type="text" id='navigate_ui_input_44'/>
                              <label className="absolute -top-2 left-0 bg-transparent text-xs text-white duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400" htmlFor="navigate_ui_input_44">
                              Comment
                              </label>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default News;