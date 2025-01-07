import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { BiLike, BiSolidLike } from 'react-icons/bi';
import { FaRegCommentDots } from 'react-icons/fa';


const New = () => {
    const [Like,setLike] = useState(false)
    const [comantxt,setcomantxt] = useState("")

    const handelcoment = (event) => {
        event.preventDefault();
        const comantxtn = event.target.comant.value;
        setcomantxt(comantxtn)
        console.log(comantxt);
        event.target.comant.value = '';
    };
    


    return (
        <div>
            <div className='flex flex-col items-center'>
                <h3 className='text-4xl font-bold text-center'>10 Bast game in the world</h3>
                <p className='text-xl font-bold text-center'>Sponcer By Ali Baba</p>
                <div className="flex justify-center items-center my-5">
                    <div className="w-[320px] md:w-[660px] lg:w-[800px] aspect-video bg-gray-200 rounded-lg overflow-hidden">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/F8BactAXOH4"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                {/* <form className='flex flex-col md:flex-row items-center mt-4 gap-1 md:gap-4' onSubmit={handelcoment}>
                    <button 
                        onClick={() => setLike(!Like)}
                        type="button"
                        className=' text-2xl '>
                        {
                            Like ?  <BiSolidLike /> : <BiLike />
                        }
                        </button>
                        <input type="text" placeholder='comant' name="comant" id="coma" 
                        className='bg-slate-200 p-3 rounded-2xl border-solid border-2 border-sky-500 ' />
                        <button className='btn text-lg' type="submit">
                            <FaRegCommentDots />
                        </button>
                    </form>
                    <div className='flex flex-col items-center gap-1 bg-emerald-200 p-3 mb-4 rounded-xl mt-2'>
                        <h4 className='text-xl text-sky-400  '>Comants : </h4>
                        <p className=' text-xl '>
                        {comantxt}</p>
                    </div> */}
            </div>
        </div>
    );
};

export default New;