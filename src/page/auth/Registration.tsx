import { useState } from "react";
import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import "./auth.css"
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router";

const Registration = () => {
    const [photo, setPhoto] = useState("");
    const [loading, setLoading] = useState(false);

    const apiKey = import.meta.env.VITE__IMAGEBB_API_KEY;
    const navigate = useNavigate();

    // mange file submit
    const handleFileSelect = async (file: File) => {
        const formData = new FormData();
        formData.append("image", file);

        try {
            const response = await fetch(
                `https://api.imgbb.com/1/upload?expiration=600&key=${apiKey}`,
                {
                    method: "POST",
                    body: formData
                }
            );
            const data = await response.json();
            if (data.success) {
                const imageUrl = data.data.url;
                setPhoto(imageUrl); 
                toast.success("Image uploaded successfully!");
            } else {
                toast.error("Failed to upload image");
            }
        } catch (error) {
            console.error("Image upload error:", error);
            toast.error("Image upload error");
        }
    };

    // Handle Registration
    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const form = e.currentTarget as HTMLFormElement;
        const name = (form.elements.namedItem("name") as HTMLInputElement).value;
        const email = (form.elements.namedItem("email") as HTMLInputElement).value;
        const password = (form.elements.namedItem("password") as HTMLInputElement).value;

        if (!name || !email || !password || !photo) {
            toast.error("⚠️ Please fill all fields and upload photo");
            setLoading(false);
            return;
        }

        try {
            const res = await axios.post("https://chill-gamer-server-jzl0.onrender.com/register", {
                name,
                email,
                password,
                photoURL: photo
            });

            if (res.status === 200) {
                toast.success("✅ Registration Successful!");
                form.reset();
                setPhoto("");
                navigate("/"); 
            }
        } catch (error: any) {
            toast.error("❌ Registration failed: " + (error.response?.data || error.message));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white dark:bg-black text-black dark:text-white">
            <Navbar/>
            <div className="flex flex-col lg:flex-row items-center lg:items-start relative">
                
                {/* Left Section */}
                <div className="w-full lg:w-[50vw] h-[300px] lg:h-screen auth-photo p-6 flex flex-col justify-center lg:justify-start">
                    <h2 className="text-white text-3xl font-bold mb-4">Registration for our website</h2>
                    <p className="text-white text-sm sm:text-base w-full sm:w-[70%] leading-relaxed">
                        Enter your name and email, create a strong password and upload a profile picture.
                    </p>
                </div>

                {/* Right Section */}
                <div className="bg-[#fdf4f4] h-screen w-full lg:w-[50vw] flex items-center justify-center">
                    <form 
                        onSubmit={handleRegister} 
                        className="p-8 w-[90%] max-w-md text-gray-800"
                    >
                        <h2 className="text-2xl font-bold mb-2">Registration</h2>
                        <p className="text-sm text-gray-600 mb-6">Enter name, email, photo & password</p>

                        {/* Name */}
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 mb-4"
                        />

                        {/* Email */}
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 mb-4"
                        />
                        
                        {/* Photo Upload */}
                        <label className="block text-sm font-medium mb-2">Photo</label>
                        <input 
                            id="picture" 
                            type="file" 
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) { 
                                    handleFileSelect(file);
                                }
                            }}
                            className="w-full text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100 mb-4"
                        />

                        {/* Password */}
                        <label className="block text-sm font-medium mb-2">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Enter password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 mb-6"
                        />

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            disabled={loading}
                            className="w-full bg-pink-500 text-white font-semibold py-2 rounded-xl hover:bg-pink-600 transition-all duration-200 disabled:opacity-50"
                        >
                            {loading ? "Registering..." : "Register"}
                        </button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Registration;
