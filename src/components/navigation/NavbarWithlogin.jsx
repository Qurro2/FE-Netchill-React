import React from "react";

const NavbarWithlogin = () => {
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
        <div className="navbar-end">
          <a
            href="/login"
            className="btn bg-red-600 text-white  hover:bg-red-500 w-24"
          >
            Masuk
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavbarWithlogin;
