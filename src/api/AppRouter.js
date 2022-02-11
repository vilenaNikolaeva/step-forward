import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignUp from "../components/forms/SignUp";
import Login from "../components/forms/Login";
import NotFoundPage from "../components/NotFoundPage";
import UserProfile from "./../components/UserProfile";
import Templates from "../components/user/ProfileContent/Templates";
import Documents from "../components/documents/Documents";

function AppRouter() {
  /*Check if  user is loggedin*/
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      {/* <Route path="/sharedResume/:id" render={(props) => <SharedResume {...props} />}></Route> */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/templates" element={<Templates/>} />
      <Route path="/documents" element={<Documents/>} />
      <Route path="/profile/*" element={<UserProfile />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRouter;
