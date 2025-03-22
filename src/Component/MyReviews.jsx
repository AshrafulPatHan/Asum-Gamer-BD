import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaTrashAlt } from "react-icons/fa";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";

const MyReviews = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

// Update Reviews page
const navigate = useNavigate();
const handleUpdate = (HRate) => {
    navigate(`/updateReview/${HRate.id}`, { state: HRate }); 
};
  
  useEffect(() => {
    fetch("https://chill-gamer-server-jzl0.onrender.com/datas")
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

  const handleDelete = id => {
    swal({
      title: "Are you sure?",
      text: "You will not be able to recover this data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        fetch(`https://chill-gamer-server-jzl0.onrender.com/user/${id}`, {
          method: 'DELETE',
        })
        .then(res => res.json())
        .then(result => {
          if (result.deletedCount > 0) {
            swal("Deleted!", "Your data has been deleted.", "success");
            const remainingData = data.filter(HRate => HRate._id !== id);
            setData(remainingData);
          }
        })
        .catch(error => {
          console.error('Error deleting data:', error);
        });
      }
    });
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center">
        <span className="loading loading-ring loading-lg"></span>
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
                <th>Update/Delete</th>
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
                  <th>
                    <button className="btn btn-xs sm:btn-md"
                    onClick={() => handleUpdate(HRate)}>Update</button>
                  </th>
                  <th>
                    <button 
                      className="btn btn-xs sm:btn-md"
                      onClick={() => handleDelete(HRate._id)}
                    >
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

export default MyReviews;

