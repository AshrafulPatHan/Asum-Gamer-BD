// import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.tsx'
import { Toaster } from "react-hot-toast";
import Shope from "./page/store/Shope.tsx";
import AllReview from "./page/review/AllReview.tsx";
import ReviewDetails from "./page/review/ReviewDetails.tsx";
import GameVideo from "./page/game/video.tsx";
import Login from "./page/auth/Login.tsx";
import Registration from "./page/auth/Registration.tsx";
import Ui from "./page/ui/Ui.tsx";
import AddReview from "./page/review/AddReview.tsx";
import MyReview from "./page/review/MyReview.tsx";
import MyWatchList from "./page/profile/MyWatchList.tsx";
import UpdateReview from "./page/review/UpdateReview.tsx";
import Profile from "./page/profile/Profile.tsx";
import Setting from "./page/setting/Setting.tsx";
import Error404 from "./components/error/404.tsx";
import Blog from "./page/blog/blog.tsx";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/" element={<Blog />} />
      <Route path="/" element={<Shope />} />
      <Route path="/" element={<AllReview />} />
      <Route path="/" element={<ReviewDetails />} />
      <Route path="/" element={<GameVideo />} />
      <Route path="/" element={<Login />} />
      <Route path="/" element={<Registration />} />
      <Route path="/" element={<Ui />} />
      <Route path="/" element={<AddReview />} />
      <Route path="/" element={<MyReview />} />
      <Route path="/" element={<MyWatchList />} />
      <Route path="/" element={<UpdateReview />} />
      <Route path="/" element={<Profile />} />
      <Route path="/" element={<Setting />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
    <Toaster/>
  </BrowserRouter>,
);

