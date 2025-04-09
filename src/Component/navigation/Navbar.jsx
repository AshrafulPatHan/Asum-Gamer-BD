import React, { useContext, useEffect, useState } from 'react';
import Logo from '/my_logo.svg'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { signOut } from 'firebase/auth';
import auth from '../../Firebase/Firebase.init';
import { toast } from 'react-toastify';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { IoIosPartlySunny, IoMdCloudyNight } from 'react-icons/io';
import { FaRegUserCircle } from 'react-icons/fa';
import Swal from 'sweetalert2'



const Navbar = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const handleLogout = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "Are you won't be Logout!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Logout!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Logout!",
                text: "Your has been Logout!",
                icon: "success"
              });
                signOut(auth)
                .then(() => {
                  console.log('User logged out successfully');
                //   toast('Loge out successfully!');
                  navigate('/');
                })
                .catch((error) => {
                  console.error('Error during logout:', error.message);
                  toast('Failed to log out!');
              });
            }
          });
        };
        const [showTooltip, setShowTooltip] = useState(false);

    // chang mode
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    useEffect(() => {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
    }, [theme]);
    
    const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    



    return (
        <div className='sticky top-0 z-50'>
            <div className=" bg-[#000000] dark:bg-slate-100 "  >
                <div className="navbar">
                    <div className="navbar-start">
                        {/* mobile dropdown */}
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
                                    <Link to='/addReview'>Add Review</Link>
                                    <ul className="p-2">
                                        <li><Link to='/reviews'>All Reviews</Link></li>
                                        <li><Link to='/myReviews'>My Reviews</Link></li>
                                        <li><Link to='/news'>News</Link></li>
                                        <li><Link to='/store'>Store</Link></li>
                                    </ul>
                                    </li>
                                    <li><Link to='/myWatchlist'>My WatchList</Link></li>
                                </ul>
                        ) : (
                            <ul tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li><Link Link to='/'>Home</Link></li>
                                <li>
                                <Link to='/reviews'>All Reviews</Link>
                                </li>
                                <li><Link to='/news'>News</Link></li>
                                <li><Link to='/store'>Store</Link></li>
                                <li><Link to='/addReview'>Add Review</Link></li>
                                <li><Link to='/myWatchlist'>My WatchList</Link></li>
                            </ul>
                        )}
                        </div>
                        {/* company name */}
                        <Link to='/' className='flex flex-row items-center'>
                            <img src={Logo} alt="logo" className='w-[45px] '/>
                            <p className="text-sm font-bold sm:text-md xl:text-xl ml-2 hidden sm:flex md:font-bold">Asum Gamer BD</p>
                        </Link>
                    </div>
                    {/* navigation */}
                    <div className="navbar-center hidden lg:flex">
                        {user ? (
                            <div className=' flex lg:flex-col lg:items-center xl:flex-row items-center'>
                                <ul className=' flex flex-row gap-2'>
                                    <Link to='/' className=' text-lg xl:text-xl py-2 px-[2px] xl:p-2 text-green-400 rounded-md hover:text-blue-600  font-bold'>
                                    Home
                                    </Link>
                                    <Link to='/reviews' className=' text-lg xl:text-xl py-2 px-[2px] xl:p-2 text-green-400 rounded-md hover:text-blue-600  font-bold'>
                                    All Reviews 
                                    </Link>
                                    <Link to='/myReviews' className=' text-lg xl:text-xl py-2 px-[2px] xl:p-2 text-green-400 rounded-md  hover:text-blue-600 font-bold'>
                                    My Reviews
                                    </Link>
                                    <Link to='/addReview' className='text-lg xl:text-xl py-2 px-[2px] xl:p-2 text-green-400 rounded-md  hover:text-blue-600 font-bold'>
                                    Add Review
                                    </Link>
                                    <Link to='/myWatchlist' className='text-lg xl:text-xl py-2 px-[2px] xl:p-2 text-green-400 rounded-md  hover:text-blue-600 font-bold'>
                                    My WatchList
                                    </Link>
                                    <Link to='/news' className='text-lg xl:text-xl py-2 px-[2px] xl:p-2 text-green-400 rounded-md hover:text-blue-600  font-bold'>
                                        News
                                    </Link>
                                    <Link to='/store' className='text-lg xl:text-xl py-2 px-[2px] xl:p-2 text-green-400 rounded-md hover:text-blue-600 font-bold'>
                                        Store
                                    </Link>
                                </ul>
                            </div>
                        ) : (
                        <ul className="flex flex-row px-1">
                            <Link to='/' className=' text-lg xl:text-xl p-2 text-green-400 rounded-md hover:text-blue-600 font-bold'>
                                Home
                            </Link>
                            <Link to='/reviews' className='text-lg xl:text-xl p-2 text-green-400 rounded-md hover:text-blue-600 hover:bg-none font-bold'>
                                All Reviews
                            </Link>
                            <Link to='/news' className='text-lg xl:text-xl p-2 text-green-400 rounded-md hover:text-blue-600 hover:bg-none font-bold'>
                                News
                            </Link>
                            <Link to='/store' className='text-lg xl:text-xl p-2 text-green-400 rounded-md hover:text-blue-600 hover:bg-none font-bold'>
                                Store
                            </Link>
                            <Link to='/addReview' className='text-lg xl:text-xl p-2 text-green-400 rounded-md  hover:text-blue-600 font-bold'>
                                Add Review
                            </Link>
                            <Link to='/myWatchlist' className='text-lg xl:text-xl p-2 text-green-400 rounded-md  hover:text-blue-600 font-bold'>
                                My WatchList
                            </Link>
                        </ul>
                        )}
                    </div>
                    <div className='navbar-end '>
                        {/* user in mobile */}
                        <div className="dropdown dropdown-end lg:hidden">
                            <div tabIndex={0} role="button" className="btn btn-ghost ">
                            <FaRegUserCircle className='text-4xl' />
                            </div>
                                {user ? (
                                    <ul tabIndex={0}
                                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                        <div className="tooltip" data-tip={user.displayName || "User"}>
                                            <img
                                                    src={user.photoURL || "default-avatar.png"}
                                                    alt={user.displayName || "User"}
                                                    className="w-8 md:w-10 h-8 md:h-10  rounded-full" 
                                                    onMouseEnter={() => setShowTooltip(true)}
                                                    onMouseLeave={() => setShowTooltip(false)} 
                                                />
                                        </div>
                                        <Link to='/profile' 
                                        className='btn-sm bg-[#f0eded] border-2 border-slate-100  
                                        text-blue-600 rounded-lg mb-2 mt-1 pt-1  '
                                        >Profile</Link>
                                        <button onClick={handleLogout} className="btn text-sky-600">
                                            Log out
                                        </button>
                                    </ul>
                                ) : (
                                    <ul tabIndex={0}
                                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                        <li><Link Link to='/login' >Login</Link></li>
                                        <li>
                                        <Link to='/registration'>Registration</Link>
                                        </li>
                                    </ul>
                                )}
                        </div>
                        {/* light mode /dark mode */}
                        <label className="swap swap-rotate mr-0 2xl:mr-2">
                            <input type="checkbox" onClick={toggleTheme} className="theme-controller" value="synthwave" />
                            {/* sun icon */}
                            <IoIosPartlySunny className='swap-off h-10 w-10 fill-current' />
                            {/* moon icon */}
                            <IoMdCloudyNight className="swap-on h-10 w-10 fill-current"/>
                        </label>
                        {/* user in desktop and  */}
                        <div className='hidden lg:flex'>
                            <div className='flex flex-col items-center sm:flex  sm:flex-row sm:items-center '>
                                {user ? (
                                    <div >
                                        <div className='flex flex-row items-center gap-1 md:gap-2 '>
                                            <div className=" tooltip tooltip-bottom" data-tip={user.displayName || "User"}>
                                                <div className='dropdown dropdown-end'>
                                                    <div tabIndex={0} role="button" >
                                                        <img
                                                            src={user.photoURL || "default-avatar.png"}
                                                            alt="User"
                                                            className="w-8 md:w-10 h-8 md:h-10  rounded-full" 
                                                            onMouseEnter={() => setShowTooltip(true)}
                                                            onMouseLeave={() => setShowTooltip(false)} 
                                                        />
                                                    </div>
                                                    <div className='dropdown-content menu bg-base-100 border-2 
                                                    rounded-md z-[1] w-52 p-2 shadow flex flex-col gap-1  '>
                                                        <Link className='btn-md pt-3 bg-slate-300 rounded-md text-base' to='/profile'
                                                        >Profile</Link>
                                                        <Link className='btn-md pt-3 bg-slate-300 rounded-md text-base' to='/setting'
                                                        >setting</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <button onClick={handleLogout} className="btn text-sky-600">
                                                Log out
                                            </button>
                                        </div>
                                    </div>
                                    ) : (
                                        // not login
                                    <div className="flex flex-row items-center gap-1">
                                        <Link to='/login' className="btn  text-sky-600 ">Login</Link>
                                        <Link to='/registration' className="btn  text-sky-600 ">Register</Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

