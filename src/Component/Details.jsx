import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { toast } from "react-toastify";

const Details = ({ watchLists }) => {
    const { state: locationData } = useLocation(); 
    const [cardData, setCardData] = useState(locationData || {});

    useEffect(() => {
        if (locationData) {
            setCardData(locationData);
        }
    }, [locationData]);

    const handleWatchList = () => {
        fetch('http://localhost:5022/watchLists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cardData),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            toast.success("watchLists added successfully!");
        })
        .catch((error) => {
            console.error('Error:', error);
            toast.error("Error adding watchLists");
        });
    };

    if (!locationData) {
        return (
            <div className="flex flex-col items-center mt-10">
                <h2 className="text-2xl font-bold">Details not available!</h2>
                <button
                    className="btn btn-primary mt-4"
                    onClick={() => window.history.back()}
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center">
                <div className="my-7 mx-11">
                    <div className="card lg:card-side bg-base-200 shadow-xl">
                        <figure>
                            <img
                                src={cardData.Image}
                                alt="Album"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-5xl">{cardData.name}</h2>
                            <p className="text-xl">{cardData.Hading}</p>
                            <div>
                                <p className="text-lg">Description : {cardData.Description}</p>
                                <p className="text-base">Genres : {cardData.Genres}</p>
                                <p className="text-base">Rating : {cardData.Rating}⭐</p>
                                <p className="text-base">User Name : {cardData.username}</p>
                                <p className="text-base">User Email : {cardData.userEmail}</p>
                                <p className="text-base">Publishing year : {cardData.Year}</p>
                            </div>
                            <div className="card-actions justify-end">
                                <button
                                    className="btn btn-primary"
                                    onClick={handleWatchList}
                                >
                                    Add to WatchList
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Details;
