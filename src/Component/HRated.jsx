import React from 'react';

const HRated = () => {
    return (
        <div>
            <div>
                <div className="card bg-base-100 my-4 w-96 shadow-xl">
                    <figure>
                        <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose?</p>
                        <p>Rating⭐</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">Explore Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HRated;