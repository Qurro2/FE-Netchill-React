import React from "react";
import { Route, Routes } from "react-router-dom";
import UserNoLogin from "../pages/UserNoLogin";
import UserLogin from "../pages/UserLogin";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<UserLogin />} />
      <Route path="/" element={<UserNoLogin />} />
    </Routes>
  );
};

export default Router;
