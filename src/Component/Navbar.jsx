import React, { useContext, useEffect, useState } from 'react';
import Logo from '../assets/Game logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider/AuthProvider';
import { signOut } from 'firebase/auth';
import auth from '../Firebase/Firebase.init';
import { toast } from 'react-toastify';




const Navbar = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                console.log('User logged out successfully');
                toast('Logged out successfully!');
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
                                    <li><Link>Home</Link></li>
                                    <li>
                                    <Link>All Reviews</Link>
                                    <ul className="p-2">
                                        <li><Link>My Reviews  </Link></li>
                                        <li><Link>Game WatchList </Link></li>
                                    </ul>
                                    </li>
                                    <li><Link>Add Review </Link></li>
                                </ul>
                        ) : (
                            <ul tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li><Link>Home</Link></li>
                                <li>
                                <Link>All Reviews</Link>
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
                                            <Link to='/AllReviews' className='text-2xl font-bold'>All Reviews</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className='flex flex-row items-center gap-3'>
                                    <Link to='/AddReview' className='text-2xl p-3 rounded-xl hover:bg-sky-300 font-bold'>
                                    Add Review </Link>
                                    <Link to='/MyReviews' className='text-2xl p-3 rounded-xl hover:bg-sky-300 font-bold'>
                                    My Reviews </Link>
                                    <Link to='/GameWatchList' className='text-2xl p-3 rounded-xl hover:bg-sky-300 font-bold'>
                                    Game WatchList </Link>
                                </div>
                            </div>
                        ) : (
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <Link to='/' className='text-2xl font-bold'>Home</Link>
                            </li>
                            <li>
                                <Link to='/AllReviews' className='text-2xl font-bold'>All Reviews</Link>
                            </li>
                        </ul>
                        )}
                    </div>
                    <div className='navbar-end '>
                        <div className='sm:flex sm:flex-row sm:items-center '>
                            <button
                            onClick={toggleTheme}
                            className="btn btn-primary mr-1 mb-2"
                            >
                            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                            </button>
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
                                        <button onClick={handleLogout} className="btn">Log out</button>
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

