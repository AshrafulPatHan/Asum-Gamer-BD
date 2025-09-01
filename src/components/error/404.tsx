import { Link } from "react-router";

const Error404 = () => {
    return (
        <div className="flex flex-col items-center bg-white min-h-screen overflow-hidden relative">
            <div className="flex flex-col-reverse lg:flex-row w-full h-full">
                
                {/* Image Section */}
                <div className="w-full lg:w-[60%] h-[250px] sm:h-[350px] lg:h-screen">
                    <img 
                        src="https://i.ibb.co.com/dJcqNwmX/2456051.jpg" 
                        alt="404" 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-[40%] flex flex-col justify-center items-center lg:items-start p-6 lg:absolute lg:right-0 text-center lg:text-left
                bg-[#ffffff09] ">
                    <h2 className="text-blue-500 font-bold text-5xl sm:text-7xl lg:text-9xl">
                        Error 404
                    </h2>
                    <p className="py-4 text-base sm:text-lg">
                        Page is not found or doesn’t exist you are looking for
                    </p>
                    <Link 
                        to="/" 
                        className="bg-amber-500 py-3 px-6 mt-4 rounded-md text-white font-medium hover:bg-amber-600 transition"
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error404;
