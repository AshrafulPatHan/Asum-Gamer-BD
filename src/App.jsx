import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import Home from './Component/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AllReviews from './Component/AllReviews';
import AddReview from './Component/AddReview';
import MyReviews from './Component/MyReviews';
import GameWatchList from './Component/GameWatchList';
import Error from './Component/Error';
import Login from './Component/Login';
import Registration from './Component/Registration';
import AuthProvider from './Component/AuthProvider/AuthProvider'



function App() {


  const router = createBrowserRouter([
    { path: "/", element: <Home  /> },
    { path: "/AllReviews", element: <AllReviews  /> },
    { path: "/AddReview", element: <AddReview  /> },
    { path: "/MyReviews", element: <MyReviews  /> },
    { path: "/GameWatchList", element: <GameWatchList /> },
    { path: "/Login", element: <Login  /> },
    { path: "/Registration", element: <Registration  /> },
    { path: "*", element: <Error /> },
]);



  return (
    <>
        <AuthProvider>
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
      </AuthProvider>
    </>
  )
}

export default App
