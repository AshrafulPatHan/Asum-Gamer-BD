// import React, { useEffect, useState } from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// const MyReviews = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://server-alxfk0rqh-ashraful-pathan-4d398455.vercel.app/datas")
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       });
//   }, []);

//   const handleExploreDetails = (id) => {

//     console.log("Explore details for id:", id);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <Navbar />
//       <div className="flex flex-col items-center">
//         <h2 className="text-4xl font-bold mt-5">See All Reviews</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-7">
//           {data.map((HRate) => (
//             <div key={HRate._id}>
//               <div className="card bg-base-100 my-4 w-[300px] md:w-96 shadow-xl">
//                 <figure>
//                   <img
//                     className="h-[260px] object-cover"
//                     src={HRate.Image}
//                     alt="Review"
//                   />
//                 </figure>
//                 <div className="card-body">
//                   <h2 className="card-title">{HRate.name}</h2>
//                   <p className="font-bold">{HRate.Hading}</p>
//                   <p>{HRate.Description}</p>
//                   <p>Rating: {HRate.Rating} ⭐</p>
//                   <div className="card-actions justify-end">
//                     <button
//                       className="btn btn-primary"
//                       onClick={() => handleExploreDetails(HRate._id)}
//                     >
//                       Explore Details
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default MyReviews;



import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaTrashAlt } from "react-icons/fa";

const MyReviews = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5022/datas")
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

  const handleExploreDetails = (id) => {
    console.log("Explore details for id:", id);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold mt-5">See All Reviews</h2>
        <div className=" mt-7 mb-11">
            <div >
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Rating</th>
                      <th>genre</th>
                      <th>Update/Delete</th>
                    </tr>
                  </thead>
                  { data.map( (HRate) => (
                  <tbody key={HRate._id} >
                    <tr  >
                      <td>
                        <div className="flex items-center gap-1 sm:gap-3">
                          <div className="avatar">
                            <div className=" rounded-xl h-10 sm:h-24  w-10 sm:w-24 ">
                              <img
                                src={HRate.Image}
                                alt="Avatar Tailwind CSS Component" />
                            </div>
                          </div>
                          <div>
                            <div className="font-semibold sm:font-bold">{HRate.name}</div>
                            <div className="text-end sm:text-sm opacity-50">{HRate.Description}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <br />
                        <span className="sm:badge sm:badge-ghost sm:p-2 badge-xs sm:badge-md">Rating {HRate.Rating}⭐</span>
                      </td>
                      <td>{HRate.genre}</td>
                      <th>
                        <button className="btn btn-xs sm:btn-md">Update</button>
                      </th>
                      <th>
                        <button className="btn btn-xs sm:btn-md"><FaTrashAlt /></button>
                      </th>
                    </tr>
                  </tbody>
                    ))}
                </table>
              </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
 )
}

export default MyReviews;
