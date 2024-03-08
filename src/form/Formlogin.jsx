import React from "react";
import NavbarNologin from "../components/navigation/NavbarNologin";
import Footer from "../components/navigation/Footer";

const Formlogin = () => {
  return (
    <div>
      <div className="absolute inset-0 overflow-hidden ">
        <img
          className="fixed w-full h-full object-cover filter brightness-75"
          src="/assets/bg.jpg"
          alt="Background"
        />
        <div className="fixed inset-0 bg-gradient-to-br from-transparent to-black"></div>
      </div>
      <div className="absolute inset-x-0 top-0 z-10">
        <NavbarNologin />
      </div>
      <div className="relative min-h-screen flex justify-center items-center mt-16 md:mt-0">
        <div className="max-w-md w-full px-6 py-6 bg-black bg-opacity-65 shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-white mb-8">Masuk</h2>
          <form>
            <div className="mb-6">
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 text-white rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 rounded-md border text-white border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700"
            >
              Masuk
            </button>
            <div className="form-control w-24 mt-3">
              <label className="cursor-pointer label">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-error"
                />
                <span className="label-text text-gray-400">Ingat saya</span>
              </label>
            </div>
          </form>
          <p className="text-sm text-gray-600 mt-4 text-center">
            Belum punya akun ?
            <a href="#" className="text-red-600 hover:underline ml-1">
              Daftar
            </a>
          </p>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black hidden sm:hidden md:block mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default Formlogin;
