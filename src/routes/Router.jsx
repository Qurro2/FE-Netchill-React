import React from "react";
import { Route, Routes } from "react-router-dom";
import UserNoLogin from "../pages/UserNoLogin";
import UserLogin from "../pages/UserLogin";
import Select from "../components/user/Select";
import Userpage from "../pages/Userpage";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<UserLogin />} />
      <Route path="/" element={<UserNoLogin />} />
      <Route path="/user" element={<Select />} />
      <Route path="/browse" element={<Userpage />} />
    </Routes>
  );
};

export default Router;
