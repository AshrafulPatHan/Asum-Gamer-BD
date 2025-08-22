import { FaGoogle, FaFacebook } from "react-icons/fa";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/navigation/Footer";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();


    const handelLogin = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
        try {
            const res = await axios.post("https://chill-gamer-server-jzl0.onrender.com/login", { email, password });
            
            // token save in cookie
            Cookies.set("token", res.data.token, {
                expires: 7, 
                secure: true,
                sameSite: "strict", 
            });
            console.log("Login Success", res.data.user);
            navigate("/"); 
        } catch (error:any) {
            console.error("Login Failed", error.response.data);
        }
    }
    
return (
    <div>
        <Navbar />
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{
            backgroundImage:
                "url('https://i.ibb.co.com/Ps6Q2k1p/benjamin-voros-ph-IFd-C6l-A4-E-unsplash.jpg')",
            }}
        >
            <div className="bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-center text-white mb-6">
                Login
            </h2>
            <form onSubmit={handelLogin} className="flex flex-col space-y-4">
                <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/70 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/70 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                type="submit"
                className="w-full py-2 rounded-lg font-semibold text-white transition bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg"
                >
                Login
                </button>
            </form>

            <div className="flex items-center justify-center my-4">
                <span className="text-gray-200">Or login with</span>
            </div>

            <div className="flex space-x-4">
                <button className="flex items-center justify-center w-1/2 py-2 rounded-lg text-white font-semibold transition bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 shadow-md">
                <FaGoogle className="mr-2" /> Google
                </button>
                <button className="flex items-center justify-center w-1/2 py-2 rounded-lg text-white font-semibold transition bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-md">
                <FaFacebook className="mr-2" /> Facebook
                </button>
            </div>
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default Login;
