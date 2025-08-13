import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const Privaterout = ({children}) => {

const {user,loading} = useContext(AuthContext);

if (loading) {
    // return <span className="loading loading-bars loading-lg "></span>
    return <div className='flex flex-col items-center justify-center mt-5  '> 
    <div className=" flex w-52 flex-col gap-4">
    <div className="flex items-center gap-4">
      <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
      <div className="flex flex-col gap-4">
        <div className="skeleton h-4 w-20"></div>
        <div className="skeleton h-4 w-28"></div>
      </div>
    </div>
    <div className="skeleton h-32 w-full"></div>
  </div>
  </div>
}

if (user) {
    return children;
}


    return (
            <Navigate to="/Login"></Navigate>

    );
};

export default Privaterout;