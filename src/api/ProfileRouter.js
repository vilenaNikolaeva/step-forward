import React from "react";
import { Route, Routes } from "react-router-dom";
import MyDocuments from "../components/user/ProfileContent/MyDocuments";
import ExampleCV from "./../components/ExampleCV";
import Profile from '../components/user/ProfileContent/Profile';
import Templates from './../components/user/ProfileContent/Templates';

const ProfileRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Profile/>}/>
      <Route path="/myDocuments" element={<MyDocuments />} />
      <Route path="/templates" element={<Templates />} />
      <Route path="/exampleCv" element={<ExampleCV />} />
    </Routes>
  );
};

export default ProfileRouter;
