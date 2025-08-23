import { useEffect, useState } from "react";
import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import { useNavigate } from "react-router";

type Review = {
  id: string;
  name: string;
  Title: string;
  Rating: number;
  Image: string;
  date: string; 
};

const AllReview = () => {
  const [all, setAll] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Default set to "dateNew"
  const [sortOption, setSortOption] = useState<"ratingHigh" | "ratingLow" | "dateNew" | "dateOld">("dateNew");

  const PublicApi = import.meta.env.VITE_PUBLIC_API;
  const navigate = useNavigate();

  // view details page =>
  const handleExploreDetails = (All:Review) => {
      navigate(`/review/${All.id}`, { state: All }); 
  };

  useEffect(() => {
    fetch(`${PublicApi}/all-review`)
      .then((res) => res.json())
      .then((data) => {
        setAll(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [PublicApi]);

  const sortedReviews = [...all].sort((a, b) => {
    switch (sortOption) {
      case "ratingHigh":
        return b.Rating - a.Rating;
      case "ratingLow":
        return a.Rating - b.Rating;
      case "dateNew":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case "dateOld":
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      default:
        return 0;
    }
  });

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600">Loading reviews...</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      <div className="flex flex-col items-center">
        <h2 className="text-4xl mb-8 mt-16 font-bold">See All Reviews</h2>

        {/* Sorting Section */}
        <div className="flex justify-end w-[90%] md:w-[80%] mb-8 ">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value as any)}
            className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="dateNew">Sort by Date: Newest First</option>
            <option value="dateOld">Sort by Date: Oldest First</option>
            <option value="ratingHigh">Sort by Rating: High → Low</option>
            <option value="ratingLow">Sort by Rating: Low → High</option>
          </select>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mb-24">
          {sortedReviews.map((review) => (
            <div key={review.id} className="max-w-[350px] w-full">
              <div className="space-y-4 rounded-xl bg-white dark:bg-gray-800 p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={review.Image}
                  alt={review.name}
                  className="h-[250px] w-full rounded-lg object-cover"
                />
                <div className="grid gap-2">
                  <div className="flex justify-between items-center">
                    <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {review.name}
                    </h1>
                    <p className="text-sm font-medium text-yellow-600">
                      ⭐ {review.Rating}
                    </p>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {review.Title}
                  </p>
                  <p className="text-sm text-gray-500">
                    {new Date(review.date).toLocaleDateString()}
                  </p>
                </div>

                {/* Professional Button */}
                <div className="flex justify-end">
                  <button
                    className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-md hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                    onClick={() => handleExploreDetails(review)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AllReview;
