import React from 'react';
import Logo from '../assets/Game logo.png'
import { Link } from 'react-router-dom';




const Navbar = () => {
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
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li><Link>Item 1</Link></li>
                                <li>
                                <Link>Home</Link>
                                <ul className="p-2">
                                    <li><Link>All Reviews</Link></li>
                                    <li><Link>Submenu 2</Link></li>
                                </ul>
                                </li>
                                <li><Link>Item 3</Link></li>
                            </ul>
                        </div>
                        <div className='flex flex-row items-center'>
                            <img src={Logo} alt="image" className='w-[60px] sm:w-[100px] md:w-[130px]  ' />
                            <p className="text-sm font-bold sm:text-xl md:font-bold">Chill Gamer</p>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <Link to='/' className='text-2xl font-bold'>Home</Link>
                            </li>
                            <li>
                                <Link to='/AllReviews' className='text-2xl font-bold'>All Reviews</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end gap-1">
                        <Link to='/Login' className="btn text-sm sm:text-xl ">Login</Link>
                        <Link to='/Registration' className="btn text-sm sm:text-xl ">Register</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;