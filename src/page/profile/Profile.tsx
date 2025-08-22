import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import { useAuth } from "../../providers/AuthProvider";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";


const Profile = () => {
  const { user, logout } = useAuth();

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <Navbar />

      {/* Banner */}
      <div className="relative w-full h-64 md:h-96">
        <img
          src="https://i.ibb.co.com/Zz9Xyrgf/Trails-And-Tales-Header.webp"
          alt="banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#00000054] bg-opacity-40 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
            Welcome, {user?.name || "Gamer"}
          </h1>
        </div>
        <div className="absolute top-2">
            <button className="text-xl bg-white p-2 rounded-full">
                <MdOutlineDashboardCustomize/>
            </button>
        </div>
      </div>

      {/* Profile Card */}
      <div className="flex justify-center -mt-20 mb-12 px-4">
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
          {/* Profile Image */}
          <div className="relative w-32 h-32 mx-auto mb-4">
            <img
              src={user?.photoURL || "https://i.ibb.co.com/k2qwRyG/ob-1711784940.jpg"}
              alt={user?.name}
              className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-700 object-cover shadow-md"
            />
          </div>

          {/* User Info */}
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
            {user?.name || "Anonymous"}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{user?.email || "No Email"}</p>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mb-6 text-gray-700 dark:text-gray-300">
            <FaFacebook className="w-6 h-6 hover:text-blue-600 cursor-pointer transition" />
            <FaTwitter className="w-6 h-6 hover:text-blue-400 cursor-pointer transition" />
            <FaLinkedin className="w-6 h-6 hover:text-blue-700 cursor-pointer transition" />
            <FaInstagram className="w-6 h-6 hover:text-pink-500 cursor-pointer transition" />
          </div>

          {/* Logout Button */}
          <button
            onClick={logout}
            className="px-6 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold shadow-md transition-all duration-300"
          >
            Logout
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
