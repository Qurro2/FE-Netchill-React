import React from "react";

const Navbarlogin = () => {
  return (
    <>
      <div className="sticky top-0 left-0 right-0 z-50 bg-black">
        <div className="navbar text-white">
          <div className="navbar-start ">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <details open>
                    <summary>Tv Shows</summary>
                    <ul>
                      <li>
                        <a>Azab</a>
                      </li>
                      <li>
                        <a>Politik</a>
                      </li>
                      <li>
                        <a>Hidayah</a>
                      </li>
                      <li>
                        <a>Komedi</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <a>Movie</a>
                </li>
                <li>
                  <a>New & Populer</a>
                </li>
                <li>
                  <a>Mylist</a>
                </li>
              </ul>
            </div>
            <a href="/browse" className=" font-bold text-3xl text-red-600">
              NETCHILL
            </a>
            <div className="navbar hidden lg:flex  font-semibold">
              <ul className="menu menu-horizontal pr-0 pt-0 pb-0 ">
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <details className="">
                    <summary>Tv Shows</summary>
                    <ul className="grid grid-cols-4 w-96 text-center">
                      <li>
                        <a>Azab</a>
                      </li>
                      <li>
                        <a>Politik</a>
                      </li>
                      <li>
                        <a>Hidayah</a>
                      </li>
                      <li>
                        <a>Komedi</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <a>Movies</a>
                </li>
                <li>
                  <a>New & Populer</a>
                </li>
                <li>
                  <a>Mylist</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="navbar-end gap-2 md:px-8">
            <label className="input input-bordered  items-center w-26 sm:w-26 hidden sm:flex h-8">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <div className="badge badge-ghost hidden lg:flex md:flex">
              Bocil
            </div>
            <div className="dropdown dropdown-end">
              <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span className="badge badge-xs badge-primary indicator-item">
                    7
                  </span>
                </div>
              </button>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 mt-3 shadow bg-base-300 rounded-box w-60"
              >
                <li>
                  <a>
                    CONTOH NOTIF
                    <p className="bottom-0 text-end text-xs">21.42</p>
                  </a>
                </li>
                <li>
                  <a>
                    CONTOH NOTIF
                    <p className="bottom-0 text-end text-xs">17.22</p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="/assets/pp.png"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-300 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a href="/">Logout</a>
                </li>
                <div className="badge badge-ghost flex bottom-0 ml-32 lg:hidden md:hidden justify-end items-end">
                  Bocil
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbarlogin;
