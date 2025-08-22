import { useEffect, useState } from "react";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/navigation/Footer";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useAuth } from "../../providers/AuthProvider";
import Cookies from "js-cookie";


type review = {
    _id: string,
    Image:string,
    name:string,

}

const MyReview = () => {
  const { user } = useAuth();
  const [userReview, setUserReview] = useState<review[]>([]);

  const UserEmail = user?.email || "email";
  const PublicApi = import.meta.env.VITE_PUBLIC_API;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("token");

        const response = await fetch(`${PublicApi}/my-review`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ email: UserEmail })
        });

        const data = await response.json();
        setUserReview(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        toast.error("Failed to fetch reviews");
      }
    };
    fetchData();
  }, [UserEmail, PublicApi]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />

      <div className="flex-grow px-4 py-10">
        {userReview.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-gray-700 dark:text-gray-300 text-xl font-semibold">
            You have not added any reviews yet.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
              {/* Table Header */}
              <thead>
                <tr className="h-16 border-b bg-gray-800 dark:bg-gray-700 text-white">
                  <th className="px-6 text-start">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-red-500 bg-red-500"></div>
                  </th>
                  <th className="px-6 text-start">User</th>
                  <th className="px-6 text-start">Name</th>
                  <th className="px-6 text-start">Details</th>
                  <th className="px-6 text-start">Delete</th>
                </tr>
              </thead>

              <tbody>
                {userReview.map((data) => (
                  <tr key={data._id} className="h-16 border-b bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white">
                    <td className="px-6">
                      <input
                        type="checkbox"
                        className="h-5 w-5 rounded-full border-2 border-red-500 bg-red-500 focus:ring-2 focus:ring-red-400"
                      />
                    </td>
                    <td className="px-6">
                      <img
                        src={data.Image}
                        alt={data.name}
                        className="h-12 w-12 rounded-sm object-cover"
                      />
                    </td>
                    <td className="px-6 font-medium">{data.name}</td>
                    <td className="px-6">
                      <button className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 font-bold text-white shadow-md transition duration-300 hover:bg-blue-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        Details
                      </button>
                    </td>
                    <td className="px-6">
                      <button className="flex items-center gap-2 rounded-full bg-red-500 px-4 py-2 font-bold text-white shadow-md transition duration-300 hover:bg-red-700">
                        <FaTrashAlt className="h-5 w-5" />
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default MyReview;
