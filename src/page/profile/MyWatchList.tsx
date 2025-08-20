import  { useContext, useEffect, useState } from "react";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/navigation/Footer";
// import { AuthContext } from "../../components/AuthProvider/AuthProvider";

const MyWatchList = () => {
    // const { user } = useContext(AuthContext);
    const [data, setData] = useState<unknown[]>([]);
    const [loading, setLoading] = useState(true);

    // const UserEmail = user?.email || "email";
    const UserEmail =  "bill@gmail.com"; // temp for ui testing

    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch(
            "https://chill-gamer-server-jzl0.onrender.com/my-review",
            {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: UserEmail }),
            }
        );
        const result = await response.json();
        setData(result);
        setLoading(false);
        };

        fetchData();
    }, [UserEmail]);

    if (loading) {
        return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Loading...</p>
        </div>
        );
    }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />

      <div className="flex-grow px-4 sm:px-8 py-10">
        <h2 className="text-3xl font-bold mb-8 text-center">🎮 My Watch List</h2>

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
                    {game.genre || game.Genres || "N/A"}
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
                  {game.genre || game.Genres || "N/A"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MyWatchList;
