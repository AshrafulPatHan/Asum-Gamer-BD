import React, { useEffect, useState } from "react";
import Navbar from "../navigation/Navbar";
import Footer from "../navigation/Footer";
import swal from 'sweetalert';

const GameWatchList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://chill-gamer-server-jzl0.onrender.com/watchListsdata")
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
    return (
      <div className="flex flex-col items-center justify-center mt-20">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
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
              </tr>
            </thead>
            {data.map((HRate) => (
              <tbody key={HRate._id}>
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
