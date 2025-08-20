// import React, { useContext, useEffect, useState } from "react";
import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";

// import { AuthContext } from "../AuthProvider/AuthProvider";
// import { toast } from "react-hot-toast";
// import { useLocation, useNavigate } from "react-router";

const AddReview = () => {
//   const { user } = useContext(AuthContext);
//   const { state: locationData } = useLocation();
//   const [cardData, setCardData] = useState(locationData || { myReview: [] });
//   const [type, setType] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (locationData) {
//       setCardData(locationData);
//     }
//   }, [locationData]);

//   const handleAddReview = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const form = event.target as HTMLFormElement;

//     const name = (form.Name as HTMLInputElement).value;
//     const Title = (form.Title as HTMLInputElement).value;
//     const Description = (form.Description as HTMLTextAreaElement).value;
//     const Image = (form.Image as HTMLInputElement).value;
//     const Year = (form.Year as HTMLInputElement).value;
//     const Rating = Number((form.Rating as HTMLInputElement).value);
//     const username = user?.displayName;
//     const userEmail = user?.email;
//     const Lick = 0;
//     const View = 0;
//     const date = new Date();

//     if (!name || !Description || !Image || !Year || !Rating || !type || !Title) {
//       toast.error("All fields are required");
//       return;
//     }

//     const allData = {
//       name,
//       Title,
//       Description,
//       Image,
//       Year,
//       Rating,
//       type,
//       username,
//       userEmail,
//       Lick,
//       View,
//       date,
//     };

//     fetch("https://chill-gamer-server-jzl0.onrender.com/add-review", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(allData),
//     })
//       .then((res) => res.json())
//       .then(() => {
//         toast.success("Review added successfully!");
//         navigate("/myReviews");
//       })
//       .catch(() => toast.error("Error adding review"));
//   };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/Hfz5cTxV/garrett-parker-Dlk-F4-db-COU-unsplash.jpg')",
      }}
    >
      <Navbar />

      <div className="flex flex-col items-center justify-center flex-1 px-4 py-12">
        <form
        //   onSubmit={handleAddReview}
          className="backdrop-blur-lg bg-white/10 dark:bg-black/40 border border-white/20 shadow-2xl rounded-2xl p-8 w-full max-w-4xl text-white"
        >
          <h2 className="text-4xl font-bold text-center mb-8 text-white">
            Add Your Review
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left Section */}
            <div className="flex flex-col gap-5">
              <div>
                <label className="block mb-2 font-medium">Game Name</label>
                <input
                  type="text"
                  name="Name"
                  placeholder="Game Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Game Title</label>
                <input
                  type="text"
                  name="Title"
                  placeholder="Game Title"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Review Description</label>
                <textarea
                  name="Description"
                  placeholder="Write your description..."
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:ring-2 focus:ring-blue-500 outline-none"
                ></textarea>
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Game Cover Image/Thumbnail
                </label>
                <input
                  type="text"
                  name="Image"
                  placeholder="Image URL"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Publishing Year</label>
                <input
                  type="text"
                  name="Year"
                  placeholder="Publishing Year"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col gap-5">
              <div>
                <label className="block mb-2 font-medium">Category</label>
                <select
                //   onChange={(e) => setType(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="" className="text-gray-700">
                    Select category
                  </option>
                  <option value="Action" className="text-gray-700">
                    Action
                  </option>
                  <option value="Creative" className="text-gray-700">
                    Creative
                  </option>
                  <option value="Adventure" className="text-gray-700">
                    Adventure
                  </option>
                  <option value="Race" className="text-gray-700">
                    Race
                  </option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-medium">Rating (1-10)</label>
                <input
                  type="number"
                  name="Rating"
                  placeholder="Rating"
                  min="1"
                  max="10"
                  step="1"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">User Name</label>
                <div className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30">
                  {/* {user?.displayName || "N/A"} */}
                </div>
              </div>

              <div>
                <label className="block mb-2 font-medium">User Email</label>
                <div className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30">
                  {/* {user?.email || "N/A"} */}
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-8 w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold text-white shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default AddReview;
