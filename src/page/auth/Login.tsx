// import { FaGoogle, FaFacebook } from "react-icons/fa";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/navigation/Footer";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import { useAuth } from "../../providers/AuthProvider";
import { GoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useAuth();
    const navigate = useNavigate();
    const PublicApi = import.meta.env.VITE_PUBLIC_API;



    const handelLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${PublicApi}/login`, { email, password });

            // token save in cookie
            Cookies.set("token", res.data.token, {
                expires: 15,
                secure: true,
                sameSite: "strict",
            });
            setUser(res.data.user);
            console.log("Login Success", res.data.user);
            navigate("/");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error("Login Failed", error.response.data);
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const LoginGoogle = async (credentialResponse: any) => {
        interface MyJwtPayload {
            email: string;
            name: string;
            picture: string;
            iat?: number;
            exp?: number;
        }

        const authData = jwtDecode<MyJwtPayload>(credentialResponse.credential);

        console.log(credentialResponse);
        console.log(authData);

        const UserEmail: string = authData.email
        const UserName: string = authData.name
        const UserPhoto: string = authData.picture
        console.log({ UserEmail, UserName, UserPhoto });

        try {
            const res = await axios.post(`${PublicApi}/google-login`, { UserEmail, UserName, UserPhoto });

            // token save in cookie
            Cookies.set("token", res.data.token, {
                expires: 15,
                secure: true,
                sameSite: "strict",
            });
            setUser(res.data.user);
            console.log("Login Success", res.data.user);
            navigate("/");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
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

                    <div className="flex flex-col items-center justify-center">
                        <GoogleLogin onSuccess={(credentialResponse) => LoginGoogle(credentialResponse)}
                            onError={() => toast("Error is coming on google login")}
                        // auto_select={true} 
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
