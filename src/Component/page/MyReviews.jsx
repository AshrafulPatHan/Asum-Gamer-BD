import React, { useContext, useEffect, useState } from "react";
import Navbar from "../navigation/Navbar";
import Footer from "../navigation/Footer";
import { FaTrashAlt } from "react-icons/fa";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from '../AuthProvider/AuthProvider';

const MyReviews = () => {
const { user } = useContext(AuthContext);
const [userReview, setUserReview] = useState([])

const UserEmail = user.email || "email"
console.log(UserEmail);

useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('http://localhost:5022/my-review', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: UserEmail }) // email কে অবজেক্ট হিসেবে পাঠাও
    });
    const data = await response.json();
    setUserReview(data)
    console.log(`send data to mongodb ${data}`);
  };

  fetchData();
}, []);



  return (
    <div className="flex flex-col min-h-screen bg-green-300">
      <Navbar />
      <div className="flex-grow">
        <div className="overflow-x-auto mt-10">
          <table className="min-w-full border border-gray-200 bg-white shadow-lg">
            {/* Table Header */}
              <thead>
                  <tr className="h-[70px] border-b bg-[#141B29] text-[#FFFFFF]">
                      <th className="w-[50px] px-6 py-4 text-start ">
                          <div 
                          className="flex h-6 w-6 items-center rounded-full cursor-pointer border-2 border-red-500 bg-red-500 text-red-500 focus:border-red-400 focus:ring-red-400" />
                      </th>
                      <th className="px-6 py-4 text-start">User</th>
                      <th className="px-6 py-4 text-start">Status</th>
                      <th className="px-6 py-4 text-start">Details</th>
                      <th className="px-6 py-4 text-start">Delete</th>
                  </tr>
              </thead>
              <tbody>
                {/* Table rows */}
                {userReview.map((data)=>(
                  <tr key={data._id} className="h-[70px] border-b bg-[#484D58] text-[#FFFFFF]">
                      <th className="px-6 py-4 text-start">
                          <input type="checkbox"  id="myCheckbox" className="flex h-6 w-6  items-center rounded-full border-2 border-red-500 bg-red-500 text-red-500 focus:border-red-400 focus:ring-red-400" />
                      </th>
                      <th className="px-6 py-4 text-start">
                          <img className="h-[50px] w-[50px] rounded-sm bg-slate-500 object-cover" 
                          src={data.Image} />
                      </th>
                      <th className="px-6 py-4 text-start ">{data.name}</th>
                      <th className="px-6 py-4 text-start">
                          <button className="flex items-center rounded-full bg-blue-600 px-4 py-2 font-bold text-white shadow-md transition-all duration-300 hover:bg-blue-700">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mr-2 h-6 w-6"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /> </svg>
                              Details
                          </button>
                      </th>
                      <th className="px-6 py-4 text-start">
                          <button className="flex items-center rounded-full bg-red-500 px-4 py-2 font-bold text-white shadow-md transition-all duration-300 hover:bg-red-700">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mr-2 h-6 w-6">  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> </svg>
                              Delete
                          </button>
                      </th>
                  </tr>
                ))}
              </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyReviews;

