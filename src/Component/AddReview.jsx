import React, { useContext, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { AuthContext } from './AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddReview = () => {
    const { user } = useContext(AuthContext);
    const [genre, setGenre] = useState(''); // Genre state
    const navigate = useNavigate();


    const handleAddReview = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.Name.value;
        const Description = form.Description.value;
        const Image = form.Image.value;
        const Year = form.Year.value;
        const Rating = form.Rating.value;
        const username = user.displayName;
        const userEmail = user.email;

        if (!name || !Description || !Image || !Year || !Rating || !genre) {
            toast.error("All fields are required");
            return;
        }

        const allData = { name, Description, Image, Year, Rating, genre, username, userEmail };
        console.log(allData);

        // send data to the server
        fetch('https://server-jaeaca43e-ashraful-pathan-4d398455.vercel.app/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(allData),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            toast.success("Review added successfully!");
            navigate('/myReviews');
        })
        .catch((error) => {
            console.error('Error:', error);
            toast.error("Error adding review");
        });
    };

    return (
        <div>
            <Navbar />
            <form onSubmit={handleAddReview} className='flex flex-col items-center gap-5'>
                <h2 className='text-5xl font-bold text-center mt-3 mb-10'>Add Your Review</h2>
                <div className='lg:flex lg:flex-row lg:items-start justify-center gap-6 mb-4'>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mb-4 lg:mb-0">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Game Title/Name</span>
                                </label>
                                <input type="text" name='Name' placeholder="Game Title/Name" className="input input-bordered input-secondary w-[18.075rem] max-w-xs" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Review Description</span>
                                </label>
                                <input type="text" name='Description' placeholder="Review Description" className="input input-bordered input-secondary w-[18.075rem] max-w-xs" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Game Cover Image/Thumbnail</span>
                                </label>
                                <input type="text" name='Image' placeholder="Game Cover Image/Thumbnail" className="input input-bordered input-secondary w-[18.075rem] max-w-xs" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Publishing Year</span>
                                </label>
                                <input type="number" name='Year' placeholder="Publishing Year" className="input input-bordered input-secondary w-[18.075rem] max-w-xs" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating (1-10)</span>
                                </label>
                                <input 
                                    type="number" 
                                    name='Rating' 
                                    placeholder="Rating" 
                                    className="input input-bordered input-secondary w-[18.075rem] max-w-xs"
                                    min="1" 
                                    max="10" 
                                    step="1"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="card bg-slate-200 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <details className="dropdown">
                                <summary className="btn m-1">Genres</summary>
                                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                    <li><a onClick={() => setGenre('Action')}>Action</a></li>
                                    <li><a onClick={() => setGenre('RPG')}>RPG</a></li>
                                    <li><a onClick={() => setGenre('Adventure')}>Adventure</a></li>
                                </ul>
                            </details>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <div className="input input-bordered input-secondary text-start w-[18.075rem] max-w-xs">
                                    <p className='mt-3'>{user.displayName}</p>
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Email</span>
                                </label>
                                <div className="input input-bordered input-secondary text-start w-[18.075rem] max-w-xs">
                                    <p className='mt-3'>{user.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='btn mb-3 w-[20%] bg-slate-300 p-3'>Submit</button>
            </form>
            <Footer />
        </div>
    );
};

export default AddReview;