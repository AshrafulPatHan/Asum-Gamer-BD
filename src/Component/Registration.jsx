import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaEye } from 'react-icons/fa';
import { FaEyeLowVision } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';



const Registration = () => {
    const [showpas,setshowpas] = useState(false)



    return (
        <div>
            <div>
                <Navbar/>
                <div>
                <div>
                <h2 className="text-4xl font-bold text-center mt-11">Registration/Signup</h2>
                <div>
                    <div className="hero bg-cyan-200 min-h-screen">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="text-center lg:text-left">
                                <DotLottieReact
                                    src="https://lottie.host/f107d7b7-2e9a-463e-9698-8b965b72238f/mPsFMFWlBi.lottie"
                                    loop
                                    autoplay
                                    className='w-[300px]  md:w-[600px] lg:[900px] '
                                />
                                <p className="py-6 text-center">
                                    registation for login our wabcite
                                </p>
                            </div>
                            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                                <form  className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            name="name"
                                            className="input input-bordered"
                                            required
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="email"
                                            name="email"
                                            className="input input-bordered"
                                            required
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo-URL</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Photo-URL"
                                            name="PhotoURL"
                                            className="input input-bordered"
                                            required
                                        />
                                    </div>
                                    <div className="form-control relative">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input
                                            type={showpas ? 'text' : 'password' } 
                                            placeholder="password"
                                            name="password"
                                            className="input input-bordered"
                                            required
                                        />
                                        <button 
                                        onClick={() => setshowpas(!showpas)}
                                        type="button"
                                        className='btn btn-xs absolute right-4 top-12'>
                                        {
                                            showpas ? <FaEye ></FaEye> : <FaEyeLowVision ></FaEyeLowVision >
                                        }
                                        </button>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button type="submit" className="btn btn-primary">
                                            Register
                                        </button>
                                    </div>
                                    <Link to="/Login">Or Login</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default Registration;