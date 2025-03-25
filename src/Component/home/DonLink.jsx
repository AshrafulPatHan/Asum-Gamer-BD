import React from 'react';

const DonLink = () => {
    return (
        <div className='flex flex-col items-center mt-3 '>
            <h2 className='sm:text-4xl text-3xl mb-3 font-bold'>Game Download link</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-7'>
                <div className="card bg-base-100 image-full sm:w-96 w-[320px] shadow-xl">
                    <figure>
                        <img
                        src="https://i.ibb.co.com/L0Zqk7c/2x1-NSwitch-Minecraft-image1600w.jpg"
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Minecraft</h2>
                        <p>Go this link for download this game</p>
                        <div className="card-actions justify-end">
                        <a href='https://www.minecraft.net/en-us/download' className="btn btn-primary">Download link</a>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 image-full sm:w-96 w-[320px] shadow-xl">
                    <figure>
                        <img
                        src="https://i.ibb.co.com/ry9tyvg/Roblox-Key.png"
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Roblox</h2>
                        <p>Go this link for download this game</p>
                        <div className="card-actions justify-end">
                        <a href='https://www.roblox.com/download' className="btn btn-primary">Download link</a>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 image-full sm:w-96 w-[320px] shadow-xl">
                    <figure>
                        <img
                        src="https://i.ibb.co.com/9ZWb4cP/ba0572bf9d840b03bf9958809943fb3c76c3adfd6d8f2704b0f1b766f8aa4027.jpg"
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Mario</h2>
                        <p>Go this link for download this game</p>
                        <div className="card-actions justify-end">
                        <a href='https://en.softonic.com/downloads/mario-games-free-for-windows' className="btn btn-primary">Download link</a>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 image-full sm:w-96 w-[320px] shadow-xl">
                    <figure>
                        <img
                        src="https://i.ibb.co.com/1816Csg/23-1024x576.webp"
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Gta-5</h2>
                        <p>Go this link for download this game</p>
                        <div className="card-actions justify-end">
                        <a href='https://www.rockstargames.com/gta-v' className="btn btn-primary">Download link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonLink;