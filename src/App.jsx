import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import Home from './Component/Home';
import AllReviews from './Component/AllReviews';
import Error from './Component/Error';
import Login from './Component/Login';
import Registration from './Component/Registration';




function App() {




  const router = createBrowserRouter([
    { path: "/", element: <Home  /> },
    { path: "/AllReviews", element: <AllReviews  /> },
    { path: "/Login", element: <Login  /> },
    { path: "/Registration", element: <Registration  /> },
    { path: "*", element: <Error /> },
]);



  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition: Bounce
      />
    </>
  )
}

export default App
