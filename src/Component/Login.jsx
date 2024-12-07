import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { FaEye, FaEyeLowVision } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';





const Login = () => {
    const [showpas, setShowPas] = useState(false);




    return (
        <div>
            <Navbar/>
            <div>
                <h2 className="text-4xl font-bold text-center mt-11">Login now</h2>
                <div className="hero bg-cyan-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <DotLottieReact
                                src="https://lottie.host/15535bab-5dfb-49d7-a12b-c97a4e5debb3/YzlhON4tI6.lottie"
                                loop
                                autoplay
                                className='w-[300px]  md:w-[600px] lg:[900px] '
                            />
                            <p className="py-6 text-center">
                                Login for injoy our all funtion
                            </p>
                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <form  className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        name="email"
                                        className="input input-bordered"
                                        required
                                    />
                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type={showpas ? "text" : "password"}
                                        placeholder="Enter your password"
                                        name="password"
                                        className="input input-bordered"
                                        required
                                    />
                                    <button
                                        onClick={() => setShowPas(!showpas)}
                                        type="button"
                                        className="btn btn-xs absolute right-4 top-12"
                                        aria-label={showpas ? "Hide password" : "Show password"}
                                    >
                                        {showpas ? <FaEye /> : <FaEyeLowVision />}
                                    </button>
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        className="text-sm text-blue-500 hover:underline"
                                    >
                                        Forgot Password?
                                    </button>
                                </div>
                                <div className="form-control mt-6 gap-2">
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </div>
                                <Link to="/Registration">Not have acount go Registration</Link>
                            </form>
                            <button
                                className="btn bg-cyan-300 mb-2 mx-8"
                            >
                                Login with Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Login;