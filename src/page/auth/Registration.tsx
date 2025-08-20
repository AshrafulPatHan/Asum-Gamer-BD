import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import "./auth.css"

const Registration = () => {
       const handelAdminAuth = ()=>{
        console.log("hello word");
    }


    return (
        <div className=" bg-white dark:bg-black text-black dark:text-white ">
            <Navbar/>
            <div className="flex flex-col lg:flex-row items-center lg:items-start relative">
                {/* Left Section */}
                <div className="w-full lg:w-[50vw] h-[300px] lg:h-screen auth-photo p-6 flex flex-col justify-center lg:justify-start">
                    <h2 className="text-white text-3xl font-bold mb-4">registration for use our website</h2>
                    <p className="text-white text-sm sm:text-base w-full sm:w-[70%] leading-relaxed">
                        Enter your name and email and make a strong password and add a beautiful profile picture to make your profile grate
                    </p>
                </div>

                {/* Mobile Profile Image */}
                <div className="w-28 h-28 overflow-hidden bg-black rounded-full lg:hidden flex items-center justify-center absolute top-[240px] ">
                    <img src="https://i.ibb.co.com/7xR5TqRx/vesonema-l-Q2m-TKVRt-N4-unsplash.jpg" alt="my photo" className="object-cover w-24" />
                </div>

                {/* Right Section */}
                <div className="bg-[#fdf4f4] h-screen w-full lg:w-[50vw] flex items-center justify-center">
                    <form 
                        onSubmit={handelAdminAuth} 
                        className="p-8 w-[90%] max-w-md text-gray-800"
                    >
                        <h2 className="text-2xl font-bold mb-2">Registration</h2>
                        <p className="text-sm text-gray-600 mb-6">Enter name and email password</p>

                        {/* Name */}
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <input 
                            type="text" 
                            name="Name" 
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 mb-4"
                        />
                        {/* Email */}
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 mb-4"
                        />
                        
                        <div className="grid w-full max-w-xs items-center gap-1.5">
                            <label className="block text-sm font-medium mb-2">photo</label>
                            <input id="picture" type="file" className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"/>
                        </div>

                        {/*  Password */}
                        <label className="block text-sm font-medium mb-2"> Password</label>
                        <input 
                            type="text" 
                            name="Password" 
                            placeholder="Enter password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 mb-6"
                        />

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            className="w-full bg-pink-500 text-white font-semibold py-2 rounded-xl hover:bg-pink-600 transition-all duration-200"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Registration;