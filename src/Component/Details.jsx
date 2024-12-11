import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Details = () => {
    const { state: HRate } = useLocation(); // Receiving state

    if (!HRate) {
      return <p>Details not available!</p>;
    }

    return (
<>
<Navbar/>
    <div className="flex flex-col items-center">
        <div className="my-7 mx-11">
            <div className="card lg:card-side bg-base-200 shadow-xl">
                <figure>
                    <img
                    src= {HRate.Image}
                    alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-5xl"> {HRate.name} </h2>
                    <p className="text-xl">{HRate.Hading}</p>
                    <div>
                        <p className="text-lg">Description : {HRate.Description}</p>
                        <p className="text-base">Genres : {HRate.Genres}</p>
                        <p className="text-base">Rating : {HRate.Rating}⭐</p>
                        <p className="text-base">User Name : {HRate.username}</p>
                        <p className="text-base">User Email : {HRate.userEmail}</p>
                        <p className="text-base">Publising year : {HRate.Year}</p>
                    </div>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add to WatchList</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
</>
    );
};

export default Details;