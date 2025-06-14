import React, { useContext, useEffect, useState } from "react";
import Navbar from "../navigation/Navbar";
import Footer from "../navigation/Footer";
import swal from 'sweetalert';
import { AuthContext } from "../AuthProvider/AuthProvider";

const GameWatchList = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("https://chill-gamer-server-jzl0.onrender.com/watchListsdata")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       setLoading(false);
  //     });
  // }, []);
// const [userReview, setUserReview] = useState([])

const UserEmail = user.email || "email"
console.log(UserEmail);

useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('https://chill-gamer-server-jzl0.onrender.com/my-review', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: UserEmail }) // email কে অবজেক্ট হিসেবে পাঠাও
    });
    const data = await response.json();
    setData(data)
    console.log(`send data to mongodb ${data}`);
    setLoading(false);
  };

  fetchData();
}, []);


  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
       <span className="loading loading-bars loading-xl w-11 h-11"></span>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Rating</th>
                <th>Genre</th>
              </tr>
            </thead>
            {data.map((data) => (
              <tbody key={data._id}>
                <tr>
                  <td>
                    <div className="flex items-center gap-1 sm:gap-3">
                      <div className="avatar">
                        <div className="rounded-xl h-10 sm:h-24 w-10 sm:w-24">
                          <img
                            src={data.Image}
                            alt={data.name}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold sm:font-bold">
                          {data.name}
                        </div>
                        <div className="text-end sm:text-sm opacity-50">
                          {data.Description}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="sm:badge sm:badge-ghost sm:p-2 badge-xs sm:badge-md">
                      Rating {data.Rating}⭐
                    </span>
                  </td>
                  <td>{data.genre || data.Genres}</td>
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
