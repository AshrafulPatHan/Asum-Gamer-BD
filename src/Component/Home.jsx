import React from 'react';
import { toast } from 'react-toastify';

const Home = () => {
    return (
        <div>
            <h2>fsjhldfjak</h2>
            <button onClick={()=>{
                toast("cllick");
            }} className='btn'>click</button>
        </div>
    );
};

export default Home;