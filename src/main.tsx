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
      <Route path="/blog" element={<Blog />} />
      <Route path="/shop" element={<Shope />} />
      <Route path="/reviews" element={<AllReview />} />
      <Route path="/review/:id" element={<ReviewDetails />} />
      <Route path="/video" element={<GameVideo />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/ui" element={<Ui />} />
      <Route path="/add-review" element={<AddReview />} />
      <Route path="/my-review" element={<MyReview />} />
      <Route path="/my-watch-list" element={<MyWatchList />} />
      <Route path="/update-review" element={<UpdateReview />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
    <Toaster/>
  </BrowserRouter>,
);

