import React, { useState } from 'react';
import img from '../assets/Game logo.png'





const Footer = () => {

    const [showTooltip, setShowTooltip] = useState(false);



    return (
        <div>
            <div>
                
            </div>
        </div>
    );
};

export default Footer;


{/* <div className="relative inline-block">
                    <img
                        src={img}
                        alt="Sample"
                        className="w-72 h-72 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105" 
                        onMouseEnter={() => setShowTooltip(true)}  // মাউস ঢোকালে নাম দেখাবে
                        onMouseLeave={() => setShowTooltip(false)} // মাউস সরালে নাম লুকাবে
                    />
                    {showTooltip && (
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg text-sm">
                        Sample Image
                        </div>
                    )}
                </div> */}
