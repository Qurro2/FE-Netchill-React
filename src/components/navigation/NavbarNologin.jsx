import React from "react";

const NavbarNologin = () => {
  return (
    <div className="container mx-auto">
      <div className="navbar bg-transparent ">
        <div className="navbar-start">
          <a href="/" className="font-bold text-3xl text-red-600">
            NETCHILL
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1"></ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarNologin;
