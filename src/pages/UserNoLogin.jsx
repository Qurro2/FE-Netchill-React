import React from "react";
import Home from "../components/user/Home";
import Card from "../components/user/Card";
import Question from "../components/user/Question";
import Footer from "../components/navigation/Footer";

const UserNoLogin = () => {
  return (
    <>
      <Home />
      <Card />
      <Question />
      <Footer />
    </>
  );
};

export default UserNoLogin;
