import React, { useContext, useState } from 'react';
import Navbar from '../navigation/Navbar';
import Footer from '../navigation/Footer';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddReview = () => {
    const { user } = useContext(AuthContext);
    const [type, setType] = useState(''); // type state
    const navigate = useNavigate();


    const handleAddReview = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.Name.value;
        const Title = form.Title.value;
        const Description = form.Description.value;
        const Image = form.Image.value;
        const Year = form.Year.value;
        const Rating = Number(form.Rating.value);
        const username = user.displayName;
        const userEmail = user.email;
        const Lick = 0;
        const View = 0;
        const date = Number(new Date());

        if (!name || !Description || !Image || !Year || !Rating || !type || !Title) {
            toast.error("All fields are required");
            return;
        }

        const allData = { name,Title, Description, Image, Year, Rating, type, username, userEmail,Lick,View,date };
        console.log(allData);

        // send data to the server
        fetch('http://localhost:5022/add-review', {
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
            {/* new from --------------------------------------------*/}
            <div className='flex flex-col items-center mt-32 mb-24'>
                 <form onSubmit={handleAddReview} className="card bg-[#272727] dark:bg-base-100 shadow-2xl p-8 w-[95vw] 
                 md:w-[80vw] xl:w-[60vw] ">
                    <h2 className="text-4xl font-bold text-center mb-8">Add Your Review</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[100px] ">
                    {/* Left Section */}
                    <div>
                    <div className="form-control mb-4">
                        <label className="label">
                        <span className="label-text">Game Name</span>
                        </label>
                        <input
                        type="text"
                        name='Name'
                        placeholder="Game Name"
                        className="input input-bordered input-secondary bg-black dark:bg-white w-full"
                        />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                        <span className="label-text">Game Title</span>
                        </label>
                        <input
                        type="text"
                        name='Title'
                        placeholder="Game Title"
                        className="input input-bordered input-secondary bg-black dark:bg-white w-full"
                        />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                        <span className="label-text">Review Description</span>
                        </label>
                        <textarea
                        name='Description' 
                        placeholder="Write your Description..."
                        className="textarea textarea-bordered textarea-secondary bg-black dark:bg-white w-full"
                        ></textarea>
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                        <span className="label-text">Game Cover Image/Thumbnail</span>
                        </label>
                        <input
                        type="text"
                        name='Image'
                        placeholder="Image URL"
                        className="input input-bordered input-secondary bg-black dark:bg-white w-full"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Publishing Year</span>
                        </label>
                        <input type="number" name='Year' placeholder="Publishing Year" 
                        className="input input-bordered input-secondary bg-black dark:bg-white w-full " />
                    </div>
                    </div>
                    {/* Right Section */}
                    <div className='flex flex-col gap-4 lg:gap-6'>
                    <div className="form-control  ">
                        <label className="label ">
                        <span className="label-text">Blog category</span>
                        </label>
                        <details className="dropdown">
                        <summary className="btn w-full bg-black dark:bg-white">types</summary>
                        <ul className="menu dropdown-content  rounded-box z-[1] w-full p-2 bg-black dark:bg-white shadow">
                            <li>
                            <a onClick={() => setType('Action')}>Action</a>
                            </li>
                            <li>
                            <a onClick={() => setType('Creative')}>Creative</a>
                            </li>
                            <li>
                            <a onClick={() => setType('Adventure')}>Adventure</a>
                            </li>
                            <li>
                            <a onClick={() => setType('RPG')}>RPG</a>
                            </li>
                        </ul>
                        </details>
                    </div>
                    <div className="form-control ">
                        <label className="label ">
                            <span className="label-text ">Rating (1-10)</span>
                        </label>
                        <input 
                            type="number" 
                            name='Rating' 
                            placeholder="Rating" 
                            className="input input-bordered input-secondary bg-black dark:bg-white w-full "
                            min="1" 
                            max="10" 
                            step="1"
                        />
                    </div>
                    <div className="form-control ">
                        <label className="label">
                        <span className="label-text">User Name</span>
                        </label>
                        <div className="input input-bordered input-secondary text-start bg-black dark:bg-white w-full">
                        <p className="mt-2">{user?.displayName || 'N/A'}</p>
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">User Email</span>
                        </label>
                        <div className="input input-bordered input-secondary text-start bg-black dark:bg-white w-full">
                        <p className="mt-2">{user?.email || 'N/A'}</p>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Submit Button */}
                <button className="btn btn-primary w-full mt-6">Submit</button>
            </form>
            </div>
            <Footer />
        </div>
    );
};

export default AddReview;