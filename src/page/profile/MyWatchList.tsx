import { useEffect, useState } from "react";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/navigation/Footer";
import { useAuth } from "../../providers/AuthProvider";
import Cookies from "js-cookie";
import axios from "axios";

interface Review {
  _id: string;
  name: string;
  Title: string;
  Description: string;
  Image: string;
  Rating: number;
  type?: string;
  genre?: string;
  Genres?: string;
}

const MyWatchList = () => {
  const [data, setData] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const PublicApi = import.meta.env.VITE_PUBLIC_API;
  const { user } = useAuth();
  const token = Cookies.get("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await axios.post(
          `${PublicApi}/my-licks`,
          { userEmail: user?.email },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setData(res.data.reviews || []);
      } catch (err: any) {
        setError(err.response?.data?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    if (user?.email && token) {
      fetchData();
    }
  }, [PublicApi, token, user?.email]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-300">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-red-500 font-semibold">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />

      <div className="flex-grow px-4 sm:px-8 py-10">
        <h2 className="text-3xl font-bold mb-8 text-center">🎮 My Liked Reviews List</h2>

        {data.length === 0 ? (
          <p className="text-center text-lg text-gray-600 dark:text-gray-300">
            ❌ You have not any liked review.
          </p>
        ) : (
          <>
            {/* Table for desktop */}
            <div className="hidden md:block overflow-x-auto rounded-lg shadow-lg">
              <table className="min-w-full border border-gray-200 dark:border-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-800">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
                    <th className="px-6 py-3 text-center text-sm font-semibold">Rating</th>
                    <th className="px-6 py-3 text-center text-sm font-semibold">Genre</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((game) => (
                    <tr
                      key={game._id}
                      className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                    >
                      {/* Game Info */}
                      <td className="px-6 py-4 flex items-center gap-4">
                        <img
                          src={game.Image}
                          alt={game.name}
                          className="h-16 w-16 rounded-lg object-cover shadow"
                        />
                        <div>
                          <p className="font-semibold text-lg">{game.name}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                            {game.Description}
                          </p>
                        </div>
                      </td>

                      {/* Rating */}
                      <td className="px-6 py-4 text-center">
                        <span className="inline-block px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">
                          ⭐ {game.Rating}
                        </span>
                      </td>

                      {/* Genre */}
                      <td className="px-6 py-4 text-center">
                        {game.genre || game.Genres || game.type || "N/A"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Card layout for mobile */}
            <div className="md:hidden flex flex-col gap-6">
              {data.map((game) => (
                <div
                  key={game._id}
                  className="p-4 rounded-xl shadow-md bg-white dark:bg-gray-800"
                >
                  <div className="flex gap-4">
                    <img
                      src={game.Image}
                      alt={game.name}
                      className="h-20 w-20 rounded-lg object-cover shadow"
                    />
                    <div className="flex flex-col justify-between">
                      <p className="font-semibold text-lg">{game.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {game.Description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-between items-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">
                      ⭐ {game.Rating}
                    </span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {game.genre || game.Genres || game.type || "N/A"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default MyWatchList;
