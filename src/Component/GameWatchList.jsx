import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const GameWatchList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5022/watchListsdata")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);



  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Rating</th>
                <th>Genre</th>
                <th>Update/Delete</th>
              </tr>
            </thead>
            {data.map((HRate) => (
              <tbody key={HRate._id || HRate.id}>
                <tr>
                  <td>
                    <div className="flex items-center gap-1 sm:gap-3">
                      <div className="avatar">
                        <div className="rounded-xl h-10 sm:h-24 w-10 sm:w-24">
                          <img
                            src={HRate.Image}
                            alt={HRate.name}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold sm:font-bold">
                          {HRate.name}
                        </div>
                        <div className="text-end sm:text-sm opacity-50">
                          {HRate.Description}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="sm:badge sm:badge-ghost sm:p-2 badge-xs sm:badge-md">
                      Rating {HRate.Rating}⭐
                    </span>
                  </td>
                  <td>{HRate.genre || HRate.Genres}</td>
                  <th>
                    <button className="btn btn-xs sm:btn-md">Update</button>
                  </th>
                  <th>
                    <button className="btn btn-xs sm:btn-md">
                      {/* Replace with icon import */}
                      Delete
                    </button>
                  </th>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GameWatchList;
