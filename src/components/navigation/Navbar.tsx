import { useEffect, useState } from 'react';
import Logo from '../../assets/icons/logoAsum.png'
import { IoIosPartlySunny, IoMdCloudyNight } from 'react-icons/io';
import { Link } from 'react-router';
import { useAuth } from '../../providers/AuthProvider';


const Navbar = () => {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
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
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="sticky top-0 z-50 bg-slate-100 dark:bg-[#131313] shadow-md">
      <div className="flex items-center justify-between px-4 py-2">

        {/* Logo + mobile menu button */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="logo" className="w-10" />
            <p className="ml-2 hidden sm:block text-base md:text-lg xl:text-xl font-bold text-black dark:text-white">
              Asum Gamer BD
            </p>
          </Link>
          {/* mobile menu toggle */}
          <button
            className="ml-2 lg:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black dark:text-white"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-4">
          {user ? (
            <>
              <Link to="/" className="px-3 py-2 text-green-400 font-bold hover:text-blue-600">Home</Link>
              <Link to="/reviews" className="px-3 py-2 text-green-400 font-bold hover:text-blue-600">All Reviews</Link>
              <Link to="/myReviews" className="px-3 py-2 text-green-400 font-bold hover:text-blue-600">My Reviews</Link>
              <Link to="/add-review" className="px-3 py-2 text-green-400 font-bold hover:text-blue-600">Add Review</Link>
              <Link to="/my-watch-list" className="px-3 py-2 text-green-400 font-bold hover:text-blue-600">My Watchlist</Link>
              <Link to="/news" className="px-3 py-2 text-green-400 font-bold hover:text-blue-600">News</Link>
              <Link to="/store" className="px-3 py-2 text-green-400 font-bold hover:text-blue-600">Store</Link>
            </>
          ) : (
            <>
              <Link to="/" className="px-3 py-2 text-green-400 font-bold hover:text-blue-600">Home</Link>
              <Link to="/reviews" className="px-3 py-2 text-green-400 font-bold hover:text-blue-600">All Reviews</Link>
              <Link to="/news" className="px-3 py-2 text-green-400 font-bold hover:text-blue-600">News</Link>
              <Link to="/store" className="px-3 py-2 text-green-400 font-bold hover:text-blue-600">Store</Link>
              <Link to="/add-review" className="px-3 py-2 text-green-400 font-bold hover:text-blue-600">Add Review</Link>
              <Link to="/my-watch-list" className="px-3 py-2 text-green-400 font-bold hover:text-blue-600">My Watchlist</Link>
            </>
          )}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* theme toggle */}
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            {theme === 'light' ? (
              <IoIosPartlySunny className="h-7 w-7 text-black" />
            ) : (
              <IoMdCloudyNight className="h-7 w-7 text-white" />
            )}
          </button>

          {/* user profile */}
          {user ? (
            <div className="relative">
              <img
                src={user.photoURL || "default-avatar.png"}
                alt="User"
                className="w-10 h-10 rounded-full cursor-pointer"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
              />
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md p-2 flex flex-col">
                  <Link to="/profile" className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Profile</Link>
                  <Link to="/setting" className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Settings</Link>
                  <button onClick={logout} className="px-3 py-2 text-left text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Logout</button>
                </div>
              )}
            </div>
          ) : (
            <div className="hidden lg:flex gap-2">
              <Link to="/login" className="px-3 py-1 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white">Login</Link>
              <Link to="/registration" className="px-3 py-1 border border-green-600 text-green-600 rounded-md hover:bg-green-600 hover:text-white">Register</Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-slate-100 dark:bg-[#131313] px-4 pb-3 flex flex-col space-y-2">
          {user ? (
            <>
              <Link to="/" className="px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">Home</Link>
              <Link to="/reviews" className="px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">All Reviews</Link>
              <Link to="/myReviews" className="px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">My Reviews</Link>
              <Link to="/add-review" className="px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">Add Review</Link>
              <Link to="/my-watch-list" className="px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">My Watchlist</Link>
              <Link to="/news" className="px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">News</Link>
              <Link to="/store" className="px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">Store</Link>
              <button onClick={logout} className="px-3 py-2 text-left text-red-500 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">Logout</button>
            </>
          ) : (
            <>
              <Link to="/" className="px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">Home</Link>
              <Link to="/reviews" className="px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">All Reviews</Link>
              <Link to="/news" className="px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">News</Link>
              <Link to="/store" className="px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">Store</Link>
              <Link to="/add-review" className="px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">Add Review</Link>
              <Link to="/my-watch-list" className="px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">My Watchlist</Link>
              <Link to="/login" className="px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">Login</Link>
              <Link to="/registration" className="px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">Register</Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
