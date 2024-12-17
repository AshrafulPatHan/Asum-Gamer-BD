import React, { useContext, useEffect, useState } from 'react';
import Logo from '../assets/Game logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider/AuthProvider';
import { signOut } from 'firebase/auth';
import auth from '../Firebase/Firebase.init';
import { toast } from 'react-toastify';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'



const Navbar = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                console.log('User logged out successfully');
                toast('Loge out successfully!');
                navigate('/');

            })
            .catch((error) => {
                console.error('Error during logout:', error.message);
                toast('Failed to log out!');
            });
        };
        const [showTooltip, setShowTooltip] = useState(false);

        const [theme, setTheme] = useState('light'); 

        const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        };



    return (
        <div>
            <div>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            {user ? (
                                <ul tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li><Link to='/'>Home</Link></li>
                                    <li>
                                    <Link to='/reviews'>All Reviews</Link>
                                    <ul className="p-2">
                                        <li><Link to='/myReviews'>My Reviews  </Link></li>
                                        <li><Link to='/myWatchlist'>Game WatchList </Link></li>
                                    </ul>
                                    </li>
                                    <li><Link to='/addReview'>Add Review </Link></li>
                                </ul>
                        ) : (
                            <ul tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li><Link Link to='/' >Home</Link></li>
                                <li>
                                <Link to='/reviews'>All Reviews</Link>
                                </li>
                            </ul>
                        )}
                        </div>
                        <div className='flex flex-row items-center'>
                            <img src={Logo} alt="image" className='w-[60px] sm:w-[100px] md:w-[130px]  ' />
                            <p className="text-sm font-bold sm:text-xl md:font-bold">Chill Gamer</p>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        {user ? (
                            <div className='flex flex-col items-center'>
                                <div>
                                    <ul className="menu menu-horizontal px-1">
                                        <li>
                                            <Link to='/' className='text-2xl font-bold'>Home</Link>
                                        </li>
                                        <li>
                                            <Link to='/reviews' className='text-2xl font-bold'>All Reviews</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className='flex flex-row items-center gap-3'>
                                    <Link to='/addReview' className='text-2xl p-3 rounded-xl hover:bg-sky-300 font-bold'>
                                    Add Review </Link>
                                    <Link to='/myReviews' className='text-2xl p-3 rounded-xl hover:bg-sky-300 font-bold'>
                                    My Reviews </Link>
                                    <Link to='/myWatchlist' className='text-2xl p-3 rounded-xl hover:bg-sky-300 font-bold'>
                                    Game WatchList </Link>
                                </div>
                            </div>
                        ) : (
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <Link to='/' className='text-2xl font-bold'>Home</Link>
                            </li>
                            <li>
                            <Link to='/reviews' className='text-2xl font-bold'>All Reviews</Link>
                            </li>
                        </ul>
                        )}
                    </div>
                    <div className='navbar-end '>
                        <div className='flex flex-col items-center sm:flex  sm:flex-row sm:items-center '>
                            <label className="swap swap-rotate md:mr-2">
                            <input type="checkbox" onClick={toggleTheme} className="theme-controller" value="synthwave" />
                            {/* sun icon */}
                            <svg
                                className="swap-off h-10 w-10 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>

                            {/* moon icon */}
                            <svg
                                className="swap-on h-10 w-10 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>
                            </label>
                            {user ? (
                                <div >
                                    <div className='flex flex-row items-center gap-1 md:gap-2 '>
                                        <div className="relative inline-block">
                                            <img
                                                src={user.photoURL || "default-avatar.png"}
                                                alt="Sample"
                                                className="w-8 md:w-10 h-8 md:h-10  rounded-full" 
                                                onMouseEnter={() => setShowTooltip(true)}
                                                onMouseLeave={() => setShowTooltip(false)} 
                                            />
                                            {showTooltip && (
                                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg text-sm">
                                                {user.displayName || "User"}
                                                </div>
                                            )}
                                        </div>
                                        <button onClick={handleLogout} className="btn">
                                            Log out
                                        </button>
                                    </div>
                                </div>
                                ) : (
                                <div className="flex flex-row items-center gap-1">
                                    <Link to='/Login' className="btn text-sm sm:text-xl ">Login</Link>
                                    <Link to='/Registration' className="btn text-sm sm:text-xl ">Register</Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

