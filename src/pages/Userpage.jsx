import React from "react";
import Navbarlogin from "../components/navigation/Navbarlogin";
import Movielist from "../components/user/Movielist";
import Footer from "../components/navigation/Footer";

const Userpage = () => {
  return (
    <>
      <Navbarlogin />
      <Movielist />
      <Footer />
    </>
  );
};

export default Userpage;
