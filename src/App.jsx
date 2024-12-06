import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Component/Home';




function App() {




  const router = createBrowserRouter([
    { path: "/", element: <Home  /> },
]);



  return (
    <>
      <h2>HEllo dsfjgl;kj</h2>
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
