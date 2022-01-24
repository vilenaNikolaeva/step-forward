import React from "react";
import { Route, Routes } from "react-router-dom";
import MyDocuments from "./../components/user/profile/MyDocuments";
import ExampleCV from "./../components/ExampleCV";

const ProfileRouter = () => {
  return (
    <Routes>
      <Route path="/profile" />
      <Route path="/myDocuments" element={<MyDocuments />} />
      <Route path="/templates" />
      <Route path="/exampleCv" element={<ExampleCV />} />
    </Routes>
  );
};

export default ProfileRouter;
