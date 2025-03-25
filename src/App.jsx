import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import Home from './Component/home/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AllReviews from './Component/page/AllReviews';
import AddReview from './Component/page/AddReview';
import MyReviews from './Component/page/MyReviews';
import GameWatchList from './Component/page/GameWatchList';
import Error from './Component/Error';
import Login from './Component/auth/Login';
import Registration from './Component/auth/Registration';
import UpdateReview from './Component/page/UpdateReview'
import AuthProvider from './Component/AuthProvider/AuthProvider'
import Privaterout from './Component/Rout/Privaterout';
import Details from './Component/page/dynamic-page/Details';
import { Typewriter } from 'react-simple-typewriter';


function App() {

  const router = createBrowserRouter([
    { path: "/", element: <Home  />,},
    { path: "/reviews", element: <AllReviews  /> },
    { path: "/addReview", element: <Privaterout><AddReview /></Privaterout> },
    { path: "/myReviews", element: <Privaterout ><MyReviews  /></Privaterout>},
    { path: "/myWatchlist", element: <Privaterout><GameWatchList  /></Privaterout> },
    { path: "/Login", element: <Login  /> },
    { path: "/Registration", element: <Registration  /> },
    { path: "/updateReview/:id", element: <Privaterout><UpdateReview /></Privaterout> },
    { path: "/review/:id", element: <Details  /> },
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